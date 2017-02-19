using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace TestManagementStudio.SQLData
{
    public class LevelsContext : DbContext
    {
        public LevelsContext(DbContextOptions<LevelsContext> options) : base(options) { }
        public LevelsContext() { }
        public DbSet<Levels> Levels { get; set; }
    }
}

