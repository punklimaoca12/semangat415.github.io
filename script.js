function playAudio() {
    const audio = document.getElementById('backSound');
    if (audio.paused) {
        audio.play();
        alert("Biarkan musik ini mengingatkanmu betapa berartinya kamu di dunia ini 💖");
    } else {
        audio.pause();
        alert("Musik dihentikan. Tapi ingat, kamu tetap luar biasa!");
    }
}
