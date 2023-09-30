const slider = document.querySelector(".slider");

let prevPageX, prevScrollLeft;

const dragStart = (e) => {
    e.preventDefault();
    prevPageX = e.pageX;
    prevScrollLeft = slider.scrollLeft;
    slider.addEventListener("mousemove", dragging);
}

const dragging = (e) => {
    e.preventDefault();
    slider.scrollLeft = prevScrollLeft - 4 * ( e.pageX - prevPageX );
}

const dragStop = () => {
    slider.removeEventListener("mousemove", dragging);
}

slider.addEventListener("mousedown", dragStart);
slider.addEventListener("mouseup", dragStop);
slider.addEventListener("mouseleave", dragStop);
