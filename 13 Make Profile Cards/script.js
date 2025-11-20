

let form = document.querySelector("form");
let inputs = document.querySelectorAll(".inputs input");
let cards = document.querySelector(".cards");

form.addEventListener("submit",function(dets){
    dets.preventDefault();
    console.log(inputs)
    let card = document.createElement("div");
    card.classList.add("card");

    let profilePic = document.createElement("div");
    profilePic.classList.add("profilePic");

    let img = document.createElement("img");
    img.src = inputs[0].value;

    profilePic.appendChild(img);
    card.appendChild(profilePic);

    let name = document.createElement("h1");
    name.classList.add("name");
    name.textContent = inputs[1].value;
    card.appendChild(name);

    let proff = document.createElement("h2");
    proff.classList.add("proffession");
    proff.textContent = inputs[2].value;
    card.appendChild(proff);

    let about = document.createElement("p");
    about.classList.add("intro");
    about.textContent = inputs[3].value;
    card.appendChild(about);

    cards.appendChild(card);

    inputs.forEach(function(input){
        if(input.type !== "submit"){
            input.value = "";
        }
    })
});