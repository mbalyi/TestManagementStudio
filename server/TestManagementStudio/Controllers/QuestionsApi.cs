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
    public class QuestionsApiController : Controller
    { 

        

        /// <summary>
        /// Add an question answer
        /// </summary>
        /// <remarks>Add an question answer</remarks>
        /// <param name="questionId">The question identifier number</param>
        /// <param name="answer">the answer</param>
        /// <response code="201">Return no content, but a redirection  header</response>
        [HttpPost]
        [Route("/v1/questions/{questionId}/answers")]
        [SwaggerOperation("AddQuestionAnswer")]
        [SwaggerResponse(200, type: typeof(string))]
        public virtual IActionResult AddQuestionAnswer([FromRoute]decimal? questionId, [FromBody]Answer answer)
        { 
            string exampleJson = null;
            
            var example = exampleJson != null
            ? JsonConvert.DeserializeObject<string>(exampleJson)
            : default(string);
            return new ObjectResult(example);
        }


        /// <summary>
        /// Add a category to the question
        /// </summary>
        /// <remarks>Add a category to the question</remarks>
        /// <param name="questionId">The question identifier number</param>
        /// <param name="categoryId">Id of the new category</param>
        /// <response code="201">Return no content, but a redirection  header</response>
        [HttpPost]
        [Route("/v1/questions/{questionId}/categories")]
        [SwaggerOperation("AddQuestionCategory")]
        [SwaggerResponse(200, type: typeof(string))]
        public virtual IActionResult AddQuestionCategory([FromRoute]decimal? questionId, [FromForm]int? categoryId)
        { 
            string exampleJson = null;
            
            var example = exampleJson != null
            ? JsonConvert.DeserializeObject<string>(exampleJson)
            : default(string);
            return new ObjectResult(example);
        }


        /// <summary>
        /// remove a question
        /// </summary>
        /// <remarks></remarks>
        /// <param name="questionId">The question identifier number</param>
        /// <response code="204"></response>
        /// <response code="401">Access denied</response>
        [HttpDelete]
        [Route("/v1/questions/{questionId}")]
        [SwaggerOperation("DeleteQuestion")]
        public virtual void DeleteQuestion([FromRoute]decimal? questionId)
        { 
            throw new NotImplementedException();
        }


        /// <summary>
        /// remove an answer
        /// </summary>
        /// <remarks></remarks>
        /// <param name="questionId">The question identifier number</param>
        /// <param name="answerId">The identifier of an answer</param>
        /// <response code="204"></response>
        /// <response code="401">Access denied</response>
        [HttpDelete]
        [Route("/v1/questions/{questionId}/answers/{answerId}")]
        [SwaggerOperation("DeleteQuestionAnswer")]
        public virtual void DeleteQuestionAnswer([FromRoute]decimal? questionId, [FromRoute]decimal? answerId)
        { 
            throw new NotImplementedException();
        }


        /// <summary>
        /// remove a question category
        /// </summary>
        /// <remarks></remarks>
        /// <param name="questionId">The question identifier number</param>
        /// <param name="categoryId">The category identifier number</param>
        /// <response code="204"></response>
        /// <response code="401">Access denied</response>
        [HttpDelete]
        [Route("/v1/questions/{questionId}/categories/{categoryId}")]
        [SwaggerOperation("DeleteQuestionCategory")]
        public virtual void DeleteQuestionCategory([FromRoute]decimal? questionId, [FromRoute]decimal? categoryId)
        { 
            throw new NotImplementedException();
        }


        

        /// <summary>
        /// get a question
        /// </summary>
        /// <remarks>get a question</remarks>
        /// <param name="questionId">The question identifier number</param>
        /// <response code="200">The question objects</response>
        [HttpGet]
        [Route("/v1/questions/{questionId}")]
        [SwaggerOperation("GetQuestion")]
        [SwaggerResponse(200, type: typeof(Question))]
        public virtual IActionResult GetQuestion([FromRoute]decimal? questionId)
        { 
            string exampleJson = null;
            
            var example = exampleJson != null
            ? JsonConvert.DeserializeObject<Question>(exampleJson)
            : default(Question);
            return new ObjectResult(example);
        }


        /// <summary>
        /// Get a concrete answers paired to the question
        /// </summary>
        /// <remarks></remarks>
        /// <param name="questionId">The question identifier number</param>
        /// <param name="answerId">The identifier of an answer</param>
        /// <response code="200"></response>
        /// <response code="401">Access denied</response>
        [HttpGet]
        [Route("/v1/questions/{questionId}/answers/{answerId}")]
        [SwaggerOperation("GetQuestionAnswer")]
        [SwaggerResponse(200, type: typeof(Answer))]
        public virtual IActionResult GetQuestionAnswer([FromRoute]decimal? questionId, [FromRoute]decimal? answerId)
        { 
            string exampleJson = null;
            
            var example = exampleJson != null
            ? JsonConvert.DeserializeObject<Answer>(exampleJson)
            : default(Answer);
            return new ObjectResult(example);
        }


       


        /// <summary>
        /// Get answers paired to the question
        /// </summary>
        /// <remarks></remarks>
        /// <param name="questionId">The question identifier number</param>
        /// <response code="200"></response>
        /// <response code="401">Access denied</response>
        [HttpGet]
        [Route("/v1/questions/{questionId}/answers")]
        [SwaggerOperation("ListQuestionAnswers")]
        [SwaggerResponse(200, type: typeof(List<Answer>))]
        public virtual IActionResult ListQuestionAnswers([FromRoute]decimal? questionId)
        { 
            string exampleJson = null;
            
            var example = exampleJson != null
            ? JsonConvert.DeserializeObject<List<Answer>>(exampleJson)
            : default(List<Answer>);
            return new ObjectResult(example);
        }


        /// <summary>
        /// Get all categories of a question
        /// </summary>
        /// <remarks>Get all categories of a question</remarks>
        /// <param name="questionId">The question identifier number</param>
        /// <response code="200">The list of category objects</response>
        [HttpGet]
        [Route("/v1/questions/{questionId}/categories")]
        [SwaggerOperation("ListQuestionCategories")]
        [SwaggerResponse(200, type: typeof(List<Category>))]
        public virtual IActionResult ListQuestionCategories([FromRoute]decimal? questionId)
        { 
            string exampleJson = null;
            
            var example = exampleJson != null
            ? JsonConvert.DeserializeObject<List<Category>>(exampleJson)
            : default(List<Category>);
            return new ObjectResult(example);
        }


        /// <summary>
        /// get questions
        /// </summary>
        /// <remarks>get questions</remarks>
        /// <response code="200">The list of question objects</response>
        [HttpGet]
        [Route("/v1/questions")]
        [SwaggerOperation("ListQuestions")]
        [SwaggerResponse(200, type: typeof(List<Question>))]
        public virtual IActionResult ListQuestions()
        { 
            string exampleJson = null;
            
            var example = exampleJson != null
            ? JsonConvert.DeserializeObject<List<Question>>(exampleJson)
            : default(List<Question>);
            return new ObjectResult(example);
        }


        

        /// <summary>
        /// Update a question
        /// </summary>
        /// <remarks>Update a question</remarks>
        /// <param name="questionId">The question identifier number</param>
        /// <param name="question">the question</param>
        /// <response code="201">Return no content, but a redirection  header</response>
        [HttpPut]
        [Route("/v1/questions/{questionId}")]
        [SwaggerOperation("UpdateQuestion")]
        [SwaggerResponse(200, type: typeof(string))]
        public virtual IActionResult UpdateQuestion([FromRoute]decimal? questionId, [FromBody]Question question)
        { 
            string exampleJson = null;
            
            var example = exampleJson != null
            ? JsonConvert.DeserializeObject<string>(exampleJson)
            : default(string);
            return new ObjectResult(example);
        }
    }
}
