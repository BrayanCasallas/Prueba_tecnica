# Asisya Employee Management System

---

## 📌 Overview

This repository contains a complete employee management system including
a backend REST API built with **ASP.NET Core 7 + Entity Framework Core +
SQLite**, and a frontend built with **React + Vite + TailwindCSS +
DaisyUI**.\
The system supports full CRUD operations for employees and provides a
clean architecture that is easy to understand and extend.

---

# 🚀 Backend -- AsisyaEmployeeApi

---

## 📂 Project Structure

    AsisyaEmployeeApi/
    │
    ├── Controllers/
    │   └── EmployeesController.cs       # API REST controller for CRUD operations
    │
    ├── DTOs/
    │   ├── EmployeeCreateDto.cs         # DTO for creating employees
    │   ├── EmployeeReadDto.cs           # DTO for returning employees
    │   └── EmployeeUpdateDto.cs         # DTO for updating employees
    │
    ├── Models/
    │   └── Employee.cs                  # EF Core model for the Employee entity
    │
    ├── Data/
    │   └── EmployeesDbContext.cs        # EF Core DbContext using SQLite
    │
    ├── Services/
    │   └── EmployeesService.cs          # Business logic & database operations
    │
    ├── Program.cs                        # API setup, CORS, Swagger, DI, routing
    │
    └── appsettings.json                  # SQLite connection string

---

## ▶️ Running the Backend

### 1. Navigate to the API folder:

```bash
cd AsisyaEmployeeApi
```

### 2. Restore dependencies:

```bash
dotnet restore
```

### 3. Apply EF Core migrations:

```bash
dotnet ef database update
```

### 4. Run the API:

```bash
dotnet run
```

### 5. API will be available at:

    http://localhost:7001

### 6. Swagger Documentation:

    https://localhost:7001/swagger

---

## 🌐 API Endpoints

HTTP Method Endpoint Description

---

GET /api/employees List all employees
GET /api/employees/{id} Get employee by ID
POST /api/employees Create new employee
PUT /api/employees/{id} Update existing employee
DELETE /api/employees/{id} Remove employee

---

# 🖥️ Frontend -- AsisyaEmployeeFrontEnd

---

## 📂 Project Structure

    AsisyaEmployeeFrontEnd/
    │
    ├── src/
    │   ├── api/
    │   │   └── employeesApi.js        # API connection to the backend
    │   │
    │   ├── assets/                    # Global images & icons
    │   │   ├── employee.png
    │   │   └── react.svg
    │   │
    │   ├── components/                # Reusable UI components
    │   │   ├── EmployeeForm.tsx       # Form to create employees
    │   │   └── EmployeeList.tsx       # Table to list, edit, delete employees
            interfaces/
    │   │   └── Iemployees.ts          # It contains interfaces for the components
    │   ├── pages/
    │   │   └── EmployeesPage.tsx      # Main employee management page
    │   │
    │   ├── App.tsx                    # Main application wrapper
    │   ├── main.tsx                   # Entry point for React
    │   └── index.css                  # Global styles
    │
    ├── index.html
    ├── package.json
    └── tailwind.config.js

---

## ▶️ Running the Frontend

### 1. Navigate to the frontend folder:

```bash
cd AsisyaEmployeeFrontEnd
```

### 2. Install dependencies:

```bash
npm install
```

### 3. Start development server:

```bash
npm run dev
```

### 4. Frontend will run at:

    http://localhost:7000

---

## 🎨 Technologies Used (Frontend)

- **React 18**
- **Vite**
- **TailwindCSS**
- **DaisyUI**
- **Fetch API for backend communication**

---

# 🔧 Full System Setup

---

## 1. Clone repository

```bash
git clone https://github.com/BrayanCasallas/Prueba_tecnica.git
cd Prueba_tecnica
```

---

## 2. Start API

```bash
cd AsisyaEmployeeApi
dotnet restore
dotnet ef database update
dotnet run
```

---

## 3. Start Frontend

```bash
cd AsisyaEmployeeFrontEnd
npm install
npm run dev
```

Frontend and backend should now be fully connected and working.

---

# 📘 Folder Structure (Global)

    Prueba_tecnica/
    │
    ├── AsisyaEmployeeApi/          # Backend API
    │   ├── Controllers/
    │   ├── Models/
    │   ├── DTOs/
    │   ├── Data/
    │   ├── Services/
    │   ├── Program.cs
    │   └── appsettings.json
    │
    └── AsisyaEmployeeFrontEnd/     # React Frontend
        ├── src/
        │   ├── api/
        │   ├── assets/
        │   ├── components/
        │   ├── pages/
        │   ├── App.jsx
        │   ├── main.jsx
        │   └── index.css
        ├── index.html
        ├── package.json
        └── tailwind.config.js

---

# 📜 Final Notes

- The architecture is fully modular and scalable.
- TailwindCSS + DaisyUI ensures rapid UI development.
- EF Core handles data access cleanly through services.
- Swagger is enabled for testing and documentation.
- CORS is already configured to allow frontend communication.

---

# 🏁 The system is ready to run and deploy.
