// This file contains JavaScript functions for handling interactions on the teacher's page, including adding, removing, and viewing projects and pupils who have voted.

const apiUrl = 'http://localhost:3000/api'; // Adjust the API URL as needed

// Function to fetch projects from the server
async function fetchProjects() {
    const response = await fetch(`${apiUrl}/projects`);
    const projects = await response.json();
    renderProjects(projects);
}

// Function to render projects in the table
function renderProjects(projects) {
    const tbody = document.querySelector('table tbody');
    tbody.innerHTML = ''; // Clear existing projects

    projects.forEach(project => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td><img class="thumb" src="${project.imageUrl}" alt="Project Image"></td>
            <td>${project.title}</td>
            <td>${project.teacher}</td>
            <td>${project.yearGroups}</td>
            <td>${project.participants.length}/${project.maxParticipants}</td>
            <td class="actions">
                <button class="edit" onclick="openModal('${project.id}', '${project.title}', '${project.teacher}', '${project.yearGroups}', ${project.maxParticipants})">✏️</button>
                <button class="delete" onclick="deleteProject('${project.id}')">🗑️</button>
                <button class="view-pupils" onclick="viewPupils('${project.id}')">👥</button>
            </td>
        `;
        tbody.appendChild(row);
    });
}

// Function to open the modal for adding/editing a project
function openModal(id, title, teacher, yearGroups, maxParticipants) {
    document.getElementById("modal-title").innerText = id ? "Projekt bearbeiten" : "Neues Projekt";
    document.querySelector('#modal input[name="title"]').value = title || '';
    document.querySelector('#modal input[name="teacher"]').value = teacher || '';
    document.querySelector('#modal input[name="yearGroups"]').value = yearGroups || '';
    document.querySelector('#modal input[name="maxParticipants"]').value = maxParticipants || '';
    document.getElementById("modal").style.display = "flex";
}

// Function to close the modal
function closeModal() {
    document.getElementById("modal").style.display = "none";
}

// Function to save a project (add or update)
async function saveProject() {
    const id = document.getElementById("modal-title").innerText === "Projekt bearbeiten" ? document.querySelector('#modal input[name="id"]').value : null;
    const projectData = {
        title: document.querySelector('#modal input[name="title"]').value,
        teacher: document.querySelector('#modal input[name="teacher"]').value,
        yearGroups: document.querySelector('#modal input[name="yearGroups"]').value,
        maxParticipants: document.querySelector('#modal input[name="maxParticipants"]').value,
    };

    const method = id ? 'PUT' : 'POST';
    const response = await fetch(`${apiUrl}/projects${id ? `/${id}` : ''}`, {
        method,
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(projectData),
    });

    if (response.ok) {
        fetchProjects(); // Refresh the project list
        closeModal();
    } else {
        alert('Fehler beim Speichern des Projekts.');
    }
}

// Function to delete a project
async function deleteProject(id) {
    if (confirm('Projekt löschen?')) {
        const response = await fetch(`${apiUrl}/projects/${id}`, {
            method: 'DELETE',
        });

        if (response.ok) {
            fetchProjects(); // Refresh the project list
        } else {
            alert('Fehler beim Löschen des Projekts.');
        }
    }
}

// Function to view pupils who have voted for a project
async function viewPupils(projectId) {
    const response = await fetch(`${apiUrl}/projects/${projectId}/pupils`);
    const pupils = await response.json();
    renderPupils(pupils);
}

// Function to render pupils in a modal
function renderPupils(pupils) {
    const pupilList = document.getElementById("pupil-list");
    pupilList.innerHTML = ''; // Clear existing pupils

    pupils.forEach(pupil => {
        const listItem = document.createElement('li');
        listItem.textContent = pupil.name;
        pupilList.appendChild(listItem);
    });

    document.getElementById("pupil-modal").style.display = "flex";
}

// Function to close the pupil modal
function closePupilModal() {
    document.getElementById("pupil-modal").style.display = "none";
}

// Event listeners
document.getElementById("modal-save").addEventListener("click", saveProject);
document.getElementById("modal-cancel").addEventListener("click", closeModal);
document.getElementById("pupil-modal-close").addEventListener("click", closePupilModal);

// Initial fetch of projects
fetchProjects();