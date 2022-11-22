var cpt =0;
// Validation de nom 
function validenom() {
    let nom = document.getElementById("nom");
    let vnom = document.getElementById("Vnom");
    if (nom.value.match(/[0-9]/g)) {
        nom.style.border ="2px solid red";
        vnom.innerHTML ="Pas de nombres SVP";
        cpt = 1;
    }else if (nom.value.match(/[()}{&"|°+*%.,:!/$'']/g)) {
        nom.style.border ="2px solid red";
        vnom.innerHTML ="Pas de caractères SVP";
    }
    else if (nom.value.length > 30 ){
        nom.style.border ="2px solid red";
        vnom.innerHTML = "Nom trop long";
        cpt = 1;
    }else if (nom.value.length < 3){
       nom.style.border ="2px solid red";
        vnom.innerHTML = "Nom trop court";
        cpt = 1;
    }else{
        nom.style.border ="2px solid green";
        vnom.innerText="Valider";
        cpt =0;
        }
}

//Validation de prenom:
function valideprenom() {
    let prenom = document.getElementById("prenom");
    let vprenom = document.getElementById("Vprenom");
     if (prenom.value.match(/[0-9]/g) ) {
        prenom.style.border ="2px solid red";
        vprenom.innerHTML ="Pas de nombres SVP";
        cpt = 1;
    }else if (nom.value.match(/[()}{&"|°+*%.,:!/$'']/g)) {
        prenom.style.border ="2px solid red";
        vprenom.innerHTML ="Pas de caractères SVP";
    }
    else if (prenom.value.length > 30 ){
        prenom.style.border ="2px solid red";
        vprenom.innerHTML ="prénom trop long";
        cpt = 1;
    }else if (prenom.value.length < 3){
       prenom.style.border ="2px solid red";
        vprenom.innerHTML = "Prénom trop court";
        cpt = 1;
    }else{
        prenom.style.border ="2px solid green";
        vprenom.innerText="Valider";
        cpt =0;
    }
}

// Validation de email
function validemail() {
    let email = document.getElementById("email");
    let vemail = document.getElementById("Vemail");
        let expemail = prenom.value + "." + nom.value + "@ofppt.ma";
        if (email.value == expemail) {
            vemail.innerHTML = "Valider";
            email.style.border ="2px solid green";
            cpt =0;
        } else {
            vemail.innerHTML = "non Valider";
            email.style.border ="2px solid red";
            cpt = 1;
        }
}

// Validation de tel
function validetel() {
    let tel = document.getElementById("tel");
    let vtel = document.getElementById("Vtel");
     let exptel = new RegExp('[0-9]','g');
     if (exptel.test(tel.value) == true && tel.value.length == 10 && tel.value[0] == 0 &&(tel.value[1] == 6 || tel.value[1] == 7 || tel.value[1] == 5) ) {
         vtel.innerHTML = "Valider";
         tel.style.border ="2px solid green";
         cpt =0;
     } else {
         tel.style.border ="2px solid red";
         vtel.innerHTML = "Veuillez entrer vôtre numéro de télephone";
         cpt = 1;
     }
}

//Validation du genre: 
function validegenre() {
    let feminin = document.getElementById("feminin").checked;
    let masculin = document.getElementById("masculin").checked;
    let vgenre = document.getElementById("Vgenre");
     if (feminin == false && masculin == false) {
         vgenre.innerHTML = "Veuillez selctionner vôtre genre SVP";
         cpt = 1;
        } else {
        vgenre.innerHTML = "Valider";
        cpt =0;
    } 
}

// Validation du groupe
function validegroupe() {
    let g1 = document.getElementById("g1").checked;
    let g2 = document.getElementById("g2").checked;
    let g3 = document.getElementById("g3").checked;
    let g4 = document.getElementById("g4").checked;
    let g5 = document.getElementById("g5").checked;
    let vgroupe = document.getElementById("Vgroupe");
    if (g1 == true || g2 == true || g3 == true || g4 == true || g5 == true ) {
        vgroupe.innerHTML = "Valider";
        cpt =0;
    } else {
        vgroupe.innerHTML = "Veuillez selctionner vôtre groupe SVP";
        cpt = 1;
    }
}

//Validation de clubs 
function valideclub() {
    let club = document.getElementById("club");
    let vclub = document.getElementById("Vclub");
     let nb= 0;
     for (let index = 0; index < club.options.length; index++) {
             
         if (club.options[index].selected == true) {
             nb++;
         }
     }
     if (nb >=1 && nb <= 3) {
         vclub.innerHTML = "valider";
         club.style.border = "2px solid green";
         cpt =0;
     }else{
         vclub.innerHTML = "Veuillez sectionner une au minimum ou trois choix au maximum";
         club.style.border = "2px solid red";
         cpt = 1;
     }
}

//Validation du boutton valider
document.getElementById("valider").onclick = valide;
function valide(e) {
    e.preventDefault();
    validenom();
    valideprenom();
    validemail();
    validetel();
    validegenre();
    validegroupe();
    valideclub();
   
    if (cpt == 0) {
        location.replace("confirmation.html");
        }
}