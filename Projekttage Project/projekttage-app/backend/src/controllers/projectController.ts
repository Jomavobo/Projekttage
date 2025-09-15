import { Request, Response } from 'express';
import Project from '../models/project';
import { Pupil } from '../models/pupil';

// Create a new project
export const createProject = async (req: Request, res: Response) => {
    const { title, teacher, yearGroups, maxParticipants, description } = req.body;

    try {
        const newProject = new Project({
            title,
            teacher,
            yearGroups,
            maxParticipants,
            description,
            pupilsVoted: []
        });

        await newProject.save();
        res.status(201).json(newProject);
    } catch (error) {
        res.status(500).json({ message: 'Error creating project', error });
    }
};

// Update an existing project
export const updateProject = async (req: Request, res: Response) => {
    const { id } = req.params;
    const updates = req.body;

    try {
        const updatedProject = await Project.findByIdAndUpdate(id, updates, { new: true });
        if (!updatedProject) {
            return res.status(404).json({ message: 'Project not found' });
        }
        res.json(updatedProject);
    } catch (error) {
        res.status(500).json({ message: 'Error updating project', error });
    }
};

// Delete a project
export const deleteProject = async (req: Request, res: Response) => {
    const { id } = req.params;

    try {
        const deletedProject = await Project.findByIdAndDelete(id);
        if (!deletedProject) {
            return res.status(404).json({ message: 'Project not found' });
        }
        res.json({ message: 'Project deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting project', error });
    }
};

// Get all projects
export const getAllProjects = async (req: Request, res: Response) => {
    try {
        const projects = await Project.find();
        res.json(projects);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving projects', error });
    }
};

// Get project details by ID
export const getProjectById = async (req: Request, res: Response) => {
    const { id } = req.params;

    try {
        const project = await Project.findById(id);
        if (!project) {
            return res.status(404).json({ message: 'Project not found' });
        }
        res.json(project);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving project', error });
    }
};

// Get pupils who voted for a specific project
export const getPupilsVoted = async (req: Request, res: Response) => {
    const { id } = req.params;

    try {
        const project = await Project.findById(id).populate('pupilsVoted');
        if (!project) {
            return res.status(404).json({ message: 'Project not found' });
        }
        res.json(project.pupilsVoted);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving pupils', error });
    }
};

// Vote for a project
export const voteForProject = async (req: Request, res: Response) => {
    const { projectId } = req.params;
    const { pupilId } = req.body;

    try {
        const project = await Project.findById(projectId);
        if (!project) {
            return res.status(404).json({ message: 'Project not found' });
        }

        if (!project.pupilsVoted.includes(pupilId)) {
            project.pupilsVoted.push(pupilId);
            await project.save();
        }

        res.json({ message: 'Vote recorded successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error voting for project', error });
    }
};