

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
nombre2 =nbr3;



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