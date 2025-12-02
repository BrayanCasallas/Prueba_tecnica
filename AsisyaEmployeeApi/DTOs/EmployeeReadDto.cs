namespace AsisyaEmployeeApi.DTOs
{
    // DTO used to return employee data in API responses
    public class EmployeeReadDto
    {
        public int Id { get; set; } // Unique identifier of the employee
        public string Name { get; set; } = string.Empty; // Employee name
        public string Position { get; set; } = string.Empty; // Job title or role
        public decimal Salary { get; set; } // Salary value
        public decimal Document { get; set; }
    }
}
