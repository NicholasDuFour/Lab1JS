/*Exercise One*/
var n = prompt('Enter A Number!');
function plusLoop(n) {
  if (n === 0) {
    return 0;
  } else if (n === 1) {
    return 1;
  } else if (n < 0) {
      return "Please enter a positive number";
    } else {
      for (res = n - 1; res >= 1; res--) {
        n += res;
      }
      return n;
    }
  }
console.log(plusLoop(Number(n)));

/*------------------------------------------------------------*/

/*Exercise Two*/
var wordlist = "";
var p = prompt('Do you want to play?');
if (p === "yes") {
var w = prompt('Enter a word.');
 wordlist += w;}
else if (p === "no") {
  console.log('Bummer');
}
if (p === "yes") {
do {
var pa = prompt('Do you want to play again?');
if (pa === "yes"){
  var w = prompt('Enter a word.'); wordlist += ' ' + w;
}
else if (pa === "no") {
console.log(wordlist);}
} while (pa === "yes");}

/*------------------------------------------------------------*/

/*Exercise Three*/
var ns = "Hello. My name is Nick";
var ep = "!";
var n = prompt('Would you like to print your name?');
if (n === "yes") {
  console.log(ns);
  var n2 = prompt('Would you like to print this again?');
}
else if (n === "no") {
  console.log("Boooring!");
}
while (n2 === "yes") {
  console.log(ns += ep);
  var n2 = prompt('Would you like to print this again?');
}

/*------------------------------------------------------------*/

/*Exercise Four*/
var t = prompt('What time of day is it?', 'morning? noon? evening?');
if (t === "morning") {
  console.log("Good morning! How about some eggs and toast?");
}
else if (t === "noon") {
  console.log("Time for lunch! We suggest a salad.");
}
else if (t === "evening") {
  console.log("Dinner time! Chicken and rice sound good?");
}
else {
  console.log("Please choose from the options, ya goofball!");
}
