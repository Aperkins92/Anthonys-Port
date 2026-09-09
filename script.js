/* =========================================================
   PORTFOLIO JAVASCRIPT
   Seahawks energy + anime training arc included.
========================================================= */


/* =========================================================
   WAIT FOR PAGE
========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        initializeTheme();

        initializeGreeting();

        initializeYear();

        initializeInteractiveMessage();

        initializeSportsQuote();

        initializeContactForm();

        initializeSkills();

        initializeMovieQuotes();

        initializeGoals();

        initializeRandomQuote();

    }
);


/* =========================================================
   DARK MODE
========================================================= */

function initializeTheme() {

    const themeButton =
        document.getElementById(
            "themeButton"
        );

    if (!themeButton) {
        return;
    }


    const savedTheme =
        localStorage.getItem(
            "portfolioTheme"
        );


    if (savedTheme === "dark") {

        document.body.classList.add(
            "dark-mode"
        );

        themeButton.textContent =
            "Light Mode";
    }


    else {

        themeButton.textContent =
            "Dark Mode";
    }


    themeButton.addEventListener(
        "click",
        function () {

            document.body.classList.toggle(
                "dark-mode"
            );


            const isDark =
                document.body.classList.contains(
                    "dark-mode"
                );


            localStorage.setItem(
                "portfolioTheme",
                isDark
                    ? "dark"
                    : "light"
            );


            themeButton.textContent =
                isDark
                    ? "Light Mode"
                    : "Dark Mode";

        }
    );

}


/* =========================================================
   TIME GREETING
========================================================= */

function initializeGreeting() {

    const welcomeMessage =
        document.getElementById(
            "welcomeMessage"
        );

    if (!welcomeMessage) {
        return;
    }


    const hour =
        new Date().getHours();


    let greeting;


    if (hour < 12) {

        greeting =
            "Good morning. Thanks for stopping by.";

    }

    else if (hour < 18) {

        greeting =
            "Good afternoon. Welcome to my portfolio.";

    }

    else {

        greeting =
            "Good evening. Welcome to my portfolio.";

    }


    welcomeMessage.textContent =
        greeting;

}


/* =========================================================
   COPYRIGHT YEAR
========================================================= */

function initializeYear() {

    const year =
        document.getElementById(
            "year"
        );

    if (!year) {
        return;
    }


    year.textContent =
        new Date().getFullYear();

}


/* =========================================================
   INTERACTIVE MESSAGE
========================================================= */

