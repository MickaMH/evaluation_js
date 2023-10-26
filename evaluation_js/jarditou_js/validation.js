function validation() {

    if ( document.contact.nom.value == "" ){
    alert("Veuillez entrez votre nom!");
    document.contact.nom.focus();
    return false;
}

    if ( document.contact.prenom.value == "" ){
    alert("Veuillez entrez votre prénom!");
    document.contact.prenom.focus();
    return false;
}

    if ( document.contact.ddn.value == "" ){
    alert("Veuillez entrez une date valide!");
    document.contact.ddn.focus();
    return false;
}

     if ( document.contact.codepostal.value == "" || document.contact.codepostal.value.lenght != 5 ){
    alert("Veuillez entrez un code postal valide!");
    document.contact.codepostal.focus();
    return false;
}

    if ( document.contact.email.value == "" ){
    alert("Veuillez entrez une adresse mail valide!");
    document.contact.email.focus();
    return false;
}

    if ( document.contact.sujet.value == "-1" ){
    alert("Veuillez choisir un sujet!");
    document.contact.sujet.focus();
    return false;
}

    if ( document.contact.commentaire.value == "" ){
    alert("Veuillez entrez votre commentaire!");
    document.contact.commentaire.focus();
    return false;
}

    if ( document.contact.cochercase.value == "uncheck" ){
    alert("Veuillez cocher la case!");
    document.contact.cochercase.focus();
    return false;
}

    return ( true );

}