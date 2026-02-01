let audio = new Audio();
let playlistItems = document.querySelectorAll("#playlist li");
let playButton = document.getElementById("play");
let currentSong = document.getElementById("current-song");
let isPlaying = false;

playlistItems.forEach(item => {
    item.addEventListener("click", () => {
        audio.src = item.dataset.src;
        currentSong.textContent = item.textContent;
        audio.play();
        isPlaying = true;
        playButton.textContent = "⏸️";
    });
});

playButton.addEventListener("click", () => {
    if (isPlaying) {
        audio.pause();
        playButton.textContent = "▶️";
        isPlaying = false;
    } else {
        audio.play();
        playButton.textContent = "⏸️";
        isPlaying = true;
    }
});
