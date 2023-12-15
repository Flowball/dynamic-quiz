/**
 * To Prompt GPT for the correct data use below:
 * ---------------------
 * Write a 10 question quiz about cars. The content should be in swedish and variable names should be in english, like this:
    {
      question: "Vilket av följande alternativ skapar en loop i JavaScript?",
      options: {
        a: "for (i = 0; i < 5; i++) {}",
        b: "if (i < 5) {}",
        c: "while (i) {}"
      },
      correctAnswer: "a"
    },

There should always be 3 options
---------------------

Make sure the array variable is named as-> "export const data= [] "
 */

export const data = [
    {
      question: "Vilket av följande alternativ skapar en loop i JavaScript?",
      options: {
        a: "for (i = 0; i < 5; i++) {}",
        b: "if (i < 5) {}",
        c: "while (i) {}"
      },
      correctAnswer: "a"
    },
    {
      question: "Vad står JSON för?",
      options: {
        a: "JavaScript Object Notation",
        b: "Java Source Open Network",
        c: "JavaScript Oriented Notation"
      },
      correctAnswer: "a"
    },
    {
      question: "Vilket av följande är inte en giltig JavaScript-datatyp?",
      options: {
        a: "undefined",
        b: "number",
        c: "float"
      },
      correctAnswer: "c"
    },
    {
      question: "Vad gör `Array.slice()` metoden i JavaScript?",
      options: {
        a: "Ändrar en array",
        b: "Returnerar en del av en array",
        c: "Kombinerar två arrays"
      },
      correctAnswer: "b"
    },
    {
      question: "Hur skapar man en oändlig loop i JavaScript?",
      options: {
        a: "while (true) {}",
        b: "for (;;) {}",
        c: "Både a och b"
      },
      correctAnswer: "c"
    },
    {
      question: "Vilken metod används för att hitta ett specifikt element i en array?",
      options: {
        a: "find()",
        b: "search()",
        c: "locate()"
      },
      correctAnswer: "a"
    },
    {
      question: "Vad innebär 'scope' i JavaScript?",
      options: {
        a: "Var en variabel är tillgänglig i koden",
        b: "Livstiden för en variabel",
        c: "Platsen där variabler lagras"
      },
      correctAnswer: "a"
    },
    {
      question: "Vilket JavaScript-uttryck skapar en ny instans av ett objekt?",
      options: {
        a: "new Object()",
        b: "create Object()",
        c: "Object()"
      },
      correctAnswer: "a"
    },
    {
      question: "Vad används `localStorage` till i webbutveckling?",
      options: {
        a: "För att lagra data temporärt på servern",
        b: "För att lagra data permanent i webbläsaren",
        c: "För att överföra data mellan sidor"
      },
      correctAnswer: "b"
    },
    {
      question: "Vad gör `String.toUpperCase()` i JavaScript?",
      options: {
        a: "Konverterar en sträng till stora bokstäver",
        b: "Kontrollerar om alla tecken är stora bokstäver",
        c: "Gör första bokstaven i varje ord till en stor bokstav"
      },
      correctAnswer: "a"
    },
    {
      question: "Vad är en 'promise' i JavaScript?",
      options: {
        a: "En funktion som körs asynkront",
        b: "Ett objekt som representerar ett framtida värde eller undantag",
        c: "En metod för att hantera undantag"
      },
      correctAnswer: "b"
    },
    {
      question: "Hur anropar man en funktion i JavaScript?",
      options: {
        a: "call myFunction()",
        b: "myFunction()",
        c: "execute myFunction()"
      },
      correctAnswer: "b"
    },
    {
      question: "Vilken JavaScript-operator används för att tilldela ett värde till en variabel?",
      options: {
        a: "==",
        b: "=",
        c: "=>"
      },
      correctAnswer: "b"
    },
    {
      question: "Hur definierar man en arrow-funktion i JavaScript?",
      options: {
        a: "function() => {}",
        b: "() => {}",
        c: "=> function() {}"
      },
      correctAnswer: "b"
    },
    {
      question: "Vilken metod tar bort det sista elementet från en array i JavaScript?",
      options: {
        a: "pop()",
        b: "push()",
        c: "shift()"
      },
      correctAnswer: "a"
    },
    {
      question: "Vad gör `event.target` i JavaScript?",
      options: {
        a: "Returnerar elementet som genererade eventet",
        b: "Definierar målet för ett event",
        c: "Stoppar eventet från att sprida sig"
      },
      correctAnswer: "a"
    },
    {
      question: "Vad betyder 'DOM' i webbutveckling?",
      options: {
        a: "Data Object Model",
        b: "Document Object Model",
        c: "Display Object Management"
      },
      correctAnswer: "b"
    },
    {
      question: "Vilket JavaScript-uttryck används för att skapa ett objektlitteral?",
      options: {
        a: "new Object()",
        b: "{}",
        c: "Object.create()"
      },
      correctAnswer: "b"
    },
    {
      question: "Vilken metod i JavaScript används för att lägga till ett element i början av en array?",
      options: {
        a: "unshift()",
        b: "shift()",
        c: "push()"
      },
      correctAnswer: "a"
    },
    {
      question: "Vad är syftet med 'use strict'; i JavaScript?",
      options: {
        a: "För att aktivera striktare felkontroll och undantagshantering",
        b: "För att förbättra prestanda i kodexekveringen",
        c: "För att aktivera en säkerhetsläge för JavaScript"
      },
      correctAnswer: "a"
    }
  ]
  



