

let stories = document.querySelector(".stories");
let fullScreen = document.querySelector(".fullScreen");
let clutter = "";

let obj = [
    {
        dp:"https://images.unsplash.com/photo-1516522973472-f009f23bba59?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",story:"https://images.unsplash.com/photo-1586907835000-f692bbd4c9e0?q=80&w=361&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        dp:"https://images.unsplash.com/photo-1568739253582-afa48fbcea47?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGdpcmxzfGVufDB8fDB8fHww",story:"https://plus.unsplash.com/premium_photo-1673792686302-7555a74de717?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Z2lybHN8ZW58MHx8MHx8fDA%3D"
    },
];

obj.forEach((val,idx)=>{
    clutter = clutter += `<div class="story">
    <img id="${idx}" src=${val.dp}>
    </div>`;
});

stories.innerHTML = clutter;

stories.addEventListener("click",function(dets){
    console.log(obj[dets.target.id]);
    fullScreen.style.backgroundImage=`url(${obj[dets.target.id].story})`;
    fullScreen.style.display = "block";

    setTimeout(()=>{
        fullScreen.style.display = "none";
    },2000);
})

 

