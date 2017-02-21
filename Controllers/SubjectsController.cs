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
    [Route("api/Subjects")]
    public class SubjectsController : Controller
    {
        private readonly TMSContext _context;

        public SubjectsController(TMSContext context)
        {
            _context = context;
        }

        [HttpGet]
        [Route("Subjects")]
        public IEnumerable<Subjects> GetSubjects()
        {
            return _context.Subjects;
        }
    }
}