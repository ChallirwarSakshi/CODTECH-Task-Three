const header = document.querySelector("header");

window.addEventListener("scroll", () => {
    header.classList.toggle("shadow", window.scrollY > 0);
    header.classList.toggle("navbar-transparent", window.scrollY === 0);
});

function scrollLeft() {
    const scrollAmount = 300; 
    scrollContainer.scrollBy({
        left: -scrollAmount,
        behavior: 'smooth',
    });
}

function scrollRight() {
    const scrollAmount = 300; 
    scrollContainer.scrollBy({
        left: scrollAmount,
        behavior: 'smooth',
    });
}

function openModal() {
    document.getElementById("login-signup-modal").style.display = "flex";
}

function closeModal() {
    document.getElementById("login-signup-modal").style.display = "none";
}

function switchTab(tab) {
    if (tab === 'login') {
        document.getElementById('login-form').classList.add('active');
        document.getElementById('signup-form').classList.remove('active');
        document.getElementById('login-tab').classList.add('active');
        document.getElementById('signup-tab').classList.remove('active');
    } else {
        document.getElementById('signup-form').classList.add('active');
        document.getElementById('login-form').classList.remove('active');
        document.getElementById('signup-tab').classList.add('active');
        document.getElementById('login-tab').classList.remove('active');
    }
}

window.onclick = function(event) {
    if (event.target == document.getElementById("login-signup-modal")) {
        closeModal();
    }
}