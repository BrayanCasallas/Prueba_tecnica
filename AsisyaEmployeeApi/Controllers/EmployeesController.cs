using AsisyaEmployeeApi.Models;
using AsisyaEmployeeApi.Services;
using Microsoft.AspNetCore.Mvc;

namespace AsisyaEmployeeApi.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class EmployeesController : ControllerBase
    {
        private readonly EmployeesService _service;

        public EmployeesController(EmployeesService service)
        {
            _service = service;
        }

        // GET api/employees
        [HttpGet]
        public async Task<ActionResult> GetEmployees()
        {
            var employees = await _service.GetAllAsync();
            return Ok(employees);
        }

        // GET api/employees/5
        [HttpGet("{id}")]
        public async Task<ActionResult> GetEmployee(int id)
        {
            var employee = await _service.GetByIdAsync(id);

            if (employee == null)
                return NotFound();

            return Ok(employee);
        }

        // POST api/employees
        [HttpPost]
        public async Task<ActionResult> Post(Employee employee)
        {
            var created = await _service.CreateAsync(employee);

            return CreatedAtAction(nameof(GetEmployee), new { id = created.Id }, created);
        }

        // PUT api/employees/5
        [HttpPut("{id}")]
        public async Task<ActionResult> Put(int id, Employee employee)
        {
            if (id != employee.Id)
                return BadRequest();

            await _service.UpdateAsync(employee);
            return Ok();
        }

        // DELETE api/employees/5
        [HttpDelete("{id}")]
        public async Task<ActionResult> Delete(int id)
        {
            var deleted = await _service.DeleteAsync(id);

            if (!deleted)
                return NotFound();

            return Ok();
        }
    }
}
