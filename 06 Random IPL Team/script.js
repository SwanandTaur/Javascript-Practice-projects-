

let main = document.querySelector("main");
let container = document.querySelector(".container");
let logo = document.querySelector(".logo");
let teamName = document.querySelector(".name");
let fullForm = document.querySelector(".fullForm");
let captain = document.querySelector(".captain");

let btn =  document.querySelector("button");

let teams = [
    {
        name:"CSK",
        fullForm:"Chennai Super Kings",
        captain:"M. S. Dhoni",
        logo:`./images/CSKoutline.png`,
        primaryColor:"#ffcb05",
        secondaryColor:"#242937",
    },
    {
        name:"MI",
        fullForm:"Mumbai Indians",
        captain:"Rohit Sharma",
        logo:`./images/MIoutline.png`,
        primaryColor:"#2d6ab1",
        secondaryColor:"#133165",
    },
    {
        name:"DC",
        fullForm:"Delhi Capitals",
        captain:"Axar Patel",
        logo:`./images/DCoutline.png`,
        primaryColor:"#b9251c",
        secondaryColor:"#01184b",
    },
    {
        name:"GT",
        fullForm:"Gujarat Titans",
        captain:"Shubman Gill",
        logo:`./images/GToutline.png`,
        primaryColor:"#77c7f2",
        secondaryColor:"#0e1b31",
    },
    {
        name:"KKR",
        fullForm:"Kolkata Knight Riders",
        captain:"Ajinkya Rahane",
        logo:`./images/KKRoutline.png`,
        primaryColor:"#ecc542",
        secondaryColor:"#281f4a",
    },
    {
        name:"LSG",
        fullForm:"Lucknow Super Giants",
        captain:"Rishabh Pant",
        logo:`./images/LSGoutline.png`,
        primaryColor:"#0248bb",
        secondaryColor:"#916a6aff",
    },
    {
        name:"PBKS",
        fullForm:"Punjab Kings",
        captain:"Shreyas Iyer",
        logo:`./images/PBKSoutline.png`,
        primaryColor:"#d71920",
        secondaryColor:"#273665",
    },
    {
        name:"RCB",
        fullForm:"Royal Challengers Bengaluru",
        captain:"Rajat Patidar",
        logo:`./images/RCBoutline.png`,
        primaryColor:"#2b2a29",
        secondaryColor:"#40191c",
    },
    {
        name:"SRH",
        fullForm:"Sunrisers Hyderabad",
        captain:"Pat Cummins",
        logo:`./images/SRHoutline.png`,
        primaryColor:"#f26522",
        secondaryColor:"#712324",
    },
    {
        name:"RR",
        fullForm:"Rajasthan Royals",
        captain:"Sanju Samson",
        logo:`./images/RR_logo.webp`,
        primaryColor:"#eb83b5",
        secondaryColor:"#042a5a",
    },
]

btn.addEventListener("click",function(){
    let winner = teams[Math.floor(Math.random()*teams.length)];

    main.style.backgroundColor = `${winner.primaryColor}`;
    container.style.backgroundColor = `${winner.secondaryColor}`;
    logo.innerHTML = `<img src="${winner.logo}">`;
    teamName.innerHTML = `${winner.name}`;
    fullForm.innerHTML =`${winner.fullForm}`;
    captain.innerHTML = `${winner.captain}`;
});