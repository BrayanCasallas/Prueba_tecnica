import { useState } from "react";
import { createEmployee } from "../api/employeesApi";

export default function EmployeeForm({ onCreated }) {
  const [form, setForm] = useState({ name: "", position: "", salary: "" });
  const [error, setError] = useState("");

  const showError = (msg) => {
    setError(msg);

    setTimeout(() => {
      setError("");
    }, 1500);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.name.trim()) return showError("❗ El nombre es obligatorio");
    if (!form.position.trim()) return showError("❗ El cargo es obligatorio");
    if (form.salary === "" || Number(form.salary) <= 0)
      return showError("❗ El salario debe ser mayor a 0");

    await createEmployee(form);
    setForm({ name: "", position: "", salary: "" });
    onCreated();
  };

  return (
    <form onSubmit={handleSubmit}>
      {error && <p className="text-red-500 font-semibold">{error}</p>}

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
