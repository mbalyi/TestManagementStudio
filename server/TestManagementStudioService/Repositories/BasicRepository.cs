
using System.Data.SqlClient;

namespace TestManagementStudioService.Repositories
{
    public abstract class BasicRepository {

        private string connectionString;

        internal System.Data.IDbConnection Connection
        {
            get
            {
                return new SqlConnection(@"Data Source=TAMASPC\SQLEXPRESS;Initial Catalog=TestManagementStudio;Persist Security Info=True;User ID=test;Password=test");
            }
        }

    }
}
