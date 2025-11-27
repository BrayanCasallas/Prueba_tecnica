# Sistema de Gestión de Empleados Asisya

---

## 📌 Resumen

Este repositorio contiene un sistema completo de gestión de empleados que incluye una API REST backend desarrollada con **ASP.NET Core 7 + Entity Framework Core + SQLite** y un frontend desarrollado con **React + Vite + TailwindCSS + DaisyUI**.
El sistema admite operaciones CRUD completas para empleados y ofrece una arquitectura limpia, fácil de entender y ampliar.

---

# 🚀 Backend -- AsisyaEmployeeApi

---

## 📂 Estructura del proyecto

AsisyaEmployeeApi/
│
├── Controllers/
│ └── EmployeesController.cs # Controlador REST de API para operaciones CRUD
│
├── DTOs/
│ ├── EmployeeCreateDto.cs # DTO para crear empleados
│ ├── EmployeeReadDto.cs # DTO para empleados que regresan
│ └── EmployeeUpdateDto.cs # DTO para actualizar empleados
│
├── Models/
│ └── Employee.cs # Modelo de EF Core para la entidad Empleado
│
├── Data/
│ └── EmployeesDbContext.cs # EF Core DbContext con SQLite
│
├── Services/
│ └── EmployeesService.cs # Lógica de negocio y operaciones de base de datos
│
├── Program.cs # Configuración de API, CORS, Swagger, DI, enrutamiento
│
└── appsettings.json # Cadena de conexión de SQLite

---

## ▶️ Ejecución del backend

### 1. Acceda a la carpeta de la API:

```bash
cd AsisyaEmployeeApi
```

### 2. Restaurar Dependencias:

```bash
dotnet restore
```

### 3. Aplicar migraciones de EF Core:

```bash
dotnet ef database update
```

### 4. Ejecutar la API:

```bash
dotnet run
```

### 5. La API estará disponible en:

https://localhost:7046
http://localhost:5046

### 6. Documentación de Swagger:

https://localhost:7046/swagger

---

## 🌐 Puntos finales de la API

Descripción del punto final del método HTTP

---

GET /api/employees Listar todos los empleados
GET /api/employees/{id} Obtener empleado por ID
POST /api/employees Crear nuevo empleado
PUT /api/employees/{id} Actualizar empleado existente
ELIMINAR /api/employees/{id} Eliminar empleado

---

# 🖥️ Frontend -- AsisyaEmployeeFrontEnd

---

## 📂 Estructura del proyecto

AsisyaEmployeeFrontEnd/
│
├── src/
│ ├── api/
│ │ └── employApi.js # Conexión de la API al backend
│ │
│ ├── assets/ # Imágenes e íconos globales
│ │ ├── employee.png
│ │ └── react.svg
│ │
│ ├── components/ # Componentes de interfaz de usuario reutilizables
│ │ ├── EmployeeForm.jsx # Formulario para crear empleados
│ │ └── EmployeeList.jsx # Tabla para listar, editar y eliminar empleados
│ │
│ ├── pages/
│ │ └── EmployeesPage.jsx # Página principal de gestión de empleados
│ │
│ ├── App.jsx # Envoltorio principal de la aplicación
│ ├── main.jsx # Punto de entrada para React
│ └── index.css # Estilos globales
│
├── index.html
├── package.json
└── tailwind.config.js

---

## ▶️ Ejecutando el frontend

### 1. Navega a la carpeta del frontend:

```bash
cd AsisyaEmployeeFrontEnd
```

### 2. Instalar dependencias:

```bash
npm install
```

### 3. Iniciar el servidor de desarrollo:

```bash
npm run dev
```

### 4. El frontend se ejecutará en:

http://localhost:5173

---

## 🎨 Tecnologías utilizadas (Frontend)

- **React 18**
- **Vite**
- **TailwindCSS**
- **DaisyUI**
- **Obtener API para el backend Comunicación**

---

# 🔧 Configuración completa del sistema

---

## 1. Clonar repositorio

```bash
git clone https://github.com/BrayanCasallas/Prueba_tecnica.git
cd Prueba_tecnica
```

---

## 2. Iniciar API

```bash
cd AsisyaEmployeeApi
dotnet restore
dotnet ef database update
dotnet run
```

---

## 3. Iniciar frontend

```bash
cd AsisyaEmployeeFrontEnd
npm install
npm run dev
```

El frontend y el backend deberían estar ahora completamente conectados y funcionando.

---

# 📘 Estructura de carpetas (Global)

Prueba_tecnica/
│
├── AsisyaEmployeeApi/ # API de backend
│ ├── Controladores/
│ ├── Modelos/
│ ├── DTOs/
│ ├── Datos/
│ ├── Servicios/
│ ├── Program.cs
│ └── appsettings.json
│
└── AsisyaEmployeeFrontEnd/ # Frontend de React
├── src/
│ ├── api/
│ ├── assets/
│ ├── components/
│ ├── pages/
│ ├── App.jsx
│ ├── main.jsx
│ └── index.css
├── index.html
├── package.json
└── tailwind.config.js

---

# 📜 Notas finales

- La arquitectura es totalmente modular y escalable.
- TailwindCSS + DaisyUI garantiza un desarrollo rápido de la interfaz de usuario.
- EF Core gestiona el acceso a los datos de forma transparente a través de servicios.
- Swagger está habilitado para pruebas y documentación. - CORS ya está configurado para permitir la comunicación frontend.

---

# 🏁 El sistema está listo para ejecutarse e implementarse.
