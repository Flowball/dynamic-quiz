import {data} from "../data"
import "./style.css"
window.addEventListener("DOMContentLoaded", main)
const app = document.getElementById("app")
function main(){
  renderQuestions()
}

function renderQuestions(){
  const questionDiv = document.createElement("div")
  const optionDiv = document.createElement("div")
  questionDiv.classList = "questionDiv"
  optionDiv.classList = "optionDiv"

for (const q of data){
  // console.log(q)
  questionDiv.innerHTML = `<span class="questionSpan">${q.question}</span>`
  optionDiv.innerHTML = `
  <span class="optionSpan" id="${q.options.a}">${q.options.a}</span>
  <span class="optionSpan" id="${q.options.b}">${q.options.b}</span>
  <span class="optionSpan" id="${q.options.c}">${q.options.c}</span>
  `
  questionDiv.append(optionDiv)
  app?.append(questionDiv.cloneNode(true))
}
const optionSpans = document.getElementsByClassName("optionSpan");

for (const item of optionSpans) {
  item.addEventListener("click", (e) => {
    const selectedOptionId = e.target.id;
    const questionText = e.target.closest(".questionDiv").querySelector(".questionSpan").textContent;
    const questionData = data.find(q => q.question === questionText);

    if (questionData && selectedOptionId === questionData.options[questionData.correctAnswer]) {
      e.target.style.backgroundColor = 'green'; // Highlight in green if correct
    } else {
      e.target.style.backgroundColor = 'red'; // Optionally, highlight in red if incorrect
    }
  });
}
}