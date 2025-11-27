import { useEffect, useState } from "react";
import { getEmployees, deleteEmployee } from "../api/employeesApi";

export default function EmployeeList() {
  const [employees, setEmployees] = useState([]);

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

  return (
    <div className="">
      <h2>Lista de Empleados</h2>

      {/* Encabezado */}
      <p>
        <strong>Nombre</strong> | <strong>Cargo</strong> |{" "}
        <strong>Salario</strong>
      </p>

      <ul>
        {employees.map((e) => (
          <li key={e.id}>
            {e.name} | {e.position} | {e.salary}
            <button onClick={() => handleDelete(e.id)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
