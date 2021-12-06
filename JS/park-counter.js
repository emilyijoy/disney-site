console.log("Hello!")

var titleDiv = document.getElementsByClassName("title") [0];
var pageTitle = titleDiv.innerHTML;
var dateOpen;
const HTMLResult = document.querySelector(".daysOpen");


if (pageTitle === "Magic Kingdom") {
    dateOpen = new Date("10/1/1971");
} else if (pageTitle === "Epcot") {
    dateOpen = new Date("10/1/1982");
} else if (pageTitle === "Hollywood Studios") {
    dateOpen = new Date("5/1/1989");
} else if (pageTitle === "Animal Kingdom") {
    dateOpen = new Date("4/22/1998");
} else {dateOpen = new Date("12/1/2021");}


var dateNow = new Date();
var dateDif = Math.abs (dateNow - dateOpen);
var dayDif = Math.floor (dateDif / (1000 * 3600 * 24));

HTMLResult.innerHTML = `
<p>${pageTitle} has been open for</p>
<p id="mainDays"> <strong>${dayDif}</strong> days!</p>
`;


console.log(dayDif);
