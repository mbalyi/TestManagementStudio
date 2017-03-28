using System;
using System.Collections.Generic;
using System.Text;
using TestManagementStudioService.Models;
using TestManagementStudioService.Repositories;

namespace TestManagementStudioService.Services
{
    public class RoleService
    {
        private readonly RoleRepository  _roleRepository;


        public RoleService(RoleRepository roleRepository)
        {
            _roleRepository = roleRepository;
        }

        public int AddRole(Role role)
        {
           return  _roleRepository.Add(role);
        }


    }
}
