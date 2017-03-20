using System;
using System.Collections.Generic;
using Dapper;
using TestManagementStudioService.Models;
using System.Data;

namespace TestManagementStudioService.Repositories
{
    public class UserRepository : BasicRepository, IRepository<User>
    {
        public void Add(User entity)
        {
            throw new NotImplementedException();
        }

        public void Attach(User entity)
        {
            throw new NotImplementedException();
        }

        public void Delete(User entity)
        {
            throw new NotImplementedException();
        }

        public User GetById(int id)
        {
            throw new NotImplementedException();
        }

        public IEnumerable<User> GetAll()
        {
            using (IDbConnection dbConnection = Connection)
            {
                dbConnection.Open();
                return dbConnection.Query<User>("SELECT * FROM User");
            }
        }
    }
}
