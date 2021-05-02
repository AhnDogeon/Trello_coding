const dragTarget = document.querySelector(".js-cards-list");

dragTarget.onmousedown = function(event) {
    let shiftX = event.clientX - dragTarget.getBoundingClientRect().left;
    let shiftY = event.clientY - dragTarget.getBoundingClientRect().top;

    dragTarget.style.position = 'absolute';
    dragTarget.style.zIndex = 1000;
    document.body.append(dragTarget);

    moveAt(event.pageX, event.pageY);

    function moveAt(pageX, pageY) {
        dragTarget.style.left = pageX - shiftX + 'px';
        dragTarget.style.top = pageY - shiftY + 'px';
    }

    function onMouseMove(event) {
        console.log('move');
        moveAt(event.pageX, event.pageY);
    }

    document.addEventListener('mousemove', onMouseMove);

    function onMouseUp(event) {
        console.log('up');
        document.removeEventListener('mousemove', onMouseMove);
        dragTarget.onmouseup = null;
    }

    document.addEventListener('mouseup', onMouseUp);
};

dragTarget.ondragstart = function() {
    return false;
};