// Get elements from the DOM
const email = document.getElementById("email");
const form = document.getElementById("form");
const error = document.getElementById("error");
const container = document.getElementById("container");
const modalOpen = document.getElementById("modalOpen");
const close = document.getElementById("close");
const overlay = document.getElementById("overlay");

// Modal Display
function showModal() {
    overlay.style.display = "block";
    modalOpen.style.display = "flex";
    modalOpen.style.animation = "modalAnimation 0.5s forwards";
}

// Hide modal
function hideModal() {
    modalOpen.style.animation = "modalClose 1s forwards";
    setTimeout(() => {
        modalOpen.style.display = "none";
        overlay.style.display = "none";
    }, 500);
}

// Validate email
function validateEmail(email) {
    const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return regexEmail.test(email);
}

// Form Submission
form.addEventListener("submit", (e) => {
    e.preventDefault();
    let warnings = "";
    let send = true;

    if (!validateEmail(email.value)) {
        warnings += "Invalid Email, try again";
        send = false;
    }

    if (!send) {
        container.style.height = "500px";
        container.style.marginTop = "15vh";
        error.style.display = "block";
        error.innerHTML = warnings;
    } else {
        if (window.innerWidth <= 768) {
            container.style.height = '320px';
        } else {
            container.style.height = '470px';
        }
        container.style.marginTop = "20vh";
        error.style.display = "none";
        error.innerHTML = "";
        showModal();
        form.reset();
    }
});

// Modal Closure
close.addEventListener("click", hideModal);