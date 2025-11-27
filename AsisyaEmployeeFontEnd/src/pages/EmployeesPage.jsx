import EmployeeList from "../components/EmployeeList";
import EmployeeForm from "../components/EmployeeForm";

export default function EmployeesPage() {
  return (
    <div>
      <EmployeeList />
      <h1>Gestión de Empleados</h1>
      <EmployeeForm onCreated={() => window.location.reload()} />
    </div>
  );
}
