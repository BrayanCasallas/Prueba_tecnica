import { useState, ChangeEvent, FormEvent } from "react";
import { createEmployee } from "../api/employeesApi";

import { EmployeeFormProps, EmployeeInput } from "../interfaces/Iemployees";

export default function EmployeeForm({ onCreated }: EmployeeFormProps) {
  const [form, setForm] = useState<EmployeeInput>({
    name: "",
    position: "",
    salary: "",
  });

  const [error, setError] = useState<string>("");

  // Show temporary error message
  const showError = (msg: string) => {
    setError(msg);
    setTimeout(() => setError(""), 1500);
  };

  // Form submit handling with typings
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.name.trim()) return showError("❗ Name is required");
    if (!form.position.trim()) return showError("❗ Position is required");
    if (form.salary === "" || Number(form.salary) <= 0)
      return showError("❗ Salary must be greater than 0");

    await createEmployee({
      name: form.name,
      position: form.position,
      salary: Number(form.salary),
    });

    setForm({ name: "", position: "", salary: "" });
    onCreated();
  };

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement>,
    field: keyof EmployeeInput
  ) => {
    setForm({ ...form, [field]: e.target.value });
  };

  return (
    <div className="max-w-md mx-auto p-4 rounded-lg shadow-md bg-base-200">
      <h2 className="text-xl font-bold text-center mb-4">Add New Employee</h2>

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
            onChange={(e) => handleInputChange(e, "name")}
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
            onChange={(e) => handleInputChange(e, "position")}
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
            onChange={(e) => handleInputChange(e, "salary")}
          />
        </label>

        <button className="btn btn-primary mt-2" type="submit">
          Save Employee
        </button>
      </form>
    </div>
  );
}
