/*
// Liste des primitifs
Number / BigInt
string
bool
undefined
null
*/

const name = "Solofo";
let lastName = "Slf";

// Déclaration tableau
// const ingredients = ["Rano", "Sira"];
const ingredients = new Array();
ingredients.push(`Siramamy ${lastName}`);
ingredients[7] = undefined;
ingredients[8] = null;
ingredients[9] = "Ttetetet";

/*
// Parcours d'un tableau
for(let i = 0; i < ingredients.length; i++) {
    console.log(ingredients[i]);
}
*/

/*
// while
let i = 0;
while(i < ingredients.length) {
    console.log(ingredients[i]);
    i++;
}
*/

// foreach
const forEachCallBack = (el, index) => {
    console.log(index, ' => ', el, arr);
    return 1;
} 

ingredients.forEach(forEachCallBack);


/*
let i = 0;
do {
    if(ingredients[i] === undefined) {
    } else {
        console.log(ingredients[i]);
    }
    i++;
} while (i < ingredients.length)
*/

/*
// For of
for(let ingredient of ingredients) {
    console.log(ingredient);
}
*/

// Objet
let key = 'Last name';
const personne = {
    name: 'Solofo',
    [key]: 'Slf',
    age: 45,
    homme: true,
    compétence: [
        'Js',
        'PHP'
    ]
}

for (let i in personne) {
    console.log(i, '=>', personne[i]);
}


// console.log(personne['Last name']);
/*
// A ne pas faire
const aPersonne = ['Solofo', 45, true, [
    'Js', 
    'php'
]];

aPersonne[1]
*/

// Rference vs valeur
const string1 = 'Test';
let string2 = string1;
string2 = 'new string';
// console.log(string1, string2);

const aString1 = ['Test'];
const aString2 = aString1;
aString2.push('New string');
console.log(aString1, aString2);

const o1 = {name: 1};
const o2 = o1;
const o3 = {name: 1};

// Fonction
const mandritraRano1 = function(quantitéRano) {

}

function mandritraRano2(mandritraRano1) {

}

const mandritraRano3 = (mandritraRano1) => {

}
