# Employee Management System

A full-stack **Employee Management System** built using **React.js, Spring Boot, Spring Security, and MySQL**. The application provides a secure and user-friendly interface for managing employee records through RESTful APIs.

It demonstrates a real-world layered architecture with **Controller, Service, Repository, DTO, and Mapper** components, along with role-based authorization for administrative operations.

---

## 🚀 Features

### 👨‍💼 Employee Management

* View all employees
* View employee details
* Add new employees
* Update employee information
* Delete employees
* RESTful API-based employee operations

### 🔐 Security & Authorization

The application uses **Spring Security** with HTTP Basic Authentication and role-based authorization.

| Operation             | USER | ADMIN |
| --------------------- | :--: | :---: |
| View employees        |   ✅  |   ✅   |
| View employee details |   ✅  |   ✅   |
| Add employee          |   ❌  |   ✅   |
| Update employee       |   ❌  |   ✅   |
| Delete employee       |   ❌  |   ✅   |

Passwords are encoded using **BCryptPasswordEncoder**.

### 🎨 Frontend

* Responsive React user interface
* React Router for navigation
* Axios for REST API communication
* Bootstrap for styling
* Separate components for employee operations
* Form-based employee creation and editing

### ⚙️ Backend

* Spring Boot REST API
* Layered architecture
* Spring Data JPA
* Repository pattern
* DTO and Mapper pattern
* Exception handling
* Spring Security
* CORS configuration

---

## 🏗️ System Architecture

```text
                ┌──────────────────────────┐
                │       React Frontend     │
                │                          │
                │ React + Vite + Bootstrap │
                │ Axios + React Router     │
                └────────────┬─────────────┘
                             │
                             │ HTTP / REST API
                             ▼
                ┌──────────────────────────┐
                │    Spring Boot Backend   │
                │                          │
                │  Controller Layer        │
                │          ↓               │
                │  Service Layer           │
                │          ↓               │
                │  Repository Layer        │
                │          ↓               │
                │  MySQL Database          │
                └──────────────────────────┘
                             │
                             ▼
                ┌──────────────────────────┐
                │    Spring Security       │
                │                          │
                │ USER / ADMIN Roles        │
                └──────────────────────────┘
```

---

## 🛠️ Technology Stack

### Frontend

* **React.js**
* **Vite**
* **JavaScript**
* **Axios**
* **React Router**
* **Bootstrap 5**
* HTML5
* CSS3

The current frontend dependencies include React, Axios, Bootstrap and React Router.

### Backend

* **Java**
* **Spring Boot**
* **Spring Web**
* **Spring Data JPA**
* **Spring Security**
* **REST API**
* **Maven**

### Database

* **MySQL**
* SQL

### Development Tools

* Visual Studio Code
* IntelliJ IDEA
* Git
* GitHub
* Postman

---

## 📁 Project Structure

```text
EmployeeManagementSystem/
│
├── ems-frontend/
│   │
│   ├── public/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   ├── services/
│   │   ├── App.jsx
│   │   └── main.jsx
│   │
│   ├── package.json
│   ├── vite.config.js
│   └── README.md
│
├── Employee.java
├── EmployeeDto.java
├── EmployeeMapper.java
├── EmployeeRepository.java
├── EmployeeService.java
├── EmployeeServiceImp.java
├── EmployeeController.java
├── ResourceNotFoundException.java
├── SecurityConfig.java
└── EmsBackendApplication.java
```

The repository currently contains the main backend classes for the Employee entity, controller, DTO, mapper, repository, service, exception handling and security configuration, together with the `ems-frontend` React/Vite application.

---

# 🔐 Authentication

The application currently uses two in-memory users for authentication.

### ADMIN

```text
Username: admin
Password: admin123
Role: ADMIN
```

### USER

```text
Username: user
Password: user123
Role: USER
```

> **Security Note:** These credentials are intended for local development/demo purposes. For production, credentials should be stored securely and never hard-coded in source code.

The backend currently configures the `ADMIN` role for POST, PUT and DELETE employee operations, while both `USER` and `ADMIN` can access GET operations.

---

# 🔗 REST API Endpoints

Base URL:

```text
http://localhost:8080/api/employees
```

### Get All Employees

```http
GET /api/employees
```

Access:

```text
USER / ADMIN
```

### Get Employee By ID

```http
GET /api/employees/{id}
```

Access:

```text
USER / ADMIN
```

### Create Employee

```http
POST /api/employees
```

Access:

```text
ADMIN
```

### Update Employee

```http
PUT /api/employees/{id}
```

Access:

```text
ADMIN
```

### Delete Employee

```http
DELETE /api/employees/{id}
```

Access:

```text
ADMIN
```

The authorization rules in the current `SecurityConfig` explicitly enforce these permissions.

---

# ⚙️ Getting Started

## Prerequisites

Make sure the following are installed:

* Java JDK
* Maven
* Node.js
* npm
* MySQL
* Git
* IDE such as IntelliJ IDEA or VS Code

---

## 1. Clone the Repository

```bash
git clone https://github.com/862004/EmployeeManagementSystem.git
```

Navigate into the project:

```bash
cd EmployeeManagementSystem
```

---

# 🗄️ 2. Configure MySQL

Create a database in MySQL:

```sql
CREATE DATABASE employee_management;
```

