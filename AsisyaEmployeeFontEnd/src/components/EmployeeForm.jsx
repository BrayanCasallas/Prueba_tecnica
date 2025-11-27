import { useState } from "react";
import { createEmployee } from "../api/employeesApi";

export default function EmployeeForm({ onCreated }) {
  const [form, setForm] = useState({ name: "", position: "", salary: "" });
  const [error, setError] = useState(""); // <-- Mensaje de error

  const handleSubmit = async (e) => {
    e.preventDefault();

    // VALIDACIONES ✔
    if (!form.name.trim()) {
      setError("❗ El nombre es obligatorio");
      return;
    }
    if (!form.position.trim()) {
      setError("❗ El cargo es obligatorio");
      return;
    }
    if (form.salary === "" || Number(form.salary) <= 0) {
      setError("❗ El salario debe ser mayor a 0");
      return;
    }

    setError(""); // limpia mensaje

    await createEmployee(form);
    setForm({ name: "", position: "", salary: "" });
    onCreated();
  };

  return (
    <form onSubmit={handleSubmit}>
      {error && <p className="text-red-500">{error}</p>}
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
      <button type="submit">Guardar</button>
    </form>
  );
}
