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
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.ComponentModel;
using System.IO;
using System.Linq;
using System.Net;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using TestManagementStudioService.Models;
using Swashbuckle.AspNetCore.SwaggerGen;
using TestManagementStudioService.Services;
using Microsoft.Extensions.Logging;

namespace TestManagementStudioService.Controllers
{ 
    /// <summary>
    /// 
    /// </summary>
    public class UsersApiController : Controller
    {


        private readonly UserService _userService;
        private readonly ILogger _logger;
        private readonly JsonSerializerSettings _serializerSettings;

        /// <summary>
        /// Constructor for dependency injections
        /// </summary>
        public UsersApiController(ILoggerFactory loggerFactory, UserService userService)
        {
           
            _userService = userService;

            _logger = loggerFactory.CreateLogger<UsersApiController>();

            _serializerSettings = new JsonSerializerSettings
            {
                Formatting = Formatting.Indented
            };
        }
        /// <summary>
        /// Add a new group to the actual user
        /// </summary>
        /// <remarks></remarks>
        /// <response code="201"></response>
        /// <response code="401">Access denied</response>
        [HttpPost]
        [Route("/v1/users/me/groups")]
        [SwaggerOperation("AddActualUserGroup")]
        [SwaggerResponse(200, type: typeof(Group))]
        public virtual IActionResult AddActualUserGroup()
        { 
            string exampleJson = null;
            
            var example = exampleJson != null
            ? JsonConvert.DeserializeObject<Group>(exampleJson)
            : default(Group);
            return new ObjectResult(example);
        }


        /// <summary>
        /// Register a new user
        /// </summary>
        /// <remarks>Register a new user</remarks>
        /// <param name="email">The users&#39;s email</param>
        /// <param name="password">The users&#39;s password</param>
        /// <param name="firstName">The users&#39;s firstname</param>
        /// <param name="lastName">The users&#39;s lastname</param>
        /// <response code="201">Return no content, but a redirection  header</response>
        /// <response code="409">Some unique data (i.e. email address) conflicted with a data of existing user</response>
        [HttpPost]
        [Route("/v1/users")]
        [SwaggerOperation("AddUser")]
        [SwaggerResponse(200, type: typeof(string))]
        public virtual IActionResult AddUser([FromForm]string email, [FromForm]string password, [FromForm]string firstName, [FromForm]string lastName)
        { 
            string exampleJson = null;
            
            var example = exampleJson != null
            ? JsonConvert.DeserializeObject<string>(exampleJson)
            : default(string);
            return new ObjectResult(example);
        }


        /// <summary>
        /// Add a new role to the user
        /// </summary>
        /// <remarks></remarks>
        /// <param name="userId">The entity identifier number</param>
        /// <param name="roleId">Id of the role</param>
        /// <response code="201"></response>
        /// <response code="401">Access denied</response>
        [HttpPost]
        [Route("/v1/users/{userId}/roles")]
        [SwaggerOperation("AddUserRole")]
        [SwaggerResponse(200, type: typeof(Group))]
        public virtual IActionResult AddUserRole([FromRoute]decimal? userId, [FromForm]string roleId)
        { 
            string exampleJson = null;
            
            var example = exampleJson != null
            ? JsonConvert.DeserializeObject<Group>(exampleJson)
            : default(Group);
            return new ObjectResult(example);
        }


        /// <summary>
        /// Delete user
        /// </summary>
        /// <remarks>This can only be done by the logged in user.</remarks>
        /// <param name="userId">The entity identifier number</param>
        /// <response code="204">Successful operation</response>
        /// <response code="400">Invalid id supplied</response>
        /// <response code="404">User not found</response>
        [HttpDelete]
        [Route("/v1/users/{userId}")]
        [SwaggerOperation("DeleteUser")]
        public virtual void DeleteUser([FromRoute]decimal? userId)
        { 
            throw new NotImplementedException();
        }


