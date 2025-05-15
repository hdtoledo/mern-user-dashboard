import request from 'supertest';
import mongoose from 'mongoose';
import app from '../app.js';
import User from '../models/User.js';

// Conectar a la base de datos antes de ejecutar las pruebas
const MONGO_URI = process.env.MONGODB_URI;

beforeAll(async () => {
  await mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
});

afterEach(async () => {
  // Limpiar la base de datos después de cada prueba
  await User.deleteMany({});
});

// Desconectar de la base de datos después de todas las pruebas
afterAll(async () => {
  await mongoose.connection.close();
});

describe('Auth Routes', () => {
  // Datos de usuario para las pruebas
  const userData = {
    nombre: 'Jhon Rodriguez',
    correo: 'jhon@gmail.com',
    password: '123456'
  };

  // Test para el registro de usuario
  it('✅ Registro de usuario Creado Correctamente', async () => {
    const res = await request(app).post('/api/register').send(userData);

    expect(res.statusCode).toBe(201);
    expect(res.body).toHaveProperty('message', 'Usuario registrado exitosamente');
    expect(res.body.user).toHaveProperty('correo', userData.correo);
  });

  // Usuario ya existe
  it('❌ Registro de usuario ya existe', async () => {
    await request(app).post('/api/register').send(userData);
    const res = await request(app).post('/api/register').send(userData);

    expect(res.statusCode).toBe(400);
    expect(res.body).toHaveProperty('message', 'El correo ya está registrado');
  });

  // Test para el inicio de sesión
  it('✅ Inicio de sesión exitoso', async () => {
    await request(app).post('/api/register').send(userData);
    const res = await request(app).post('/api/login').send({
      correo: userData.correo,
      password: userData.password
    });

    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty('message', 'Login exitoso');
    expect(res.body.user).toHaveProperty('correo', userData.correo);
  });

  // Test para el inicio de sesión con credenciales incorrectas
  it('❌ Inicio de sesión fallido con credenciales incorrectas', async () => {
    await request(app).post('/api/register').send(userData);
    const res = await request(app).post('/api/login').send({
      correo: userData.correo,
      password: 'wrongpassword'
    });

    expect(res.statusCode).toBe(401);
    expect(res.body).toHaveProperty('message', 'Correo o password incorrecto!');
  });
});
