function denombrement() {
  let age;
  let jeunes = 0;
  let moyens = 0;
  let vieux = 0;
  
  do {
    age = parseInt(prompt("Entrez un âge: "));
    if (age < 20) {
      jeunes++;
    } else if (age > 40) {
      vieux++;
    } else {
      moyens++;
    }
    
    if (age >= 100) {
      break;
    }
    
  } while (true);
  
  console.log(`Il y a ${jeunes} personne(s) d'âge strictement inférieur à 20 ans.`);
  console.log(`Il y a ${moyens} personne(s) dont l'âge est compris entre 20 ans et 40 ans.`);
  console.log(`Il y a ${vieux} personne(s) d'âge strictement supérieur à 40 ans.`);
}
