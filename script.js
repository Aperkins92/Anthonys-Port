document.addEventListener("DOMContentLoaded", function () {

    /*
       01000111 01101111 00100000 01001000 01100001
       01110111 01101011 01110011
    */

    /*
       Learn -> Practice -> Fail -> Improve -> Level Up
    */

    /*
       The bug is not the final boss.
       It is just the next training arc.
    */

    /*
       Blue outside. Green inside. JavaScript underneath.
    */


    /* =========================================================
       MOBILE MENU
    ========================================================= */

    const menuButton = document.querySelector("#menuButton");
    const navMenu = document.querySelector("#navMenu");

    if (menuButton && navMenu) {
        menuButton.addEventListener("click", function () {

            navMenu.classList.toggle("show");

            const expanded =
                navMenu.classList.contains("show");

            menuButton.setAttribute(
                "aria-expanded",
                expanded
            );
        });
    }


    /* =========================================================
       DARK MODE
    ========================================================= */

    const themeButtons =
        document.querySelectorAll(".theme-button");

    function updateThemeButtons(isDark) {

        themeButtons.forEach(function (button) {

            button.textContent = isDark
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


    function enableDarkMode() {

        document.body.classList.add("dark-mode");

        localStorage.setItem(
            "theme",
            "dark"
        );

        updateThemeButtons(true);
    }


    function disableDarkMode() {

        document.body.classList.remove("dark-mode");

        localStorage.setItem(
            "theme",
            "light"
        );

        updateThemeButtons(false);
    }


    const savedTheme =
        localStorage.getItem("theme");

    if (savedTheme === "dark") {

        enableDarkMode();

    } else {

        disableDarkMode();
    }


    themeButtons.forEach(function (button) {

        button.addEventListener(
            "click",
            function () {

                if (
                    document.body.classList.contains(
                        "dark-mode"
                    )
                ) {

                    disableDarkMode();

                } else {

                    enableDarkMode();
                }
            }
        );
    });


    /* =========================================================
       TIME-BASED WELCOME MESSAGE
    ========================================================= */

    const welcomeMessage =
        document.querySelector("#welcomeMessage");

    if (welcomeMessage) {

        const currentHour =
            new Date().getHours();

        if (currentHour < 12) {

            welcomeMessage.textContent =
                "Good morning! Welcome to my portfolio.";

        } else if (currentHour < 18) {

            welcomeMessage.textContent =
                "Good afternoon! Welcome to my portfolio.";

        } else {

            welcomeMessage.textContent =
                "Good evening! Welcome to my portfolio.";
        }
    }


    /* =========================================================
       INTERACTIVE MESSAGE BUTTON
    ========================================================= */

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


    /* =========================================================
       SMOOTH SCROLLING
    ========================================================= */

    const links =
        document.querySelectorAll(
            'a[href^="#"]'
        );

    links.forEach(function (link) {

        link.addEventListener(
            "click",
            function (event) {

                const targetID =
                    link.getAttribute("href");

                if (
                    !targetID ||
                    targetID === "#"
                ) {

                    return;
                }


                const target =
                    document.querySelector(
                        targetID
                    );


                if (target) {

                    event.preventDefault();

                    target.scrollIntoView({
                        behavior: "smooth"
                    });
                }
            }
        );
    });


    /* =========================================================
       SKILLS LIST
    ========================================================= */

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

        addSkillButton.addEventListener(
            "click",
            function () {

                const skill =
                    skillInput.value.trim();


                if (skill === "") {

                    return;
                }


                const listItem =
                    document.createElement("li");


                listItem.textContent =
                    skill;


                skillList.appendChild(
                    listItem
                );


                skillInput.value = "";


                skillInput.focus();
            }
        );


        skillInput.addEventListener(
            "keydown",
            function (event) {

                if (event.key === "Enter") {

                    event.preventDefault();

                    addSkillButton.click();
                }
            }
        );
    }


    /* =========================================================
       IT GOALS BUTTON
    ========================================================= */

    const goalsButton =
        document.querySelector("#goalsButton");

    const goalsMessage =
        document.querySelector("#goalsMessage");


    if (
        goalsButton &&
        goalsMessage
    ) {

        goalsButton.addEventListener(
            "click",
            function () {

                goalsMessage.textContent =
                    "My goal is to keep building my IT skills, " +
                    "create useful projects, solve problems, " +
                    "and continue leveling up one project at a time.";
            }
        );
    }


    /* =========================================================
       MOVIE QUOTE GENERATOR
    ========================================================= */

    const movieQuoteButton =
        document.querySelector(
            "#movieQuoteButton"
        );

    const movieQuoteResult =
        document.querySelector(
            "#movieQuoteResult"
        );


    const movieQuotes = [

        {
            quote: "May the Force be with you.",
            movie: "Star Wars"
        },

        {
            quote: "I'll be back.",
            movie: "The Terminator"
        },

        {
            quote: "Why so serious?",
            movie: "The Dark Knight"
        },

        {
            quote: "There's no place like home.",
            movie: "The Wizard of Oz"
        },

        {
            quote: "You talking to me?",
            movie: "Taxi Driver"
        },

        {
            quote:
                "Keep your friends close, but your enemies closer.",
            movie: "The Godfather Part II"
        },

        {
            quote: "Just keep swimming.",
            movie: "Finding Nemo"
        },

        {
            quote: "To infinity and beyond!",
            movie: "Toy Story"
        },

        {
            quote: "Houston, we have a problem.",
            movie: "Apollo 13"
        },

        {
            quote: "I see dead people.",
            movie: "The Sixth Sense"
        }

    ];


    if (
        movieQuoteButton &&
        movieQuoteResult
    ) {

        movieQuoteButton.addEventListener(
            "click",
            function () {

                const randomIndex =
                    Math.floor(
                        Math.random() *
                        movieQuotes.length
                    );


                const selectedQuote =
                    movieQuotes[randomIndex];


                movieQuoteResult.textContent =
                    `“${selectedQuote.quote}” — ${selectedQuote.movie}`;
            }
        );
    }


    /* =========================================================
       RANDOM MOTIVATION QUOTE
    ========================================================= */

    const quoteButton =
        document.querySelector("#quoteButton");

    const quoteResult =
        document.querySelector("#quoteResult");


    const fallbackQuotes = [

        {
            quote:
                "The secret of getting ahead is getting started.",
            author: "Mark Twain"
        },

        {
            quote:
                "Success is the sum of small efforts, repeated day in and day out.",
            author: "Robert Collier"
        },

        {
            quote:
                "It always seems impossible until it's done.",
            author: "Nelson Mandela"
        },

        {
            quote:
                "Great things are done by a series of small things brought together.",
            author: "Vincent van Gogh"
        },

        {
            quote:
                "The future depends on what you do today.",
            author: "Mahatma Gandhi"
        },

        {
            quote:
                "Do what you can, with what you have, where you are.",
            author: "Theodore Roosevelt"
        }

    ];


    function showFallbackQuote() {

        if (!quoteResult) {

            return;
        }


        const randomIndex =
            Math.floor(
                Math.random() *
                fallbackQuotes.length
            );


        const selectedQuote =
            fallbackQuotes[randomIndex];


        quoteResult.textContent =
            `“${selectedQuote.quote}” — ${selectedQuote.author}`;
    }


    if (
        quoteButton &&
        quoteResult
    ) {

        quoteButton.addEventListener(
            "click",
            async function () {

                quoteResult.textContent =
                    "Loading quote...";


                try {

                    const response =
                        await fetch(
                            "https://dummyjson.com/quotes/random",
                            {
                                method: "GET",
                                cache: "no-store"
                            }
                        );


                    if (!response.ok) {

                        throw new Error(
                            "Quote API request failed."
                        );
                    }


                    const data =
                        await response.json();


                    if (
                        !data.quote ||
                        !data.author
                    ) {

                        throw new Error(
                            "Quote API returned incomplete data."
                        );
                    }


                    quoteResult.textContent =
                        `“${data.quote}” — ${data.author}`;


                } catch (error) {

                    console.warn(
                        "Online quote unavailable. Using local quote.",
                        error
                    );


                    showFallbackQuote();
                }
            }
        );
    }


    /* =========================================================
       CONTACT FORM VALIDATION
    ========================================================= */

    const contactForm =
        document.querySelector("#contactForm");


    if (contactForm) {

        contactForm.addEventListener(
            "submit",
            function (event) {

                event.preventDefault();


                let valid = true;


                const name =
                    document.querySelector(
                        "#name-id-input"
                    );


                const email =
                    document.querySelector(
                        "#email-id"
                    );


                const phone =
                    document.querySelector(
                        "#phone"
                    );


                const subject =
                    document.querySelector(
                        "#subject"
                    );


                const message =
                    document.querySelector(
                        "#message"
                    );


                const nameError =
                    document.querySelector(
                        "#nameError"
                    );


                const emailError =
                    document.querySelector(
                        "#emailError"
                    );


                const phoneError =
                    document.querySelector(
                        "#phoneError"
                    );


                const subjectError =
                    document.querySelector(
                        "#subjectError"
                    );


                const messageError =
                    document.querySelector(
                        "#messageError"
                    );


                const formMessage =
                    document.querySelector(
                        "#formMessage"
                    );


                /* Clear errors */

                if (nameError) {

                    nameError.textContent = "";
                }


                if (emailError) {

                    emailError.textContent = "";
                }


                if (phoneError) {

                    phoneError.textContent = "";
                }


                if (subjectError) {

                    subjectError.textContent = "";
                }


                if (messageError) {

                    messageError.textContent = "";
                }


                if (formMessage) {

                    formMessage.textContent = "";
                }


                /* Name */

                if (
                    name &&
                    name.value.trim() === ""
                ) {

                    if (nameError) {

                        nameError.textContent =
                            "Please enter your name.";
                    }


                    valid = false;
                }


                /* Email */

                if (email) {

                    const emailPattern =
                        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


                    if (
                        email.value.trim() === ""
                    ) {

                        if (emailError) {

                            emailError.textContent =
                                "Please enter your email.";
                        }


                        valid = false;


                    } else if (
                        !emailPattern.test(
                            email.value.trim()
                        )
                    ) {

                        if (emailError) {

                            emailError.textContent =
                                "Please enter a valid email.";
                        }


                        valid = false;
                    }
                }


                /* Phone */

                if (
                    phone &&
                    phone.value.trim() !== ""
                ) {

                    const phonePattern =
                        /^[0-9()+\-\s.]{7,20}$/;


                    if (
                        !phonePattern.test(
                            phone.value.trim()
                        )
                    ) {

                        if (phoneError) {

                            phoneError.textContent =
                                "Please enter a valid phone number.";
                        }


                        valid = false;
                    }
                }


                /* Subject */

                if (
                    subject &&
                    subject.value.trim() === ""
                ) {

                    if (subjectError) {

                        subjectError.textContent =
                            "Please enter a subject.";
                    }


                    valid = false;
                }


                /* Message */

                if (
                    message &&
                    message.value.trim() === ""
                ) {

                    if (messageError) {

                        messageError.textContent =
                            "Please enter a message.";
                    }


                    valid = false;
                }


                /* Successful form */

                if (valid) {

                    if (formMessage) {

                        formMessage.textContent =
                            "Thank you! Your message is ready to be sent.";
                    }


                    contactForm.reset();
                }

            }
        );
    }


    /* =========================================================
       AUTOMATIC COPYRIGHT YEAR
    ========================================================= */

    const yearElement =
        document.querySelector("#year");


    if (yearElement) {

        yearElement.textContent =
            new Date().getFullYear();
    }


    /* =========================================================
       IMAGE ERROR HANDLING
    ========================================================= */

    const images =
        document.querySelectorAll("img");


    images.forEach(function (image) {

        image.addEventListener(
            "error",
            function () {

                console.warn(
                    "Image could not be loaded:",
                    image.src
                );


                image.alt =
                    "Portfolio image could not be loaded.";
            }
        );
    });


    console.log(
        "💙💚 GO HAWKS!"
    );


    console.log(
        "Anime training arc activated."
    );


    console.log(
        "If you're reading this, you found the developer huddle."
    );

});