let windowWidth = window.innerWidth - 200;
let windowHeight = window.innerHeight - 200;

// Adjusts according to user viewport
window.onresize = function() {
    windowWidth = window.innerWidth - 200;
    windowHeight = window.innerHeight - 200;
}

let alienPosX = Math.floor(Math.random() * windowWidth);
let alienPosY = Math.floor(Math.random() * windowHeight);

function createAlien() {
    let alien = document.createElement('img');
    let alienPick = Math.floor(Math.random() * 8) + 1;
    let alienSize = Math.floor(Math.random() * 150) + 50; // 50px to 200px
    let alienMirror = Math.random() < 0.5 ? -1 : 1; // Since i can't use 0 with ScaleX, If less than 0.5 it gives -1

    alien.src = './assets/alien' + alienPick + '.png';
    alien.className = 'alien';
    document.body.appendChild(alien);

    alien.style.position = 'absolute';
    alien.style.left = alienPosX + 'px';
    alien.style.top = alienPosY + 'px';
    alien.style.width = alienSize + 'px';
    alien.style.transform = 'scaleX(' + alienMirror + ')';
    
    // Debug boy
    console.log('alienSize ' + alienSize);
    console.log('alienMirror ' + alienMirror);
}

createAlien();



// Debug boy
console.log('windowWidth ' + windowWidth);
console.log('windowHeight ' + windowHeight);
console.log('alienPosX ' + alienPosX);
console.log('alienPosY ' + alienPosY);
