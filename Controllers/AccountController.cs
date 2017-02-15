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

        public IActionResult Index()
        {
            return View();
        }

        public IActionResult Register()
        {
            return View();
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public IActionResult Register(Users obj)
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

                IdentityResult result = userManager.CreateAsync
                (user, obj.Password).Result;

                if (result.Succeeded)
                {
                    if (!roleManager.RoleExistsAsync("User").Result)
                    {
                        Roles role = new Roles();
                        role.Name = "User";
                        role.IsFullAccess = 0;
                        role.IsManager = 0;
                        role.IsEditor = 0;
                        role.IsUser = 1;
                        IdentityResult roleResult = roleManager.
                        CreateAsync(role).Result;
                        if (!roleResult.Succeeded)
                        {
                            ModelState.AddModelError("",
                             "Error while creating role!");
                            return View(obj);
                        }
                    }

                    userManager.AddToRoleAsync(user,
                                 "User").Wait();
                    return RedirectToAction("Login", "Account");
                }
            }
            return View(obj);
        }

        public IActionResult Login()
        {
            return View();
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public IActionResult Login(Users obj)
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