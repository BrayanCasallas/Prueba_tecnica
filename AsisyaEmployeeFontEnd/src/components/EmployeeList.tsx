import { useEffect, useState } from "react";
import {
  getEmployees,
  deleteEmployee,
  updateEmployee,
} from "../api/employeesApi";

// ---------- Types ----------
interface Employee {
  id: number;
  name: string;
  position: string;
  salary: number;
}

interface EditForm {
  name: string;
  position: string;
  salary: string | number;
}

interface ErrorForm {
  name: string;
  position: string;
  salary: string;
}

// ---------- Component ----------
export default function EmployeeList() {
  // Employees array
  const [employees, setEmployees] = useState<Employee[]>([]);

  // Employee currently being edited
  const [editingId, setEditingId] = useState<number | null>(null);

  // Editing form values
  const [editData, setEditData] = useState<EditForm>({
    name: "",
    position: "",
    salary: "",
  });

  // Validation errors
  const [errors, setErrors] = useState<ErrorForm>({
    name: "",
    position: "",
    salary: "",
  });

  // Load employees first time
  useEffect(() => {
    loadEmployees();
  }, []);

  // 🔹 Fetch employee list
  const loadEmployees = async () => {
    const data = await getEmployees();
    setEmployees(data);
  };

  // 🔹 Delete employee
  const handleDelete = async (id: number) => {
    await deleteEmployee(id);
    loadEmployees();
  };

  // 🔹 Enter edit mode
  const startEdit = (emp: Employee) => {
    setEditingId(emp.id);
    setEditData({
      name: emp.name,
      position: emp.position,
      salary: emp.salary,
    });
    setErrors({ name: "", position: "", salary: "" });
  };

  // 🔹 Validate fields
  const validate = () => {
    let err: ErrorForm = { name: "", position: "", salary: "" };
    let ok = true;

    if (!editData.name.trim()) (err.name = "Name is required"), (ok = false);
    if (!editData.position.trim())
      (err.position = "Position is required"), (ok = false);
    if (Number(editData.salary) <= 0)
      (err.salary = "Salary must be greater than 0"), (ok = false);

    setErrors(err);
    return ok;
  };

  // 🔹 Save edited employee
  const handleSave = async () => {
    if (!validate()) return;
    await updateEmployee({ id: editingId!, ...editData });
    setEditingId(null);
    loadEmployees();
  };

  // 🔹 Cancel edit mode
  const handleCancel = () => setEditingId(null);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">📋 Employee List</h2>

      <div className="overflow-x-auto rounded-lg shadow">
        <table className="table table-zebra w-full">
          <thead className="bg-base-200">
            <tr>
              <th>Name</th>
              <th>Position</th>
              <th>Salary</th>
              <th className="text-center">Actions</th>
            </tr>
          </thead>

          <tbody>
            {employees.map((e) => (
              <tr key={e.id}>
                {editingId === e.id ? (
                  <>
                    {/* Name input */}
                    <td>
                      <input
                        className="input input-bordered w-full"
                        value={editData.name}
                        onChange={(ev) =>
                          setEditData({ ...editData, name: ev.target.value })
                        }
                      />
                      {errors.name && (
                        <p className="text-red-500 text-xs font-semibold">
                          {errors.name}
                        </p>
                      )}
                    </td>

                    {/* Position input */}
                    <td>
                      <input
                        className="input input-bordered w-full"
                        value={editData.position}
                        onChange={(ev) =>
                          setEditData({
                            ...editData,
                            position: ev.target.value,
                          })
                        }
                      />
                      {errors.position && (
                        <p className="text-red-500 text-xs font-semibold">
                          {errors.position}
                        </p>
                      )}
                    </td>

                    {/* Salary input */}
                    <td>
                      <input
                        type="number"
                        className="input input-bordered w-full"
                        value={editData.salary}
                        onChange={(ev) =>
                          setEditData({ ...editData, salary: ev.target.value })
                        }
                      />
                      {errors.salary && (
                        <p className="text-red-500 text-xs font-semibold">
                          {errors.salary}
                        </p>
                      )}
                    </td>

                    {/* Save + Cancel */}
                    <td className="flex gap-2 justify-center">
                      <button
                        className="btn btn-success btn-sm"
                        onClick={handleSave}
                      >
                        💾 Save
                      </button>
                      <button
                        className="btn btn-warning btn-sm"
                        onClick={handleCancel}
                      >
                        ✖ Cancel
                      </button>
                    </td>
                  </>
                ) : (
                  <>
                    {/* Normal view */}
                    <td>{e.name}</td>
                    <td>{e.position}</td>
                    <td className="font-semibold">
                      {new Intl.NumberFormat("en-US", {
                        style: "currency",
                        currency: "USD",
                      }).format(e.salary)}
                    </td>

                    <td className="flex gap-2 justify-center">
                      <button
                        className="btn btn-info btn-sm"
                        onClick={() => startEdit(e)}
                      >
                        ✏ Edit
                      </button>
                      <button
                        className="btn btn-error btn-sm"
                        onClick={() => handleDelete(e.id)}
                      >
                        🗑 Delete
                      </button>
                    </td>
                  </>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
