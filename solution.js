/* ÉNONCÉ 📚 */

/*
  Créez un algorithme qui détecte si la chaîne de caractères qu'on lui passe est une date au format hh:mm:ss ou pas.
  Retourne true si c'est vrai et false si c'est faux.
*/

/* Mon algorithme */

const isValidHour = (str) => {
  // Regex format de l'heure stokée dans la constante hourFormatRegex
  const hourFormatRegex = /^(2[0-3]|1[0-9]|0[0-9]):([0-5][0-9]):([0-5][0-9])$/;

  // Une méthode test permet de tester la présence d'une correspondance dans une chaîne de caractères. Elle renvoie true ou false.
  return hourFormatRegex.test(str);
};
// Appel de la fonction
isValidHour(str);

/* Tests à passer */

console.log(isValidHour("11:52:30")); // true
console.log(isValidHour("90:90:90")); // false
console.log(isValidHour("qsdljqslkdjqslkjdqsklj")); // false
