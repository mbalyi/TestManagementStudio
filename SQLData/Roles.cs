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
        public Boolean IsFullAccess { get; set; }
        [Required]
        public Boolean IsManager { get; set; }
        [Required]
        public Boolean IsEditor { get; set; }
        [Required]
        public Boolean IsUser { get; set; }
    }
}
