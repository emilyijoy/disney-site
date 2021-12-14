var titleDiv = document.getElementsByClassName("title") [0];
var pageTitle = titleDiv.innerHTML;

function factFinder () {
    let numberGen = Math.floor(Math.random() * 7) + 1;
    let fact;
    const HTMLResult = document.querySelector(".result");

    if (pageTitle === "Magic Kingdom") {
        if (numberGen === 1) {
            fact = "Some of the art in Cinderella's Castle was made using 14 karat gold";
        } else if (numberGen === 2) {
            fact = "While there are many American flags in Main Street USA, only the one in the central flagpole is real. The rest miss some stars/stripes so they do not have to be taken down every night as the US Flag Code advises.";
        } else if (numberGen === 3) {
            fact = "Cast members (Disney employees) get around the park via a massive system of underground tunnels with exits in each land.";
        } else if (numberGen === 4) {
            fact = "There is a special suite inside Cinderella's Castle that you can only stay in via a competition held by Disney.";
        } else if (numberGen === 5) {
            fact = "There are bins every 30 steps in the park as Walt himself found that guests were willing to walk 30 steps before considering littering.";
        } else if (numberGen === 6) {
            fact = "While Magic Kingdom is massive (at 107 acres) it's smaller than the Animal Kingdom parking lot!";
        } else if (numberGen === 7) {
            fact = "Forced perspective is used a lot in the parks to make things appear larger than they are, one use of this is Beast's castle in Fantasyland.";
        }
    } else if (pageTitle === "Epcot") {
       if (numberGen === 1) {
            fact = "Though a new country has not been added to the world showcase since 1988, there have been many countries for which a land was planned and promotional material was made, including Spain and Israel.";
        } else if (numberGen === 2) {
            fact = "The countries currently represented in the world showcase are Mexico, Norway, China, Germany, America, Italy, Morocco, Japan, France, the UK and Canada.";
        } else if (numberGen === 3) {
            fact = "Test Track is the fastest ride in the park, reaching speeds of 65mph.";
        } else if (numberGen === 4) {
            fact = "Epcot hosts both the the Food and Wine festival and the Flower and Garden Festival.";
        } else if (numberGen === 5) {
            fact = "The crops grown in the greenhouse area of The Land pavillion are used to feed guests across the resort.";
        } else if (numberGen === 6) {
            fact = "Epcot is twice the size of the Magic Kingdom.";
        } else if (numberGen === 7) {
            fact = "Spaceship Earth doubles as both one of the opening day attractions at the park and the park icon (though many refer to it as the 'Epcot ball').";
        } ;
    } else if (pageTitle === "Hollywood Studios") {
        if (numberGen === 1) {
            fact = "This is the only park in WDW to have an inversion on a coaster (on the Rock 'n' Roller Coaster Starring Aerosmith).";
        } else if (numberGen === 2) {
            fact = "Though it is no longer there, the mascot of the park used to be a giant sorcer Mickey hat.";
        } else if (numberGen === 3) {
            fact = "Hollywood Studios was almost merely a pavillion at Epcot but then CEO Michael Eisner decided that there should be an entire park dedicated to the theme.";
        } else if (numberGen === 4) {
            fact = "The park was originally named Disney's MGM Studios and had a working animation studio that made and produced several classic Disney films, incluiding Lilo & Stitch.";
        } else if (numberGen === 5) {
            fact = "Hollywood Studios is the only place you can find Audrey Hepburn's handprints! Grauman's Chinese Theater had never asked her for them and when they realised this oversight and reached out to her to rectify it she declined.";
        } else if (numberGen === 6) {
            fact = "The All-New Mickey Mouse Club was filmed in the park featuring stars such as Justin Timberlake, Ryan Gosling and Britney Spears.";
        } else if (numberGen === 7) {
            fact = "While hidden Mickeys are common across all Disney parks, Hollywood Studios is home to one of the largest that can only be seen from the sky."; 
        };
    } else if (pageTitle === "Animal Kingdom") {
        if (numberGen === 1) {
            fact = "Animal Kingdom is the newest of the Disney World parks.";
        } else if (numberGen === 2) {
            fact = "There was originally supposed to be a ride about unicorns and another about dragons in the parks, hence why you can see unicorns and dragons on some sinage around the park.";
        } else if (numberGen === 3) {
            fact = "On the tree of life, the icon of the park, there are more than 300 carvings.";
        } else if (numberGen === 4) {
            fact = "Expedition Everest is one of the most expensive roller coasters ever made, partly due to the nearly 200ft mountain that houses the coaster.";
        } else if (numberGen === 5) {
            fact = "The savannah on the Kilimanjaro Safari is bigger than the entire Magic Kingdom park.";
        } else if (numberGen === 6) {
            fact = "Plastic straws arent allowed throughout the park to protect the animals, with guest recieving biodegradable paper straws with their drinks instead.";
        } else if (numberGen === 7) {
            fact = "The audio-animatronics on DINOSAUR were so big that their bases were built into the foundations of the building the ride is situated in.            ";
        };
    } else { fact = "no fact available soz";}

    HTMLResult.innerHTML = `
<p>Your <strong>${pageTitle}</strong> fact is:</p>
<p> ${fact}</p>
`;

    console.log(fact);

}

