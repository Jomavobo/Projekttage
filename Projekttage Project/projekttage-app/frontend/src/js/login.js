// This file contains JavaScript functions for handling user login and authentication.

document.addEventListener('DOMContentLoaded', () => {
    // Hardcoded demo users
    const demoUsers = [
        { email: 'lehrer@schule.de', password: 'lehrer', name: 'Herr Müller', type: 'teacher' },
        { email: 'schueler@schule.de', password: 'schueler', name: 'Max Musterschüler', type: 'pupil' }
    ];
    const loginForm = document.getElementById('login-form');
    const loginMessage = document.getElementById('login-message');

    loginForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const userType = document.querySelector('input[name="user-type"]:checked').value;

        // Hardcoded login check
        const user = demoUsers.find(u => u.email === email && u.password === password && u.type === userType);
        if (user) {
            localStorage.setItem('user', JSON.stringify(user));
            window.location.href = user.type === 'teacher' ? 'lehrer.html' : 'schüler.html';
        } else {
            loginMessage.textContent = 'Falsche Zugangsdaten oder Typ.';
            loginMessage.style.color = 'red';
        }
    });
});