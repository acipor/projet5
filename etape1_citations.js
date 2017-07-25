// ce programme génére une citation  qui est la combinaison de 3 morceaux de phrases 

// tableau de morceaux de phrases
var typeGenerateur = [
    [
    "Quelle que soit l'orientation présente", 
    "Malgré cette rigueur générale", 
    "Compte tenu de la dualité de la situation présente",
    "En ce qui concerne l'inertie induite"],
	[
    "il convient de comprendre toutes les issues imaginables",
    "on ne peut se passer de façonner chacune des actions s'offrant à nous",
    "il faut de toute urgence avoir à l'esprit toutes les décisions évidentes"
    ],
    [
    "dans une perspective correcte.",
    "parce qu'il s'agit de notre dernière chance.",
    "en prenant toutes les précautions qui s'imposent.",
    "depuis longtemps."
    ] 
]; // fin typeGenerateur

// retourne un indice du tableau au hasard
function random(tableau) {
    return Math.floor(Math.random() * tableau.length);   
}

// générer la citation
var phrase = "";
var position;

// boucle sur les éléments du tableau
for ( var i = 0 ;i < typeGenerateur.length ; i++) {
                                    position = random (typeGenerateur[i]);    
                                    phrase =  phrase + " " + typeGenerateur[i][position];
}
// affichage du résultat
console.log("\nVoici la citation générée: ");
console.log(phrase);
