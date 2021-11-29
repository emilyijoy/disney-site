let answer = 0;
let rank;
const body = document.querySelector(".quiz-answers");



const aone = prompt("Which park has a roller coaster that goes upside down?")
if (aone.toUpperCase() === "HOLLYWOOD STUDIOS"){
  answer += 1;
}
const atwo = prompt("Which park features Main Street USA?")
if (atwo.toUpperCase() === "MAGIC KINGDOM"){
  answer += 1;
}
const athree = prompt("Which park features the World's Showcase?")
if (athree.toUpperCase() === "EPCOT"){
  answer += 1;
}
const afour = prompt("What year was Walt Disney World Opened?")
if (+afour === 1971){
  answer += 1;
}
const afive = prompt("Which park features Pandora, The World of Avatar?")
if (afive.toUpperCase() === "ANIMAL KINGDOM"){
  answer += 1;
}


if (answer === 5) {
  rank = "a Gold";
  } else if (answer < 5 && answer > 2) {
    rank = "a Silver";
  } else if (answer < 3 && answer > 1) {
    rank = "a Bronze";
  } else { rank = "not quite a";}

body.innerHTML = `
<h2>You got ${answer} out of 5 questions.</h2>
<p>You are ${rank} Disney Fan</p> 
`;