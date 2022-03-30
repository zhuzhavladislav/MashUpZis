"use strict";

const audio = document.querySelector('audio');
const btnPlay = document.querySelector('.play');
let time = document.querySelector('.time');
let isPlay = false;

function playAudio(){
    if(!isPlay){
        audio.play();
        isPlay = true;
    } else {
        audio.pause();
        isPlay = false;
    }
}
function toggleBtn(){
    btnPlay.classList.toggle('play');
    btnPlay.classList.toggle('pause');
}
function progressListening(){
    if(isPlay){
        setInterval(function(){
            time.style.width = (audio.currentTime / audio.duration * 100) + '%';
        }, 2)
    }
}
btnPlay.addEventListener('click', playAudio);
btnPlay.addEventListener('click', toggleBtn);
btnPlay.addEventListener('click', progressListening);
