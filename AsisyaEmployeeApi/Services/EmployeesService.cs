using AsisyaEmployeeApi.Data;
using AsisyaEmployeeApi.DTOs;
using AsisyaEmployeeApi.Models;
using Microsoft.EntityFrameworkCore;

namespace AsisyaEmployeeApi.Services
{
    public class EmployeesService
    {
        private readonly EmployeesDbContext _context;

        public EmployeesService(EmployeesDbContext context)
        {
            _context = context;
        }

        public async Task<List<EmployeeReadDto>> GetAllAsync()
        {
            return await _context.Employees
                .Select(e => new EmployeeReadDto
                {
                    Id = e.Id,
                    Name = e.Name,
                    Position = e.Position
                })
                .ToListAsync();
        }

        public async Task<EmployeeReadDto?> GetByIdAsync(int id)
        {
            var employee = await _context.Employees.FindAsync(id);
            if (employee == null) return null;

            return new EmployeeReadDto
            {
                Id = employee.Id,
                Name = employee.Name,
                Position = employee.Position
            };
        }

        public async Task<EmployeeReadDto> CreateAsync(EmployeeCreateDto dto)
        {
            var employee = new Employee
            {
                Name = dto.Name,
                Position = dto.Position,
                Salary = dto.Salary
            };

            _context.Employees.Add(employee);
            await _context.SaveChangesAsync();

            return new EmployeeReadDto
            {
                Id = employee.Id,
                Name = employee.Name,
                Position = employee.Position
            };
        }

        public async Task<bool> UpdateAsync(EmployeeUpdateDto dto)
        {
            var employee = await _context.Employees.FindAsync(dto.Id);
            if (employee == null) return false;

            employee.Name = dto.Name;
            employee.Position = dto.Position;
            employee.Salary = dto.Salary;

            await _context.SaveChangesAsync();
            return true;
        }

        public async Task<bool> DeleteAsync(int id)
        {
            var employee = await _context.Employees.FindAsync(id);

            if (employee == null)
                return false;

            _context.Employees.Remove(employee);
            await _context.SaveChangesAsync();
            return true;
        }
    }
}
