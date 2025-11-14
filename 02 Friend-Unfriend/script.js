let status = document.querySelector("#status");
let btn = document.querySelector("#btn");

let flag = 0;

btn.addEventListener("click", function () {
  if (flag === 0) {
    status.innerHTML = "Friends";
    status.style.color = "green";
    btn.innerHTML =  "Remove Friend";
    btn.style.backgroundColor = "#806a6aff";
    flag = 1;
  }else{
    status.innerHTML = "Stranger";
    status.style.color = "red";
    btn.innerHTML =  "Add Friend";
    btn.style.backgroundColor = "rgb(0, 87, 58)";
    flag = 0;
  }
});

