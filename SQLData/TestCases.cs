using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;

namespace TestManagementStudio.SQLData
{
    public class TestCases
    {
        [Key]
        public int TestCaseId { get; set; }
        [Required]
        public string Question { get; set; }
        [Required]
        public DateTime CreatedDate { get; set; }
        [Required]
        public DateTime ModifiedDate { get; set; }
        [Required]
        public Boolean IsDeleted { get; set; }
        [Required]
        public Boolean IsArchived { get; set; }
        [Required]
        public Boolean IsUpdated { get; set; }
        [Required]
        public int UpdatedTo { get; set; }
        [Required]
        public int Interval { get; set; }
        [Required]
        public int CreatedBy { get; set; }
        [Required]
        public int SubjectId { get; set; }
        [Required]
        public int LevelId { get; set; }
    }
}