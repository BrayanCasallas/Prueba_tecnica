export interface EmployeeFormProps {
  onCreated: () => void;
  initialValues?: EmployeeInput;
}

export interface EmployeeInput {
  name: string;
  position: string;
  salary: number | string;
}

export interface Employee {
  id: number;
  name: string;
  position: string;
  salary: number;
}

export interface EmployeeFormErrors {
  name?: string;
  position?: string;
  salary?: string;
}
