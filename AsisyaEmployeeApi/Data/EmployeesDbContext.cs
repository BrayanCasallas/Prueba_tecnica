using AsisyaEmployeeApi.Models;
using Microsoft.EntityFrameworkCore;

namespace AsisyaEmployeeApi.Data
{
    public class EmployeesDbContext : DbContext
    {
        // Constructor receives DbContext options and passes them to the base class
        public EmployeesDbContext(DbContextOptions<EmployeesDbContext> options) :
        base(options)
        {

        }

        // Represents the Employees table in the database
        public DbSet<Employee> Employees { get; set; }
    }
}
