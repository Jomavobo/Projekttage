export interface Pupil {
  id: number;
  name: string;
  email: string;
  votedProjects: number[]; // Array of project IDs that the pupil has voted for
}

import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../db';

export class PupilModel extends Model<Pupil> implements Pupil {
  public id!: number;
  public name!: string;
  public email!: string;
  public votedProjects!: number[];

  // timestamps!
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

PupilModel.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    votedProjects: {
      type: DataTypes.JSON, // Store voted project IDs as a JSON array
      allowNull: true,
    },
  },
  {
    sequelize,
    modelName: 'Pupil',
  }
);