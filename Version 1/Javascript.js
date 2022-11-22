document.getElementById("valider").onclick = validation;

function validation(e) {
    e.preventDefault();
    let nom = document.getElementById("nom");
    let vnom = document.getElementById("Vnom");
    let prenom = document.getElementById("prenom");
    let vprenom = document.getElementById("Vprenom");
    let email = document.getElementById("email");
    let vemail = document.getElementById("Vemail");
    let tel = document.getElementById("tel");
    let vtel = document.getElementById("Vtel");
    let feminin = document.getElementById("feminin").checked;
    let masculin = document.getElementById("masculin").checked;
    let vgenre = document.getElementById("Vgenre");
    let g1 = document.getElementById("g1").checked;
    let g2 = document.getElementById("g2").checked;
    let g3 = document.getElementById("g3").checked;
    let g4 = document.getElementById("g4").checked;
    let g5 = document.getElementById("g5").checked;
    let vgroupe = document.getElementById("Vgroupe");
    let club = document.getElementById("club");
    let vclub = document.getElementById("Vclub");
    

    // Validation de nom 
    if (nom.value.match(/[0-9]/g)) {
        nom.style.border ="2px solid red";
        vnom.innerHTML ="Pas de nombres SVP";
    }else if (nom.value.match(/[()}{&"|°+*%.,:!/$'']/g)) {
        nom.style.border ="2px solid red";
        vnom.innerHTML ="Pas de caractères SVP";
    }
    else if (nom.value.length > 30 ){
        nom.style.border ="2px solid red";
        vnom.innerHTML = "Nom trop long";
    }else if (nom.value.length < 3){
       nom.style.border ="2px solid red";
        vnom.innerHTML = "Nom trop court";
    }else{
        nom.style.border ="2px solid green";
        vnom.innerText="Valider";
        }

        //Validation de prenom:
        if (prenom.value.match(/[0-9]/g) ) {
            prenom.style.border ="2px solid red";
            vprenom.innerHTML ="Pas de nombres SVP";
        }else if (nom.value.match(/[()}{&"|°+*%.,:!/$'']/g)) {
            prenom.style.border ="2px solid red";
            vprenom.innerHTML ="Pas de caractères SVP";
        }
        else if (prenom.value.length > 30 ){
            prenom.style.border ="2px solid red";
            vprenom.innerHTML ="prénom trop long";
        }else if (prenom.value.length < 3){
           prenom.style.border ="2px solid red";
            vprenom.innerHTML = "Prénom trop court";
        }else{
            prenom.style.border ="2px solid green";
            vprenom.innerText="Valider";}
     
        // Validation de email
        let expemail = prenom.value + "." + nom.value + "@ofppt.ma";
        if (email.value == expemail) {
            vemail.innerHTML = "Valider";
            email.style.border ="2px solid green";
        } else {
            vemail.innerHTML = "non Valider";
            email.style.border ="2px solid red";
        }

         // Validation de tel
         let exptel = new RegExp('[0-9]','g');
        if (exptel.test(tel.value) == true && tel.value.length == 10 && tel.value[0] == 0 &&(tel.value[1] == 6 || tel.value[1] == 7 || tel.value[1] == 5) ) {
            vtel.innerHTML = "Valider";
            tel.style.border ="2px solid green";
        } else {
            tel.style.border ="2px solid red";
            vtel.innerHTML = "Veuillez entrer vôtre numéro de télephone";
        }

           //Validation du genre:
           if (feminin == true || masculin == true) {
            vgenre.innerHTML = "Valider";
        } else {
            vgenre.innerHTML = "Veuillez selctionner vôtre genre SVP";
        }

        // Validation du groupe
        if (g1 == true || g2 == true || g3 == true || g4 == true || g5 == true ) {
            vgroupe.innerHTML = "Valider";
        } else {
            vgroupe.innerHTML = "Veuillez selctionner vôtre groupe SVP";
        }
        //Validation de clubs 
        let nb= 0;
        for (let index = 0; index < club.options.length; index++) {
                
            if (club.options[index].selected == true) {
                nb++;
            }
        }
        if (nb >=1 && nb <= 3) {
            vclub.innerHTML = "valider";
            vclub.style.border = "2px solid green";
        }else{
            vclub.innerHTML = "Veuillez sectionner une au minimum ou trois choix au maximum";
            club.style.border = "2px solid red";
        }
       //Si tout est correcte alors envoyer dans une page de comfirmation:
       if (vnom.innerText =="Valider" && vprenom.innerText =="Valider" && vtel.innerHTML == "Valider"  && vemail.innerHTML == "Valider" &&  vgroupe.innerHTML == "Valider" && vgenre.innerHTML == "Valider" && vclub.innerHTML == "valider") {
        location.replace("confirmation.html");
        }
        }