Configure your Spring Boot database properties according to your local MySQL setup.

Example:

```properties
spring.datasource.url=jdbc:mysql://localhost:3306/employee_management
spring.datasource.username=root
spring.datasource.password=YOUR_PASSWORD

spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true
```

> Replace `YOUR_PASSWORD` with your local MySQL password.

---

# ▶️ 3. Run the Backend

Open the backend project in IntelliJ IDEA or another Java IDE.

Run:

```text
EmsBackendApplication.java
```

The backend will start at:

```text
http://localhost:8080
```

---

# 💻 4. Run the Frontend

Open a new terminal:

```bash
cd ems-frontend
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

The Vite development server will provide the frontend URL in the terminal.

The project's current frontend scripts include `dev`, `build`, `lint`, and `preview`.

---

# 🔄 Application Flow

```text
User
 │
 ▼
React Frontend
 │
 │ Axios HTTP Request
 ▼
Spring Boot REST Controller
 │
 ▼
Service Layer
 │
 ▼
Repository Layer
 │
 ▼
MySQL Database
 │
 ▼
Repository
 │
 ▼
Service
 │
 ▼
Controller
 │
 │ JSON Response
 ▼
React Frontend
```

---

# 🧩 Backend Architecture

The backend follows a layered architecture.

### Controller Layer

Responsible for:

* Handling HTTP requests
* Mapping API endpoints
* Returning HTTP responses

```text
EmployeeController
```

### Service Layer

Responsible for:

* Business logic
* Employee operations
* Communication between Controller and Repository

```text
EmployeeService
EmployeeServiceImp
```

### Repository Layer

Responsible for:

* Database interaction
* CRUD operations
* Persistence abstraction

```text
EmployeeRepository
```

### DTO Layer

The DTO is used to transfer employee-related data between application layers without directly exposing the entity structure.

```text
EmployeeDto
```

### Mapper Layer

Responsible for converting between:

```text
Employee ↔ EmployeeDto
```

```text
EmployeeMapper
```

### Exception Handling

The project includes custom handling for resources that cannot be found.

```text
ResourceNotFoundException
```

---

# 🔒 Security Architecture

Spring Security protects the REST API.

```text
Request
   │
   ▼
Spring Security
   │
   ├── Authentication
   │
   └── Authorization
          │
          ├── USER
          │     └── GET
          │
          └── ADMIN
                ├── GET
                ├── POST
                ├── PUT
                └── DELETE
```

BCrypt is used as the password encoder, and HTTP Basic authentication is enabled in the current configuration.

---

# 📸 Application Screenshots

Add screenshots here after taking screenshots of your application.

### Login / Authentication

```text
![Login](screenshots/login.png)
```

### Employee List

```text
![Employee List](screenshots/employee-list.png)
```

### Add Employee

```text
![Add Employee](screenshots/add-employee.png)
```

### Update Employee

```text
![Update Employee](screenshots/update-employee.png)
```

> Recommended: create a `screenshots` folder inside the repository and add 3–5 good screenshots.

---

# 🧪 Testing

The REST APIs can be tested using **Postman**.

Example:

```text
GET
http://localhost:8080/api/employees
```

Use Basic Authentication:

```text
Username: admin
Password: admin123
```

You can also test authorization by trying ADMIN-only operations using the USER account.

---

# 📌 Key Concepts Demonstrated

This project demonstrates practical knowledge of:

* Java
* Object-Oriented Programming
* Spring Boot
* Spring MVC
* REST API development
* Spring Data JPA
* MySQL
* CRUD operations
* Dependency Injection
* Repository Pattern
* Service Layer Pattern
* DTO Pattern
* Mapper Pattern
* Exception Handling
* Spring Security
* Role-Based Authorization
* HTTP Basic Authentication
* BCrypt Password Encoding
* React.js
* Vite
* Axios
* React Router
* Bootstrap
* Git & GitHub

---

# 🎯 Learning Objectives

The main objective of this project is to understand how a modern full-stack web application is designed and developed.

Through this project, I gained practical experience in:

* Building RESTful APIs using Spring Boot
* Connecting a backend application with MySQL
* Implementing CRUD operations
* Designing a layered backend architecture
* Using DTOs and mappers
* Implementing Spring Security
* Managing role-based access
* Building reusable React components
* Connecting React with Spring Boot using Axios
* Managing frontend routing
* Using Git and GitHub for version control

---

# 🚀 Future Enhancements

The following features can be added in future versions:

* JWT-based authentication
* User registration and login
* Password reset functionality
* Employee search and filtering
* Pagination
* Sorting
* Department management
* Employee profile images
* Attendance management
* Leave management
* Salary management
* Dashboard with statistics
* Admin dashboard
* Email notifications
* Docker deployment
* Cloud deployment
* Automated testing
* CI/CD using GitHub Actions

---

# 👨‍💻 Author

**Gokul R**

Electronics and Communication Engineering Graduate | Java Full Stack Developer

### Technologies

```text
Java | Spring Boot | Spring Security | React | MySQL
REST API | JavaScript | HTML | CSS | Git | GitHub
```

---

# ⭐ Support

If you find this project useful, consider giving the repository a ⭐ on GitHub.

---

## 📄 License

This project is created for educational and portfolio purposes.
