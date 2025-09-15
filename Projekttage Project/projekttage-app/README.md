# Projekttage App

## Overview
The Projekttage App is a web application designed to facilitate project management for school projects. It allows teachers to create, manage, and oversee projects while enabling pupils to view and sign up for these projects. The application is structured into a backend and a frontend, utilizing a SQL database for data storage.

## Features
- **Teacher Functionality:**
  - Add, update, and delete projects.
  - View all pupils who have signed up for each project.
  - Manage project details including title, year groups, and maximum participants.

- **Pupil Functionality:**
  - View available projects.
  - Sign up for projects.
  - Search and filter projects based on categories.

- **Authentication:**
  - Login and registration for both teachers and pupils.
  - Secure access to project management features.

## Project Structure
```
projekttage-app
├── backend
│   ├── src
│   │   ├── controllers
│   │   │   ├── authController.ts
│   │   │   ├── projectController.ts
│   │   │   └── pupilController.ts
│   │   ├── models
│   │   │   ├── project.ts
│   │   │   ├── pupil.ts
│   │   │   └── teacher.ts
│   │   ├── routes
│   │   │   ├── authRoutes.ts
│   │   │   ├── projectRoutes.ts
│   │   │   └── pupilRoutes.ts
│   │   ├── middleware
│   │   │   └── auth.ts
│   │   ├── db.ts
│   │   └── server.ts
│   ├── package.json
│   └── tsconfig.json
├── frontend
│   ├── public
│   │   ├── index.html
│   │   ├── lehrer.html
│   │   ├── schüler.html
│   │   └── login.html
│   ├── src
│   │   ├── js
│   │   │   ├── lehrer.js
│   │   │   ├── schüler.js
│   │   │   └── login.js
│   │   └── css
│   │       └── style.css
│   └── README.md
├── README.md
```

## Installation
1. Clone the repository:
   ```
   git clone <repository-url>
   ```
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

## Usage
- **Teachers** can log in to manage projects and view pupil registrations.
- **Pupils** can log in to view and sign up for projects.

## Contributing
Contributions are welcome! Please submit a pull request or open an issue for any suggestions or improvements.

## License
This project is licensed under the MIT License. See the LICENSE file for details.