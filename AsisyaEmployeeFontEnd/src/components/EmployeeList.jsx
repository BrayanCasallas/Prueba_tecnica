import { useEffect, useState } from "react";
import {
  getEmployees,
  deleteEmployee,
  updateEmployee,
} from "../api/employeesApi";

export default function EmployeeList() {
  const [employees, setEmployees] = useState([]);
  const [editingId, setEditingId] = useState(null);

  const [editData, setEditData] = useState({
    name: "",
    position: "",
    salary: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    position: "",
    salary: "",
  });

  useEffect(() => {
    loadEmployees();
  }, []);

  const loadEmployees = async () => {
    const data = await getEmployees();
    setEmployees(data);
  };

  const handleDelete = async (id) => {
    await deleteEmployee(id);
    loadEmployees();
  };

  const startEdit = (emp) => {
    setEditingId(emp.id);
    setEditData({
      name: emp.name,
      position: emp.position,
      salary: emp.salary,
    });

    setErrors({ name: "", position: "", salary: "" });
  };

  const validate = () => {
    let err = { name: "", position: "", salary: "" };
    let ok = true;

    if (!editData.name.trim())
      (err.name = "El nombre es obligatorio"), (ok = false);
    if (!editData.position.trim())
      (err.position = "El cargo es obligatorio"), (ok = false);
    if (Number(editData.salary) <= 0)
      (err.salary = "El salario debe ser mayor a 0"), (ok = false);

    setErrors(err);
    return ok;
  };

  const handleSave = async () => {
    if (!validate()) return;

    await updateEmployee({ id: editingId, ...editData });
    setEditingId(null);
    loadEmployees();
  };

  const handleCancel = () => setEditingId(null);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">📋 Lista de Empleados</h2>

      <div className="overflow-x-auto rounded-lg shadow">
        <table className="table table-zebra w-full">
          <thead className="bg-base-200">
            <tr>
              <th>Nombre</th>
              <th>Cargo</th>
              <th>Salario</th>
              <th className="text-center">Acciones</th>
            </tr>
          </thead>

          <tbody>
            {employees.map((e) => (
              <tr key={e.id}>
                {editingId === e.id ? (
                  <>
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

                    <td className="flex gap-2 justify-center">
                      <button
                        className="btn btn-success btn-sm"
                        onClick={handleSave}
                      >
                        💾 Guardar
                      </button>
                      <button
                        className="btn btn-warning btn-sm"
                        onClick={handleCancel}
                      >
                        ✖ Cancelar
                      </button>
                    </td>
                  </>
                ) : (
                  <>
                    <td>{e.name}</td>
                    <td>{e.position}</td>
                    <td className="font-semibold">
                      {new Intl.NumberFormat("es-CO", {
                        style: "currency",
                        currency: "COP",
                      }).format(e.salary)}
                    </td>

                    <td className="flex gap-2 justify-center">
                      <button
                        className="btn btn-info btn-sm"
                        onClick={() => startEdit(e)}
                      >
                        ✏ Editar
                      </button>
                      <button
                        className="btn btn-error btn-sm"
                        onClick={() => handleDelete(e.id)}
                      >
                        🗑 Eliminar
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
