//Callback -> focntion que l'on appelle plus tard

const {
    one,
    two,
    three,
} = require('./module.js'); //Déconstruction de l'objet contenu dans module.js

function myCallback(cb1, cb2, cb3) {
    cb1(),
        cb2(),
        cb3()
} //On met en paramètre 3 fucntion qui seront appelé dans l'ordre 

myCallback(one, two, three); //on appelle les références des functions




// //const sentence = "" + object.firtsname + object.lastname + ": My favorite color is" + " " + object.favoriteColor;
// //const sentence = `${object.firtsname} ${object.lastname} ": My favorite color is" ${object.favoriteColor}`;

// //On peux accéder au valeur de l'objet
// const sentence = `${firtsname} ${lastname} ": My favorite color is" ${favoriteColor}`;

// console.log(sentence);