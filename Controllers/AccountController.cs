using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using TestManagementStudio.SQLData;
using Microsoft.AspNetCore.Identity;

namespace TestManagementStudio.Controllers
{
    [Produces("application/json")]
    [Route("api/AccountController")]
    public class AccountController : Controller
    {
        private readonly UserManager<Users> userManager;
        private readonly SignInManager<Users> loginManager;
        private readonly RoleManager<Roles> roleManager;

        public AccountController(UserManager<Users> userManager,
            SignInManager<Users> loginManager,
            RoleManager<Roles> roleManager)
        {
            this.userManager = userManager;
            this.loginManager = loginManager;
            this.roleManager = roleManager;
        }

        [HttpGet]
        public IActionResult Index()
        {
            return View();
        }

        [HttpPost]
        //[ValidateAntiForgeryToken]
        public async Task<IActionResult> Register(Users obj)
        {
            if (ModelState.IsValid)
            {
                Users user = new Users();
                user.Nickname = obj.Nickname;
                user.Email = obj.Email;
                user.Firstname = obj.Firstname;
                user.Lastname = obj.Lastname;
                user.Address = obj.Address;
                user.Phone = obj.Phone;
                user.RoleId = 4;

                IdentityResult result = userManager.CreateAsync(user, obj.Password).Result;

                if (result.Succeeded)
                {
                    return RedirectToAction("Login", "Account");
                }
            }
            return View(obj);
        }

        [HttpPost("login")]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Login([FromBody]Users obj)
        {
            if (ModelState.IsValid)
            {
                var result = loginManager.PasswordSignInAsync(obj.Nickname, obj.Password, false, false).Result;

                if (result.Succeeded)
                {
                    return RedirectToAction("Index", "Home");
                }

                ModelState.AddModelError("", "Invalid login!");
            }

            return View(obj);
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public IActionResult LogOff()
        {
            loginManager.SignOutAsync().Wait();
            return RedirectToAction("Login", "Account");
        }
    }
}