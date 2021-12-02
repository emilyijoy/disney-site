
function myFunction () {
    let numberGen = Math.floor(Math.random() * 4) + 1;

let park;
const HTMLResult = document.querySelector(".result");

if (numberGen === 1) {
    park = "Magic Kingdom"
} else if (numberGen === 2) {
    park = "EPCOT"
} else if (numberGen === 3) {
    park = "Hollywood Studios"
} else if (numberGen === 4) {
    park = "Animal Kingdom"
} else { park = "idk, try Universal"}

HTMLResult.innerHTML = `
<h2>You should go to ${park}!</h2>
`;

console.log(park)
}


