using System;
using System.Collections.Generic;

namespace TestManagementStudio.ViewModels
{

    /// <summary>
    /// 
    /// </summary>
    public class SecuredEntity:Entity
    {
        private readonly List<Permission> permissions = new List<Permission>();
        public List<Permission> Permissions
        {
            get { return permissions; }
        }
    }
}
