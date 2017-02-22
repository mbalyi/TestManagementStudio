using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using TestManagementStudio.SQLData;
using TestManagementStudio.Model;
using Microsoft.AspNetCore.Authorization;
using Microsoft.EntityFrameworkCore;
using System.Security.Claims;

namespace TestManagementStudio.Controllers
{
    [Produces("application/json")]
    [Route("api/AccountController")]
    public class AccountController : Controller
    {
        private readonly TMSContext _context;

        public AccountController(TMSContext context)
        {
            _context = context;
        }

        [HttpGet]
        [Route("")]
        public JsonResult Index()
        {
            var claims = User.Claims.Select(claim => claim).ToArray();
            return Json(claims);
        }

        [HttpGet]
        [Route("Login")]
        public IActionResult Login(string returnUrl = null)
        {
            ViewData["ReturnUrl"] = returnUrl;
            return View();
        }

        [HttpPost]
        [Route("Login")]
        public async Task<IActionResult> Login([FromBody]LoginUser loginUser)
        {
            ViewData["ReturnUrl"] = null;

            if (!string.IsNullOrWhiteSpace(loginUser.nickName))
            {
                Users user = _context.Users.Single(u => u.Nickname.ToString() == loginUser.nickName.ToString());
                if (user.Password == loginUser.password)
                {
                    var claims = new List<Claim>
                    {
                        new Claim("loggedUser", user.Nickname),
                        new Claim("role", user.RoleId.ToString())
                    };

                    var id = new ClaimsIdentity(claims, "password");
                    var p = new ClaimsPrincipal(id);

                    await HttpContext.Authentication.SignInAsync("Cookies", p);

                    return LocalRedirect("/");
                }
            }

            return View();
        }

        [HttpPost]
        [Route("Register")]
        public async Task<IActionResult> Register([FromBody]RegisterUser registerUser)
        {
            ViewData["ReturnUrl"] = null;

            if (!string.IsNullOrWhiteSpace(registerUser.nickName))
            {
                var role = _context.Roles.Single(r => r.IsUser == true);
                var newUser = new Users
                {
                    Nickname = registerUser.nickName,
                    Password = registerUser.password,
                    Firstname = registerUser.firstName,
                    Lastname = registerUser.lastName,
                    Email = registerUser.email,
                    Phone = registerUser.phone,
                    Address = registerUser.address,
                    RoleId = role.RoleId
                };
                try
                {
                    if (ModelState.IsValid)
                    {
                        _context.Add(newUser);
                        var claims = new List<Claim>
                        {
                            new Claim("loggedUser", registerUser.nickName),
                            new Claim("role", role.RoleId.ToString())
                        };

                        var id = new ClaimsIdentity(claims, "password");
                        var p = new ClaimsPrincipal(id);

                        await HttpContext.Authentication.SignInAsync("Cookies", p);
                        await _context.SaveChangesAsync();

                        return LocalRedirect("/");
                    }
                }
                catch (DbUpdateException /* ex */)
                {
                    //Log the error (uncomment ex variable name and write a log.
                    ModelState.AddModelError("", "Unable to save changes. " +
                        "Try again, and if the problem persists " +
                        "see your system administrator.");
                }
            }

            return View();
        }

        [HttpGet]
        [Route("Logout")]
        public async Task<IActionResult> Logout()
        {
            await HttpContext.Authentication.SignOutAsync("Cookies");
            return Redirect("/");
        }
    }
}