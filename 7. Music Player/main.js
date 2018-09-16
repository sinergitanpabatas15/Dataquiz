(function IIFE() {
    
    const list = [
        {id: 1, url: 'https://res.cloudinary.com/dkzj4hdmd/video/upload/v1536992860/Marcel_Pequel_-_01_-_One_rwev7k.mp3', author: 'Marcel Pequel', title: 'One', cover: 'https://res.cloudinary.com/dkzj4hdmd/image/upload/v1536400483/cover_yz2mak.jpg'},
        {id: 2, url: 'https://res.cloudinary.com/dkzj4hdmd/video/upload/v1536992860/Marcel_Pequel_-_02_-_Two_yd6dv2.mp3', author: 'Marcel Pequel', title: 'Two', cover: 'https://res.cloudinary.com/dkzj4hdmd/image/upload/v1536400483/cover_yz2mak.jpg'},
        {id: 3, url: 'https://res.cloudinary.com/dkzj4hdmd/video/upload/v1536992858/Marcel_Pequel_-_03_-_Three_y2k4q5.mp3', author: 'Marcel Pequel', title: 'Three', cover: 'https://res.cloudinary.com/dkzj4hdmd/image/upload/v1536400483/cover_yz2mak.jpg'},
        {id: 4, url: 'https://res.cloudinary.com/dkzj4hdmd/video/upload/v1536992859/Marcel_Pequel_-_04_-_Four_ezfkr1.mp3', author: 'Marcel Pequel', title: 'Four', cover: 'https://res.cloudinary.com/dkzj4hdmd/image/upload/v1536400483/cover_yz2mak.jpg'},
        {id: 5, url: 'https://res.cloudinary.com/dkzj4hdmd/video/upload/v1536992858/Marcel_Pequel_-_05_-_Five_pd3ql5.mp3', author: 'Marcel Pequel', title: 'Five', cover: 'https://res.cloudinary.com/dkzj4hdmd/image/upload/v1536400483/cover_yz2mak.jpg'},
        {id: 6, url: 'https://res.cloudinary.com/dkzj4hdmd/video/upload/v1536400484/Marcel_Pequel_-_06_-_Six_o1nplu.mp3', author: 'Marcel Pequel', title: 'Six', cover: 'https://res.cloudinary.com/dkzj4hdmd/image/upload/v1536400483/cover_yz2mak.jpg'},
        {id: 7, url: 'https://res.cloudinary.com/dkzj4hdmd/video/upload/v1536992858/Marcel_Pequel_-_07_-_Seven_mv0w1p.mp3', author: 'Marcel Pequel', title: 'Seven', cover: 'https://res.cloudinary.com/dkzj4hdmd/image/upload/v1536400483/cover_yz2mak.jpg'},
        {id: 8, url: 'https://res.cloudinary.com/dkzj4hdmd/video/upload/v1536992858/Marcel_Pequel_-_08_-_Eight_sjcbbx.mp3', author: 'Marcel Pequel', title: 'Eight', cover: 'https://res.cloudinary.com/dkzj4hdmd/image/upload/v1536400483/cover_yz2mak.jpg'},
        {id: 9, url: 'https://res.cloudinary.com/dkzj4hdmd/video/upload/v1536992857/Marcel_Pequel_-_09_-_Nine_y2zrx7.mp3', author: 'Marcel Pequel', title: 'Nine', cover: 'https://res.cloudinary.com/dkzj4hdmd/image/upload/v1536400483/cover_yz2mak.jpg'},
    ]
    
    let currentId = 0;
    let isPlaying = false;
    let isLoop = true;
    let isShuffle = false;
    let currentAudio = 'music1';
    let timer = null;
    
    const currentTimeIndicator = document.querySelector('.music-time__current');
    const leftTimeIndicator = document.querySelector('.music-time__last');
    const progressBar = document.getElementById('length');
    const playBtn = document.querySelector('.play');
    const cover = document.querySelector('.cover');
    const title = document.querySelector('.music-player__title');
    const author = document.querySelector('.music-player__author');
    
    const loopBtn = document.getElementById('loop');
    const shuffleBtn = document.getElementById('shuffle');
    const forwardBtn = document.getElementById('forward');
    const backwardBtn = document.getElementById('backward');
    const prevBtn = document.getElementById('prev');
    const nextBtn = document.getElementById('next');
    const progressDiv = document.getElementById('progress');
    
    function play(e) {
        if(!isPlaying) {
            // console.log('play');
            e.target.src = './img/pause.svg';
            e.target.alt = 'Pause';
            isPlaying = true;
            document.getElementById(currentAudio).play();
            showTime();
        } else {
            // console.log('pause');
            e.target.src = './img/play.svg';
            e.target.alt = 'Play';
            document.getElementById(currentAudio).pause();
            isPlaying = false;
            clearInterval(timer);
        }
    }
    
    function changeBar() {
        const audio = document.getElementById(currentAudio);
        const percentage = (audio.currentTime / audio.duration).toFixed(3);
        progressBar.style.transition = '';
        // console.log(audio.currentTime);
        
        //set current time
        const minute = Math.floor(audio.currentTime / 60);
        const second = Math.floor(audio.currentTime % 60);
        const leftTime = audio.duration - audio.currentTime;
        currentTimeIndicator.innerHTML = ('0' + minute).substr(-2) + ':' + ('0' + second).substr(-2);
        
        //set left time
        const leftMinute = Math.floor(leftTime / 60);
        const leftSecond = Math.floor(leftTime % 60);
        
        leftTimeIndicator.innerHTML = ('0' + leftMinute).substr(-2) + ':' + ('0' + leftSecond).substr(-2);
        
        //set time bar
        progressBar.style.width = (percentage * 100) + '%';
    }
    
    function showTime() {
        timer = setInterval(() => changeBar(),500);
    }
    
    function nextMusic(mode) {
        playBtn.src = './img/play.svg';
        playBtn.alt = 'Play';
        document.getElementById(currentAudio).pause();
        isPlaying = false;
        clearInterval(timer);
        
        if(mode === 'next') {
            currentId = currentId + 1 > list.length-1? 0 : (currentId + 1);
            init();
        } else {
            currentId = currentId - 1 < 0?  (list.length -1) : (currentId - 1);
            init();
        }
    }
    
    function shuffle (e) {
        isShuffle = !isShuffle;
        if(isShuffle) {
            e.target.parentNode.classList.add('is-loop');
        } else {
            e.target.parentNode.classList.remove('is-loop');
        }
    }
    
    function backward () {
        const audio = document.getElementById(currentAudio);
        audio.currentTime -= 5;
        if(!isPlaying) { changeBar(); }
    }
    
    function forward () {
        const audio = document.getElementById(currentAudio);
        audio.currentTime += 5;
        if(!isPlaying) { changeBar(); }
    }
    
    function stopMusic() {
        playBtn.src = './img/play.svg';
        playBtn.alt = 'Play';
        isPlaying = false;
    }
    
    function goToNextMusic() {
        let newId = currentId;
        while(isShuffle && newId === currentId) {
            newId = Math.floor(Math.random() * Math.floor(list.length-1));
        }
        
        currentId = isShuffle? newId : (currentId + 1 > list.length-1? 0 : currentId + 1);
        init();
        document.getElementById(currentAudio).play();
    }
    
    function loop(e) {
        const audio = document.getElementById(currentAudio);
        
        if(!isLoop) {
            isLoop = true;
            // console.log('is loop');
            e.target.parentNode.classList.add('is-loop');
            audio.loop = true; 
            audio.onended = (e) => goToNextMusic();
        } else {
            // console.log('not loop');
            isLoop = false;
            e.target.parentNode.classList.remove('is-loop');
            audio.loop = false;
            audio.onended = (e) => stopMusic();
        }
        
    }
    
    function progress (e) {
        const audio = document.getElementById(currentAudio);
        //get current position and minus progress bar's x position to get current position in progress bar
        const pos = (e.pageX - progressDiv.getClientRects()[0].x) / progressDiv.getClientRects()[0].width;
        audio.currentTime = pos * audio.duration;
        changeBar();
    }
    
    function init() {
        //reset music duration and setup audio
        const audio = document.getElementById(currentAudio) === null? new Audio() : document.getElementById(currentAudio);
        audio.src = list[currentId].url;
        audio.id = currentAudio;
        document.getElementById(currentAudio) === null? document.body.appendChild(audio) : '';
        
        progressBar.style.transition = 'none';
        progressBar.style.width = '0%';
        document.getElementById(currentAudio).currentTime = 0;
        
        title.innerHTML = list[currentId].title;
        author.innerHTML = list[currentId].author;
        cover.src = list[currentId].cover;
        
        //set current time
        audio.addEventListener('loadedmetadata', function() {
            const leftMinute = Math.floor(audio.duration / 60);
            const leftSecond = Math.floor(audio.duration % 60);
            currentTimeIndicator.innerHTML = '00:00';
            leftTimeIndicator.innerHTML = ('0' + leftMinute).substr(-2) + ':' + ('0' + leftSecond).substr(-2);
            progressBar.style.transition = '';
        });
        
        //set loop
        document.getElementById(currentAudio).onended = (e) => goToNextMusic(e);
    }
    
    playBtn.addEventListener('click', play);
    loopBtn.addEventListener('click', loop);
    
    shuffleBtn.addEventListener('click', shuffle);
    forwardBtn.addEventListener('click', forward);
    backwardBtn.addEventListener('click', backward);
    
    prevBtn.addEventListener('click', (e) => nextMusic('prev'));
    nextBtn.addEventListener('click', (e) => nextMusic('next'));
    progressDiv.addEventListener('click', (e) => { progress(e); });
    
    init();
    
})();