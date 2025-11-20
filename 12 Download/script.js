

let btn = document.querySelector(".downloadBtn");
let range = document.querySelector(".inner");
let percent = document.querySelector(".percent");
let p =1;

btn.addEventListener("click",function(){

    btn.style.pointerEvents ="none";

    let interval = setInterval(function(){
        percent.textContent = p + "%";
        range.style.width = p + "%";
        p++;
    },100);

    setTimeout(function(){
        clearInterval(interval);
        btn.style.opacity = "0.7";
        btn.textContent = "Downloded";
    },10000);
    
})