using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore; 

namespace TestManagementStudio.SQLData
{
    public class UsersContext: DbContext
    {
        public UsersContext( DbContextOptions<UsersContext> options): base(options) { }
        public UsersContext() { }
        public DbSet<Users> Users { get; set; }
    }
}
