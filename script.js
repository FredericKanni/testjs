

console.log(5 + 6);
console.log("Bonj \n our en JavaScript !");

let a;
a = "atchoum";
console.log(a);


let num1 = 0;
{
  num1 = 1; // OK : num1 est déclarée dans le bloc parent
  const num2 = 0;
  //ce qui est declare dans des accolades reste dans des accolade s comme vegas
}
console.log(num1); // 1
//console.log(num2); // Erreur : num2 n'est pas visible ici !



const c = 3; // 3 est une expression dont la valeur est 3
let d = c; // d est une expression dont la valeur est celle de c (3 ici)
d = d + 1; // (d + 1) est une expression dont la valeur est celle de d + 1 (4 ici)
console.log(d); // 4




const country = "France";
console.log(`Je vis en ${country}`); // "Je vis en France"

const x = 3;
const y = 7;
console.log(`${x} + ${y} = ${x + y}`); // "3 + 7 = 10"


const f = 100;
console.log("f contient " + f); // "f contient 100"

// concatenation


const h = "5";
console.log(h + 1); // Concaténation : affiche "51"

const i = Number("5");
console.log(i + 1); // Addition numérique : affiche 6


//const prenom = prompt("Entrez votre prénom :");
//alert(`Bonjour, ${prenom}`);

//const saisie = prompt("Entrez un nombre : "); // saisie est de type chaîne
//const nb = Number(saisie); // nb est de type nombre
//alert(`Bonjour, ${nb}`);
// ...

console.log('la norme camelCase (appelée parfois lowerCamelCase)');


/*
const nombre = Number(prompt("Entrez un nombre :"));
if (nombre > 0) {
  console.log(nombre + " est positif");
}
else {
  console.log(nombre + " est négatif ou nul");
}


if ((nombre < 0) || (nombre > 100)) {
    console.log(nombre + " est en dehors de l'intervalle [0, 100]");
  }

*/


/*
const az = Number(prompt("Entrez un nombre :"));
if (az > 0) {
  console.log(az + " est positif");
} else if (az < 0) {
  console.log(az + " est négatif");
} else {
  console.log(az + " est nul");
}

*/


console.log(true && true);   // true
console.log(true && false);  // false
console.log(false && true);  // false
console.log(false && false); // false





console.log(!true);  // false
console.log(!false); // true

/*
const meteo = prompt("Quel temps fait-il dehors ?");
if (meteo === "soleil") {
  console.log("Sortez en t-shirt.");
} else if (meteo === "vent") {
  console.log("Sortez en pull.");
} else if (meteo === "pluie") {
  console.log("Sortez en blouson.");
} else if (meteo === "neige") {
  console.log("Restez au chaud à la maison.");
} else {
  console.log("Je n'ai pas compris !");
}

*/

//Les instructionsbreak; dans les blocscase sont indispensables pour sortir duswitch et éviter de passer d'un bloc à un autre.

const ae = "abc";
switch (ae) {
  case "abc":
    console.log("ae vaut abc");
  // pas de break : on passe au bloc suivant !
  case "def":
    console.log("ae vaut def");
    break;
}



const temperature = 0;
if (temperature <= 0) {
  console.log("Il gèle");
}
else {
  console.log("Il ne fait pas si froid");
}

const formule = "abracadabra";
if (formule === "abracadabra") {
  console.log("C'est la formule magique !");
}
else {
  console.log("Ce n'est pas la bonne formule...");
}


let nombre1 = 5;
let nombre2 = 3;
let nbr3;

// Tapez votre code ici (sans rien modifier d'autre !)
// 
// let nbr3 = nombre1;
nombre1 = nombre2;
nombre2 = nbr3;



console.log(nombre1); // Doit afficher 3
console.log(nombre2); // Doit afficher 5

/*
if (!(nombre > 100)) {
    console.log(nombre + " est inférieur ou égal à 100");
  }
*/

let compteur;
for (compteur = 1; compteur <= 5; compteur++) {
  console.log(compteur);
}


for (let compteur = 1; compteur <= 10; compteur++) {
  console.log(compteur);

  compteur++; // La variable est modifiée dans le corps de la boucle
}


/*
let lettre = "";
while (lettre !== "X") {
  lettre = prompt("Tapez une lettre ou X pour sortir : ");
}*/



function myFunction4() {
  document.getElementById("demo4").innerHTML = "Paragraph changed.";
}


console.log("----------------------");
console.log("EXERICE 3");
let age = 17;

if (age < 18) {
  console.log("vous etes mineur");
}
else {
  console.log("vous etes mineur");
}

console.log("----------------------");
console.log("EXERICE 4");


let animal = "chat";
let couleur = "marron";

if (animal == "chat" && couleur == "marron") {
  console.log("c’est mon chat");
}
else {
  console.log("ce n’est pas mon chat");
}


console.log("----------------------");
console.log("EXERICE 5");

//let animal = "chat";
//let couleur = "blanc";

if (animal == "chat" && couleur == "blanc") {
  console.log("c’est mon chat");
}
else {
  console.log("ce n’est pas mon chat");
}




console.log("----------------------");
console.log("EXERICE 6")
/*
let cadeau = "Iphone";

if((cadeau == "Galaxy S7") || (cadeau == "Galaxy S8")){
console.log("Merci !!! Ca me fait trop plaisir !");
}
else {
  if (cadeau == "Iphone"){
    console.log("Jette moi ça !!!");
    }
    else{
    console.log("Merci :)");
    }
}
*/

