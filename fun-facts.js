
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
    "What is Phoenix doing about Affordable housing?",
    "The City of Phoenix offers four apartment communities in the downtown area; Foothills Village, Marcos de Niza, Luke Krohn, and Sidney P. Osborn.",
    "Single people and families of low income who are below the maximum income limit may qualify. ",
    "With a required criminal background check on adult family members. ",
    "Applicants must have acceptable rental history, and owe no money to any housing program in the U.S.",
    "The Housing Department helps local senior to live and active and fulfilling life while in retirement",
    "55+ Senior communities, 62+ Senior and disabled communities",
    "The Senior Housing Program:",
    "Washington Manor,",
    "Fillmore Gardens,",
    "Maryvale Parkway Terrace",
    "Pine Tower,",
    "and Sunnyslope Manor,",
    "Qualifications: 62 years or older. Elderly or disabled, no more than two persons in the family. Income must be less than $37,100 (1 person) or no more than $42,400 (2 people)",
    "Section 8 Housing/ Voucher Programs",
    "Available for low-income individuals and families to provide safe and decent affordable housing",
    
    "Participants pay at least 30 percent of their monthly income toward their rent to a private landlord of their choice and the program will pay the landlord the remaining balance of the rent",
    "Trellis",
    "A non-profit organization, providing home ownership counseling, financial access and neighborhood development.",
    "Available in all 50 states",
    "Fastrack housing",
    "Infill housing",
    "Oregon",
    "Portland- proposed changes that would allow more housing units to be built in residential neighborhoods, but only if they follow new limits on size and scale.",
    "https://www.portlandoregon.gov/bps/67728 ",
    "Washington D.C.",
    "https://dhcd.dc.gov/service/locating-affordable-housing",
    "Colorado",
    "Infill Action Plan",
    "Will be used to provide high level policy guidance for the City, to support initiatives that further infill and in the review of applicable land use applications for consistency with these goals.",
    "https://coloradosprings.gov/planning-and-development/page/infill-and-redevelopment",
    "Texas",
    "The Corsicana City Council, CISD, Navarro County and the Navarro College District hold numerous properties in the city, called “tax trust” lots, acquired through foreclosure for non-payment of ad valorem (real estate) taxes. Most are vacant parcels. A program has been designed to make these lots available to individuals and builders at a very low cost. The program streamlines the process for conveying these lots by providing a single point-of-contact at the City to handle required administrative approvals and sales.",
    "https://www.cityofcorsicana.com/977/Infill-Housing-Program",
    "Nevada",
    "Infill Development Plan",
    "Describes the structure of the rapid growth in the Las Vegas Valley. The growth has been urban fringe-oriented, and have favored suburban development locations",
    "https://www.leg.state.nv.us/73rd/Interim/Studies/Housing/masterPlanDocs/SNRPC%20Infill%20DevelopmentPlan.pdf",
    
    "Eviction",
    "Oregon, D.C., Colorado, Texas, and Nevada",
    "Tiny houses in backyard to lease or rent or give away",
    "LA is considering",
    "Oregon buy house for $1 but must be stable monetarily",
    "Municipal programs",
    "Phoenix",
    "Neighborhood Services Department offers financial aid to stabilize home systems, immediate health and safety issues, eliminates hazards, conserving water and energy, and addressing home violations.",
    "https://www.phoenix.gov/nsd/programs/housing-repair-programs",
    
    "As Phoenix is one of the fastest growing cities in the country, the population is increasing constantly, with that the amount of homeless people on the streets is growing as well. City officials and residents of Phoenix do not want to raise taxes for the greater good of these peoples’ lives, they want that money to be invested in developments. Whereas, Los Angeles voters have voted twice in the past three years, to raise their taxes to pay for homeless services and housing.",
    
    "LAHSA",
    "LAHSA (Los Angeles Homeless Services Authority) is a small army of homeless service and housing providers getting people off the street with the money voters approved. Between July 2017 to December 2018, they moved 27,000 people into permanent housing.",
    
    "https://www.hud.gov/program_offices/housing/sfh/reo/goodn/dhmabout ",
    "Local governments can partner with local nonprofit homeownership organizations or tap into existing local programs to resell the homes to low-to-moderate income residents of the community.",

];
function newFact() {
    var para = document.createElement("p");
    var node = document.createTextNode(facts[factsIndex]);
    para.appendChild(node);
    
    var element = document.getElementById("factContainer");
    element.appendChild(para);
    factsIndex = factsIndex + 1;

}