using AsisyaEmployeeApi.DTOs;
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

        [HttpGet]
        public async Task<ActionResult> GetEmployees()
        {
            var employees = await _service.GetAllAsync();
            return Ok(employees);
        }

        [HttpGet("{id}")]
        public async Task<ActionResult> GetEmployee(int id)
        {
            var employee = await _service.GetByIdAsync(id);

            if (employee == null)
                return NotFound();

            return Ok(employee);
        }

        [HttpPost]
        public async Task<ActionResult> Post(EmployeeCreateDto dto)
        {
            var created = await _service.CreateAsync(dto);

            return CreatedAtAction(nameof(GetEmployee), new { id = created.Id }, created);
        }

        [HttpPut("{id}")]
        public async Task<ActionResult> Put(int id, EmployeeUpdateDto dto)
        {
            if (id != dto.Id)
                return BadRequest();

            var updated = await _service.UpdateAsync(dto);

            if (!updated)
                return NotFound();

            return Ok();
        }

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