function initializeInteractiveMessage() {

    const messageButton =
        document.getElementById(
            "messageButton"
        );

    const interactiveMessage =
        document.getElementById(
            "interactiveMessage"
        );


    if (
        !messageButton ||
        !interactiveMessage
    ) {

        return;

    }


    const messages = [

        "Football taught me to study the game. Production taught me to solve problems. IT gives me a new field to do both.",

        "The best skill I learned working live events is staying calm when something changes.",

        "Every new project is another chance to level up.",

        "The next play is always the one that matters.",

        "Different environments. Same goal: figure it out and get it done."

    ];


    messageButton.addEventListener(
        "click",
        function () {

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
   SPORTS QUOTE API
========================================================= */

function initializeSportsQuote() {

    const button =
        document.getElementById(
            "sportsQuoteButton"
        );

    const result =
        document.getElementById(
            "sportsQuoteResult"
        );


    if (!button || !result) {
        return;
    }


    button.addEventListener(
        "click",
        async function () {

            result.textContent =
                "Loading motivation...";


            try {

                const response =
                    await fetch(
                        "https://dummyjson.com/quotes/random"
                    );


                if (!response.ok) {

                    throw new Error(
                        "Quote request failed."
                    );

                }


                const data =
                    await response.json();


                result.textContent =
                    `"${data.quote}" — ${data.author}`;

            }

            catch (error) {

                result.textContent =
                    "The play broke down, but the next one is coming. Try again.";

            }

        }
    );

}


/* =========================================================
   CONTACT FORM
========================================================= */

function initializeContactForm() {

    const form =
        document.getElementById(
            "contactForm"
        );


    if (!form) {
        return;
    }


    const nameInput =
        document.getElementById(
            "name-id-input"
        );

    const emailInput =
        document.getElementById(
            "email-id"
        );

    const phoneInput =
        document.getElementById(
            "phone"
        );

    const subjectInput =
        document.getElementById(
            "subject"
        );

    const messageInput =
        document.getElementById(
            "message"
        );


    const nameError =
        document.getElementById(
            "nameError"
        );

    const emailError =
        document.getElementById(
            "emailError"
        );

    const phoneError =
        document.getElementById(
            "phoneError"
        );

    const subjectError =
        document.getElementById(
            "subjectError"
        );

    const messageError =
        document.getElementById(
            "messageError"
        );

    const formMessage =
        document.getElementById(
            "formMessage"
        );


    form.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();


            let isValid = true;


            nameError.textContent = "";

            emailError.textContent = "";

            phoneError.textContent = "";

            subjectError.textContent = "";

            messageError.textContent = "";

            formMessage.textContent = "";

            formMessage.className = "";


            /* NAME */

            if (
                nameInput.value.trim().length <
                2
            ) {

                nameError.textContent =
                    "Please enter your name.";

                isValid = false;

            }


            /* EMAIL */

            const emailPattern =
                /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


            if (
                !emailPattern.test(
                    emailInput.value.trim()
                )
            ) {

                emailError.textContent =
                    "Please enter a valid email address.";

                isValid = false;

            }


            /* PHONE */

            const phoneValue =
                phoneInput.value.trim();


            if (
                phoneValue.length > 0 &&
                !/^[0-9()+\-\s.]{7,}$/.test(
                    phoneValue
                )
            ) {

                phoneError.textContent =
                    "Please enter a valid phone number.";

                isValid = false;

            }


            /* SUBJECT */

            if (
                subjectInput.value.trim().length <
                2
            ) {

                subjectError.textContent =
                    "Please enter a subject.";

                isValid = false;

            }


            /* MESSAGE */

            if (
                messageInput.value.trim().length <
                10
            ) {

                messageError.textContent =
                    "Please enter a message with at least 10 characters.";

                isValid = false;

            }


            if (!isValid) {

                formMessage.textContent =
                    "Please correct the highlighted fields.";

                formMessage.className =
                    "form-error";

                return;

            }


            formMessage.textContent =
                "Thanks! Your message passed validation. This demo form does not send email yet.";

            formMessage.className =
                "form-success";


            form.reset();

        }
    );

}


/* =========================================================
   DYNAMIC SKILLS
========================================================= */

function initializeSkills() {

    const input =
        document.getElementById(
            "skillInput"
        );

    const addButton =
        document.getElementById(
            "addSkillButton"
        );

    const skillList =
        document.getElementById(
            "skillList"
        );


    if (
        !input ||
        !addButton ||
        !skillList
    ) {

        return;

    }


    function addSkill() {

        const skill =
            input.value.trim();


        if (skill === "") {

            return;

        }


        const listItem =
            document.createElement(
                "li"
            );


        const skillText =
            document.createElement(
                "span"
            );


        skillText.textContent =
            skill;


        const removeButton =
            document.createElement(
                "button"
            );


        removeButton.type =
            "button";


        removeButton.className =
            "remove-skill";


        removeButton.textContent =
            "Remove";


        removeButton.addEventListener(
            "click",
            function () {

                listItem.remove();

            }
        );


        listItem.appendChild(
            skillText
        );


        listItem.appendChild(
            removeButton
        );


        skillList.appendChild(
            listItem
        );


        input.value = "";

        input.focus();

    }


    addButton.addEventListener(
        "click",
        addSkill
    );


    input.addEventListener(
        "keydown",
        function (event) {

            if (
                event.key ===
                "Enter"
            ) {

                event.preventDefault();

                addSkill();

            }

        }
    );


    document
        .querySelectorAll(
            ".remove-skill"
        )
        .forEach(
            function (button) {

                button.addEventListener(
                    "click",
                    function () {

                        button
                            .parentElement
                            .remove();

                    }
                );

            }
        );

}


/* =========================================================
   MOVIE QUOTES
========================================================= */

function initializeMovieQuotes() {

    const button =
        document.getElementById(
            "movieQuoteButton"
        );

    const result =
        document.getElementById(
            "movieQuoteResult"
        );


    if (!button || !result) {
        return;
    }


    const movieQuotes = [

        {
            quote:
                "May the Force be with you.",
            movie:
                "Star Wars"
        },

        {
            quote:
                "I'll be back.",
            movie:
                "The Terminator"
        },

        {
            quote:
                "There's no place like home.",
            movie:
                "The Wizard of Oz"
        },

        {
            quote:
                "Why so serious?",
            movie:
                "The Dark Knight"
        },

        {
            quote:
                "Keep your friends close, but your enemies closer.",
            movie:
                "The Godfather Part II"
        },

        {
            quote:
                "To infinity and beyond!",
            movie:
                "Toy Story"
        },

        {
            quote:
                "Just keep swimming.",
            movie:
                "Finding Nemo"
        },

        {
            quote:
                "I feel the need—the need for speed.",
            movie:
                "Top Gun"
        }

    ];


    button.addEventListener(
        "click",
        function () {

            const randomIndex =
                Math.floor(
                    Math.random() *
                    movieQuotes.length
                );


            const selected =
                movieQuotes[
                    randomIndex
                ];


            result.textContent =
                `"${selected.quote}" — ${selected.movie}`;

        }
    );

}


/* =========================================================
   IT GOALS
========================================================= */

function initializeGoals() {

    const button =
        document.getElementById(
            "goalsButton"
        );

    const message =
        document.getElementById(
            "goalsMessage"
        );


    if (!button || !message) {
        return;
    }


    const goals = [

        "Continue improving HTML, CSS, and JavaScript skills.",

        "Build more responsive and accessible websites.",

        "Develop stronger programming and troubleshooting abilities.",

        "Learn more about networking and databases.",

        "Explore cybersecurity concepts.",

        "Create projects that solve practical problems.",

        "Continue connecting real-world experience with technology."

    ];


    button.addEventListener(
        "click",
        function () {

            message.innerHTML = "";


            const heading =
                document.createElement(
                    "strong"
                );


            heading.textContent =
                "My current goals:";


            const list =
                document.createElement(
                    "ul"
                );


            goals.forEach(
                function (goal) {

                    const item =
                        document.createElement(
                            "li"
                        );


                    item.textContent =
                        goal;


                    list.appendChild(
                        item
                    );

                }
            );


            message.appendChild(
                heading
            );


            message.appendChild(
                list
            );

        }
    );

}


/* =========================================================
   RANDOM QUOTE API
========================================================= */

function initializeRandomQuote() {

    const button =
        document.getElementById(
            "quoteButton"
        );

    const result =
        document.getElementById(
            "quoteResult"
        );


    if (!button || !result) {
        return;
    }


    button.addEventListener(
        "click",
        async function () {

            result.textContent =
                "Loading quote...";


            try {

                const response =
                    await fetch(
                        "https://dummyjson.com/quotes/random"
                    );


                if (!response.ok) {

                    throw new Error(
                        "Unable to retrieve quote."
                    );

                }


                const data =
                    await response.json();


                result.textContent =
                    `"${data.quote}" — ${data.author}`;

            }

            catch (error) {

                result.textContent =
                    "Unable to load a quote right now. Please try again.";

            }

        }
    );

}


/*
    01001000 01100101 01101100 01101100 01101111

    Hello.

    Even debugging deserves a training arc.
*/