using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;

namespace TestManagementStudio.SQLData
{
    public class Levels
    {
        [Key]
        public int LevelId { get; set; }
        [Required]
        public string Title { get; set; }
        [Required]
        public int EstimatedDuration { get; set; }
    }
}