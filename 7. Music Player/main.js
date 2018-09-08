(function IIFE() {

    isPlaying = false;
    isLoop = false;
    currentAudio = 'music1';

    function play(e) {
        if(!isPlaying) {
            console.log('pause');
            e.target.src = './img/pause.svg';
            e.target.alt = 'Pause';
            isPlaying = true;
            document.getElementById(currentAudio).play();
        } else {
            console.log('play');
            e.target.src = './img/play.svg';
            e.target.alt = 'Play';
            document.getElementById(currentAudio).pause();
            isPlaying = false;
        }
        if(!isLoop) {
            //show play icon when audio stops
            document.getElementById(currentAudio).onended = () => {
                e.target.src = './img/play.svg';
                e.target.alt = 'Play';
                isPlaying = false;
            }
        }
    }

    function loop(e) {
        if(!isLoop) {
            console.log('is loop');
            e.target.parentNode.classList.add('is-loop');
            document.getElementById(currentAudio).loop = true; 
            isLoop = true;

        } else {
            console.log('not loop');
            e.target.parentNode.classList.remove('is-loop');
            document.getElementById(currentAudio).loop = false;
            isLoop = false;
        }

    }

    function forward () {
        let currentTime = document.getElementById(currentAudio).currentTime;
        console.log(currentTime);
        currentTime = parseInt(currentTime) + 5;
    }

    document.getElementById('play').addEventListener('click', play);
    document.getElementById('loop').addEventListener('click', loop);
    document.getElementById('forward').addEventListener('click', forward);

})();