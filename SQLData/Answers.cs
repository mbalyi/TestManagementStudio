using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;

namespace TestManagementStudio.SQLData
{
    public class Answers
    {
        [Key]
        public int AnswerId { get; set; }
        [Required]
        public string Answer { get; set; }
        [Required]
        public Boolean IsDefault { get; set; }
        [Required]
        public int TestCaseId { get; set; }
    }
}
