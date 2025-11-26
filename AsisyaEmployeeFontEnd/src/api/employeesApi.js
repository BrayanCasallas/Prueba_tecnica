// src/api/employeesApi.js
const BASE_URL = import.meta.env.VITE_API_URL;

const API_URL = `${BASE_URL}/employees`;

export const getEmployees = async () => {
  const res = await fetch(API_URL);
  return res.json();
};

export const getEmployeeById = async (id) => {
  const res = await fetch(`${API_URL}/${id}`);
  return res.json();
};

export const createEmployee = async (employee) => {
  const res = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(employee),
  });
  return res.json();
};

export const updateEmployee = async (employee) => {
  await fetch(`${API_URL}/${employee.id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(employee),
  });
};

export const deleteEmployee = async (id) => {
  await fetch(`${API_URL}/${id}`, { method: "DELETE" });
};
