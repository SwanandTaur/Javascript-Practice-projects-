
const para = document.querySelector("p");
const text = para.innerText;

const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

let iteration = 0;
let intervalId = null;

function randomText(){
    const str = text.split("").map((char,idx)=>{
        if(idx < iteration){
            return char;
        }
        return chars.split("")[Math.floor(Math.random()*chars.length)];
    }).join("");
    para.innerText = str;
    iteration += 0.2;

    if(iteration >= text.length){
        clearInterval(intervalId);
        intervalId = null;
    }
}

para.addEventListener("mouseenter",()=>{
    iteration = 0;
    
    if (intervalId) clearInterval(intervalId);

    intervalId = setInterval(randomText, 50);
})