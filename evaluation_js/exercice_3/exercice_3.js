var tab = ["Audrey", "Aurélien", "Flavien", "Jérémy", "Laurent", "Melik", "Nouara", "Salem", "Samuel", "Stéphane"];

function supprimerPrenom(tab, prenom) {
    let index = tab.indexOf(prenom);
    if (index !== -1) {
      tab.splice(index, 1);
      tab.push("");
      console.log("Le prénom a été supprimé avec succès.");
    } else {
      console.log("Le prénom n'a pas été trouvé.");
    }
  }
  