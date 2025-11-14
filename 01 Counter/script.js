

let count = document.querySelector("#count");

let inc = document.querySelector("#inc");

let dec = document.querySelector("#dec");

let reset = document.querySelector("#reset");

inc.addEventListener("click",function(){
    count.textContent = +count.textContent+1;
});

dec.addEventListener("click",function(){
    count.textContent = +count.textContent-1;
});

reset.addEventListener("click",function(){
    count.textContent = 0;
})
