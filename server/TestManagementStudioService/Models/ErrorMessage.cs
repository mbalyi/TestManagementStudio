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
using System.Linq;
using System.IO;
using System.Text;
using System.Collections;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.Runtime.Serialization;
using Newtonsoft.Json;

namespace TestManagementStudioService.Models
{

    /// <summary>
    /// 
    /// </summary>
    [DataContract]
    public partial class ErrorMessage :  IEquatable<ErrorMessage>
    {

        /// <summary>
        /// Initializes a new instance of the <see cref="ErrorMessage" /> class.
        /// </summary>
        /// <param name="Title">Title.</param>
        /// <param name="Text">Text.</param>
        public ErrorMessage(string Title = default(string), string Text = default(string))
        {
            this.Title = Title;
            this.Text = Text;
            
        }

        /// <summary>
        /// Gets or Sets Title
        /// </summary>
        [DataMember(Name="title")]
        public string Title { get; set; }
        /// <summary>
        /// Gets or Sets Text
        /// </summary>
        [DataMember(Name="text")]
        public string Text { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            var sb = new StringBuilder();
            sb.Append("class ErrorMessage {\n");
            sb.Append("  Title: ").Append(Title).Append("\n");
            sb.Append("  Text: ").Append(Text).Append("\n");
            sb.Append("}\n");
            return sb.ToString();
        }

        /// <summary>
        /// Returns the JSON string presentation of the object
        /// </summary>
        /// <returns>JSON string presentation of the object</returns>
        public string ToJson()
        {
            return JsonConvert.SerializeObject(this, Formatting.Indented);
        }

        /// <summary>
        /// Returns true if objects are equal
        /// </summary>
        /// <param name="obj">Object to be compared</param>
        /// <returns>Boolean</returns>
        public override bool Equals(object obj)
        {
            if (ReferenceEquals(null, obj)) return false;
            if (ReferenceEquals(this, obj)) return true;
            if (obj.GetType() != GetType()) return false;
            return Equals((ErrorMessage)obj);
        }

        /// <summary>
        /// Returns true if ErrorMessage instances are equal
        /// </summary>
        /// <param name="other">Instance of ErrorMessage to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(ErrorMessage other)
        {

            if (ReferenceEquals(null, other)) return false;
            if (ReferenceEquals(this, other)) return true;

            return 
                (
                    this.Title == other.Title ||
                    this.Title != null &&
                    this.Title.Equals(other.Title)
                ) && 
                (
                    this.Text == other.Text ||
                    this.Text != null &&
                    this.Text.Equals(other.Text)
                );
        }

        /// <summary>
        /// Gets the hash code
        /// </summary>
        /// <returns>Hash code</returns>
        public override int GetHashCode()
        {
            // credit: http://stackoverflow.com/a/263416/677735
            unchecked // Overflow is fine, just wrap
            {
                int hash = 41;
                // Suitable nullity checks etc, of course :)
                    if (this.Title != null)
                    hash = hash * 59 + this.Title.GetHashCode();
                    if (this.Text != null)
                    hash = hash * 59 + this.Text.GetHashCode();
                return hash;
            }
        }

        #region Operators

        public static bool operator ==(ErrorMessage left, ErrorMessage right)
        {
            return Equals(left, right);
        }

        public static bool operator !=(ErrorMessage left, ErrorMessage right)
        {
            return !Equals(left, right);
        }

        #endregion Operators

    }
}
