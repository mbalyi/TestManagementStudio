using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;
//using Microsoft.AspNetCore.Identity.EntityFrameworkCore;

namespace TestManagementStudio.SQLData
{
    public class Roles// : IdentityRole
    {
        [Key]
        public int RoleId { get; set; }
        [Required]
        public string Name { get; set; }
        [Required]
        public int IsFullAccess { get; set; }
        [Required]
        public int IsManager { get; set; }
        [Required]
        public int IsEditor { get; set; }
        [Required]
        public int IsUser { get; set; }
    }
}
