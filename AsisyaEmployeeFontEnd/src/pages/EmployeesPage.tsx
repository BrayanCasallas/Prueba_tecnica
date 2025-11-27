import EmployeeList from "../components/EmployeeList";
import EmployeeForm from "../components/EmployeeForm";

export default function EmployeesPage() {
  return (
    <div className="p-5 flex flex-col gap-5">
      <h1 className="text-4xl">Employee Management</h1>
      <EmployeeList />
      <EmployeeForm onCreated={() => window.location.reload()} />
    </div>
  );
}
