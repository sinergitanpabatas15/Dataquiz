(function IIFE() {
    
    const list = [
        {id: 1, url: 'http://res.cloudinary.com/dkzj4hdmd/video/upload/v1536992860/Marcel_Pequel_-_01_-_One_rwev7k.mp3', author: 'Marcel Pequel', title: 'One', cover: 'http://res.cloudinary.com/dkzj4hdmd/image/upload/v1536400483/cover_yz2mak.jpg'},
        {id: 2, url: 'http://res.cloudinary.com/dkzj4hdmd/video/upload/v1536992860/Marcel_Pequel_-_02_-_Two_yd6dv2.mp3', author: 'Marcel Pequel', title: 'Two', cover: 'http://res.cloudinary.com/dkzj4hdmd/image/upload/v1536400483/cover_yz2mak.jpg'},
        {id: 3, url: 'http://res.cloudinary.com/dkzj4hdmd/video/upload/v1536992858/Marcel_Pequel_-_03_-_Three_y2k4q5.mp3', author: 'Marcel Pequel', title: 'Three', cover: 'http://res.cloudinary.com/dkzj4hdmd/image/upload/v1536400483/cover_yz2mak.jpg'},
        {id: 4, url: 'http://res.cloudinary.com/dkzj4hdmd/video/upload/v1536992859/Marcel_Pequel_-_04_-_Four_ezfkr1.mp3', author: 'Marcel Pequel', title: 'Four', cover: 'http://res.cloudinary.com/dkzj4hdmd/image/upload/v1536400483/cover_yz2mak.jpg'},
        {id: 5, url: 'http://res.cloudinary.com/dkzj4hdmd/video/upload/v1536992858/Marcel_Pequel_-_05_-_Five_pd3ql5.mp3', author: 'Marcel Pequel', title: 'Five', cover: 'http://res.cloudinary.com/dkzj4hdmd/image/upload/v1536400483/cover_yz2mak.jpg'},
        {id: 6, url: 'http://res.cloudinary.com/dkzj4hdmd/video/upload/v1536400484/Marcel_Pequel_-_06_-_Six_o1nplu.mp3', author: 'Marcel Pequel', title: 'Six', cover: 'http://res.cloudinary.com/dkzj4hdmd/image/upload/v1536400483/cover_yz2mak.jpg'},
        {id: 7, url: 'http://res.cloudinary.com/dkzj4hdmd/video/upload/v1536992858/Marcel_Pequel_-_07_-_Seven_mv0w1p.mp3', author: 'Marcel Pequel', title: 'Seven', cover: 'http://res.cloudinary.com/dkzj4hdmd/image/upload/v1536400483/cover_yz2mak.jpg'},
        {id: 8, url: 'http://res.cloudinary.com/dkzj4hdmd/video/upload/v1536992858/Marcel_Pequel_-_08_-_Eight_sjcbbx.mp3', author: 'Marcel Pequel', title: 'Eight', cover: 'http://res.cloudinary.com/dkzj4hdmd/image/upload/v1536400483/cover_yz2mak.jpg'},
        {id: 9, url: 'http://res.cloudinary.com/dkzj4hdmd/video/upload/v1536992857/Marcel_Pequel_-_09_-_Nine_y2zrx7.mp3', author: 'Marcel Pequel', title: 'Nine', cover: 'http://res.cloudinary.com/dkzj4hdmd/image/upload/v1536400483/cover_yz2mak.jpg'},
    ]
    
    let currentId = 8;
    let isPlaying = false;
    let isLoop = true;
    let isShuffle = false;
    let currentAudio = 'music1';
    let timer = null;
    
    function play(e) {
        if(!isPlaying) {
            console.log('play');
            e.target.src = './img/pause.svg';
            e.target.alt = 'Pause';
            isPlaying = true;
            document.getElementById(currentAudio).play();
            showTime();
        } else {
            console.log('pause');
            e.target.src = './img/play.svg';
            e.target.alt = 'Play';
            document.getElementById(currentAudio).pause();
            isPlaying = false;
            clearInterval(timer);
        }
    }
    
    function changeBar() {
        const audio = document.getElementById(currentAudio);

        //set current time
        const minute = Math.floor(audio.currentTime / 60);
        const second = Math.floor(audio.currentTime % 60);
        const leftTime = audio.duration - audio.currentTime;
        document.querySelector('.music-time__current').innerHTML = ('0' + minute).substr(-2) + ':' + ('0' + second).substr(-2);
        
        //set left time
        const leftMinute = Math.floor(leftTime / 60);
        const leftSecond = Math.floor(leftTime % 60);
        
        document.querySelector('.music-time__last').innerHTML = ('0' + leftMinute).substr(-2) + ':' + ('0' + leftSecond).substr(-2);
        
        //set time bar
        const percentage = (audio.currentTime / audio.duration).toFixed(3);
        document.getElementById('length').style.width = (percentage * 100) + '%';
    }
    
    function showTime() {
        timer = setInterval(() => changeBar(),500);
    }
    
    function loop(e) {
        if(!isLoop) {
            console.log('is loop');
            e.target.parentNode.classList.add('is-loop');
            document.getElementById(currentAudio).loop = true; 
            document.getElementById('length').style.transition = 'none';
            isLoop = true;
            document.getElementById(currentAudio).onended = (e) => stopMusic(e);
            
        } else {
            console.log('not loop');
            e.target.parentNode.classList.remove('is-loop');
            document.getElementById(currentAudio).loop = false;
            isLoop = false;
            document.getElementById(currentAudio).onended = (e) => goToNextMusic(e);
        }
        
    }
    
    function nextMusic(e, mode) {
        document.querySelector('.play').src = './img/play.svg';
        document.querySelector('.play').alt = 'Play';
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
        if(!isPlaying){ changeBar(); }
        console.log(audio.currentTime);
    }
    
    function forward () {
        const audio = document.getElementById(currentAudio);
        audio.currentTime += 5;
        if(!isPlaying){ changeBar(); }
        console.log(audio.currentTime);
    }
    
    function stopMusic(e) {
        e.target.src = './img/play.svg';
        e.target.alt = 'Play';
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
    
    function init() {
        //reset music duration and setup audio
        const audio = new Audio();
        audio.src = list[currentId].url;
        audio.id = currentAudio;
        document.body.appendChild(audio);
        document.getElementById('length').style.transition = 'none';
        document.getElementById('length').style.width = '0%';
        
        document.querySelector('.music-player__title').innerHTML = list[currentId].title;
        document.querySelector('.music-player__author').innerHTML = list[currentId].author;
        document.querySelector('.cover').src = list[currentId].cover;
        
        //set current time
        audio.addEventListener('loadedmetadata', function() {
            const leftMinute = Math.floor(audio.duration / 60);
            const leftSecond = Math.floor(audio.duration % 60);
            document.querySelector('.music-time__current').innerHTML = '00:00';
            document.querySelector('.music-time__last').innerHTML = ('0' + leftMinute).substr(-2) + ':' + ('0' + leftSecond).substr(-2);
            document.getElementById('length').style.transition = '';
        });
        
        //set loop
        document.getElementById(currentAudio).onended = (e) => goToNextMusic(e);
    }
    
    document.getElementById('play').addEventListener('click', play);
    document.getElementById('loop').addEventListener('click', loop);
    
    document.getElementById('shuffle').addEventListener('click', shuffle);
    document.getElementById('forward').addEventListener('click', forward);
    document.getElementById('backward').addEventListener('click', backward);
    
    document.getElementById('prev').addEventListener('click', (e) => nextMusic(e, 'prev'));
    document.getElementById('next').addEventListener('click', (e) => nextMusic(e, 'next'));
    init();
    
})();