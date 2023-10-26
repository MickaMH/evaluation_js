let nombre = prompt("Quelle table de multiplication voulez vous?");

function TableMultiplication(nombre) {
    for (let i = 1; i <= 10; i++) {
      let resultat = nombre * i;
      console.log(`${nombre} x ${i} = ${resultat}`);
    }
  }
  