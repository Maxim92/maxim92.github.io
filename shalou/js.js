let $hourglass = document.querySelector('#hourglass');

function charging() {
    setTimeout(() => {
        $hourglass.classList.remove('fa-hourglass-1');
        $hourglass.classList.add('fa-hourglass-2');
    }, 500);

        setTimeout(() => {
        $hourglass.classList.remove('fa-hourglass-2');
        $hourglass.classList.add('fa-hourglass-3');
    }, 1000);

        setTimeout(() => {
        $hourglass.style.transition = ".2s";
        $hourglass.style.transform = "rotateZ(180deg)";
    }, 1500);

    setTimeout(() => {
        $hourglass.style.transition = "";
        $hourglass.style.transform = "rotateZ(0)";
        $hourglass.classList.remove('fa-hourglass-3');
        $hourglass.classList.add('fa-hourglass-1');
    }, 2000);

};

setInterval(charging, 2000);
