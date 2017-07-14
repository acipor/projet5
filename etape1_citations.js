var debut = ["Quelle que soit l'orientation présente ", "Malgré cette rigueur générale ", "Compte tenu de la dualité de la situation présente "];
    
var milieu = ["il convient de comprendre toutes les issues imaginables ", "on ne peut se passer de façonner chacune des actions s'offrant à nous ", "il faut de toute urgence avoir à l'esprit toutes les décisions évidentes "];
    
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


 // génère 1a citation dans  un tableau 
 function generate_citation(){
             //on créé un tableau citations
                var citations = []; 
 	      // création de l'objet Citation
        var nouvCitation = Object.create(citation); 
        // initialise l' Objet nouvCitation avec un début, un milieu et une fin
 		nouvCitation.init(debut[Math.floor(Math.random() * debut.length)],milieu[Math.floor(Math.random() * milieu.length)] ,fin[Math.floor(Math.random() * fin.length)] ); 
        // ajout dans le tableau
 		citations.push(nouvCitation);
 	
 	return citations; // retourne le tableau  citations
 }



// générer 1 citations dans un tableau
var tableau_citation = [];
tableau_citation = generate_citation(); 

// affichage de la  citation
var cit =[];
console.log("Voici la citation : "); 
cit = tableau_citation [0];
console.log(cit.decrire()); 