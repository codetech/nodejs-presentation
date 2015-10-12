var next = function (phrase) {
    console.log(phrase[0]);
    if (phrase.length > 1) {
        setTimeout(function () {
            next(phrase.slice(1));
        }, 500);
    }
};
next('My mother picks the very best one and you are it.'.split(' '));
