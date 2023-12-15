## Application used to display generated quiz from ChatGPT

To Prompt GPT for the correct data use below:

```
Write a 10 question quiz about cars. The content should be in swedish and variable names should be in english, like this:
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
```
