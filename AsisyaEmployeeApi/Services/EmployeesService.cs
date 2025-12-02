using AsisyaEmployeeApi.Data;
using AsisyaEmployeeApi.DTOs;
using AsisyaEmployeeApi.Models;
using Microsoft.EntityFrameworkCore;

namespace AsisyaEmployeeApi.Services
{
    // Service layer responsible for employee-related business logic and database operations
    public class EmployeesService
    {
        private readonly EmployeesDbContext _context; // Database context injected through constructor

        public EmployeesService(EmployeesDbContext context)
        {
            _context = context; // Stores injected DbContext instance
        }

        // Retrieves all employees and maps them to EmployeeReadDto
        public async Task<List<EmployeeReadDto>> GetAllAsync()
        {
            try
            {
                return await _context.Employees
                    .Select(e => new EmployeeReadDto
                    {
                        Id = e.Id,
                        Name = e.Name,
                        Position = e.Position,
                        Salary = e.Salary,
                        Document = e.Document
                    })
                    .ToListAsync();
            }
            catch (Exception)
            {
                return new List<EmployeeReadDto>(); // Fallback in case of database failure
            }
        }

        // Retrieves a single employee by its ID and returns a mapped DTO
        public async Task<EmployeeReadDto?> GetByIdAsync(int id)
        {
            try
            {
                var employee = await _context.Employees.FindAsync(id);
                if (employee == null) return null;

                return new EmployeeReadDto
                {
                    Id = employee.Id,
                    Name = employee.Name,
                    Position = employee.Position,
                    Salary = employee.Salary,   // ✔️ Error corregido
                    Document = employee.Document
                };
            }
            catch (Exception)
            {
                return null;
            }
        }

        // Creates a new employee record and returns the created data as DTO
        public async Task<EmployeeReadDto> CreateAsync(EmployeeCreateDto dto)
        {
            try
            {
                var employee = new Employee
                {
                    Name = dto.Name,
                    Position = dto.Position,
                    Salary = dto.Salary,
                    Document = dto.Document
                };

                _context.Employees.Add(employee);
                await _context.SaveChangesAsync();

                return new EmployeeReadDto
                {
                    Id = employee.Id,
                    Name = employee.Name,
                    Position = employee.Position,
                    //Salary = employee.Salary,
                    Document = employee.Document
                };
            }
            catch (Exception ex)
            {
                throw new Exception("Error creating employee.", ex);
            }
        }

        // Updates an existing employee
        public async Task<bool> UpdateAsync(EmployeeUpdateDto dto)
        {
            try
            {
                var employee = await _context.Employees.FindAsync(dto.Id);
                if (employee == null) return false;

                employee.Name = dto.Name;
                employee.Position = dto.Position;
                employee.Salary = dto.Salary;
                employee.Document = dto.Document;

                await _context.SaveChangesAsync();
                return true;
            }
            catch (Exception)
            {
                return false;
            }
        }

        // Deletes an employee by ID
        public async Task<bool> DeleteAsync(int id)
        {
            try
            {
                var employee = await _context.Employees.FindAsync(id);
                if (employee == null) return false;

                _context.Employees.Remove(employee);
                await _context.SaveChangesAsync();
                return true;
            }
            catch (Exception)
            {
                return false;
            }
        }
    }
}
