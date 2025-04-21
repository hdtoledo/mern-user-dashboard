# 🧠 Proyecto Base Full Stack MERN: Autenticación y Gestión de Usuarios

Este proyecto es una **plantilla funcional básica** que integra un **frontend en React + Vite** con un **backend en Node.js + Express + MongoDB** para implementar:

- Autenticación de usuarios (login y registro).
- Gestión de usuarios desde un panel administrativo.
- CRUD de usuarios con consumo de API REST desde el frontend.
- Roles diferenciados (`admin` y `user`).
- Redirección dinámica basada en el rol.

El propósito es **aprender e implementar la estructura base de un sistema real**, que puede escalar hacia dashboards, apps internas, SaaS, o ecommerce.

---

## 🗂 Estructura general del proyecto

```
.
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── config/
│   └── server.js
│
└── frontend/
    ├── src/
    │   ├── pages/
    │   ├── components/
    │   └── App.jsx
```

---

## 🚀 ¿Qué incluye?

### ✅ Frontend (React + Vite + TailwindCSS)
- Login y Registro con validación básica.
- Redirección automática al dashboard según el rol.
- Panel admin con tabla de usuarios.
- Modal para editar usuario.
- Eliminación directa desde la UI.

### ✅ Backend (Node.js + Express + MongoDB)
- Endpoints para login, registro, obtener, editar y eliminar usuarios.
- Conexión segura con MongoDB (local o Atlas).
- Separación por controladores y rutas.
- Roles con lógica condicional (`admin`/`user`).

---

## 🧪 Cómo correr el proyecto

### 1. Clonar el repositorio

```bash
git clone https://github.com/hdtoledo/mern-user-dashboard.git
cd proyecto-base-fullstack
```

### 2. Configurar el backend

```bash
cd backend
npm install
```

Crear archivo `.env` con:

```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/auth_db
```

Iniciar el backend:

```bash
npm run dev
```

### 3. Configurar el frontend

```bash
cd ../frontend
npm install
npm run dev
```

Abre tu navegador en: `http://localhost:5173`

---

## 🔐 Datos de ejemplo

Puedes insertar usuarios manualmente en MongoDB o registrarte desde el frontend como usuario normal. Para probar el dashboard admin, crea un usuario con rol `"admin"`:

```json
{
  "nombre": "Admin",
  "correo": "admin@example.com",
  "password": "admin123",
  "rol": "admin"
}
```

---

## 🧰 Endpoints principales

| Método | Ruta                    | Descripción                  |
|--------|-------------------------|------------------------------|
| POST   | `/api/register`         | Registro de usuario          |
| POST   | `/api/login`            | Login de usuario             |
| GET    | `/api/users`            | Obtener todos los usuarios   |
| DELETE | `/api/users/:id`        | Eliminar usuario por ID      |
| PUT    | `/api/users/:id`        | Actualizar usuario por ID    |

---

## 📚 Recomendaciones de uso y ampliación

Este proyecto es ideal para:

- Aprender a conectar React con APIs.
- Practicar control de roles.
- Crear un panel administrativo real.
- Escalar hacia apps con autenticación segura, JWT, o dashboards más complejos.

Puedes ampliar:

- Uso de `bcrypt` para encriptar contraseñas.
- JWT para manejo de sesión.
- Middleware para proteger rutas.
- Integración con MongoDB Atlas o servicios cloud.

---

## 🤝 Créditos

Desarrollado por @hdtoledo 

🚀 Proyecto educativo, libre para modificación y mejora.

---

## 📝 Licencia

Este proyecto se entrega bajo la licencia MIT. Puedes modificarlo, distribuirlo y adaptarlo a tus necesidades.