        /// <summary>
        /// remove a role from the user
        /// </summary>
        /// <remarks></remarks>
        /// <param name="userId">The entity identifier number</param>
        /// <param name="roleId">The role identifier number</param>
        /// <response code="204"></response>
        /// <response code="401">Access denied</response>
        [HttpDelete]
        [Route("/v1/users/{userId}/roles/{roleId}")]
        [SwaggerOperation("DeleteUserRole")]
        public virtual void DeleteUserRole([FromRoute]decimal? userId, [FromRoute]decimal? roleId)
        { 
            throw new NotImplementedException();
        }


        /// <summary>
        /// Get the actual user
        /// </summary>
        /// <remarks></remarks>
        /// <response code="200">The user object</response>
        [HttpGet]
        [Route("/v1/users/me")]
        [SwaggerOperation("GetActualUser")]
        [SwaggerResponse(200, type: typeof(User))]
        public virtual IActionResult GetActualUser()
        { 
            string exampleJson = null;
            
            var example = exampleJson != null
            ? JsonConvert.DeserializeObject<User>(exampleJson)
            : default(User);
            return new ObjectResult(example);
        }


        /// <summary>
        /// Get basic information about an user
        /// </summary>
        /// <remarks>Get basic information about an user.</remarks>
        /// <param name="userId">The entity identifier number</param>
        /// <response code="200">The user object</response>
        [HttpGet]
        [Route("/v1/users/{userId}")]
        [SwaggerOperation("GetUser")]
        [SwaggerResponse(200, type: typeof(User))]
        public virtual IActionResult GetUser([FromRoute]decimal? userId)
        { 
            string exampleJson = null;
            
            var example = exampleJson != null
            ? JsonConvert.DeserializeObject<User>(exampleJson)
            : default(User);
            return new ObjectResult(example);
        }


        /// <summary>
        /// List all groups which were created by the  user
        /// </summary>
        /// <remarks></remarks>
        /// <param name="userId">The entity identifier number</param>
        /// <response code="200"></response>
        /// <response code="401">Access denied</response>
        [HttpGet]
        [Route("/v1/users/{userId}/groups")]
        [SwaggerOperation("GetUserGroups")]
        [SwaggerResponse(200, type: typeof(List<Group>))]
        public virtual IActionResult GetUserGroups([FromRoute]decimal? userId)
        { 
            string exampleJson = null;
            
            var example = exampleJson != null
            ? JsonConvert.DeserializeObject<List<Group>>(exampleJson)
            : default(List<Group>);
            return new ObjectResult(example);
        }


        /// <summary>
        /// lists all the groups of which the user is among the members
        /// </summary>
        /// <remarks></remarks>
        /// <param name="userId">The entity identifier number</param>
        /// <response code="200"></response>
        /// <response code="401">Access denied</response>
        [HttpGet]
        [Route("/v1/users/{userId}/memberships")]
        [SwaggerOperation("GetUserMemberships")]
        [SwaggerResponse(200, type: typeof(List<Group>))]
        public virtual IActionResult GetUserMemberships([FromRoute]decimal? userId)
        { 
            string exampleJson = null;
            
            var example = exampleJson != null
            ? JsonConvert.DeserializeObject<List<Group>>(exampleJson)
            : default(List<Group>);
            return new ObjectResult(example);
        }


        /// <summary>
        /// List all groups which were created by the actual user
        /// </summary>
        /// <remarks></remarks>
        /// <response code="200"></response>
        /// <response code="401">Access denied</response>
        [HttpGet]
        [Route("/v1/users/me/groups")]
        [SwaggerOperation("ListActualUserGroups")]
        [SwaggerResponse(200, type: typeof(List<Group>))]
        public virtual IActionResult ListActualUserGroups()
        { 
            string exampleJson = null;
            
            var example = exampleJson != null
            ? JsonConvert.DeserializeObject<List<Group>>(exampleJson)
            : default(List<Group>);
            return new ObjectResult(example);
        }


