window.onload = function() {
    const input = document.getElementsByClassName('input');
    const checkBtn = document.getElementsByClassName('check');
    const output = document.getElementsByClassName('output');
    const emojis = document.getElementsByClassName('emoji');

    let currentIndex = 0;
    let audio = null;

    // Initialize emoji display
    if (emojis[0]) {
        emojis[0].innerText = songlist[currentIndex].emoji;
    }

    // Check button event listener
    if (checkBtn[0]) {
        checkBtn[0].addEventListener('click', function () {
            if (input[0] && input[0].value.trim() !== "") {
                if (input[0].value.toLowerCase() === songlist[currentIndex].name) {
                    output[0].innerText = "CORRECT!!";
                    // Play audio clip
                    if (audio) {
                        audio.pause();
                        audio.currentTime = 0;
                    }
                    audio = new Audio(songlist[currentIndex].audio);
                    audio.play().catch(error => {
                        console.error("Audio playback failed:", error);
                    });
                } else {
                    output[0].innerText = "WRONG!!";
                    output[0].innerText +=`The correct answer is : ${songlist[currentIndex].name}`;
                    if (audio) {
                        audio.pause();
                        audio.currentTime = 0;
                    }
                }
            } else {
                alert("Please enter a guess");
            }
        });
    }

    // Next button event listener
    const nextBtn = document.getElementsByClassName('next');
    if (nextBtn[0]) {
        nextBtn[0].addEventListener('click', function () {
            currentIndex = (currentIndex + 1) % songlist.length;
            if (emojis[0]) {
                emojis[0].innerText = songlist[currentIndex].emoji;
            }
            if (input[0]) {
                input[0].value = "";
            }
            if (output[0]) {
                output[0].innerText = "";
            }
            if (audio) {
                audio.pause();
                audio.currentTime = 0;
            }
        });
    }
}
