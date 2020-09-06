const $cards = Array.from(document.querySelectorAll('.product-card'));


function getCoords(elem) {
    let box = elem.getBoundingClientRect();
    let width  = elem.offsetWidth;
    let height  = elem.offsetHeight;

    return {
        top: box.top + pageYOffset + width/2,
        left: box.left + pageXOffset + height/2
    };
}

document.addEventListener('mousemove', function(e) {
    $cards.forEach(function (current, index, mass) {
        let coords = getCoords(current);
        $coord = current.querySelector('.coords');
        $coord2 = current.querySelector('.coords-2');
        $angle = current.querySelector('.angle');
        let ax = -(coords.left - e.pageX)/100,
            ay = (coords.top - e.pageY)/200

        //debug
        $coord.innerText = `cX: ${coords.left}, cY: ${coords.top}`;
        $coord2.innerText = `mX: ${e.pageX}, mY: ${e.pageY}`;
        $angle.innerText = `aX: ${ax}, aY: ${ay}`;

        current.style.transform = `rotateY(${ax}deg) rotateX(${ay}deg)`;
    });
});

