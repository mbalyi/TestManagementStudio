using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace TestManagementStudio.SQLData
{
    public class AnswersContext : DbContext
    {
        public AnswersContext(DbContextOptions<AnswersContext> options) : base(options) { }
        public AnswersContext() { }
        public DbSet<Answers> Answers { get; set; }
    }
}

