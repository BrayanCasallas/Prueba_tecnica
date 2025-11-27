namespace AsisyaEmployeeApi.DTOs
{
    // DTO used to update an existing employee
    public class EmployeeUpdateDto
    {
        public int Id { get; set; } // Employee identifier required for update
        public string Name { get; set; } = string.Empty; // Updated name value
        public string Position { get; set; } = string.Empty; // Updated job title or role
        public decimal Salary { get; set; } // Updated salary amount
    }
}
