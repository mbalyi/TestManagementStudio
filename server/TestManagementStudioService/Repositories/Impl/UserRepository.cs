using System;
using System.Linq;
using System.Collections.Generic;
using Dapper;
using TestManagementStudioService.Models;
using System.Data;
using TestManagementStudioService.Exceptions.Data;

namespace TestManagementStudioService.Repositories
{
    public class UserRepository : BasicRepository, IRepository<User>
    {
        public int Add(User entity)
        {
            try
            {
                using (IDbConnection dbConnection = Connection)
                {
                    dbConnection.Open();
                    using (IDbTransaction tranz = dbConnection.BeginTransaction())
                    {
                        try
                        {
                            var sqlEntity = @"
                                                INSERT INTO SecuredEntity DEFAULT VALUES;
                                                SELECT CAST(SCOPE_IDENTITY() as int);
                                            ";

                            var id = dbConnection.QueryFirst<int>(sqlEntity, null, tranz);

                            var sqlActor = @"
                                                INSERT INTO Actor (Id) VALUES(@Id);                                            
                                            ";
                            dbConnection.Execute(sqlActor, new { id = id }, tranz);

                            entity.Id = (id);

                            dbConnection.Execute("INSERT INTO [User] ([Id], [Email],[Password],[FirstName],[LastName]) VALUES(@Id, @Email,@Password,@FirstName,@LastName)", entity, tranz);
                            tranz.Commit();
                            return id;
                        }
                        catch
                        {
                            if (tranz != null)
                            {
                                tranz.Rollback();
                                throw;
                            }
                        }
                    }


                }
                throw new Exception();
            }
            catch
            {
                throw;
            }
        }

        public void Attach(User entity)
        {
            throw new NotImplementedException();
        }

        public void Delete(User entity)
        {
            throw new NotImplementedException();
        }

        public User GetByEmail(String email)
        {
            try
            {
                using (IDbConnection dbConnection = Connection)
                {
                    dbConnection.Open();

                    var sql =
                            @"
                            SELECT u.*, g.Id , g.Name, g.IsGlobal FROM [User] u 
                            LEFT JOIN [Users_Groups] ug ON u.Id = ug.UserId
                            LEFT JOIN [Group] g ON ug.GroupId = g.Id
                            WHERE u.Email = @Email
                            ORDER BY u.Id
                        ";

                    var data = dbConnection.Query<User, Group, User>(sql,
                        (user, group) =>
                        {
                            if (user != null)
                                user.Groups.Add(group);
                            return user;
                        },
                        new { Email = email }).Single();

                    return data;

                }
            }
            catch
            {
                throw new ModelNotFoundException();
            }
            
        }
        public User GetById(int id)
        {
            try
            {
                using (IDbConnection dbConnection = Connection)
                {
                    dbConnection.Open();

                    var sql =
                            @"
                                SELECT u.*, g.Id , g.Name, g.IsGlobal FROM [User] u 
                                LEFT JOIN [Users_Groups] ug ON u.Id = ug.UserId
                                LEFT JOIN [Group] g ON ug.GroupId = g.Id
                                WHERE u.Id = @id
                                ORDER BY u.Id
                            ";

                    var data = dbConnection.Query<User, Group, User>(sql,
                        (user, group) =>
                        {
                            user.Groups.Add(group);
                            return user;
                        }, 
                        new { Id = id }).Single();

                    return data;

                }
            }
            catch
            {
                throw new ModelNotFoundException();
            }

        }

        public IEnumerable<User> GetAll()
        {
            using (IDbConnection dbConnection = Connection)
            {
                dbConnection.Open();

                var sql =
                        @"
                            SELECT u.*, g.Id , g.Name, g.IsGlobal FROM [User] u 
                            LEFT JOIN [Users_Groups] ug ON u.Id = ug.UserId
                            LEFT JOIN [Group] g ON ug.GroupId = g.Id
                            ORDER BY u.Id
                        ";

                var data = dbConnection.Query<User, Group, User>(sql,
                    (user, group) =>
                    {
                        user.Groups.Add(group);
                        return user;
                    });

                return data;
            }
        }
    }
}
