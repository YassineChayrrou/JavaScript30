window.addEventListener('keydown', event => {
    const audioFile = document.querySelector(`audio[data-key="${event.key}"]`)
    if (!audioFile) {
        return;
    }
    audioFile.currentTime = 0;
    audioFile.play()
})