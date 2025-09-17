// menu.js
// Handles navigation menu, login indicator, and access control

function getUser() {
  try {
    return JSON.parse(localStorage.getItem('user'));
  } catch {
    return null;
  }
}

function setUser(user) {
  localStorage.setItem('user', JSON.stringify(user));
}

function clearUser() {
  localStorage.removeItem('user');
}

function renderMenu() {
  const user = getUser();
  const nav = document.getElementById('main-nav-portal');
  if (!nav) return;
  nav.innerHTML = '';
  const menuConfig = [
    { label: 'Start', href: 'index.html', always: true },
    { label: 'Schülerbereich', href: 'schüler.html', requiresLogin: true },
    { label: 'Lehrerbereich', href: 'lehrer.html', requiresTeacher: true },
    { label: 'Login', href: 'login.html', requiresLogout: true },
    { label: 'Logout', href: '#', requiresLogin: true, isLogout: true }
  ];
  menuConfig.forEach(item => {
    if (item.always
      || (item.requiresLogin && user && user.type !== 'teacher')
      || (item.requiresTeacher && user && user.type === 'teacher')
      || (item.requiresLogin && user && item.isLogout == true)
      || (item.requiresLogout && !user)) {
      const a = document.createElement('a');
      a.href = item.href;
      a.textContent = item.label;
      if (item.isLogout) {
        a.onclick = (e) => { e.preventDefault(); clearUser(); window.location.href = 'index.html'; };
      }
      nav.appendChild(a);
    }
  });
}

document.addEventListener('DOMContentLoaded', () => {
    const burger = document.getElementById('burger');
    const mainNav = document.getElementById('main-nav');

    if (burger && mainNav) {
        burger.addEventListener('click', () => {
              
            mainNav.classList.toggle('open');
            
            console.log('Burger open');
              renderMenu();
              enforceAccess();
              setupBurgerMenu();
        });
    } else {
        console.error('Burger menu or main navigation not found!');
    }
});

function enforceAccess() {
  const user = getUser();
  const path = window.location.pathname;
  if (path.includes('lehrer.html') && (user.type !== 'teacher')) {
    window.location.href = 'login.html';
  }
  if (path.includes('schüler.html') && !user) {
    window.location.href = 'login.html';
  }
}

function setupBurgerMenu() {
  const burger = document.getElementById('burger');
  const nav = document.getElementById('main-nav-portal');
  if(!nav) console.error("Nav error: " + nav);
  if(!burger) console.error("Burger error: " + burger);
  if (!burger || !nav) return;
  burger.onclick = function(e) {
    e.stopPropagation();
    nav.classList.toggle('open');
    document.body.classList.toggle('menu-open', nav.classList.contains('open'));
    // Position menu below burger
    const rect = burger.getBoundingClientRect();
    nav.style.top = rect.bottom + window.scrollY + 8 + 'px';
    nav.style.right = (window.innerWidth - rect.right + 2) + 'px';
  };
  // Close menu on click outside
  document.addEventListener('click', function(e) {
    if (!nav.contains(e.target) && !burger.contains(e.target)) {
      nav.classList.remove('open');
      document.body.classList.remove('menu-open');
    }
  });
  // Reposition on resize/scroll
  window.addEventListener('resize', () => { if(nav.classList.contains('open')) burger.click(); });
  window.addEventListener('scroll', () => { if(nav.classList.contains('open')) burger.click(); });
}

document.addEventListener('DOMContentLoaded', () => {
  renderMenu();
  enforceAccess();
  setupBurgerMenu();
});
