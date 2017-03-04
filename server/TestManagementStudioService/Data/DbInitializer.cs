using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TestManagementStudioService.Data
{
    public static class DbInitializer
    {
        public static void Initialize(TestManagementStudioContext context)
        {
            context.Database.EnsureCreated();
        }
    }
}
