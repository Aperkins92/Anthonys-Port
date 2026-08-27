const themeButton = document.querySelector("#themeButton");

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


const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");

    if (themeButton) {
        themeButton.textContent = "Light Theme";
    }
}


const welcomeMessage = document.querySelector("#welcomeMessage");

if (welcomeMessage) {

    const hour = new Date().getHours();

    if (hour < 12) {

        welcomeMessage.textContent =
            "Good morning! Thanks for visiting my portfolio.";

    } else if (hour < 18) {

        welcomeMessage.textContent =
            "Good afternoon! Thanks for checking out my work.";

    } else {

        welcomeMessage.textContent =
            "Good evening! Welcome to my portfolio.";

    }
}


const year = document.querySelector("#year");

if (year) {
    year.textContent = new Date().getFullYear();
}


const filterButtons = document.querySelectorAll(".filter-button");
const projects = document.querySelectorAll(".project");

filterButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        const category = button.dataset.filter;

        projects.forEach(function (project) {

            if (category === "all") {

                project.style.display = "block";

            } else if (project.classList.contains(category)) {

                project.style.display = "block";

            } else {

                project.style.display = "none";

            }

        });

    });

});


const contactForm = document.querySelector("#contactForm");

if (contactForm) {

    const nameInput = document.querySelector("#name-id-input");
    const emailInput = document.querySelector("#email-id");
    const messageInput = document.querySelector("#message");

    const nameError = document.querySelector("#name-error");
    const emailError = document.querySelector("#email-error");
    const messageError = document.querySelector("#message-error");

    function clearError(input, errorElement) {

        input.removeAttribute("aria-invalid");
        errorElement.textContent = "";
    }


    function validateName() {

        if (nameInput.value.trim() === "") {

            nameInput.setAttribute("aria-invalid", "true");

            nameError.textContent = "Please enter your name.";

            return false;

        }

        clearError(nameInput, nameError);

        return true;
    }


    function validateEmail() {

        const emailValue = emailInput.value.trim();

        if (emailValue === "") {

            emailInput.setAttribute("aria-invalid", "true");

            emailError.textContent = "Please enter your email address.";

            return false;
        }

        if (!emailInput.validity.valid) {

            emailInput.setAttribute("aria-invalid", "true");

            emailError.textContent =
                "Please enter a valid email address.";

            return false;
        }

        clearError(emailInput, emailError);

        return true;
    }


    function validateMessage() {

        if (messageInput.value.trim() === "") {

            messageInput.setAttribute("aria-invalid", "true");

            messageError.textContent = "Please enter a message.";

            return false;
        }

        clearError(messageInput, messageError);

        return true;
    }


    nameInput.addEventListener("input", validateName);

    emailInput.addEventListener("input", validateEmail);

    messageInput.addEventListener("input", validateMessage);


    contactForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const nameValid = validateName();
        const emailValid = validateEmail();
        const messageValid = validateMessage();

        if (nameValid && emailValid && messageValid) {

            const successMessage =
                document.querySelector("#form-success");

            successMessage.textContent =
                "Thanks! Your message has been filled out successfully.";

            contactForm.reset();

        } else {

            const firstInvalid =
                contactForm.querySelector('[aria-invalid="true"]');

            if (firstInvalid) {
                firstInvalid.focus();
            }

        }

    });

}


const apiButton = document.querySelector("#apiButton");
const apiResult = document.querySelector("#apiResult");

if (apiButton && apiResult) {

    apiButton.addEventListener("click", function () {

        apiResult.textContent = "Loading information...";

        fetch("https://api.github.com/users/github")

            .then(function (response) {

                if (!response.ok) {
                    throw new Error("API request failed.");
                }

                return response.json();

            })

            .then(function (data) {

                apiResult.innerHTML =
                    "<strong>GitHub:</strong> " +
                    data.name +
                    "<br>Public Repositories: " +
                    data.public_repos;

            })

            .catch(function () {

                apiResult.textContent =
                    "Sorry, the GitHub information could not be loaded.";

            });

    });

}