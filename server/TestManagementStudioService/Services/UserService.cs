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
        private readonly UserRepository _userRepository;


        public UserService(UserRepository userRepository)
        {
            _userRepository = userRepository;
        }

        public User FindOnebyUsernameAndPassword(string username, string password)
        {

            User u = _userRepository.GetByEmail(username);
            if (u.Password == password)
            {
                return u;
            }else
            {
                throw new ModelNotFoundException();
            }
                
        }

        public void Delete(User entity)
        {
            _userRepository.Delete(entity);
        }

        public User Get(int id)
        {
            return _userRepository.GetById(id);
        }

        public IEnumerable<User> GetAll()
        {
            return _userRepository.GetAll();
        }

        public void Insert(User entity)
        {
            _userRepository.Add(entity);
        }

        public void Update(User entity)
        {
            _userRepository.Attach(entity);
        }
    }
}
