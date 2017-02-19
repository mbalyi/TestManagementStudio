using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;

namespace TestManagementStudio.SQLData
{
    public class TestSets
    {
        [Key]
        public int TestSetId { get; set; }
        [Required]
        public string Title { get; set; }
        [Required]
        public string Comment { get; set; }
        [Required]
        public DateTime CreatedDate { get; set; }
        [Required]
        public DateTime ModifiedDate { get; set; }
        [Required]
        public int IsDeleted { get; set; }
        [Required]
        public int IsArchived { get; set; }
        [Required]
        public int IsUpdated { get; set; }
        [Required]
        public int UpdatedTo { get; set; }
        [Required]
        public int Interval { get; set; }
        [Required]
        public int CreatedBy { get; set; }
        [Required]
        public int SubjectId { get; set; }
    }
}