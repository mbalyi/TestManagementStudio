using Microsoft.Extensions.DependencyInjection;
using TestManagementStudioService.Models;
using TestManagementStudioService.Repositories;
using TestManagementStudioService.Services;

namespace TestManagementStudioService.IoC
{

    public static class DependencyMapper
    {
        public static IServiceCollection AddTestManagement(this IServiceCollection services)
        {

           // TestManagementStudioContext context = new TestManagementStudioContext();
          //  DbInitializer.Initialize(context);
            services.AddScoped<UserService>();
            services.AddScoped<IRepository<User>, UserRepository>();
            return services;
        }
    }
}
