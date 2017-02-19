using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace TestManagementStudio.SQLData
{
    public class SubjectsContext : DbContext
    {
        public SubjectsContext(DbContextOptions<SubjectsContext> options) : base(options) { }
        public SubjectsContext() { }
        public DbSet<Subjects> Subjects { get; set; }
    }
}

