let post = document.querySelector(".container");
let like = document.querySelector(".like i");

post.addEventListener("dblclick", function(){
    like.style.transform = "translate(-50%,-50%) scale(1)";

    setTimeout(() => {
        like.style.transform = "translate(-50%,-50%) scale(0)";
    }, 1000);

    console.log("clicked");
});
