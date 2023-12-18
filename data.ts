/**
 * To Prompt GPT for the correct data use below:
 * ---------------------
 * Write a 10 question quiz about cars. The content should be in swedish and variable names should be in english, like this:
    export const data = {
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

Then copy and below.
Make sure the array variable is named as-> "export const data= [] "
 */

export const data = [
  {
    question: "Vilken är den vanligaste pälsfärgen hos en katt?",
    options: {
      a: "Svart",
      b: "Tabby (tigrerad)",
      c: "Vit"
    },
    correctAnswer: "b"
  },
  {
    question: "Hur länge sover en genomsnittlig katt per dag?",
    options: {
      a: "8-10 timmar",
      b: "12-14 timmar",
      c: "16-20 timmar"
    },
    correctAnswer: "c"
  },
  {
    question: "Vilket sinne är mest utvecklat hos katter?",
    options: {
      a: "Synen",
      b: "Hörseln",
      c: "Luktsinnet"
    },
    correctAnswer: "b"
  },
  {
    question: "Vilket av följande är INTE en typiskt kattbeteende?",
    options: {
      a: "Jamar när de är hungriga",
      b: "Gräver i sanden för att dölja sina spår",
      c: "Badar ofta i vatten"
    },
    correctAnswer: "c"
  },
  {
    question: "Hur många liv sägs en katt ha enligt en populär myt?",
    options: {
      a: "5",
      b: "7",
      c: "9"
    },
    correctAnswer: "c"
  }
];
