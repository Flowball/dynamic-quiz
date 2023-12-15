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
const optionSpan = document.getElementsByClassName("optionSpan");

for (const items of optionSpan){
  items.addEventListener("click",(e)=>{
    console.log(e.target.id)
  })
}
}