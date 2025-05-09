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

// ####### Sale Timer #######
const days = document.querySelectorAll('.days');
const hours = document.querySelectorAll('.hours');
const minutes = document.querySelectorAll('.minutes');


 
function updateTimer(){
    const endDate = new Date("May 15,2025 23:59");
const newDate = new Date();
// const diff = endDate - newDate;

const LastDays = endDate.getDate();
const LastHours = endDate.getHours();
const LastMinutes = endDate.getMinutes();

const newDays = newDate.getDate();
const newHours = newDate.getHours();
const newMinutes = newDate.getMinutes();
// console.log(LastDays);
// console.log(LastHours);
// console.log(LastMinutes);

    const finalDays = LastDays - newDays;
    const finalHours = LastHours - newHours;
    const finalMinutes = LastMinutes - newMinutes;
    console.table(finalDays, finalHours , finalMinutes);


    days.forEach(day => day.innerHTML = finalDays);
    hours.forEach(hour => hour.innerHTML = finalHours);
    minutes.forEach(minute => minute.innerHTML = finalMinutes);


}
updateTimer();



setInterval(updateTimer,1000);


// ############ Testimonials Area #########

