var debut = ["Quelle que soit l'orientation présente", "Malgré cette rigueur générale", "Compte tenu de la dualité de la situation présente","En ce qui concerne l'inertie induite"];
var milieu = ["il convient de comprendre toutes les issues imaginables", "on ne peut se passer de façonner chacune des actions s'offrant à nous", "il faut de toute urgence avoir à l'esprit toutes les décisions évidentes"];
var fin = ["dans une perspective correcte.","parce qu'il s'agit de notre dernière chance.", "en prenant toutes les précautions qui s'imposent."];

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


// génère 1a citation dans  un tableau 
function generate_citation(){
       //on créé un tableau citations
       var citations = []; 
 	   // création de l'objet Citation
       var nouvCitation = Object.create(citation); 
       // initialise l' Objet nouvCitation avec un début, un milieu et une fin
       nouvCitation.init(debut[calcul_index(debut)],milieu[calcul_index(milieu)] ,fin[calcul_index(fin)] ); 
       // ajout dans le tableau
       citations.push(nouvCitation);
return citations; // retourne le tableau  citations
 }

// générer la citations dans un tableau
var tableau_citation = [];
tableau_citation = generate_citation(); 

// affichage de la  citation
console.log("Voici la citation : "); 
console.log(tableau_citation[0].decrire()); 
