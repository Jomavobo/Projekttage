// This file contains JavaScript functions for handling interactions on the pupil's page, including signing up for projects.

document.addEventListener('DOMContentLoaded', () => {
    const signupButtons = document.querySelectorAll('.signup');
    signupButtons.forEach(button => {
        button.addEventListener('click', handleSignup);
    });

    const searchInput = document.querySelector('.filters input');
    searchInput.addEventListener('input', handleSearch);
});

async function handleSignup(event) {
    const card = event.target.closest('.card');
    const projectTitle = card.querySelector('h3').innerText;

    const response = await fetch('/api/pupils/signup', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
        body: JSON.stringify({ projectTitle })
    });

    if (response.ok) {
        alert('Erfolgreich angemeldet für ' + projectTitle);
        // Optionally, update the UI to reflect the signup
        const spots = card.querySelector('.spots');
        const progress = card.querySelector('.progress span');
        const currentSpots = parseInt(spots.innerText.match(/\d+/)[0]);
        spots.innerText = `Noch ${currentSpots - 1} Plätze frei`;
        progress.style.width = `${((currentSpots - 1) / currentSpots) * 100}%`;
    } else {
        const error = await response.json();
        alert('Fehler: ' + error.message);
    }
}

function handleSearch(event) {
    const query = event.target.value.toLowerCase();
    const cards = document.querySelectorAll('.card');

    cards.forEach(card => {
        const title = card.querySelector('h3').innerText.toLowerCase();
        if (title.includes(query)) {
            card.style.display = '';
        } else {
            card.style.display = 'none';
        }
    });
}