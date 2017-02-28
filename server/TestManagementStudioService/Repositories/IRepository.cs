using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TestManagementStudioService.Models;

namespace TestManagementStudioService.Repositories
{
    public interface IRepository<T> where T : Entity
    {
        IEnumerable<T> GetAll();
        T Get(int id);
        void Insert(T entity);
        void Update(T entity);
        void Delete(T entity);
    }

}
