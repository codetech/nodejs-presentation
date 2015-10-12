// Nyan cat logic

var nyanMinPos = 0;
var nyanMaxPos = 200;

var makeNyanCat = function (selector) {
    var nyanCat = {};
    var element = document.querySelector(selector);
    var pos = nyanMinPos;
    var direction = 1;
    var updateDirection = function () {
        if (pos === nyanMinPos || pos === nyanMaxPos) {
            direction = direction * -1;
            element.classList.toggle('nyan-flipped');
        }
    };
    var move = function () {
        pos += direction;
        element.style.marginLeft = pos + 'px';
        updateDirection();
    };
    nyanCat.startMoving = function () {
        setInterval(move, 1000 / 60);
    };
    return nyanCat;
};

var nyanCat = makeNyanCat('.nyan-cat');
nyanCat.startMoving();

// Request logic

var syncRequest = function () {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', '/api', false);
    xhr.send();
    alert(xhr.responseText);
};

var asyncRequest = function () {
    var xhr = new XMLHttpRequest();
    xhr.addEventListener('load', function () {
        alert(xhr.responseText);
    });
    xhr.open('GET', '/api', true);
    xhr.send();
};

var syncButton = document.querySelector('.sync-button');
var asyncButton = document.querySelector('.async-button');
syncButton.addEventListener('click', syncRequest);
asyncButton.addEventListener('click', asyncRequest);
