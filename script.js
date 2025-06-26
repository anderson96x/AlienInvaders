let windowWidth = window.innerWidth - 100;
let windowHeight = window.innerHeight - 100;

// Adjusts according to user viewport
window.onresize = function() {
    windowWidth = window.innerWidth - 100;
    windowHeight = window.innerHeight - 100;
}

let alienPosX = Math.floor(Math.random() * windowWidth);
let alienPosY = Math.floor(Math.random() * windowHeight);

function createAlien() {
    let alien = document.createElement('img');
    let alienPick = Math.floor(Math.random() * 8) + 1;
    alien.src = './assets/alien' + alienPick + '.png';
    alien.className = 'alien';
    document.body.appendChild(alien);

    alien.style.position = 'absolute';
    alien.style.left = alienPosX + 'px';
    alien.style.top = alienPosY + 'px';
}

createAlien();




console.log('windowWidth ' + windowWidth);
console.log('windowHeight ' + windowHeight);
console.log('alienPosX ' + alienPosX);
console.log('alienPosY ' + alienPosY);