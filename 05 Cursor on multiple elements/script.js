
let element = document.querySelectorAll("main>div");

let img = document.querySelector("img");

element.forEach((val)=>{

    val.addEventListener("mouseenter",()=>{
        val.childNodes[3].style.opacity = 1;
    });

    val.addEventListener("mouseleave",()=>{
        val.childNodes[3].style.opacity = 0;
    });

    val.addEventListener("mousemove",function(dets){
        val.childNodes[3].style.left = dets.x + "px";
        // val.childNodes[3].style.top = dets.y + "px";
    });
})