using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TestManagementStudioService.Exceptions.Data;
using TestManagementStudioService.Models;
using TestManagementStudioService.Repositories;

namespace TestManagementStudioService.Services
{

   

    public class UserService
    {
        private readonly IRepository<User> _userRepository;


        public UserService(IRepository<User> userRepository)
        {
            _userRepository = userRepository;
        }

        public User FindOnebyUsernameAndPassword(string username, string password)
        {

            if (username == "test" &&
                password == "test")
            {
                return new User()
                {
                    Email = "test@test.com",
                    Id = 1
                };
            }else
            {
                throw new ModelNotFoundException();
            }
                
        }

        public void Delete(User entity)
        {
            throw new NotImplementedException();
        }

        public User Get(int id)
        {
            throw new NotImplementedException();
        }

        public IEnumerable<User> GetAll()
        {
            return _userRepository.GetAll();
        }

        public void Insert(User entity)
        {
            throw new NotImplementedException();
        }

        public void Update(User entity)
        {
            throw new NotImplementedException();
        }
    }
}
