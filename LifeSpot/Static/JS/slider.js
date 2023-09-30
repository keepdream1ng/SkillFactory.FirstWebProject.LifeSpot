const slider = document.querySelector(".slider");
const sliderNavs = document.querySelectorAll(".slider-nav");

sliderNavs.forEach(navButton => {
    navButton.addEventListener("click", () => {
        if (navButton.id == "slide-prev") {
            slider.scrollLeft -= slider.clientWidth;
        } else {
            slider.scrollLeft += slider.clientWidth;
        }
    });
});

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
