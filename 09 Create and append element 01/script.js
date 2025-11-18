
let btn = document.querySelector("button");
let main = document.querySelector("main");

let txtArr = ["Good code is readable code.","Deleted code is debugged code.","It's all about logic.","It works on my machine.","Code is like humor.","Good code is its own documentation.","First, solve the problem.","Talk is cheap, show me the code.","Code can power a website.","Programming takes patience.","Always be learning new things."]

btn.addEventListener("click",function(){
    let txt = document.createElement("h1");
    let idx = Math.floor(Math.random()*txtArr.length);
    let quote = txtArr[idx];

    let x = Math.floor(Math.random()*101);
    let y = Math.floor(Math.random()*101);
    let rotate = Math.random()*361;
    let scale = Math.random()*2;
    let c1 = Math.floor(Math.random()*256);
    let c2 = Math.floor(Math.random()*256);
    let c3 = Math.floor(Math.random()*256);

    txt.textContent = `${quote}`;
    txt.style.left = x + "%";
    txt.style.top = y + "%";
    txt.style.rotate = rotate + "deg";
    txt.style.scale = scale;
    txt.style.color = `rgb(${c1},${c2},${c3})`;

    console.log(txt.textContent);
    main.appendChild(txt);
});