const API = process.env.REACT_APP_API_URL + "/employees";

export const getEmployees = async () => {
  const res = await fetch(API);
  return res.json();
};

export const getEmployeeById = async (id) => {
  const res = await fetch(`${API}/${id}`);
  return res.json();
};

export const createEmployee = async (employee) => {
  const res = await fetch(API, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(employee),
  });
  return res.json();
};

export const updateEmployee = async (employee) => {
  await fetch(`${API}/${employee.id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(employee),
  });
};

export const deleteEmployee = async (id) => {
  await fetch(`${API}/${id}`, { method: "DELETE" });
};
