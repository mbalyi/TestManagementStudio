using System;
using System.Linq;
using System.Collections.Generic;
using System.Data;
using System.Text;
using TestManagementStudioService.Models;
using Dapper;
using TestManagementStudioService.Exceptions.Data;

namespace TestManagementStudioService.Repositories
{
    class RoleRepository : BasicRepository, IRepository<Role>
    {
        public void Add(Role entity)
        {
            using (IDbConnection dbConnection = Connection)
            {
                dbConnection.Open();
                using (IDbTransaction tranz = dbConnection.BeginTransaction())
                {
                    try
                    {
                        var sqlEntity = @"
                                            INSERT INTO Role(Name, IsRoot)
                                            VALUES(@Name, @IsRoot);
                                            SELECT CAST(SCOPE_IDENTITY() as int);
                                        ";

                        var id = dbConnection.QueryFirst<int>(sqlEntity, new { Name = entity.Name, IsRoot = entity.IsRoot }, tranz);

                        var sqlActor = @"
                                            INSERT INTO RolePart (RoleId, PartName) VALUES(@Id, @PartName);                                            
                                        ";

                        // Inserrt role parts
                        foreach (var part in entity.Parts)
                        {
                            dbConnection.Execute(sqlActor, new { id = id, PartName = part.Name }, tranz);
                        }

                        tranz.Commit();
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
        }

        public void Attach(Role entity)
        {
            throw new NotImplementedException();
        }

        public void Delete(Role entity)
        {
            throw new NotImplementedException();
        }

        public IEnumerable<Role> GetAll()
        {
            using (IDbConnection dbConnection = Connection)
            {
                dbConnection.Open();

                var sql =
                        @"
                            SELECT r.*, rp.* FROM [Role] r 
                            LEFT JOIN [RolePart] rp ON r.Id = rp.RoleId                            
                            ORDER BY r.Name
                        ";

                var data = dbConnection.Query<Role, RolePart, Role>(sql,
                    (role, part) =>
                    {
                        role.Parts.Add(part);
                        return role;
                    }
                   );
                return data;

            }
        }
        public IEnumerable<Role> GetAllByActorId(int actorId)
        {
            using (IDbConnection dbConnection = Connection)
            {
                dbConnection.Open();

                var sql =
                        @"
                            SELECT r.*, rp.* FROM [Role] r 
                            LEFT JOIN [RolePart] rp ON r.Id = rp.RoleId    
                            LEFT JOIN Actor_Roles ar ON ar.RoleId=r.Id
                            WHERE ar.ActorId = @ActorId
                            ORDER BY r.Name
                        ";

                var data = dbConnection.Query<Role, RolePart, Role>(sql,
                    (role, part) =>
                    {
                        role.Parts.Add(part);
                        return role;
                    },
                    new { ActorId = actorId }
                   );
                return data;

            }
        }

        public Role GetById(int id)
        {
            try
            {
                using (IDbConnection dbConnection = Connection)
                {
                    dbConnection.Open();

                    var sql =
                            @"
                                SELECT r.*, rp.* FROM [Role] r 
                                LEFT JOIN [RolePart] rp ON r.Id = rp.RoleId   
                                WHERE r.Id = @Id
                                ORDER BY r.Name
                            
                            ";

                    var data = dbConnection.Query<Role, RolePart, Role>(sql,
                        (role, part) =>
                        {
                            role.Parts.Add(part);
                            return role;
                        },
                        new { Id = id }
                       ).FirstOrDefault();
                    return data;
                }
            }catch
            {
                throw new ModelNotFoundException();
            }
        }
    }
}
