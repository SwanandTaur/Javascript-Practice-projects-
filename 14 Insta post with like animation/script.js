let img = document.querySelector("#pointerImg");
let love = document.querySelector(".postImg i");
let like = document.querySelector("#like");
let bookmark = document.querySelector("#bookmark");
let flag = 0;

img.addEventListener("dblclick", function () {
  love.style.opacity = 1;
  love.style.transform = "translate(-50%,-50%) scale(1) rotate(0deg)";

  setTimeout(function () {
    love.style.transform = "translate(-50%,-300%) scale(1) rotate(80deg)";
  }, 1000);
  setTimeout(function () {
    love.style.opacity = 0;
  }, 1200);
  setTimeout(function () {
    love.style.transform = "translate(-50%,-50%) scale(0) rotate(80deg)";
  }, 1400);

  flag = 0;
  like.classList.remove("ri-heart-3-line");
  like.classList.add("ri-heart-3-fill");
  like.style.color = "red";
});

like.addEventListener("click", function () {
  if (flag === 0) {
    like.classList.remove("ri-heart-3-line");
    like.classList.add("ri-heart-3-fill");
    like.style.color = "red";
    flag = 1;
  }else{
    like.classList.remove("ri-heart-3-fill");
    like.classList.add("ri-heart-3-line");
    like.style.color = "#111";
    flag = 0;
  }
});

