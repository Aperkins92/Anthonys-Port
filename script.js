const themeButton = document.getElementById("themeButton");


if(themeButton){

themeButton.addEventListener("click", function(){

document.body.classList.toggle("dark-mode");

});

}



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





const year = document.getElementById("year");


if(year){

year.textContent = new Date().getFullYear();

}




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