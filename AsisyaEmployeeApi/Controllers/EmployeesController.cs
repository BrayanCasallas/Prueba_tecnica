using AsisyaEmployeeApi.DTOs;
using AsisyaEmployeeApi.Services;
using Microsoft.AspNetCore.Mvc;

namespace AsisyaEmployeeApi.Controllers
{
    [ApiController] // Indicates that this class defines an API controller
    [Route("api/[controller]")] // Route pattern for the API endpoints (Employees)
    public class EmployeesController : ControllerBase
    {
        private readonly EmployeesService _service; // Service dependency to access business logic

        public EmployeesController(EmployeesService service)
        {
            _service = service; // Dependency injection of EmployeesService
        }

        // GET: api/Employees
        // Retrieves a list of all employees
        [HttpGet]
        public async Task<ActionResult> GetEmployees()
        {
            var employees = await _service.GetAllAsync(); // Calls service to get all employees
            return Ok(employees); // Returns HTTP 200 with the list
        }

        // GET: api/Employees/{id}
        // Retrieves a single employee by ID
        [HttpGet("{id}")]
        public async Task<ActionResult> GetEmployee(int id)
        {
            var employee = await _service.GetByIdAsync(id); // Fetch employee from service

            if (employee == null)
                return NotFound(); // Returns 404 if employee does not exist

            return Ok(employee); // Returns employee found
        }

        // POST: api/Employees
        // Creates a new employee
        [HttpPost]
        public async Task<ActionResult> Post(EmployeeCreateDto dto)
        {
            var created = await _service.CreateAsync(dto); // Calls service to create employee
            return CreatedAtAction(nameof(GetEmployee), new { id = created.Id }, created);
            // Returns HTTP 201 with location and employee data
        }


        // PUT: api/Employees/{id}
        // Updates an existing employee
        [HttpPut("{id}")]
        public async Task<ActionResult> Put(int id, EmployeeUpdateDto dto)
        {
            if (id != dto.Id)
                return BadRequest(); // Returns 400 if URL ID doesn't match DTO ID

            var updated = await _service.UpdateAsync(dto); // Calls service to update employee

            if (!updated)
                return NotFound(); // Returns 404 if employee not found

            return Ok(); // Returns 200 on successful update
        }

        // DELETE: api/Employees/{id}
        // Deletes an employee by ID
        [HttpDelete("{id}")]
        public async Task<ActionResult> Delete(int id)
        {
            var deleted = await _service.DeleteAsync(id); // Calls service to delete employee

            if (!deleted)
                return NotFound(); // Returns 404 if employee doesn't exist

            return Ok(); // Returns 200 if deletion is successful
        }
    }
}
