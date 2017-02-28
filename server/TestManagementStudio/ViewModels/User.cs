using System;
using System.Linq;
using System.IO;
using System.Text;
using System.Collections;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.Runtime.Serialization;
using Newtonsoft.Json;

namespace TestManagementStudio.ViewModels
{

    /// <summary>
    /// 
    /// </summary>
    public  class User :  SecuredEntity
    {

        public string Email { get; set; }
        //public string Password { get; set; }
        public string LastName { get; set; }
        public string FirstName { get; set; }

        private readonly List<Group> groups = new List<Group>();
        public List<Group> Groups
        {
            get { return groups; }
        }

    }
}
