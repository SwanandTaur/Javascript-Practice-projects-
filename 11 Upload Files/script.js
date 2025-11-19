
let btn = document.querySelector("button");

let inp = document.querySelector("#inp");

btn.addEventListener("click", function(){
    inp.click();
});

inp.addEventListener("change",function(dets){
    let file = dets.target.files[0];
    if(file){
        btn.textContent = file.name;
    }
})