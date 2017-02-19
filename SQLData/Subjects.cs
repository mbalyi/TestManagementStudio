using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;

namespace TestManagementStudio.SQLData
{
    public class Subjects
    {
        [Key]
        public int SubjectId { get; set; }
        [Required]
        public string Title { get; set; }
        [Required]
        public string Description { get; set; }
        [Required]
        public DateTime ModifiedDate { get; set; }
        [Required]
        public int IsDeleted { get; set; }
        [Required]
        public int OwnerId { get; set; }
    }
}