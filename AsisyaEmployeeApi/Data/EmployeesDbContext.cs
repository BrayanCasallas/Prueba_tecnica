using AsisyaEmployeeApi.Models;
using Microsoft.EntityFrameworkCore;

namespace AsisyaEmployeeApi.Data
{
    public class EmployeesDbContext : DbContext
    {
        public EmployeesDbContext(DbContextOptions<EmployeesDbContext> options) :
        base(options)
        {

        }
        public DbSet<Employee> Employees { get; set; }
    }
}