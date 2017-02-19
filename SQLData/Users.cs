using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;
//using Microsoft.AspNetCore.Identity.EntityFrameworkCore;

namespace TestManagementStudio.SQLData
{
    public class Users// : IdentityUser
    {
        [Key]
        public int UserId { get; set; }
        [Required]
        public string Nickname { get; set; }
        [Required]
        public string Password { get; set; }
        [Required]
        public string Firstname { get; set; }
        [Required]
        public string Lastname { get; set; }
        [Required]
        public string Email { get; set; }
        [Required]
        public string Phone { get; set; }
        [Required]
        public string Address { get; set; }
        [Required]
        public int RoleId { get; set; }
    }
}
