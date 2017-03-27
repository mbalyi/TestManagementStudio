using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;
using TestManagementStudioService.Models;

namespace TestManagementStudioService.Repositories
{

    public interface IRepository<T> where T : Entity
    {
        IEnumerable<T> GetAll();
        T GetById(int id);
        int Add(T entity);
        void Attach(T entity);
        void Delete(T entity);
    }



}
