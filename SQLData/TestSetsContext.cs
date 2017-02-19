using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace TestManagementStudio.SQLData
{
    public class TestSetsContext : DbContext
    {
        public TestSetsContext(DbContextOptions<TestSetsContext> options) : base(options) { }
        public TestSetsContext() { }
        public DbSet<TestSets> TestSets { get; set; }
    }
}


