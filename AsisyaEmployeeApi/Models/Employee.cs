namespace AsisyaEmployeeApi.Models
{
    // Entity model representing the structure of the Employees table
    public class Employee
    {
        public int Id { get; set; } // Primary key of the employee record
        public string Name { get; set; } = string.Empty; // Name of the employee
        public string Position { get; set; } = string.Empty; // Employee's job title or role
        public decimal Salary { get; set; } // Salary assigned to the employee
    }
}
