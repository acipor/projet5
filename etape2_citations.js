// ce programme génére des citations configurables
// Choisir le nombre de citations générées (de 1 à 5)
// Choisir entre 2 types de générateurs de citations (vous devrez donc avoir 2 ensembles de phrases)
// Une fois les citations générées, proposer de générer de nouvelles citations ou d'arrêter là le programme

// tableau de 2 ensembles de phrases
var typeGenerateur = [
    // generateur 1
    [ 
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
    ], // fin generateur 1
    // generateur 2
    [ 
    [
    "Dans le cas particulier de la baisse de confiance générale",
    "Tant que durera la morosité conjoncturelle",
    "Dans le but de pallier à la baisse de confiance contextuelle",
    "Dans le cas particulier de l'austérité observée"
    ],
    [
    "il convient d'étudier toutes les solutions éventuelles",
     "il est préférable de remodeler l'ensemble des problématiques s'offrant à nous",
     "il est très important d'analyser la globalité des actions pertinentes"
    ],
    [
    "à long terme.",
    "à court terme.", 
    "parce qu'il est temps d'agir.",
    "à l'avenir."
    ]
    ] // fin generateur 2
]; // fin typeGenerateur

// retourne un indice du tableau au hasard
function random(tableau) {
    return Math.floor(Math.random() * tableau.length);   
}

// saisie du nombre de citations
var nbCitations;
while ( nbCitations !== 0 ) 
{
nbCitations = Number(prompt ("Entrer le nombre de citations à générer de 1 à 5 ( 0 pour finir ):"));
    
switch(nbCitations) {
    case 0:  
        console.log("Fin.");
        break;
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
    // saisie du numero type generateur de citations  
       var typeGen = 0;
       while (typeGen != 1 && typeGen != 2) {
           typeGen= Number(prompt("Entrer le numéro du type générateur de citation (1 ou 2) : "));
                                                      } // fin while typeGen
        // générer les citations
        var numGen;
        numGen = typeGen - 1; // numéro du type generateur de phrases
        console.log("\nVoici "+ nbCitations +" citation(s) générée(s) avec le type de générateur no: " + typeGen ); 
        // boucle sur le nb citations
        for (j = 0; j < nbCitations; j++) { 
                var phrase = "";
                var position;
                        for ( var i = 0 ;i < typeGenerateur[numGen].length ; i++) {
                                    position = random (typeGenerateur[numGen][i]);    
                                    phrase =  phrase + " " + typeGenerateur[numGen][i][position];
                        }
                console.log( phrase);
                                           } // fin for nb citations
        break;
    default:
          console.log ("Nombre invalide : essayer de nouveau un nombre entre 0 et 5.")
           break;
                    } // fin switch nbCitations
    
} // fin while nbCitations