// export const data = [
//   {
//     question: "Vilket land är känt för att tillverka Volvo-bilar?",
//     options: {
//       a: "Tyskland",
//       b: "Sverige",
//       c: "USA"
//     },
//     correctAnswer: "b"
//   },
//   {
//     question: "Vad används ABS-systemet för i bilar?",
//     options: {
//       a: "För att öka motoreffekten",
//       b: "För att spara bränsle",
//       c: "För att förhindra låsning av bromsarna"
//     },
//     correctAnswer: "c"
//   },
//   {
//     question: "Vilket år lanserades den första Tesla Roadstern?",
//     options: {
//       a: "2008",
//       b: "2012",
//       c: "2005"
//     },
//     correctAnswer: "a"
//   },
//   {
//     question: "Vilket märke producerar modellen '911'?",
//     options: {
//       a: "BMW",
//       b: "Porsche",
//       c: "Audi"
//     },
//     correctAnswer: "b"
//   },
//   {
//     question: "Vad är en hybridbil?",
//     options: {
//       a: "En bil som drivs enbart på el",
//       b: "En bil som använder både bensin och el",
//       c: "En bil med två motorer"
//     },
//     correctAnswer: "b"
//   },
//   {
//     question: "Vilken typ av bränsle använder en dieselmotor?",
//     options: {
//       a: "Bensin",
//       b: "Gas",
//       c: "Diesel"
//     },
//     correctAnswer: "c"
//   },
//   {
//     question: "Vad står SUV för?",
//     options: {
//       a: "Sport Unification Vehicle",
//       b: "Sports Utility Vehicle",
//       c: "Special Urban Vehicle"
//     },
//     correctAnswer: "b"
//   },
//   {
//     question: "Vilken av dessa bilar är känd för sin användning i rallysport?",
//     options: {
//       a: "Subaru Impreza",
//       b: "Toyota Camry",
//       c: "Ford Focus"
//     },
//     correctAnswer: "a"
//   },
//   {
//     question: "Vem grundade företaget Ferrari?",
//     options: {
//       a: "Enzo Ferrari",
//       b: "Ferdinand Porsche",
//       c: "Henry Ford"
//     },
//     correctAnswer: "a"
//   },
//   {
//     question: "Vilken funktion har en turbo i en bil?",
//     options: {
//       a: "Minskar bränsleförbrukningen",
//       b: "Ökar motorns effekt",
//       c: "Förbättrar bilens aerodynamik"
//     },
//     correctAnswer: "b"
//   }
// ];

