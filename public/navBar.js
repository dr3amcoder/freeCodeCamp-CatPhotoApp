const navBar = 
    `<nav class="navbar">
        <ul class="navbar-list">
            <li><a href="/" class="nav-link">Home</a></li>
            <li><a href="/catPhotos" class="nav-link">Cat Photos</a></li>
            <li><a href="/catFacts" class="nav-link">Cat Facts</a></li>
            <li><a href="/catProfiles" class="nav-link">Cat Profile</a></li>
            <li><a href="/aboutMe" class="nav-link">About Me</a></li>
            <li><a href="/developerReflections" class="nav-link">Developer Reflection</a></li>
        </ul>
    </nav>`
;


document.getElementById('navBar').innerHTML = navBar;

const currentPath = window.location.pathname;

document.querySelectorAll('.nav-link').forEach(link => {
    if (link.getAttribute('href') == currentPath) {
        link.classList.add('active')
    }
})