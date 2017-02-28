/*
 * TestManagement Studio Backend API
 *
 * <<Some text >>   Would respond with: ```js callbackFunction({     ... }); ``` 
 *
 * OpenAPI spec version: v1
 * 
 * Generated by: https://github.com/swagger-api/swagger-codegen.git
 */

using System;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using TestManagementStudio.Auth.Options;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using System.Security.Principal;
using System.Security.Claims;
using Microsoft.AspNetCore.Authorization;
using System.IdentityModel.Tokens.Jwt;
using Swashbuckle.AspNetCore.SwaggerGen;
using TestManagementStudio.ViewModels;
using TestManagementStudioService.Services;
using TestManagementStudioService.Exceptions.Data;
using TestManagementStudio.Factories;

namespace TestManagementStudio.Controllers
{
    /// <summary>
    /// 
    /// </summary>
    public class AuthApiController : Controller
    {

        private readonly JwtIssuerOptions _jwtOptions;
        private readonly UserService _userService;
        private readonly ILogger _logger;
        private readonly JsonSerializerSettings _serializerSettings;

        /// <summary>
        /// Constructor for dependency injections
        /// </summary>
        public AuthApiController(IOptions<JwtIssuerOptions> jwtOptions, ILoggerFactory loggerFactory, UserService userService)
        {
            _jwtOptions = jwtOptions.Value;
            ThrowIfInvalidOptions(_jwtOptions);

            _userService = userService;

            _logger = loggerFactory.CreateLogger<AuthApiController>();

            _serializerSettings = new JsonSerializerSettings
            {
                Formatting = Formatting.Indented
            };
        }

        /// <summary>
        /// Checking JWT Options validity
        /// </summary>
        private static void ThrowIfInvalidOptions(JwtIssuerOptions options)
        {
            if (options == null) throw new ArgumentNullException(nameof(options));

            if (options.ValidFor <= TimeSpan.Zero)
            {
                throw new ArgumentException("Must be a non-zero TimeSpan.", nameof(JwtIssuerOptions.ValidFor));
            }

            if (options.SigningCredentials == null)
            {
                throw new ArgumentNullException(nameof(JwtIssuerOptions.SigningCredentials));
            }

            if (options.JtiGenerator == null)
            {
                throw new ArgumentNullException(nameof(JwtIssuerOptions.JtiGenerator));
            }
        }

        /// <returns>Date converted to seconds since Unix epoch (Jan 1, 1970, midnight UTC).</returns>
        private static long ToUnixEpochDate(DateTime date)
          => (long)Math.Round((date.ToUniversalTime() -
                               new DateTimeOffset(1970, 1, 1, 0, 0, 0, TimeSpan.Zero))
                              .TotalSeconds);

        /// <summary>
        /// Logs user into the system
        /// </summary>
        /// <remarks></remarks>
        /// <param name="username">The user name for login</param>
        /// <param name="password">The password for login in clear text</param>
        /// <response code="201">Successful operation</response>
        /// <response code="400">Invalid username/password supplied</response>
        /// <response code="401">Wrong username/password supplied</response>
        [HttpPost]
        [Route("/v1/auth/login")]
        [SwaggerOperation("Login")]
        [SwaggerResponse(201, type: typeof(string))]
        [SwaggerResponse(400, type: typeof(ErrorMessage))]
        [SwaggerResponse(401, type: typeof(ErrorMessage))]
        [Consumes("application/x-www-form-urlencoded")]
        [AllowAnonymous]
        public virtual async Task<IActionResult> Login([FromForm]string username, [FromForm]string password)
        {

            //Empty password or username 
            if(String.IsNullOrEmpty(username) || String.IsNullOrEmpty(password))
            {
                Response.StatusCode = 400;
                return new ObjectResult(new ErrorMessage()
                {
                    Title = "Error",
                    Text = "Invalid username/password supplied!"
                });
            }
            
           //Get user
            try
            {
                var user = UserFactory.fromModel(_userService.FindOnebyUsernameAndPassword(username, password));

                var claims = new[]{
                                new Claim(ClaimTypes.NameIdentifier,  user.Id.ToString()),
                                new Claim(ClaimTypes.Email, user.Email),
                                new Claim(JwtRegisteredClaimNames.Jti, await _jwtOptions.JtiGenerator()),
                                new Claim(JwtRegisteredClaimNames.Iat, ToUnixEpochDate(_jwtOptions.IssuedAt).ToString(), ClaimValueTypes.Integer64),

                                new Claim(JwtRegisteredClaimNames.Email, user.Email),

                };

                // Create the JWT security token and encode it.
                var jwt = new JwtSecurityToken(
                    issuer: _jwtOptions.Issuer,
                    audience: _jwtOptions.Audience,
                    claims: claims,
                    notBefore: _jwtOptions.NotBefore,
                    expires: _jwtOptions.Expiration,
                    signingCredentials: _jwtOptions.SigningCredentials);

                //encode JWT token
                var encodedJwt = new JwtSecurityTokenHandler().WriteToken(jwt);

                // Serialize and return the response
                var response = new
                {
                    access_token = encodedJwt,
                    expires_in = (int)_jwtOptions.ValidFor.TotalSeconds
                };

                var json = JsonConvert.SerializeObject(response, _serializerSettings);
                return new OkObjectResult(json);

            }
            catch (ModelNotFoundException)
            {
                _logger.LogInformation($"Invalid username ({username}) or password ({password})");
                Response.StatusCode = 401;
                return new ObjectResult(new ErrorMessage()
                {
                    Title = "Error",
                    Text = $"Invalid username or password!"
                }
                );
            }
            catch (Exception ex)
            {
                Response.StatusCode = 500;
                return new ObjectResult(new ErrorMessage()
                {
                    Title = "Error",
                    Text = ex.Message
                });
            }

        }


        /// <summary>
        /// Invalidate the token of currently logged in user
        /// </summary>
        /// <remarks></remarks>
        /// <response code="204">Successful operation</response>
        [HttpDelete]
        [Route("/v1/auth/logout")]
        [SwaggerOperation("Logout")]
        [SwaggerResponse(204, type: typeof(void))]
        [SwaggerResponse(401)]
        [Authorize]
        public virtual void Logout()
        {

            var t = this.User.FindFirst(ClaimTypes.Email);                
            _logger.LogInformation($"Successfully logged out (token saved into invalidated tokens) User:" + t?.Value);
        }
    }
}
