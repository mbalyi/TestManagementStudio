using System;
using System.Text;
using System.Runtime.Serialization;
using Newtonsoft.Json;

namespace TestManagementStudio.ViewModels
{

    /// <summary>
    /// 
    /// </summary>
    public  class Permission
    {
        public Entity Subject { get; set; }    
        public bool Read { get; set; }
        public bool Write { get; set; }
    }
}
