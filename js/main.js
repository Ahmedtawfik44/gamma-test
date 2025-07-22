// Toogle Click

let close = document.querySelector('header .toogle .close');
let list = document.querySelector('header .toogle .list');
let menue = document.querySelector('header .toogle .mobile-list');

list.addEventListener("click", (e) => {
        e.target.classList.add('hide');
        close.classList.remove('hide');
        menue.classList.remove('hide-menue');
        menue.classList.add('show-menue');
});

close.addEventListener("click", (e) => {
        e.target.classList.add('hide');
        list.classList.remove('hide');
        menue.classList.add('hide-menue');
        menue.classList.remove('show-menue')
});


// Img Slider

let images = ['./images/slider-1.webp', './images/slider-2.webp', './images/slider-3.webp'];
let img = document.querySelector('.slider .slider-img img');
let indicators = document.querySelectorAll('.slider .indicators li')
let i = 0;

function slide(value) {
        indicators.forEach(e => {
                e.classList.remove('active');
        });

        i += value;
        if (i === images.length) {
                i = 0;
        }

        if (i === -1) {
                i = 2;
        }
        img.src = `${images[i]}`;
        indicators[i].classList.add('active');
}

indicators.forEach((e,indx)=>{
        e.addEventListener('click',(e)=>{
                indicators.forEach(e=>e.classList.remove('active'));
                e.target.classList.add('active');
                i=indx;
                img.src = `${images[i]}`;
        });
});