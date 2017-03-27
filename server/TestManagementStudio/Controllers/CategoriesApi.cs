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
    public class CategoriesApiController : Controller
    { 

        /// <summary>
        /// Add a new root category
        /// </summary>
        /// <remarks>Add a new root category</remarks>
        /// <param name="name">Name of the new category</param>
        /// <response code="201">Return no content, but a redirection  header</response>
        /// <response code="409">Some unique data (i.e. name) conflicted with a data of existing category</response>
        [HttpPost]
        [Route("/v1/categories")]
        [SwaggerOperation("AddCategory")]
        [SwaggerResponse(200, type: typeof(string))]
        public virtual IActionResult AddCategory([FromForm]string name)
        { 
            string exampleJson = null;
            
            var example = exampleJson != null
            ? JsonConvert.DeserializeObject<string>(exampleJson)
            : default(string);
            return new ObjectResult(example);
        }


        /// <summary>
        /// Add a new question to a category
        /// </summary>
        /// <remarks>Add a new question to a category</remarks>
        /// <param name="categoryId">The category identifier number</param>
        /// <param name="question">the new question</param>
        /// <response code="201">Return no content, but a redirection  header</response>
        [HttpPost]
        [Route("/v1/categories/{categoryId}/questions")]
        [SwaggerOperation("AddCategoryQuestion")]
        [SwaggerResponse(200, type: typeof(string))]
        public virtual IActionResult AddCategoryQuestion([FromRoute]decimal? categoryId, [FromBody]Question question)
        { 
            string exampleJson = null;
            
            var example = exampleJson != null
            ? JsonConvert.DeserializeObject<string>(exampleJson)
            : default(string);
            return new ObjectResult(example);
        }


        
        /// <summary>
        /// Add a new subcategory
        /// </summary>
        /// <remarks>Add a new subcategory</remarks>
        /// <param name="categoryId">The category identifier number</param>
        /// <param name="name">Name of the new category</param>
        /// <response code="201">Return no content, but a redirection  header</response>
        /// <response code="409">Some unique data (i.e. name) conflicted with a data of existing category</response>
        [HttpPost]
        [Route("/v1/categories/{categoryId}/categories")]
        [SwaggerOperation("AddSubCategory")]
        [SwaggerResponse(200, type: typeof(string))]
        public virtual IActionResult AddSubCategory([FromRoute]decimal? categoryId, [FromForm]string name)
        { 
            string exampleJson = null;
            
            var example = exampleJson != null
            ? JsonConvert.DeserializeObject<string>(exampleJson)
            : default(string);
            return new ObjectResult(example);
        }


        

        /// <summary>
        /// Delete a category
        /// </summary>
        /// <remarks></remarks>
        /// <param name="categoryId">The category identifier number</param>
        /// <response code="204"></response>
        /// <response code="401">Access denied</response>
        [HttpDelete]
        [Route("/v1/categories/{categoryId}")]
        [SwaggerOperation("DeleteCategory")]
        public virtual void DeleteCategory([FromRoute]decimal? categoryId)
        { 
            throw new NotImplementedException();
        }


        /// <summary>
        /// Get a category
        /// </summary>
        /// <remarks></remarks>
        /// <param name="categoryId">The category identifier number</param>
        /// <response code="200"></response>
        /// <response code="401">Access denied</response>
        [HttpGet]
        [Route("/v1/categories/{categoryId}")]
        [SwaggerOperation("GetCategory")]
        [SwaggerResponse(200, type: typeof(Category))]
        public virtual IActionResult GetCategory([FromRoute]decimal? categoryId)
        { 
            string exampleJson = null;
            
            var example = exampleJson != null
            ? JsonConvert.DeserializeObject<Category>(exampleJson)
            : default(Category);
            return new ObjectResult(example);
        }


        /// <summary>
        /// Get all categories
        /// </summary>
        /// <remarks>Get all categories</remarks>
        /// <response code="200">The list of category objects</response>
        [HttpGet]
        [Route("/v1/categories")]
        [SwaggerOperation("ListCategories")]
        [SwaggerResponse(200, type: typeof(List<Category>))]
        public virtual IActionResult ListCategories()
        { 
            string exampleJson = null;
            
            var example = exampleJson != null
            ? JsonConvert.DeserializeObject<List<Category>>(exampleJson)
            : default(List<Category>);
            return new ObjectResult(example);
        }


        /// <summary>
        /// Get questions of the category
        /// </summary>
        /// <remarks>Get questions of the category</remarks>
        /// <param name="categoryId">The category identifier number</param>
        /// <response code="200">The list of question objects</response>
        [HttpGet]
        [Route("/v1/categories/{categoryId}/questions")]
        [SwaggerOperation("ListCategoryQuestions")]
        [SwaggerResponse(200, type: typeof(List<Question>))]
        public virtual IActionResult ListCategoryQuestions([FromRoute]decimal? categoryId)
        { 
            string exampleJson = null;
            
            var example = exampleJson != null
            ? JsonConvert.DeserializeObject<List<Question>>(exampleJson)
            : default(List<Question>);
            return new ObjectResult(example);
        }


        /// <summary>
        /// Get tests of the category
        /// </summary>
        /// <remarks>Get tests of the category</remarks>
        /// <param name="categoryId">The category identifier number</param>
        /// <response code="200">The list of test objects</response>
        [HttpGet]
        [Route("/v1/categories/{categoryId}/tests")]
        [SwaggerOperation("ListCategoryTests")]
        [SwaggerResponse(200, type: typeof(List<Test>))]
        public virtual IActionResult ListCategoryTests([FromRoute]decimal? categoryId)
        { 
            string exampleJson = null;
            
            var example = exampleJson != null
            ? JsonConvert.DeserializeObject<List<Test>>(exampleJson)
            : default(List<Test>);
            return new ObjectResult(example);
        }


        
        /// <summary>
        /// Get all subcategories
        /// </summary>
        /// <remarks>Get all subcategories</remarks>
        /// <param name="categoryId">The category identifier number</param>
        /// <response code="200">The list of category objects</response>
        [HttpGet]
        [Route("/v1/categories/{categoryId}/categories")]
        [SwaggerOperation("ListSubCategories")]
        [SwaggerResponse(200, type: typeof(List<Category>))]
        public virtual IActionResult ListSubCategories([FromRoute]decimal? categoryId)
        { 
            string exampleJson = null;
            
            var example = exampleJson != null
            ? JsonConvert.DeserializeObject<List<Category>>(exampleJson)
            : default(List<Category>);
            return new ObjectResult(example);
        }


        
        /// <summary>
        /// update a category
        /// </summary>
        /// <remarks></remarks>
        /// <param name="categoryId">The category identifier number</param>
        /// <param name="name">Name of the new category</param>
        /// <response code="204">Successful operation</response>
        /// <response code="401">Access denied</response>
        /// <response code="404">Object not found</response>
        [HttpPut]
        [Route("/v1/categories/{categoryId}")]
        [SwaggerOperation("UpdateCategory")]
        public virtual void UpdateCategory([FromRoute]decimal? categoryId, [FromForm]string name)
        { 
            throw new NotImplementedException();
        }
    }
}
