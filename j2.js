/*
// Liste des primitifs
    Number / BigInt
    string
    bool
    undefined
    null
*/

const firstName = 'Solofo';
// firstName = "New firstname"; // erreur, car changement de référence

let lastName = 'Slf';
lastName = 'New last name';

// const adresse = 'Lalan\'i Solofo';
// const adresse = "Lalan'i Solofo";

// Template literals
const greeting = `
    Hello ${firstName}
`;

/**
 * Les tableaux
 */
// Déclaration tableau
// const ingredients = ["Rano", "Sira"];
const ingredients = ["Rano", "Sira"];
ingredients.push(`Siramamy ${lastName}`);
ingredients[7] = undefined;
ingredients[8] = null;
ingredients[9] = "Ttetetet";

/**
 * Parcours d'un tableau
 */

/*
// for i++ (peu utilisé en js)
for(let i = 0; i < ingredients.length; i++) {
    console.log(ingredients[i]);
}
*/

/*
// while (même logique que for i++, peu utilisé en js)
let i = 0;
while(i < ingredients.length) {
    console.log(ingredients[i]);
    i++;
}
*/

/*
// foreach + callback
const forEachCallBack = (element, index, initialArray) => {
    console.log(index, ' => ', element, initialArray);
    return 1;
}
ingredients.forEach(forEachCallBack);
*/

/*
// do while, (peu utilisé)
let i = 0;
do {
    if(ingredients[i] !== undefined) {
        console.log(ingredients[i]);
    }
    i++;
} while (i < ingredients.length)
*/

/*
// For of (# for in, pour parcourir un objet)
for(let ingredient of ingredients) {
    console.log(ingredient);
}
*/

/**
 * Les objets
 */
let key = 'Last name';
const personne = {
    name: 'Solofo',
    [key]: 'Slf', // la clé est une variable
    age: 45,
    homme: true,
    compétence: [
        'Js',
        'PHP'
    ]
}

/*
// Pour accédé à un élément de l'objet
console.log(personne.name); // On connait la clé
console.log(personne['Last name']); // La clé comporte une espace (ou autre caractères douteux)
console.log(personne[key]); // La clé est une variable
*/

/*
// Parcours d'un objet
for (let objectKey in personne) {
    console.log(objectKey, '=>', personne[objectKey]);
}
*/

/*
// A ne pas faire, préférer un objet à la place
const aPersonne = ['Solofo', 45, true, [
    'Js', 
    'php'
]];
console.log(aPersonne[1]); // la clé 1 qui correspond à l'âge n'est pas explicite
*/

/**
 * Réference vs valeur
 */
const string1 = 'Test';
let string2 = string1;
string2 = 'new string';
// console.log(string1, string2); // => Test new string, les primitifs sont passé par valeur

const aString1 = ['Test'];
const aString2 = aString1;
aString2.push('New string');
// console.log(aString1, aString2); // => ['Test', 'New string'] ['Test', 'New string'], les objets et talbeaux (tous les non primitifs) sont passés par référence

const o1 = {name: 1};
const o2 = o1;
const o3 = {name: 1};
// o1 === o2 => true, la comparaison se fait sur la référence (adresse)
// o1 === o3 => false

/**
 * les fonctions
 */
const mandritraRano1 = function(quantitéRano) {
    // ... implémenter la logique de la fonction
    return quantitéRano;
}

function mandritraRano2(mandritraRano1) {
    return mandritraRano1;
}

const mandritraRano3 = (mandritraRano1) => {
    return mandritraRano1;
}

console.log(mandritraRano1); // Référence à la fonction (adresse), utile pour le passage des callbacks
console.log(mandritraRano1(100)); // Execution de la fonction et renvoie la valeur de retour de la fonction

