const themeButton =
    document.querySelector("#themeButton");


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



const savedTheme =
    localStorage.getItem("theme");


if (savedTheme === "dark") {

    document.body.classList.add("dark-mode");


    if (themeButton) {

        themeButton.textContent =
            "Light Theme";

    }

}



const welcomeMessage =
    document.querySelector("#welcomeMessage");


if (welcomeMessage) {

    const hour =
        new Date().getHours();


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



const year =
    document.querySelector("#year");


if (year) {

    year.textContent =
        new Date().getFullYear();

}



const messageButton =
    document.querySelector("#messageButton");


const interactiveMessage =
    document.querySelector("#interactiveMessage");


if (
    messageButton &&
    interactiveMessage
) {

    messageButton.addEventListener(
        "click",
        function () {

            interactiveMessage.textContent =
                "My goal is to combine my live event experience with my Information Technology education. I want to continue developing skills in web development, programming, troubleshooting, and other areas of IT so I can create useful technology solutions.";


            messageButton.textContent =
                "Thanks for Learning More!";

        }
    );

}



/* Homework 8 Form Validation */


const contactForm =
    document.querySelector("#contactForm");


if (contactForm) {


    const nameField =
        document.querySelector("#name-id-input");


    const emailField =
        document.querySelector("#email-id");


    const phoneField =
        document.querySelector("#phone");


    const subjectField =
        document.querySelector("#subject");


    const messageField =
        document.querySelector("#message");



    const nameError =
        document.querySelector("#nameError");


    const emailError =
        document.querySelector("#emailError");


    const phoneError =
        document.querySelector("#phoneError");


    const subjectError =
        document.querySelector("#subjectError");


    const messageError =
        document.querySelector("#messageError");


    const formMessage =
        document.querySelector("#formMessage");



    contactForm.addEventListener(
        "submit",
        function (event) {


            event.preventDefault();


            let formIsValid = true;


            nameError.textContent = "";

            emailError.textContent = "";

            phoneError.textContent = "";

            subjectError.textContent = "";

            messageError.textContent = "";

            formMessage.textContent = "";


            formMessage.classList.remove(
                "form-error"
            );


            formMessage.classList.remove(
                "form-success"
            );



            /* Name validation */


            if (
                nameField.value.trim() === ""
            ) {

                nameError.textContent =
                    "Please enter your name.";

                formIsValid = false;

            }



            /* Email validation */


            if (
                emailField.value.trim() === ""
            ) {

                emailError.textContent =
                    "Please enter your email address.";

                formIsValid = false;

            }

            else if (
                !emailField.validity.valid
            ) {

                emailError.textContent =
                    "Please enter a valid email address.";

                formIsValid = false;

            }



            /* Phone validation */


            if (
                phoneField.value.trim() === ""
            ) {

                phoneError.textContent =
                    "Please enter your phone number.";

                formIsValid = false;

            }

            else {

                const phonePattern =
                    /^[0-9()\-\s+]{10,}$/;


                if (
                    !phonePattern.test(
                        phoneField.value.trim()
                    )
                ) {

                    phoneError.textContent =
                        "Please enter a valid phone number.";

                    formIsValid = false;

                }

            }



            /* Subject validation */


            if (
                subjectField.value.trim() === ""
            ) {

                subjectError.textContent =
                    "Please enter a subject.";

                formIsValid = false;

            }



            /* Message validation */


            if (
                messageField.value.trim() === ""
            ) {

                messageError.textContent =
                    "Please enter a message.";

                formIsValid = false;

            }



            /* Display validation result */


            if (!formIsValid) {

                formMessage.textContent =
                    "Please correct the errors above.";

                formMessage.classList.add(
                    "form-error"
                );

                return;

            }



            formMessage.textContent =
                "Form submitted successfully! All fields are valid.";


            formMessage.classList.add(
                "form-success"
            );

        }
    );



    /* Clear name error */


    nameField.addEventListener(
        "input",
        function () {

            if (
                nameField.value.trim() !== ""
            ) {

                nameError.textContent = "";

            }

        }
    );



    /* Clear email error automatically */


    emailField.addEventListener(
        "input",
        function () {

            if (
                emailField.value.trim() !== "" &&
                emailField.validity.valid
            ) {

                emailError.textContent = "";

            }

        }
    );



    /* Clear phone error automatically */


    phoneField.addEventListener(
        "input",
        function () {

            const phonePattern =
                /^[0-9()\-\s+]{10,}$/;


            if (
                phoneField.value.trim() !== "" &&
                phonePattern.test(
                    phoneField.value.trim()
                )
            ) {

                phoneError.textContent = "";

            }

        }
    );



    /* Clear subject error */


    subjectField.addEventListener(
        "input",
        function () {

            if (
                subjectField.value.trim() !== ""
            ) {

                subjectError.textContent = "";

            }

        }
    );



    /* Clear message error */


    messageField.addEventListener(
        "input",
        function () {

            if (
                messageField.value.trim() !== ""
            ) {

                messageError.textContent = "";

            }

        }
    );

}



/* Dynamic Skills List */


const skillInput =
    document.querySelector("#skillInput");


const addSkillButton =
    document.querySelector("#addSkillButton");


const skillList =
    document.querySelector("#skillList");


if (
    skillInput &&
    addSkillButton &&
    skillList
) {


    function addSkill() {


        const skillText =
            skillInput.value.trim();


        if (
            skillText === ""
        ) {

            skillInput.focus();

            return;

        }



        const listItem =
            document.createElement("li");


        listItem.textContent =
            skillText + " ";



        const removeButton =
            document.createElement("button");


        removeButton.textContent =
            "Remove";


        removeButton.type =
            "button";


        removeButton.classList.add(
            "remove-skill"
        );



        removeButton.addEventListener(
            "click",
            function () {

                listItem.remove();

            }
        );



        listItem.appendChild(
            removeButton
        );


        skillList.appendChild(
            listItem
        );


        skillInput.value = "";


        skillInput.focus();

    }



    addSkillButton.addEventListener(
        "click",
        addSkill
    );



    skillInput.addEventListener(
        "keydown",
        function (event) {

            if (
                event.key === "Enter"
            ) {

                event.preventDefault();

                addSkill();

            }

        }
    );



    const existingRemoveButtons =
        document.querySelectorAll(
            ".remove-skill"
        );


    existingRemoveButtons.forEach(
        function (button) {

            button.addEventListener(
                "click",
                function () {

                    button.parentElement.remove();

                }
            );

        }
    );

}



/* Homework 8 API Fetch Bonus */


const quoteButton =
    document.querySelector("#quoteButton");


const quoteResult =
    document.querySelector("#quoteResult");


if (
    quoteButton &&
    quoteResult
) {


    quoteButton.addEventListener(
        "click",
        function () {


            quoteResult.textContent =
                "Loading quote...";


            fetch(
                "https://dummyjson.com/quotes/random"
            )


            .then(
                function (response) {


                    if (!response.ok) {

                        throw new Error(
                            "Unable to retrieve quote."
                        );

                    }


                    return response.json();

                }
            )


            .then(
                function (data) {


                    quoteResult.textContent =
                        `"${data.quote}" — ${data.author}`;

                }
            )


            .catch(
                function (error) {


                    quoteResult.textContent =
                        "Sorry, the quote could not be loaded. Please try again.";


                    console.error(error);

                }
            );

        }
    );

}