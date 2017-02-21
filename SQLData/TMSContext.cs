using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore; 

namespace TestManagementStudio.SQLData
{
    public class TMSContext: DbContext
    {
        public TMSContext( DbContextOptions<TMSContext> options): base(options) { }
        public TMSContext() { }
        public DbSet<Users> Users { get; set; }
        public DbSet<Roles> Roles { get; set; }
        public DbSet<TestSets> TestSets { get; set; }
        public DbSet<TestCases> TestCases { get; set; }
        public DbSet<Subjects> Subjects { get; set; }
        public DbSet<Levels> Levels { get; set; }
        public DbSet<Answers> Answers { get; set; }
    }
}
