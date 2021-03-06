/*
 * TestManagement Studio Backend API
 *
 * <<Some text >>   Would respond with: ```js callbackFunction({     ... }); ``` 
 *
 * OpenAPI spec version: v1
 * 
 * Generated by: https://github.com/swagger-api/swagger-codegen.git
 */

using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.ComponentModel;
using System.IO;
using System.Linq;
using System.Net;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using TestManagementStudioService.Models;
using Swashbuckle.AspNetCore.SwaggerGen;

namespace TestManagementStudioService.Controllers
{ 
    /// <summary>
    /// 
    /// </summary>
    public class TestsQuestionsApiController : Controller
    { 

        /// <summary>
        /// Assign a question to a test
        /// </summary>
        /// <remarks></remarks>
        /// <param name="testId">The Test identifier number</param>
        /// <param name="questionId">the question&#39;s Id</param>
        /// <response code="201">Return no content, but a redirection  header</response>
        [HttpPost]
        [Route("/v1/tests/{testId}/questions")]
        [SwaggerOperation("AddTestQuestion")]
        [SwaggerResponse(200, type: typeof(string))]
        public virtual IActionResult AddTestQuestion([FromRoute]decimal? testId, [FromForm]int? questionId)
        { 
            string exampleJson = null;
            
            var example = exampleJson != null
            ? JsonConvert.DeserializeObject<string>(exampleJson)
            : default(string);
            return new ObjectResult(example);
        }
    }
}