/* the facts
mk-
Some of the art in Cinderella's Castle was made using 14 karat gold
While there are many American flags in Main Street USA, only the one in the central flagpole is real. The rest miss some stars/stripes so they do not have to be taken down every night as the US Flag Code advises.
Cast members (Disney employees) get around the park via a massive system of underground tunnels with exits in each land.
There is a special suite inside Cinderella's Castle that you can only stay in via a competition held by Disney.
There are bins every 30 steps in the park as Walt himself found that guests were willing to walk 30 steps before considering littering
While Magic Kingdom is massive (at 107 acres) it's smaller than the Animal Kingdom parking lot!
Forced perspective is used a lot in the parks to make things appear larger than they are, one use of this is Beast's castle in Fantasyland.
ep-
Though a new country has not been added to the world showcase since 1988, there have been many countries for which a land was planned and promotional material was made, including Spain and Israel.
The countries currently represented in the world showcase are Mexico, Norway, China, Germany, America, Italy, Morocco, Japan, France, the UK and Canada.
Test Track is the fastest ride in the park, reaching speeds of 65mph.
Epcot hosts both the the Food and Wine festival and the Flower and Garden Festival.
The crops grown in the greenhouse area of The Land pavillion are used to feed guests across the resort.
Epcot is twice the size of the Magic Kingdom.
Spaceship Earth doubles as both one of the opening day attractions at the park and the park icon (though many refer to it as the 'Epcot ball').
hs-
This is the only park in WDW to have an inversion on a coaster (on the Rock 'n' Roller Coaster Starring Aerosmith).
Though it is no longer there, the mascot of the park used to be a giant sorcer Mickey hat.
Hollywood Studios was almost merely a pavillion at Epcot but then CEO Michael Eisner decided that there should be an entire park dedicated to the theme.
The park was originally named Disney's MGM Studios and had a working animation studio that made and produced several classic Disney films, incluiding Lilo & Stitch.
While hidden Mickeys are common across all Disney parks, Hollywood Studios is home to one of the largest that can only be seen from the sky.
Hollywood Studios is the only place you can find Audrey Hepburn's handprints! Grauman's Chinese Theater had never asked her for them and when they realised this oversight and reached out to her to rectify it she declined.
The All-New Mickey Mouse Club was filmed in the park featuring stars such as Justin Timberlake, Ryan Gosling and Britney Spears.
ak-
Animal Kingdom is the newest of the Disney World parks.
There was originally supposed to be a ride about unicorns and another about dragons in the parks, hence why you can see unicorns and dragons on some sinage around the park.
On the tree of life, the icon of the park, there are more than 300 carvings.
Expedition Everest is one of the most expensive roller coasters ever made, partly due to the nearly 200ft mountain that houses the coaster.
The savannah on the Kilimanjaro Safari is bigger than the entire Magic Kingdom park.
Plastic straws arent allowed throughout the park to protect the animals, with guest recieving biodegradable paper straws with their drinks instead.
The audio-animatronics on DINOSAUR were so big that their bases were built into the foundations of the building the ride is situated in.





*/