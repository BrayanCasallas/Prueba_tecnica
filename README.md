Cómo correr el proyecto
1️⃣ Clonar el repositorio
git clone <https://github.com/BrayanCasallas/Prueba_tecnica.git>
cd AsisyaEmployeeApi

2️⃣ Restaurar dependencias
dotnet restore

3️⃣ Aplicar migraciones
dotnet ef database update

4️⃣ Ejecutar el proyecto
dotnet run

📍 Por defecto la API estará disponible en:
https://localhost:5000 (o el puerto asignado automáticamente)
https://localhost:5001 (si usa https)

Puedes visualizar los endpoints desde Swagger:

➡ /swagger/index.html

📂 Estructura de Carpetas
AsisyaEmployeeApi/
├── Controllers/
│ └── EmployeesController.cs # Endpoints HTTP para Employee
│
├── Data/
│ └── EmployeesDbContext.cs # Configuración de Entity Framework + DbSet
│
├── DTOs/
│ ├── EmployeeCreateDto.cs # Datos para creación
│ ├── EmployeeReadDto.cs # Datos para lectura
│ └── EmployeeUpdateDto.cs # Datos para actualización
│
├── Models/
│ └── Employee.cs # Modelo principal (Entidad)
│
├── Services/
│ └── EmployeesService.cs # Lógica de negocio + manejo CRUD DB
│
├── Properties/
│ └── launchSettings.json # Perfil de ejecución y puertos
│
├── appsettings.json # Configuración general + conexión SQLite
├── Program.cs # Punto de entrada + configuración del servidor
└── AsisyaEmployeeApi.csproj # Dependencias del proyecto

🔌 Tecnologías
Herramienta Uso
.NET 7 API principal
EF Core ORM para acceso a datos
SQLite Base de datos local
Swagger / Swashbuckle Documentación interactiva
