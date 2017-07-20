// 1ere phrase génerateur
var debut1 = ["Quelle que soit l'orientation présente", "Malgré cette rigueur générale", "Compte tenu de la dualité de la situation présente","En ce qui concerne l'inertie induite"];    
var milieu1 = ["il convient de comprendre toutes les issues imaginables", "on ne peut se passer de façonner chacune des actions s'offrant à nous", "il faut de toute urgence avoir à l'esprit toutes les décisions évidentes"];
var fin1 = ["dans une perspective correcte.","parce qu'il s'agit de notre dernière chance.", "en prenant toutes les précautions qui s'imposent.","depuis longtemps."];

// 2eme phrase génerateur
var debut2 = ["Dans le cas particulier de la baisse de confiance générale", "Tant que durera la morosité conjoncturelle", "Dans le but de pallier à la baisse de confiance contextuelle","Dans le cas particulier de l'austérité observée"];
var milieu2 = ["il convient d'étudier toutes les solutions éventuelles", "il est préférable de remodeler l'ensemble des problématiques s'offrant à nous", "il est très important d'analyser la globalité des actions pertinentes"];
var fin2 = ["à long terme.","à court terme.", "parce qu'il est temps d'agir.","à l'avenir."];

// objet citation
var citation = {
    init: function (debut, milieu, fin) { 
     this.debut = debut;
     this.milieu = milieu;
     this.fin = fin;
   },
    decrire: function () { 
         return (this.debut + " " + this.milieu+ " " +this.fin);
   }
 };

// calcul un indice aléatoire
function calcul_index (chaine) {
    return Math.floor(Math.random() * chaine.length);                      
}

 // génère nb citations dans  un tableau avec le type de genrateur de  phrase numPhrase
 function generate_citation(nb,numPhrase){
     // choix de type générateur
     var debGen = [];
     var milGen = [];
     var finGen = [];
     if (numPhrase == 1) {
         debGen = Object.create(debut1);
         milGen = Object.create(milieu1);
         finGen = Object.create(fin1);
     }
     else {
         debGen = Object.create(debut2);
         milGen = Object.create(milieu2);
         finGen = Object.create(fin2);
     }
    //on créé un tableau citations
    var citations = []; 
 	for (var i = 0; i < nb; i++) { 
 		// création de l'objet Citation
        var nouvCitation = Object.create(citation); 
        // initialise l' Objet nouvCitation avec un début, un milieu et une fin aléatoire
 		nouvCitation.init(debGen[calcul_index(debGen)],milGen[calcul_index(milGen)],finGen[calcul_index(finGen)]); 
        // ajout dans le tableau
 		citations.push(nouvCitation);
 	}
 	return citations; // retourne le tableau  citations
 }


// saisie nbre de citations et la phrase choisie
var nbCitations;
while ( nbCitations !== 0 ) {
nbCitations = Number(prompt ("Entrer le nombre de citations à générer de 1 à 5 ( 0 pour finir ):"));
switch(nbCitations)    {
    case 0:  
        console.log("Fin");
        break;
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
    // saisie du numero type generateur de citations  
       var numeroPhrase = 0;
       while (numeroPhrase != 1 && numeroPhrase != 2) {
           numeroPhrase= Number(prompt("Entrer le numéro du type générateur de citation (1 ou 2) : "));
                                                      } // while numeroPhrase
        
        // générer nb citations dans un tableau
        var tableau_citation = [];
        tableau_citation = generate_citation(nbCitations,numeroPhrase); 
        // affichage des citations
        console.log("\nVoici "+ nbCitations +" citation(s) générée(s) avec le type de générateur no: " + numeroPhrase);   
        var i;
        for (i = 0; i < nbCitations; i++) { 
                console.log("Citation "+(i+1)+": "); 
                cit = tableau_citation [i];
            	console.log(tableau_citation[i].decrire()); 
 			}
        break;
        
    default:
          console.log ("Nombre invalide : essayer de nouveau un nombre entre 0 et 5.")
           break;
                    } // switch
                        
} // while nbCitations
 		