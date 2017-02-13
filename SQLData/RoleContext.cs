using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace TestManagementStudio.SQLData
{
    public class RoleContext : DbContext
    {
        public RoleContext(DbContextOptions<RoleContext> options): base(options) { }
        public RoleContext() { }
        public DbSet<Roles> Roles { get; set; }
    }
}
