using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TestManagementStudio.Factories
{
    public static class UserFactory
    {
        public static ViewModels.User fromModel(TestManagementStudioService.Models.User userModel)
        {
            var user = new ViewModels.User()
            {
                Id = userModel.Id.GetValueOrDefault(),
                Email = userModel.Email,
                FirstName = userModel.FirstName,
                LastName = userModel.LastName
            };

            // Add groups

            // Add permissions

            return user;
        }
    }
}
