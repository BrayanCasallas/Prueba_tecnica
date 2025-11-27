namespace AsisyaEmployeeApi.DTOs
{
    // DTO used for creating a new employee
    public class EmployeeCreateDto
    {
        public string Name { get; set; } = string.Empty; // Employee full name
        public string Position { get; set; } = string.Empty; // Job title or role
        public decimal Salary { get; set; } // Salary amount for the employee
    }
}
