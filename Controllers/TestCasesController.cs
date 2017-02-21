using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using TestManagementStudio.SQLData;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Http;

namespace TestManagementStudio.Controllers
{
    [Produces("application/json")]
    [Route("api/TestCases")]
    public class TestCasesController : Controller
    {
        private readonly TMSContext _context;

        public TestCasesController(TMSContext context)
        {
            _context = context;
        }

        [HttpGet]
        [Route("Cases")]
        public IEnumerable<TestCases> GetCases(int id)
        {
            return _context.TestCases;
        }

        [HttpGet]
        [Route("BySubjectId/{id}")]
        public IEnumerable<TestCases> Get(int id)
        {
            return _context.TestCases.Where(c => c.SubjectId == id).ToArray();
        }
    }
}