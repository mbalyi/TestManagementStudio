using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace TestManagementStudio.SQLData
{
    public class TestCasesContext : DbContext
    {
        public TestCasesContext(DbContextOptions<TestCasesContext> options) : base(options) { }
        public TestCasesContext() { }
        public DbSet<TestCases> TestCases { get; set; }
    }
}


