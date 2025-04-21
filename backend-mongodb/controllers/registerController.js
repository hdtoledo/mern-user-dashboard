import User from '../models/User.js';

export const register = async (req, res) => {
    const { nombre, correo, password } = req.body;

    if (!nombre || !correo || !password) {
        return res.status(400).json({ message: 'Todos los campos son obligatorios' });
    }

    try {
        const existingUser = await User.findOne({ correo });

        if (existingUser) {
            return res.status(400).json({ message: 'El correo ya está registrado' });
        }

        const newUser = new User({ nombre, correo, password });
        await newUser.save();

        res.status(201).json({ message: 'Usuario registrado exitosamente', user: newUser });
    } catch (error) {
        console.error("Error en el registro:", error);
        res.status(500).json({ message: 'Error en el servidor' });
    }
}
