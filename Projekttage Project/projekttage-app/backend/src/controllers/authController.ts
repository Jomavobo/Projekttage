import { Request, Response } from 'express';
import { Teacher } from '../models/teacher';
import { Pupil } from '../models/pupil';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

// Register a new teacher
export const registerTeacher = async (req: Request, res: Response) => {
    const { name, email, password } = req.body;

    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const newTeacher = new Teacher({ name, email, password: hashedPassword });
        await newTeacher.save();
        res.status(201).json({ message: 'Teacher registered successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error registering teacher', error });
    }
};

// Login for teachers
export const loginTeacher = async (req: Request, res: Response) => {
    const { email, password } = req.body;

    try {
        const teacher = await Teacher.findOne({ email });
        if (!teacher) {
            return res.status(404).json({ message: 'Teacher not found' });
        }

        const isMatch = await bcrypt.compare(password, teacher.password);
        if (!isMatch) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        const token = jwt.sign({ id: teacher._id }, process.env.JWT_SECRET || 'secret', { expiresIn: '1h' });
        res.status(200).json({ token });
    } catch (error) {
        res.status(500).json({ message: 'Error logging in', error });
    }
};

// Register a new pupil
export const registerPupil = async (req: Request, res: Response) => {
    const { name, email, password } = req.body;

    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const newPupil = new Pupil({ name, email, password: hashedPassword });
        await newPupil.save();
        res.status(201).json({ message: 'Pupil registered successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error registering pupil', error });
    }
};

// Login for pupils
export const loginPupil = async (req: Request, res: Response) => {
    const { email, password } = req.body;

    try {
        const pupil = await Pupil.findOne({ email });
        if (!pupil) {
            return res.status(404).json({ message: 'Pupil not found' });
        }

        const isMatch = await bcrypt.compare(password, pupil.password);
        if (!isMatch) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        const token = jwt.sign({ id: pupil._id }, process.env.JWT_SECRET || 'secret', { expiresIn: '1h' });
        res.status(200).json({ token });
    } catch (error) {
        res.status(500).json({ message: 'Error logging in', error });
    }
};