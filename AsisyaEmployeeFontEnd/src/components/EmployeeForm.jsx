// src/components/EmployeeForm.jsx
import { useState } from "react";
import { createEmployee } from "../api/employeesApi";

export default function EmployeeForm({ onCreated }) {
  const [form, setForm] = useState({ name: "", position: "", salary: 0 });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createEmployee(form);
    setForm({ name: "", position: "", salary: 0 });
    onCreated();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Nombre"
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
      />
      <input
        placeholder="Cargo"
        value={form.position}
        onChange={(e) => setForm({ ...form, position: e.target.value })}
      />
      <input
        type="number"
        placeholder="Salario"
        value={form.salary}
        onChange={(e) => setForm({ ...form, salary: e.target.value })}
      />
      <button>Guardar</button>
    </form>
  );
}
