function onTouch() {
    const closeCircle = document.getElementById('hamCircle');

    closeCircle.classList.add('hamCircleFocus');

    const openCross = document.getElementById('hamCross');

    openCross.classList.add('hamCrossFocus');

}

function unTouch() {
    const closeCircle = document.getElementById('hamCircle');

    closeCircle.classList.remove('hamCircleFocus');

    const openCross = document.getElementById('hamCross');

    openCross.classList.remove('hamCrossFocus');

}