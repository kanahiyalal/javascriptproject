const progres = document.getElementById("progress");
const songs = document.getElementById("song");
const controlIcon = document.getElementById("ctrlIcon");

let Interval;

songs.onloadedmetadata = function() {
    progres.max = songs.duration;
    progres.value = songs.currentTime;
};

function playPause() {
    if (controlIcon.classList.contains("fa-pause")) {
        songs.pause();
        controlIcon.classList.remove("fa-pause");
        controlIcon.classList.add("fa-play");
    } else {
        songs.play();
        controlIcon.classList.add("fa-pause");
        controlIcon.classList.remove("fa-play");
    }
}


songs.addEventListener("play", () => {
    setInterval(() => {
        progres.value = songs.currentTime;
    }, 500);
});

progres.onchange = function () {
    songs.currentTime = progres.value;
    songs.play();
    controlIcon.classList.add("fa-pause");
    controlIcon.classList.remove("fa-play");
};
