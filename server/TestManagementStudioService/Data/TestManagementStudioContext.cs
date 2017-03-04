using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using TestManagementStudioService.Models;

namespace TestManagementStudioService.Data
{
    public class TestManagementStudioContext : DbContext
    {
        public DbSet<User> Users { get; set; }
        public DbSet<Group> Groups { get; set; }
        public DbSet<Permission> Permissions { get; set; }


        protected override void OnConfiguring(DbContextOptionsBuilder builder)
        {
            builder.UseSqlServer(@"Data Source=TAMASPC\SQLEXPRESS;Initial Catalog=TestManagementStudio;Persist Security Info=True;User ID=test;Password=test");
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {

            modelBuilder.Entity<User>().ToTable("User");
            modelBuilder.Entity<Group>().ToTable("Group");
            modelBuilder.Entity<Permission>().ToTable("Permission");
        }
    }
}
