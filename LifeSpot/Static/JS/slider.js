const slider = document.querySelector(".slider");

let allowDrag = false;
let prevPageX, prevScrollLeft;

const dragStart = (e) => {
    e.preventDefault();
    allowDrag = true;
    prevPageX = e.pageX;
    prevScrollLeft = slider.scrollLeft;
    slider.addEventListener("mousemove", dragging);
}

const dragging = (e) => {
    e.preventDefault();
    if (allowDrag)
        slider.scrollLeft = prevScrollLeft - 4 * ( e.pageX - prevPageX );
}

const dragStop = () => {
    allowDrag = false;
    slider.removeEventListener("mousemove", dragging);
}

slider.addEventListener("mousedown", dragStart);
slider.addEventListener("mouseup", dragStop);
slider.addEventListener("mouseleave", dragStop);
