// DRUM KIT (Modified Wes Bos JS30 Challenge)

// Listen for key events on the page
document.addEventListener("keydown", playSound);

// Event Function
function playSound(event) {
    console.log(event.keyCode);

    if (event.keyCode == 65) { // "a"
        // Play A-Clap
        playkey('clap', 'A')

    } else if (event.keyCode == 83) { // "s"
        // Play S-hihat
        playkey('hihat', 'S')

    } else if (event.keyCode == 68) { // "d"
        // Play D-kick
        playkey('kick', 'D')

    } else if (event.keyCode == 70) { // "f"
        // Play F-Openhat
        playkey('openhat', 'F')

    } else if (event.keyCode == 71) { // "g"
        // Play G-Boom
        playkey('boom', 'G')

    } else if (event.keyCode == 72) { // "h"
        // Play H-Ride
        playkey('ride', 'H')

    } else if (event.keyCode == 74) { // "j"
        // Play J-Snare
        playkey('snare', 'J')

    } else if (event.keyCode == 75) { // "k"
        // Play K-Tom
        playkey('tom', 'K')

    } else if (event.keyCode == 76) { // "l"
        // Play L-Tink
        playkey('tink', 'L')

    }
}

// Add transition end listeners
document.getElementById('A').addEventListener('transitionend', removePlaying);
document.getElementById('S').addEventListener('transitionend', removePlaying);
document.getElementById('D').addEventListener('transitionend', removePlaying);
document.getElementById('F').addEventListener('transitionend', removePlaying);
document.getElementById('G').addEventListener('transitionend', removePlaying);
document.getElementById('H').addEventListener('transitionend', removePlaying);
document.getElementById('J').addEventListener('transitionend', removePlaying);
document.getElementById('K').addEventListener('transitionend', removePlaying);
document.getElementById('L').addEventListener('transitionend', removePlaying);

// Transition End FUnction
function removePlaying(event) {
    event.target.classList.remove("playing");
}

//Helper Function
function playkey(name, key) {
    let audio = document.getElementById(name);
    audio.currentTime = 0;
    audio.play();
    document.getElementById(key).classList.add("playing");
}