document.addEventListener("DOMContentLoaded", function () {


    /* =========================================
       DARK MODE
    ========================================= */

    const themeButtons =
        document.querySelectorAll(".theme-button");


    function updateThemeButtons(isDark) {

        themeButtons.forEach(function (button) {

            button.textContent =
                isDark
                    ? "Light Theme"
                    : "Dark Theme";

            button.setAttribute(
                "aria-label",
                isDark
                    ? "Switch to light mode"
                    : "Switch to dark mode"
            );

        });

    }


    function setTheme(isDark) {

        document.body.classList.toggle(
            "dark-mode",
            isDark
        );

        localStorage.setItem(
            "theme",
            isDark
                ? "dark"
                : "light"
        );

        updateThemeButtons(isDark);

    }


    const savedTheme =
        localStorage.getItem("theme");


    setTheme(savedTheme === "dark");


    themeButtons.forEach(function (button) {

        button.addEventListener(
            "click",
            function () {

                const isDark =
                    document.body.classList.contains(
                        "dark-mode"
                    );

                setTheme(!isDark);

            }
        );

    });



    /* =========================================
       TIME-BASED WELCOME MESSAGE
    ========================================= */

    const welcomeMessage =
        document.querySelector(
            "#welcomeMessage"
        );


    if (welcomeMessage) {

        const hour =
            new Date().getHours();


        if (hour < 12) {

            welcomeMessage.textContent =
                "Good morning! Welcome to my portfolio.";

        } else if (hour < 18) {

            welcomeMessage.textContent =
                "Good afternoon! Welcome to my portfolio.";

        } else {

            welcomeMessage.textContent =
                "Good evening! Welcome to my portfolio.";

        }

    }



    /* =========================================
       INTERACTIVE HOME MESSAGE
    ========================================= */

    const messageButton =
        document.querySelector(
            "#messageButton"
        );


    const interactiveMessage =
        document.querySelector(
            "#interactiveMessage"
        );


    if (
        messageButton &&
        interactiveMessage
    ) {

        messageButton.addEventListener(
            "click",
            function () {

                const messages = [

                    "Thanks for checking out my portfolio!",

                    "Keep learning. Keep building. Keep leveling up!",

                    "Go Hawks! 💙💚",

                    "Every bug is another training arc.",

                    "IT is about solving problems and never giving up.",

                    "Welcome to the source-code huddle!"

                ];


                const randomIndex =
                    Math.floor(
                        Math.random() *
                        messages.length
                    );


                interactiveMessage.textContent =
                    messages[randomIndex];

            }
        );

    }



    /* =========================================
       ABOUT PAGE FINAL MESSAGE
    ========================================= */

    const finalMessageButton =
        document.querySelector(
            "#finalMessageButton"
        );


    const finalMessage =
        document.querySelector(
            "#finalMessage"
        );


    if (
        finalMessageButton &&
        finalMessage
    ) {

        finalMessageButton.addEventListener(
            "click",
            function () {

                finalMessage.textContent =
                    "You made it all the way to the bottom! Thanks for checking out my story, my work, and my journey into IT. Keep learning, keep building, and keep leveling up! Go Hawks! 💙💚";

            }
        );

    }



    /* =========================================
       PROJECT FILTERS
    ========================================= */

    const filterButtons =
        document.querySelectorAll(
            ".filter-button"
        );


    const projectCards =
        document.querySelectorAll(
            ".project-card"
        );


    if (
        filterButtons.length &&
        projectCards.length
    ) {

        filterButtons.forEach(
            function (button) {

                button.addEventListener(
                    "click",
                    function () {

                        const filter =
                            button.dataset.filter;


                        filterButtons.forEach(
                            function (item) {

                                item.classList.remove(
                                    "active"
                                );

                                item.setAttribute(
                                    "aria-pressed",
                                    "false"
                                );

                            }
                        );


                        button.classList.add(
                            "active"
                        );


                        button.setAttribute(
                            "aria-pressed",
                            "true"
                        );


                        projectCards.forEach(
                            function (card) {

                                const show =
                                    filter === "all" ||
                                    card.dataset.category === filter;


                                card.classList.toggle(
                                    "is-hidden",
                                    !show
                                );

                            }
                        );

                    }
                );

            }
        );

    }



    /* =========================================
       CONTACT FORM VALIDATION
    ========================================= */

    const contactForm =
        document.querySelector(
            "#contactForm"
        );


    if (contactForm) {

        const fields = {

            name: {
                input:
                    document.querySelector(
                        "#name-id-input"
                    ),

                error:
                    document.querySelector(
                        "#nameError"
                    ),

                message:
                    "Please enter your name."
            },


            email: {
                input:
                    document.querySelector(
                        "#email-id"
                    ),

                error:
                    document.querySelector(
                        "#emailError"
                    ),

                message:
                    "Please enter your email."
            },


            phone: {
                input:
                    document.querySelector(
                        "#phone"
                    ),

                error:
                    document.querySelector(
                        "#phoneError"
                    ),

                message:
                    "Please enter your phone number."
            },


            subject: {
                input:
                    document.querySelector(
                        "#subject"
                    ),

                error:
                    document.querySelector(
                        "#subjectError"
                    ),

                message:
                    "Please enter a subject."
            },


            message: {
                input:
                    document.querySelector(
                        "#message"
                    ),

                error:
                    document.querySelector(
                        "#messageError"
                    ),

                message:
                    "Please enter a message."
            }

        };


        const formMessage =
            document.querySelector(
                "#formMessage"
            );



        function clearError(field) {

            if (field.error) {

                field.error.textContent =
                    "";

            }


            if (field.input) {

                field.input.removeAttribute(
                    "aria-invalid"
                );

            }

        }



        function showError(
            field,
            message
        ) {

            if (field.error) {

                field.error.textContent =
                    message;

            }


            if (field.input) {

                field.input.setAttribute(
                    "aria-invalid",
                    "true"
                );

            }

        }



        /* Clear errors while typing */

        Object.values(fields).forEach(
            function (field) {

                if (field.input) {

                    field.input.addEventListener(
                        "input",
                        function () {

                            clearError(field);


                            if (formMessage) {

                                formMessage.textContent =
                                    "";

                            }

                        }
                    );

                }

            }
        );



        /* Submit validation */

        contactForm.addEventListener(
            "submit",
            function (event) {

                event.preventDefault();


                let valid = true;



                /* Clear old errors */

                Object.values(fields).forEach(
                    function (field) {

                        clearError(field);

                    }
                );



                /* Required fields */

                Object.values(fields).forEach(
                    function (field) {

                        if (
                            field.input &&
                            field.input.value.trim() === ""
                        ) {

                            showError(
                                field,
                                field.message
                            );

                            valid = false;

                        }

                    }
                );



                /* Email validation */

                if (
                    fields.email.input &&
                    fields.email.input.value.trim() !== ""
                ) {

                    const emailPattern =
                        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


                    if (
                        !emailPattern.test(
                            fields.email.input.value.trim()
                        )
                    ) {

                        showError(
                            fields.email,
                            "Please enter a valid email."
                        );

                        valid = false;

                    }

                }



                /* Phone validation */

                if (
                    fields.phone.input &&
                    fields.phone.input.value.trim() !== ""
                ) {

                    const phonePattern =
                        /^[0-9()+\-\s.]{7,20}$/;


                    if (
                        !phonePattern.test(
                            fields.phone.input.value.trim()
                        )
                    ) {

                        showError(
                            fields.phone,
                            "Please enter a valid phone number."
                        );

                        valid = false;

                    }

                }



                /* Form result */

                if (formMessage) {

                    if (valid) {

                        formMessage.textContent =
                            "Thank you! Your message passed validation.";

                    } else {

                        formMessage.textContent =
                            "Please correct the errors above before submitting.";

                    }

                }



                /* Reset after successful validation */

                if (valid) {

                    contactForm.reset();


                    Object.values(fields).forEach(
                        function (field) {

                            clearError(field);

                        }
                    );

                }

            }
        );

    }



    /* =========================================
       AUTOMATIC COPYRIGHT YEAR
    ========================================= */

    const yearElement =
        document.querySelector(
            "#year"
        );


    if (yearElement) {

        yearElement.textContent =
            new Date().getFullYear();

    }

});