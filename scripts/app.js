const menuBtn = document.querySelector('.menu-btn'),
      menu = document.querySelector('.header__menu'),
      testimonialsButtons = document.querySelector('.testimonials__buttons'),
      testimonialsList = document.querySelector('.testimonials__list'); 

const testimonials = [
    {
        q: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tristique ipsum ultrices sit rutrum lobortis. Ipsum, nulla nam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tristique ipsum ultrices sit rutrum lobortis. Ipsum, nulla nam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tristique ipsum ultrices sit rutrum lobortis. Ipsum, nulla nam.",
        author: {
            name: "Vladimir Putin",
            caption: "Someone who hates you"
        },
        image: "../images/testimonial-photo.jpeg"
    },
    {
        q: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tristique ipsum ultrices sit rutrum lobortis. Ipsum, nulla nam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tristique ipsum ultrices sit rutrum lobortis.",
        author: {
            name: "Vladimir Putin",
            caption: "Someone who hates you"
        },
        image: "../images/testimonial-photo.jpeg"
    }
];

let currentTestimonial = 0;



const generateTestimonial = currentTestimonial => {   
    const testimonial = `<li class="testimonials__card">
                    <blockqoute class="testimonials__blockquote">
                        ${testimonials[currentTestimonial].q}
                    </blockqoute>
                    <cite class="testimonials__info">
                        <img src="${testimonials[currentTestimonial].image}" alt="Elon Mask Photo" class="testimonials__photo">
                        <div class="testimonials__author">
                            <span class="testimonials__name">
                                ${testimonials[currentTestimonial].author.name}
                            </span>
                            <span class="testimonials__caption">
                                ${testimonials[currentTestimonial].author.caption}
                            </span>
                        </div>
                    </cite>
                </li>`;
    testimonialsList.innerHTML = testimonial;
}

generateTestimonial(currentTestimonial);


testimonialsButtons.addEventListener('click', (e)=> {
    testimonialsList.children[0].style.animation = "test 1s infinite";
    setTimeout(()=> {
        if(e.target.classList.contains('btn-next')){
            currentTestimonial += 1;
        } else if(e.target.classList.contains('btn-back')) {
            currentTestimonial -= 1;
            currentTestimonial = Math.abs(currentTestimonial);
        }
        generateTestimonial(currentTestimonial % testimonials.length);
    }, 1000)
})


menuBtn.addEventListener('click', () => {
    menu.classList.toggle('visible');
})



