const themeButton = document.getElementById("themeButton");


if (themeButton) {

    themeButton.addEventListener("click", function () {

        document.body.classList.toggle("dark-mode");

        if (document.body.classList.contains("dark-mode")) {

            localStorage.setItem("theme", "dark");

            themeButton.textContent = "Light Theme";

        } else {

            localStorage.setItem("theme", "light");

            themeButton.textContent = "Dark Theme";

        }

    });

}


/* Keep the selected theme when switching pages */

const savedTheme = localStorage.getItem("theme");


if (savedTheme === "dark") {

    document.body.classList.add("dark-mode");

    if (themeButton) {

        themeButton.textContent = "Light Theme";

    }

}


/* Welcome message */

const welcomeMessage = document.getElementById("welcomeMessage");


if (welcomeMessage) {

    let hour = new Date().getHours();


    if (hour < 12) {

        welcomeMessage.textContent =
            "Good morning! Thanks for visiting my portfolio.";

    }

    else if (hour < 18) {

        welcomeMessage.textContent =
            "Good afternoon! Thanks for checking out my work.";

    }

    else {

        welcomeMessage.textContent =
            "Good evening! Welcome to my portfolio.";

    }

}


/* Current year */

const year = document.getElementById("year");


if (year) {

    year.textContent = new Date().getFullYear();

}


/* Project filter */

function filterProjects(category) {

    const projects = document.querySelectorAll(".project");


    projects.forEach(function (project) {

        if (category === "all") {

            project.style.display = "block";

        }

        else if (project.classList.contains(category)) {

            project.style.display = "block";

        }

        else {

            project.style.display = "none";

        }

    });

}


/* Contact form message */

const contactForm = document.querySelector(".contact-section form");


if (contactForm) {

    contactForm.addEventListener("submit", function (event) {

        event.preventDefault();

        alert(
            "Thanks for your message! Please email me directly at Adperkins1992@gmail.com."
        );

    });

}