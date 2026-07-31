const themeButton = document.getElementById("themeButton");


// Load saved theme when page opens

const savedTheme = localStorage.getItem("theme");


if(savedTheme === "dark"){

    document.body.classList.add("dark-mode");

}



// Dark mode button

if(themeButton){

    themeButton.addEventListener("click", function(){

        document.body.classList.toggle("dark-mode");


        if(document.body.classList.contains("dark-mode")){

            localStorage.setItem("theme", "dark");

        }

        else{

            localStorage.setItem("theme", "light");

        }

    });

}





// Welcome message based on time

const welcomeMessage = document.getElementById("welcomeMessage");


if(welcomeMessage){


    let hour = new Date().getHours();


    if(hour < 12){

        welcomeMessage.textContent =
        "Good morning! Thanks for visiting my portfolio.";

    }

    else if(hour < 18){

        welcomeMessage.textContent =
        "Good afternoon! Thanks for checking out my work.";

    }

    else{

        welcomeMessage.textContent =
        "Good evening! Welcome to my portfolio.";

    }


}





// Update copyright year

const year = document.getElementById("year");


if(year){

    year.textContent = new Date().getFullYear();

}





// Project filter function

function filterProjects(category){


    const projects=document.querySelectorAll(".project");


    projects.forEach(function(project){


        if(category==="all"){

            project.style.display="block";

        }

        else if(project.classList.contains(category)){

            project.style.display="block";

        }
        else{

            project.style.display="none";

        }
    });
}