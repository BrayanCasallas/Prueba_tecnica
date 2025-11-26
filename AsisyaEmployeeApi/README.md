# Asisya Employee API

API REST creada con **ASP.NET Core 8** y **Entity Framework Core**,
utilizando una base de datos **SQLite**. Permite realizar operaciones
CRUD sobre empleados.

## 🚀 Cómo correr el proyecto

### 1. Requisitos

- .NET 8 SDK instalado
- Visual Studio, VS Code o Rider
- SQLite (opcional)

### 2. Restaurar dependencias

    dotnet restore

### 3. Crear BD y aplicar migraciones

Si no existen:

    dotnet ef migrations add InitialCreate

Aplicarlas:

    dotnet ef database update

### 4. Ejecutar

    dotnet run

Abrir Swagger: http://localhost:5209/swagger

## 📁 Estructura del proyecto

    AsisyaEmployeeApi/
    │
    ├── Controllers/
    │   └── EmployeesController.cs
    │
    ├── Services/
    │   └── EmployeesService.cs
    │
    ├── Models/
    │   └── Employee.cs
    │
    ├── Data/
    │   └── EmployeesDbContext.cs
    │
    ├── appsettings.json
    └── Program.cs

## 🔧 Tecnologías utilizadas

- ASP.NET Core 8
- Entity Framework Core
- SQLite
- Swagger

## 📬 Endpoints

GET /api/employees\
GET /api/employees/{id}\
POST /api/employees\
PUT /api/employees/{id}\
DELETE /api/employees/{id}
