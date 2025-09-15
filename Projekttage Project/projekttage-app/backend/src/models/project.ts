import { Schema, model } from 'mongoose';

const projectSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  teacher: {
    type: String,
    required: true,
  },
  yearGroups: {
    type: String,
    required: true,
  },
  maxParticipants: {
    type: Number,
    required: true,
  },
  participants: {
    type: [String], // Array of pupil IDs who have voted for this project
    default: [],
  },
}, { timestamps: true });

const Project = model('Project', projectSchema);

export default Project;