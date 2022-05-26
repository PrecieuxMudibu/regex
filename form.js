let email = document.querySelector("#email");
let nom = document.querySelector("#nom");
let form = document.querySelector("form");
let forgetNom = document.querySelector(".forget-name");
let forgetEmail = document.querySelector(".forget-email");

let home = document.querySelector(".home");
let bienvenue = document.querySelector(".bienvenue");

let masque = /\s/g; // Caractères blancs
let masqueEmail = /@gmail.com$/;
form.addEventListener("submit", function (event) {
    event.preventDefault();
    
    if (masque.test(nom.value) || !(masqueEmail.test(email.value)) || email.value=="" || nom.value=="") {

        if (masque.test(nom.value) || nom.value=="") {
            forgetNom.style.display="block";
            forgetNom.textContent="Pas de caractères blancs";  
        }
    
        if (!(masqueEmail.test(email.value)) || email.value=="") {
            forgetEmail.style.display="block";
            forgetEmail.textContent="Ecrivez correctement votre email";  
        }          
    }
    else {
        bienvenue.style.display = "block";
        home.style.display = "none";
    } 

})