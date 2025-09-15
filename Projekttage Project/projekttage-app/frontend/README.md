# Projekttage App

## Overview
The Projekttage App is a web application designed to facilitate project management for school projects. It allows teachers to create, manage, and view projects, while pupils can browse and sign up for these projects. The application includes authentication for both teachers and pupils.

## Project Structure
The project is divided into two main parts: the backend and the frontend.

### Backend
- **Controllers**: Handle the business logic for authentication, project management, and pupil management.
  - `authController.ts`: Functions for user login and registration.
  - `projectController.ts`: Functions for managing projects (CRUD operations).
  - `pupilController.ts`: Functions for managing pupil-related operations.
  
- **Models**: Define the data structures used in the application.
  - `project.ts`: Project model with properties like title, teacher, year groups, and participants.
  - `pupil.ts`: Pupil model with properties like name, email, and voted projects.
  - `teacher.ts`: Teacher model with properties like name, email, and password.

- **Routes**: Define the API endpoints for the application.
  - `authRoutes.ts`: Routes for authentication.
  - `projectRoutes.ts`: Routes for project management.
  - `pupilRoutes.ts`: Routes for pupil management.

- **Middleware**: Contains functions for protecting routes and ensuring authentication.
  - `auth.ts`: Middleware for route protection.

- **Database**: Handles the database connection and configuration.

- **Server**: Entry point of the application, setting up the Express server.

### Frontend
- **Public**: Contains the HTML files for the application.
  - `index.html`: Main HTML file.
  - `lehrer.html`: Teacher interface for managing projects.
  - `schüler.html`: Pupil interface for viewing and signing up for projects.
  - `login.html`: Login interface for both teachers and pupils.

- **Src**: Contains JavaScript and CSS files.
  - **JS**: JavaScript files for handling interactions.
    - `lehrer.js`: Functions for teacher interactions.
    - `schüler.js`: Functions for pupil interactions.
    - `login.js`: Functions for user authentication.
  - **CSS**: Styles for the frontend application.

## Features
- **User Authentication**: Both teachers and pupils can log in to access their respective functionalities.
- **Project Management**: Teachers can add, update, and delete projects, as well as view pupils who have signed up for each project.
- **Project Browsing**: Pupils can browse available projects and sign up for them.

## Getting Started
1. Clone the repository.
2. Navigate to the backend directory and install dependencies:
   ```
   cd backend
   npm install
   ```
3. Set up the database connection in `db.ts`.
4. Start the backend server:
   ```
   npm start
   ```
5. Navigate to the frontend directory and install dependencies:
   ```
   cd frontend
   npm install
   ```
6. Open the `public/index.html` file in a web browser to access the application.

## Future Improvements
- Implement a voting system for pupils to rate projects.
- Enhance the user interface for better usability.
- Add more detailed project descriptions and images.

## License
This project is licensed under the MIT License.