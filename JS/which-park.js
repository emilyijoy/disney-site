
function myFunction () {
    let numberGen = Math.floor(Math.random() * 4) + 1;

let park;
let tagline;
let parkLink;
const HTMLResult = document.querySelector(".result");

if (numberGen === 1) {
    park = "Magic Kingdom"; 
    tagline = "The most magical place on Earth!";
    parkLink = "magic-kingdom.html";
} else if (numberGen === 2) {
    park = "EPCOT";
    tagline = "The magic of possibility!";
    parkLink = "epcot.html";
} else if (numberGen === 3) {
    park = "Hollywood Studios";
    tagline = "Jump to lightspeed!";
    parkLink = "hollywood-studios.html";
} else if (numberGen === 4) {
    park = "Animal Kingdom";
    tagline = "Welcome to the kingdom of animals... Real, ancient and imagined!";
    parkLink = "animal-kingdom.html";
} else { park = "idk, try Universal"; tagline = "I'm sorry... what?"; parklink = "index.html"}

HTMLResult.innerHTML = `
<h2>You should go to ${park}! ${tagline}</h2> <br>
<p> If you want to learn more about ${park}, click <a href="${parkLink}">here</a> <p>
`;

console.log(park)
}



