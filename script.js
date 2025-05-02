const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');
const slides = document.querySelectorAll('.slide');

let currentSlide = 0;

function Slide(index){
    if(index >= slides.length){
        currentSlide = 0;
    } else if(index < 0){
currentSlide = slides.length - 1;
    } else{
        currentSlide = index
    }

    const offset = -currentSlide * 100
    document.querySelector('.slides').style.transform = `translateX(${offset}%)` 
}

function nextSlide(){
    Slide(currentSlide + 1)
}

function prevSlide(){
    Slide(currentSlide - 1)
}

nextBtn.addEventListener('click',function(){
    nextSlide()
})
prevBtn.addEventListener('click',function(){
    prevSlide()
})

setInterval(()=>{
    nextSlide()
},3000)

// ########### Sale Timer ############
const Time = new Date;
let days = document.querySelectorAll('.days');
let hours = document.querySelectorAll('.hours');
let minutes = document.querySelectorAll('.minutes');

