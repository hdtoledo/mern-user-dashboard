import User from '../models/User.js';

export const login = async (req, res) => {
    const { correo, password } = req.body;

    if (!correo || !password) {
        return res.status(400).json({ message: 'Todos los campos son obligatorios' });
    }

    try {
        const user = await User.findOne({ correo });

        if (!user || user.password !== password) {
            return res.status(401).json({ message: 'Correo o password incorrecto!' });
        }

        res.status(200).json({ message: 'Login exitoso', user });
    } catch (error) {
        console.error("Error en el login:", error);
        res.status(500).json({ message: 'Error en el servidor' });
    }
}
