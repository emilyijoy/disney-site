/* 
  1. Store correct answers
   - When quiz begins, no answers are correct
*/

let answer = 0;

// 2. Store the rank of a player
let rank;



// 3. Select the <main> HTML element
const body = document.querySelector(".quiz-answers");

/*
  4. Ask at least 5 questions
   - Store each answer in a variable
   - Keep track of the number of correct answers
*/

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

/*
  5. Rank player based on number of correct answers
   - 5 correct = Gold
   - 3-4 correct = Silver
   - 1-2 correct = Bronze
   - 0 correct = No crown
*/

if (answer === 5) {
  rank = "a Gold";
  } else if (answer < 5 && answer > 2) {
    rank = "a Silver";
  } else if (answer < 3 && answer > 1) {
    rank = "a Bronze";
  } else { rank = "not quite a";}


// 6. Output results to the <main> element
body.innerHTML = `
<h2>You got ${answer} out of 5 questions.</h2>
<p>You are ${rank} Disney Fan</p> 
`;