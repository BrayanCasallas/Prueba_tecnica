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
                        Salary = e.Salary
                    })
                    .ToListAsync(); // Async enumeration from the database
            }
            catch
            {
                return new List<EmployeeReadDto>(); // Fallback in case of database failure
            }
        }

        // Retrieves a single employee by its ID and returns a mapped DTO
        public async Task<EmployeeReadDto?> GetByIdAsync(int id)
        {
            try
            {
                var employee = await _context.Employees.FindAsync(id); // Searches by primary key
                if (employee == null) return null; // Returns null if employee not found

                return new EmployeeReadDto
                {
                    Id = employee.Id,
                    Name = employee.Name,
                    Position = employee.Position
                    // Salary not included here (can be added if necessary)
                };
            }
            catch
            {
                return null; // Fallback if exception occurs
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
                    Salary = dto.Salary
                };

                _context.Employees.Add(employee); // Adds new employee to tracking
                await _context.SaveChangesAsync(); // Persists data to database

                return new EmployeeReadDto
                {
                    Id = employee.Id,
                    Name = employee.Name,
                    Position = employee.Position,
                    Salary = employee.Salary
                };
            }
            catch
            {
                throw new Exception("Error creating employee."); // Error handled by caller
            }
        }

        // Updates an existing employee, returns true if updated successfully
        public async Task<bool> UpdateAsync(EmployeeUpdateDto dto)
        {
            try
            {
                var employee = await _context.Employees.FindAsync(dto.Id); // Find record by ID
                if (employee == null) return false; // Employee not found

                employee.Name = dto.Name;
                employee.Position = dto.Position;
                employee.Salary = dto.Salary;

                await _context.SaveChangesAsync(); // Saves modifications
                return true;
            }
            catch
            {
                return false; // Update failed
            }
        }

        // Deletes an employee by ID, returns true if removed successfully
        public async Task<bool> DeleteAsync(int id)
        {
            try
            {
                var employee = await _context.Employees.FindAsync(id); // Locate employee
                if (employee == null) return false; // If it does not exist -> false

                _context.Employees.Remove(employee); // Deletes record
                await _context.SaveChangesAsync(); // Apply to database
                return true;
            }
            catch
            {
                return false; // Failed delete attempt
            }
        }
    }
}
