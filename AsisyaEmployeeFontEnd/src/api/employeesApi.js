import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:7001/api/employees",
  timeout: 3000,
});

// Get all employees
export const getEmployees = () => api.get("/").then((res) => res.data);

// Get employee by ID
export const getEmployeeById = (id) =>
  api.get(`/${id}`).then((res) => res.data);

// Create new employee
export const createEmployee = (employee) =>
  api.post("/", employee).then((res) => res.data);

// Update employee
export const updateEmployee = (employee) =>
  api.put(`/${employee.id}`, employee).then((res) => res.data);

// Delete employee
export const deleteEmployee = (id) => api.delete(`/${id}`);
