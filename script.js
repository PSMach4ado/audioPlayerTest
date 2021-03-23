let music = document.getElementById("music");
let playBtn = document.getElementById("play");
let progressBar = document.getElementById("rangeProgress");

addEventListener('load', iniciar);

function iniciar(){
    music.duration;
}

playBtn.addEventListener("click", () => {
    if(music.paused){
        music.play();
        playBtn.src = "./assets/pause.png";
    }else{
        music.pause();
        playBtn.src = "./assets/play.png";
    }
})

function progresso(){

    progressBar.setAttribute("max", music.duration);
    progressBar.setAttribute("value", music.currentTime);

    let time = music.currentTime;

    let hour = Math.floor (time / 3600);
    let minutes = Math.floor (time / 60);
    let seconds = Math.floor (time % 60);

    if(hour < 10) {
        hour = "0" + hour
    }

    if (minutes < 10) {
        minutes = "0" + minutes
    }

    if (seconds < 10){
        seconds = "0" + seconds
    }

    document.getElementById("tempo").innerHTML = hour + ":" + minutes + ":" + seconds;

}

setInterval(progresso, 1000);

progressBar.addEventListener("input", () =>{

})

progressBar.addEventListener("mousedown", () => {
    music.pause();

    progressBar.addEventListener("input", (e) => {
        music.currentTime = e.target.value;
    })
})

progressBar.addEventListener("mouseup", () => {
    music.play();

    function retomando(){
        let value = progressBar.getAttribute("value");
        progressBar.value = value;

    }

    setInterval(retomando, 1000);
})

let volume_show = document.getElementById("volume");
let recent_vol = document.getElementById("rangeVol");
let sound_image = document.getElementById("sound");

function volume_change(){
    volume_show.innerHTML = recent_vol.value;
    music.volume = recent_vol.value / 100;

    if(music.volume == 0){
        sound_image.src = "./assets/sound_mute.png";
    }else{
        sound_image.src = "./assets/sound.png";
    }

    if(music.volume > 70){
        
    }
    
}