console.log("----------------------");
console.log("EXERICE 7")



let cadeau = "Galaxy S7";

if ((cadeau == "Galaxy S7") || (cadeau == "Galaxy S8")) {
  console.log("Merci !!! Ca me fait trop plaisir !");
}
else {
  if (cadeau == "Iphone") {
    console.log("Jette moi ça !!!");
  }
  else {
    console.log("Merci :)");
  }
}

console.log("----------------------");
console.log("EXERICE 8")

let animale = "chat";
let couleurs = "marron";

if ((animale == "chat") && (couleurs == "gris") || (animale == "chien") && (couleurs == "marron")) {
  //&& est prioritaire sur le ||
  console.log("c’est mon animal");
}
else {
  console.log("ce n’est pas mon animal");
}


console.log("----------------------");
console.log("EXERICE 9")

let anima = "chat";
let couleurr = "marron";

if (anima == "chat" && couleurr == ("gris" || "marron")) {
  // if (anima == "chat" && (couleurr ==("gris" || "marron")) ) {
  console.log("c’est mon chat");
}
else {
  console.log("ce n’est pas mon chat");
}

console.log("----------------------");
console.log("----------------------");
console.log("Exemple: 1 (nombre) et '1' (chaîne de caractères) représentent tous les deux le chiffre 1, mais sont de types différents => ils sont égaux seulement selon l'opérateur d'égalité laxiste.");
console.log("");
console.log("");
console.log("");
console.log("== vérifie l'égalité de deux valeurs de manière laxiste");
console.log("");
console.log("");
console.log("=== vérifie l'égalité de deux valeurs de manière stricte.");
console.log("----------------------");
console.log("----------------------");
console.log("!= vérifie l'inégalité de deux valeurs de manière laxiste.");
console.log("");
console.log("");
console.log("!== vérifie l'inégalité de deux valeurs de manière strict");

console.log("----------------------");
console.log("----------------------");
console.log("alert permet d'afficher un message à l'utilisateur;");
//alert('Bonjour !');
console.log("----------------------");
console.log("----------------------");
console.log("prompt  permet de lui demander de saisir une chaîne de caractères");
//let sonPrenom = prompt('Quel est ton prénom ?');



console.log("----------------------");
console.log("----------------------");
console.log("« Un algorithme est une suite finie et non ambiguë d’opérations ou d'instructions permettant de résoudre un problème ou d'obtenir un résultat.» ");
console.log("");
console.log("Une recette de cuisine peut être réduite à un algorithme, si on peut réduire sa spécification aux éléments constitutifs :");
console.log("");
console.log("des entrées (les ingrédients, le matériel utilisé)");
console.log("");
console.log("des instructions élémentaires simples, dont l'exécution amène au résultat voulu ");
console.log("");
console.log("un résultat : le plat préparé.");


console.log("----------------------");
console.log("----------------------");
console.log("Une boucle permet de répeter plusieurs fois une séquence d'instuctions ");
console.log("");
console.log("Interrompre l'exécution d'une boucle: break");
console.log("");



console.log("----------------------");
console.log("----------------------");
console.log("Application: FizzBuzz");
console.log("");

/*
console.log("1 Écrire un programme qui affiche les nombres de 1 à 199 (compris) dans la console.");

let nbr = 1;

while ( nbr < 100 )
{

  console.log(nbr);
  nbr ++;

}

*/


/*
console.log("----------------------");
console.log("----------------------");


console.log("Pour les multiples de 3, afficher Fizz au lieu du nombre");


let nbr = 1;

while ( nbr < 100 )
{


if(nbr % 3 == 0) {
  console.log("fizz");
}
else 
  {
    console.log(nbr);
  }
  
  nbr ++;

}


*/

/*
console.log("----------------------");
console.log("----------------------");



let nbr = 1;

while ( nbr < 100 )
{


if(nbr %  5 === 0) {
  console.log("buzz");
}

else 
  {
    console.log(nbr);
  }
  
  nbr ++;

}
*/


/*
console.log("----------------------");
console.log("----------------------");




let nbr = 1;

while ( nbr < 100 )
{
if((nbr %  5 === 0) && (nbr %  3 === 0))  {
  console.log("fizzBuzz");
}
else{
  console.log(nbr);
}
  nbr ++;
}

*/


/*
console.log("----------------------");
console.log("----------------------");


let nbr = 1;

while (nbr < 100) {

  if ((nbr % 5 === 0) && (nbr % 3 === 0)) {
    console.log("fizzBuzz");
  }

  else if ((nbr % 3 === 0)) {
    console.log("fizz");
  }

  else if ((nbr % 5 === 0)) {
    console.log("buzz");
  }
  else {
    console.log(nbr);
  }

  nbr++;
}

*/


/*

console.log("----------------------");
console.log("----------------------");
console.log("Correction fizzbuzz");
console.log("");
let nb = 1;

for (nb; nb <= 199; nb++) {

   if((nb % 3 === 0) && (nb % 5 === 0)) {
       console.log("fizzbuzz");
   } else if(nb % 3 === 0) {
       console.log("fizz");
   }
   else if(nb % 5 === 0) {
       console.log("buzz");
   }
   else {
       console.log(nb);
   }
}
*/
