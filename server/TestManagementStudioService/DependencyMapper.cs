using Microsoft.Extensions.DependencyInjection;
using TestManagementStudioService.Models;
using TestManagementStudioService.Repositories;
using TestManagementStudioService.Repositories.Impl;
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
            services.AddScoped<IRepository<Role>, RoleRepository>();
            services.AddScoped<IRepository<Category>, CategoryRepository>();
            services.AddScoped<IRepository<Question>, QuestionRepository>();
            services.AddScoped<IRepository<Answer>, AnswerRepository>();
            services.AddScoped<IRepository<Test>, TestRepository>();

            services.AddScoped<UserRepository>();
            services.AddScoped<RoleRepository>();
            services.AddScoped<CategoryRepository>();
            services.AddScoped<QuestionRepository>();
            services.AddScoped<AnswerRepository>();
            services.AddScoped<TestRepository>();
            return services;
        }
    }
}
