
// Kills control
let killsCount = document.getElementById('kills-count');
let kills = 0;
killsCount.innerText = kills;

// Best game kills
let bestGameKillsCount = localStorage.getItem('bestGameKillsCount');
if (bestGameKillsCount) {
    let bestKillsCount = document.getElementById('best-kills-count');
    bestKillsCount.style.display = "block";
    bestKillsCount.innerHTML = "Best game: " + bestGameKillsCount + " kills";
}


// Hearts left
let heartsCount = 4; // -> 5 hearts

// Blood effects
let bloodSprite = document.querySelector('.blood-sprite');

// Speed control
let delay = 2000;
let timer;

// Alien element init
let alien = document.createElement('img');



function createAlien() {

    // Heroes must be heroes
    if (kills == 70) {
        heartsCount = 4; // Reset hearts count after 70 kills
        let heartIcon = document.querySelectorAll('.hearts i');
        for (let i = 0; i <= heartsCount; i++) {
            heartIcon[i].classList.remove('fa-regular');
            heartIcon[i].classList.add('fa-solid');
            console.log('wack');
        }
    }

    if (document.getElementById('createdAlien')) {
        document.getElementById('createdAlien').remove();

        let heartIcon = document.querySelectorAll('.hearts i');
        heartIcon[heartsCount].classList.remove('fa-solid');
        heartIcon[heartsCount].classList.add('fa-regular');

        heartsCount -= 1
        createBloodSprite();
        if (heartsCount < 0) {
            let prevBest = localStorage.getItem('bestGameKillsCount');
            prevBest = prevBest ? prevBest : 0;
            if (kills > prevBest) {
                localStorage.setItem('bestGameKillsCount', kills);
            }
            localStorage.setItem('howManyKills', kills);
            window.location.href = ('./game-over.html')
        }
    }

    let container = document.querySelector('.game-container');
    let containerMarginLeft = parseInt(window.getComputedStyle(container).marginLeft);

    let windowWidth = container.offsetWidth - 200;
    let windowHeight = container.offsetHeight - 200;

    let alienPick = Math.floor(Math.random() * 8) + 1;

    let alienSize = Math.floor(Math.random() * 150) + 50; // 50px to 200px
    let alienMirror = Math.random() < 0.5 ? -1 : 1; // Since i can't use 0 with ScaleX, If less than 0.5 it gives -1

    let alienPosX = Math.floor(Math.random() * windowWidth) + containerMarginLeft;
    let alienPosY = Math.floor(Math.random() * windowHeight);
    

    alien.src = './assets/alien' + alienPick + '.png';
    container.appendChild(alien);

    alien.draggable = false;
    alien.id = 'createdAlien';
    alien.style.position = 'absolute';
    alien.style.left = alienPosX + 'px';
    alien.style.top = alienPosY + 'px';
    alien.style.width = alienSize + 'px';
    alien.style.transform = 'scaleX(' + alienMirror + ')';
    alien.style.filter = 'drop-shadow(1px 1px 20px red) invert(75%)'; // make aliens scarier
}



function createBloodSprite() {
    bloodSprite.style.display = 'block';
    bloodSprite.style.boxShadow = '1px 1px 300px 100px rgba(255, 0, 0, 0.5) inset';
}



function runLoop() {
  createAlien();
  timer = setTimeout(runLoop, delay);
}



// Killing aliens
alien.onclick = function() {
    kills += 1;
    killsCount.innerText = kills;
    bloodSprite.style.boxShadow = '1px 1px 300px 100px rgba(255, 0, 0, 0) inset';
    bloodSprite.style.transition = 'box-shadow 0.5s ease';
    alien.remove();

    // It gets quicker every 5 kills
    if (kills % 5 == 0) {
        delay = Math.max(0, delay - 100);
    }
}



// First run and have fun :)
runLoop();




