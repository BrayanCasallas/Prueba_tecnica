import { useState } from "react";
import { createEmployee } from "../api/employeesApi";

// Form to create a new employee using DaisyUI + Tailwind
export default function EmployeeForm({ onCreated }) {
  const [form, setForm] = useState({ name: "", position: "", salary: "" });
  const [error, setError] = useState("");

  // Show error message temporarily
  const showError = (msg) => {
    setError(msg);
    setTimeout(() => setError(""), 1500);
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.name.trim()) return showError("❗ Name is required");
    if (!form.position.trim()) return showError("❗ Position is required");
    if (form.salary === "" || Number(form.salary) <= 0)
      return showError("❗ Salary must be greater than 0");

    await createEmployee(form);
    setForm({ name: "", position: "", salary: "" });
    onCreated();
  };

  return (
    <div className="max-w-md mx-auto p-4 rounded-lg shadow-md bg-base-200">
      <h2 className="text-xl font-bold text-center mb-4">Add New Employee</h2>

      {/* Error message */}
      {error && (
        <div className="alert alert-error text-white font-medium mb-3 py-2">
          {error}
        </div>
      )}

      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        {/* Name */}
        <label className="form-control w-full">
          <span className="label-text font-medium">Name</span>
          <input
            type="text"
            placeholder="Ex: John Doe"
            className="input input-bordered w-full"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />
        </label>

        {/* Position */}
        <label className="form-control w-full">
          <span className="label-text font-medium">Position</span>
          <input
            type="text"
            placeholder="Ex: Administrator"
            className="input input-bordered w-full"
            value={form.position}
            onChange={(e) => setForm({ ...form, position: e.target.value })}
          />
        </label>

        {/* Salary */}
        <label className="form-control w-full">
          <span className="label-text font-medium">Salary (COP)</span>
          <input
            type="number"
            placeholder="Ex: 2500000"
            className="input input-bordered w-full"
            value={form.salary}
            onChange={(e) => setForm({ ...form, salary: e.target.value })}
          />
        </label>

        {/* Button */}
        <button className="btn btn-primary mt-2" type="submit">
          Save Employee
        </button>
      </form>
    </div>
  );
}
