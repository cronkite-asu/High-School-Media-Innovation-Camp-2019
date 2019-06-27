
function showDiv() {
    if (document.getElementById("factDiv").style.display == 'block') { 
        document.getElementById('factDiv').style.display = 'none';
    } else {
         document.getElementById('factDiv').style.display = 'block';
    }
}
var factsIndex = 0;
var facts = [
    "How big is the problem (homelessness) in Phoenix, AZ?",
    "The number of homeless people has increased by 59% between 2015 and 2017",
    "What is the city of Phoenix doing about it?",
    "PHX C.A.R.E.S",
    "Community - Action - Response - Engagement - Services",
    "Sends trained outreach teams to build trust with people on the street, encouraging them to accept the resources being offered to them.",
    "g",
    "h",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
];
function newFact() {
    var para = document.createElement("p");
    var node = document.createTextNode(facts[factsIndex]);
    para.appendChild(node);
    
    var element = document.getElementById("factContainer");
    element.appendChild(para);
    factsIndex = factsIndex + 1;

}