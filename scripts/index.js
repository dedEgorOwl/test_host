//variables
let slider_line;
let slider_forward;
let slider_back;

let offset = 0;


//functions
function auto_slide() {
    setTimeout(() => {
        if (offset !== -1680) {
            offset -= 420;
            slider_line.style.left = `${offset}px`;
        } else {
            offset = 0;
            slider_line.style.left = offset;
        }
        
        repeat_slider();
    }, 5000);
};

function repeat_slider() {
    auto_slide();
};

function setups() {
    slider_forward.addEventListener('click', () => {
        if (offset === -1680) return;
        offset -= 420;
        slider_line.style.left = `${offset}px`;
    });

    slider_back.addEventListener('click', () => {
        if (offset === 0) return;
        offset += 420;
        slider_line.style.left = `${offset}px`;
    });
};


//on page load function
window.onload = (e) => {
    slider_line = document.querySelector('.line');
    slider_forward = document.querySelector('.forward');
    slider_back = document.querySelector('.back');
    
    setups();
    auto_slide();
}