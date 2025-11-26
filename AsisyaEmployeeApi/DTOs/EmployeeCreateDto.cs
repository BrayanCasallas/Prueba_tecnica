
namespace AsisyaEmployeeApi.DTOs
{
    public class EmployeeCreateDto
    {
        public string Name { get; set; } = string.Empty;
        public string Position { get; set; } = string.Empty;
        public decimal Salary { get; set; }
    }
}
