
// Kills control
let killsCount = document.getElementById('kills-count');
let kills = 0;
killsCount.innerText = kills;

// Hearts left
let heartsCount = 2; // -> 3 hearts

// Blood effects
let bloodSprite = document.querySelector('.blood-sprite');



function createAlien() {

    if (document.getElementById('createdAlien')) {
        document.getElementById('createdAlien').remove();

        let heartIcon = document.querySelectorAll('.hearts i');
        heartIcon[heartsCount].classList.remove('fa-solid');
        heartIcon[heartsCount].classList.add('fa-regular');

        heartsCount -= 1
        createBloodSprite();
        if (heartsCount < 0) {
            window.location.href = ('./game-over.html')
        }
    }

    let container = document.querySelector('.game-container');
    let containerMarginLeft = parseInt(window.getComputedStyle(container).marginLeft);

    let windowWidth = container.offsetWidth - 200;
    let windowHeight = container.offsetHeight - 200;

    let alien = document.createElement('img');
    let alienPick = Math.floor(Math.random() * 8) + 1;

    let alienSize = Math.floor(Math.random() * 150) + 50; // 50px to 200px
    let alienMirror = Math.random() < 0.5 ? -1 : 1; // Since i can't use 0 with ScaleX, If less than 0.5 it gives -1

    let alienPosX = Math.floor(Math.random() * windowWidth) + containerMarginLeft;
    let alienPosY = Math.floor(Math.random() * windowHeight);
    

    alien.src = './assets/alien' + alienPick + '.png';
    container.appendChild(alien);

    alien.id = 'createdAlien';
    alien.style.position = 'absolute';
    alien.style.left = alienPosX + 'px';
    alien.style.top = alienPosY + 'px';
    alien.style.width = alienSize + 'px';
    alien.style.transform = 'scaleX(' + alienMirror + ')';
    alien.style.filter = 'drop-shadow(1px 1px 20px red) invert(75%)'; // make aliens scarier


    // Killing aliens
    alien.onclick = function() {
        kills += 1;
        killsCount.innerText = kills;
        //bloodSprite.style.display = 'none';
        bloodSprite.style.boxShadow = '1px 1px 300px 100px rgba(255, 0, 0, 0) inset';
        bloodSprite.style.transition = 'box-shadow 0.5s ease';

        this.remove();
    }
}



function createBloodSprite() {
    bloodSprite.style.display = 'block';
    bloodSprite.style.boxShadow = '1px 1px 300px 100px rgba(255, 0, 0, 0.5) inset';
}



setInterval(function() {
    createAlien();
}, 3000);