        /// <summary>
        /// Get all roles of the actual user
        /// </summary>
        /// <remarks></remarks>
        /// <response code="401">Access denied</response>
        [HttpGet]
        [Route("/v1/users/me/roles")]
        [SwaggerOperation("ListActualUserRoles")]
        public virtual void ListActualUserRoles()
        { 
            throw new NotImplementedException();
        }


        /// <summary>
        /// lists all the groups of which the actual user is among the members
        /// </summary>
        /// <remarks></remarks>
        /// <response code="200"></response>
        /// <response code="401">Access denied</response>
        [HttpGet]
        [Route("/v1/users/me/memberships")]
        [SwaggerOperation("ListActualuserMemberships")]
        [SwaggerResponse(200, type: typeof(List<Group>))]
        public virtual IActionResult ListActualuserMemberships()
        { 
            string exampleJson = null;
            
            var example = exampleJson != null
            ? JsonConvert.DeserializeObject<List<Group>>(exampleJson)
            : default(List<Group>);
            return new ObjectResult(example);
        }


        /// <summary>
        /// Get all roles of the  user
        /// </summary>
        /// <remarks></remarks>
        /// <param name="userId">The entity identifier number</param>
        /// <response code="200"></response>
        /// <response code="401">Access denied</response>
        [HttpGet]
        [Route("/v1/users/{userId}/roles")]
        [SwaggerOperation("ListUserRoles")]
        [SwaggerResponse(200, type: typeof(List<Group>))]
        public virtual IActionResult ListUserRoles([FromRoute]decimal? userId)
        { 
            string exampleJson = null;
            
            var example = exampleJson != null
            ? JsonConvert.DeserializeObject<List<Group>>(exampleJson)
            : default(List<Group>);
            return new ObjectResult(example);
        }


        /// <summary>
        /// Get all registered users
        /// </summary>
        /// <remarks>Get all registered users</remarks>
        /// <response code="200">The list of user objects</response>
        [HttpGet]
        [Route("/v1/users")]
        [SwaggerOperation("ListUsers")]
        [SwaggerResponse(200, type: typeof(List<User>))]
        public virtual IActionResult ListUsers()
        { 
            string exampleJson = null;

            var response =  _userService.GetAll();
            var json = JsonConvert.SerializeObject(response, _serializerSettings);
            return new OkObjectResult(json);
           
        }


        /// <summary>
        /// Update user
        /// </summary>
        /// <remarks>This can only be done by the logged in user.</remarks>
        /// <param name="email">The users&#39;s email</param>
        /// <param name="password">The users&#39;s password</param>
        /// <param name="firstName">The users&#39;s firstname</param>
        /// <param name="lastName">The users&#39;s lastname</param>
        /// <response code="204">Successful operation</response>
        /// <response code="400">Invalid id supplied</response>
        /// <response code="404">User not found</response>
        [HttpPut]
        [Route("/v1/users/me")]
        [SwaggerOperation("UpdateActualUser")]
        public virtual void UpdateActualUser([FromForm]string email, [FromForm]string password, [FromForm]string firstName, [FromForm]string lastName)
        { 
            throw new NotImplementedException();
        }


        /// <summary>
        /// Update a certain user
        /// </summary>
        /// <remarks>This can only be done by the logged in user.</remarks>
        /// <param name="userId">The entity identifier number</param>
        /// <param name="email">The users&#39;s email</param>
        /// <param name="password">The users&#39;s password</param>
        /// <param name="firstName">The users&#39;s firstname</param>
        /// <param name="lastName">The users&#39;s lastname</param>
        /// <response code="204">Successful operation</response>
        /// <response code="400">Invalid id supplied</response>
        /// <response code="404">User not found</response>
        [HttpPut]
        [Route("/v1/users/{userId}")]
        [SwaggerOperation("UpdateUser")]
        public virtual void UpdateUser([FromRoute]decimal? userId, [FromForm]string email, [FromForm]string password, [FromForm]string firstName, [FromForm]string lastName)
        { 
            throw new NotImplementedException();
        }
    }
}
