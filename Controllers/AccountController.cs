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
        public async Task<Users> Login([FromBody]LoginUser loginUser)
        {
            ViewData["ReturnUrl"] = null;

            if (!string.IsNullOrWhiteSpace(loginUser.nickname))
            {
                Users user = _context.Users.Single(u => u.Nickname.ToString() == loginUser.nickname.ToString());
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

                    return user;
                }
            }

            return new Users();
        }

        [HttpPost]
        [Route("Register")]
        public async Task<Users> Register([FromBody]RegisterUser registerUser)
        {
            ViewData["ReturnUrl"] = null;

            if (!string.IsNullOrWhiteSpace(registerUser.nickname))
            {
                var role = _context.Roles.Single(r => r.IsUser == true);
                var newUser = new Users
                {
                    Nickname = registerUser.nickname,
                    Password = registerUser.password,
                    Firstname = registerUser.firstname,
                    Lastname = registerUser.lastname,
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
                            new Claim("loggedUser", registerUser.nickname),
                            new Claim("role", role.RoleId.ToString())
                        };

                        var id = new ClaimsIdentity(claims, "password");
                        var p = new ClaimsPrincipal(id);

                        await HttpContext.Authentication.SignInAsync("Cookies", p);
                        await _context.SaveChangesAsync();

                        return _context.Users.Single(u => u.Nickname.ToString() == registerUser.nickname.ToString());
                    }
                }
                catch (DbUpdateException /* ex */)
                {
                    ModelState.AddModelError("", "Unable to save changes. " +
                        "Try again, and if the problem persists " +
                        "see your system administrator.");
                }
            }

            return new Users();
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