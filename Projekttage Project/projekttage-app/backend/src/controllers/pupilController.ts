import { Request, Response } from 'express';
import { Pupil } from '../models/pupil';

// Retrieve all pupils
export const getAllPupils = async (req: Request, res: Response) => {
    try {
        const pupils = await Pupil.find();
        res.status(200).json(pupils);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving pupils', error });
    }
};

// Retrieve a specific pupil by ID
export const getPupilById = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const pupil = await Pupil.findById(id);
        if (!pupil) {
            return res.status(404).json({ message: 'Pupil not found' });
        }
        res.status(200).json(pupil);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving pupil', error });
    }
};

// Add a vote for a project by a pupil
export const voteForProject = async (req: Request, res: Response) => {
    const { pupilId, projectId } = req.body;
    try {
        const pupil = await Pupil.findById(pupilId);
        if (!pupil) {
            return res.status(404).json({ message: 'Pupil not found' });
        }
        if (!pupil.votedProjects.includes(projectId)) {
            pupil.votedProjects.push(projectId);
            await pupil.save();
            res.status(200).json({ message: 'Vote added successfully' });
        } else {
            res.status(400).json({ message: 'Pupil has already voted for this project' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error voting for project', error });
    }
};

// Retrieve all projects voted by a pupil
export const getVotedProjects = async (req: Request, res: Response) => {
    const { pupilId } = req.params;
    try {
        const pupil = await Pupil.findById(pupilId).populate('votedProjects');
        if (!pupil) {
            return res.status(404).json({ message: 'Pupil not found' });
        }
        res.status(200).json(pupil.votedProjects);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving voted projects', error });
    }
};