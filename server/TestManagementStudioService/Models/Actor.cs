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
    /// Anyone who can does actions. (Users &amp; Groups)
    /// </summary>
    [DataContract]
    public partial class Actor : SecuredEntity, IEquatable<Actor>
    {

        /// <summary>
        /// Initializes a new instance of the <see cref="Actor" /> class.
        /// </summary>
        /// <param name="Id">Id.</param>
        /// <param name="Permissions">Permissions.</param>
        /// <param name="Roles">Roles.</param>
        /// <param name="TestSets">Tests to to be completed, assigned to the actor.</param>
        public Actor(int? Id = default(int?), List<Permission> Permissions = default(List<Permission>), List<Role> Roles = default(List<Role>), List<TestSet> TestSets = default(List<TestSet>))
        {
            this.Id = Id;
            this.Permissions = Permissions;
            this.Roles = Roles;
            this.TestSets = TestSets;
            
        }

        /// <summary>
        /// Gets or Sets Id
        /// </summary>
        [DataMember(Name="id")]
        public int? Id { get; set; }
        /// <summary>
        /// Gets or Sets Permissions
        /// </summary>
        [DataMember(Name="permissions")]
        public List<Permission> Permissions { get; set; }
        /// <summary>
        /// Gets or Sets Roles
        /// </summary>
        [DataMember(Name="roles")]
        public List<Role> Roles { get; set; }
        /// <summary>
        /// Tests to to be completed, assigned to the actor
        /// </summary>
        /// <value>Tests to to be completed, assigned to the actor</value>
        [DataMember(Name="testSets")]
        public List<TestSet> TestSets { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            var sb = new StringBuilder();
            sb.Append("class Actor {\n");
            sb.Append("  Id: ").Append(Id).Append("\n");
            sb.Append("  Permissions: ").Append(Permissions).Append("\n");
            sb.Append("  Roles: ").Append(Roles).Append("\n");
            sb.Append("  TestSets: ").Append(TestSets).Append("\n");
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
            return Equals((Actor)obj);
        }

        /// <summary>
        /// Returns true if Actor instances are equal
        /// </summary>
        /// <param name="other">Instance of Actor to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(Actor other)
        {

            if (ReferenceEquals(null, other)) return false;
            if (ReferenceEquals(this, other)) return true;

            return 
                (
                    this.Id == other.Id ||
                    this.Id != null &&
                    this.Id.Equals(other.Id)
                ) && 
                (
                    this.Permissions == other.Permissions ||
                    this.Permissions != null &&
                    this.Permissions.SequenceEqual(other.Permissions)
                ) && 
                (
                    this.Roles == other.Roles ||
                    this.Roles != null &&
                    this.Roles.SequenceEqual(other.Roles)
                ) && 
                (
                    this.TestSets == other.TestSets ||
                    this.TestSets != null &&
                    this.TestSets.SequenceEqual(other.TestSets)
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
                    if (this.Id != null)
                    hash = hash * 59 + this.Id.GetHashCode();
                    if (this.Permissions != null)
                    hash = hash * 59 + this.Permissions.GetHashCode();
                    if (this.Roles != null)
                    hash = hash * 59 + this.Roles.GetHashCode();
                    if (this.TestSets != null)
                    hash = hash * 59 + this.TestSets.GetHashCode();
                return hash;
            }
        }

        #region Operators

        public static bool operator ==(Actor left, Actor right)
        {
            return Equals(left, right);
        }

        public static bool operator !=(Actor left, Actor right)
        {
            return !Equals(left, right);
        }

        #endregion Operators

    }
}
