const keys = document.querySelectorAll(".key");
let volume = document.querySelector("#volumeRange");
let toggle = document.querySelector("#toggle");

const allKeys = [];
let aud = new Audio(`tunes/a.wav`);

function playTune(key) {
  aud.src = `tunes/${key}.wav`;

  aud.play();
}
keys.forEach(function (key) {
  allKeys.push(key.dataset.key);

  key.addEventListener("click", function () {
    playTune(key.dataset.key);
  });
});

function showHide(){
    keys.forEach((val)=>{val.classList.toggle("hide")});
}

const setVolume = (e) => {
    aud.volume = e.target.value;
}

const pressKey = (e)=>{ 
    const key = e.key.toLowerCase();

    let keyElement = document.querySelector(`.key[data-key="${key}"]`);

    if(keyElement){
        keyElement.classList.add("active");
        playTune(key);

        setTimeout(() => {
            keyElement.classList.remove("active");
        }, 150);
    }
//      e.key.classList.add('active')
// if(allKeys.includes(e.key)) playTune(e.key);
}

toggle.addEventListener("click",()=>{showHide()});
volume.addEventListener("input",setVolume);
document.addEventListener("keydown",pressKey);