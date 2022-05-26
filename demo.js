// // METHODE MATCH
// let chaine = "Bonjour je m'appelle Peter Parker.";
// let masque = /Peter/;
// resultat = chaine.match(masque);
// console.log(resultat);


// // METHODE SEARCH
// let chaine = "Tony Parker connaît Peter Parker.";
// let masque = /Parker/;
// let resultat = chaine.search(masque);
// console.log(resultat);


// // METHODE REPLACE
// let chaine = "Tony Parker connaît Peter Parker.";
// let masque = /Parker/g; // Parler de l'option g
// let resultat = chaine.replace(masque, "Stark");
// console.log(resultat);


// // METHODE TEST
// let chaine = "Tony Parker connaît Peter Parker.";
// let masque = /Parker/g;
// let resultat = masque.test(chaine);
// console.log(resultat);



// // // LES CROCHETS
// let chaine = "Bonjour je m'appelle Peter Parker.";
// let masque = /[Peter]/g;
// resultat = chaine.match(masque);
// console.log(resultat);


// // LE BACKSLASH POUR ECHAPPER !
// let chaine = "Bonjour je m'appelle [Peter] Parker.";
// let masque = /\[Peter\]/g;
// resultat = chaine.match(masque);
// console.log(resultat);


// // LE TIRET POUR DEFINIR UN INTERVALLE
// let chaine = "Nous sommes apprenants à Kinshasa Digital Academy";
// let masque = /[A-Z]/g;
// resultat = chaine.match(masque);
// console.log(resultat);


// // L'ACCENT CIRCONFLEXE AU DEBUT D'UNE CLASSE
// let chaine = "Bonjour je m'appelle Peter Parker.";
// let masque = /[^aeouy]/g;
// resultat = chaine.match(masque);
// console.log(resultat);


// // L'ACCENT CIRCONFLEXE A L'EXTERIEUR D'UNE CLASSE
// let chaine = "Bonjour je m'appelle Peter Parker.";
// let masque = /^[aeouy]/g; // Ajouter un B pour avoir un résultat correct
// resultat = chaine.match(masque);
// console.log(resultat);


// // LE DOLLARS
// let chaine = "Bonjour je m'appelle Peter Parker.";
// let masque = /[aeouy.]$/g; // Ajouter un point pour réussir le test
// resultat = chaine.match(masque);
// console.log(resultat);


// // LA BARRE VERTICALE |
// let chaine = "Bleudy a travaillé avec Précieux.";
// let masque = /Bleudy|Précieux/g;
// resultat = chaine.match(masque);
// console.log(resultat);