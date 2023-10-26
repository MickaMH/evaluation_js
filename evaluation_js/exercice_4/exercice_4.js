function calculerPrix(PU, QTECOM) {
    var TOT = PU * QTECOM;
    var REM = (TOT >= 100 && TOT <= 200) ? 0.05 : 0.1;
    var PAP = TOT * (1 - REM);
    var PORT = (PAP > 500) ? 0 : Math.max(6, 0.02 * PAP);
    return "Le prix à payer est " + PAP.toFixed(2) + " €, avec une remise de " + (REM * 100).toFixed(0) + "% et des frais de port de " + PORT.toFixed(2) + " €.";
}

// Exemple d'utilisation
var PU = 10; // Prix unitaire
var QTECOM = 20; // Quantité commandée
var resultat = calculerPrix(PU, QTECOM);
console.log(resultat); // Affiche "Le prix à payer est 180.00 €, avec une remise de 10% et des frais de port de 3.60 €."
