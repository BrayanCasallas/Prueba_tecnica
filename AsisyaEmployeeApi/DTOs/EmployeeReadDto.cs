

namespace AsisyaEmployeeApi.DTOs
{
    public class EmployeeReadDto
    {
        public int Id { get; set; }
        public string Name { get; set; } = string.Empty;
        public string Position { get; set; } = string.Empty;
        public decimal Salary { get; set; }

    }
}
