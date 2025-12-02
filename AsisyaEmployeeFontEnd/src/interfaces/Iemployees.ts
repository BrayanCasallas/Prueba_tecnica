export interface EmployeeFormProps {
  onCreated: () => void;
  initialValues?: EmployeeInput;
}

export interface EmployeeInput {
  name: string;
  position: string;
  salary: number | string;
  document: string;
}

export interface Employee {
  id: number;
  name: string;
  position: string;
  salary: number;
  document: string;
}

export interface EmployeeFormErrors {
  name?: string;
  position?: string;
  salary?: string;
  document?: string;
}
