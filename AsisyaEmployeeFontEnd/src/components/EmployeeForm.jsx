import { useState } from "react";
import { createEmployee } from "../api/employeesApi";

// Formulario para crear un empleado usando DaisyUI + Tailwind
export default function EmployeeForm({ onCreated }) {
  const [form, setForm] = useState({ name: "", position: "", salary: "" });
  const [error, setError] = useState("");

  const showError = (msg) => {
    setError(msg);
    setTimeout(() => setError(""), 1500);
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
    <div className="max-w-md mx-auto p-4 rounded-lg shadow-md bg-base-200">
      <h2 className="text-xl font-bold text-center mb-4">
        Agregar nuevo empleado
      </h2>

      {/* Mensaje de error */}
      {error && (
        <div className="alert alert-error text-white font-medium mb-3 py-2">
          {error}
        </div>
      )}

      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        {/* Nombre */}
        <label className="form-control w-full">
          <span className="label-text font-medium">Nombre</span>
          <input
            type="text"
            placeholder="Ej: Juan Pérez"
            className="input input-bordered w-full"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />
        </label>

        {/* Cargo */}
        <label className="form-control w-full">
          <span className="label-text font-medium">Cargo</span>
          <input
            type="text"
            placeholder="Ej: Administrador"
            className="input input-bordered w-full"
            value={form.position}
            onChange={(e) => setForm({ ...form, position: e.target.value })}
          />
        </label>

        {/* Salario */}
        <label className="form-control w-full">
          <span className="label-text font-medium">Salario (COP)</span>
          <input
            type="number"
            placeholder="Ej: 2500000"
            className="input input-bordered w-full"
            value={form.salary}
            onChange={(e) => setForm({ ...form, salary: e.target.value })}
          />
        </label>

        {/* Botón */}
        <button className="btn btn-primary mt-2" type="submit">
          Guardar empleado
        </button>
      </form>
    </div>
  );
}
