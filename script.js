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

const endDate = new Date("April 15,2025 20:59");
const newDate = new Date(Date.now());

const days = document.querySelectorAll('.days');
const hours = document.querySelectorAll('.hours');
const minutes = document.querySelectorAll('.minutes');

const endDay = endDate.getDate();
const endHours = endDate.getHours();
const endMinutes = endDate.getMinutes();
// console.log(newDate);

const todayDate = newDate.getDate();
const todayHours = newDate.getHours();
const todayMinutes = newDate.getMinutes();
// console.log(todayMinutes);

console.log(days)

function changeDate(){
const finalMinutes = endMinutes - todayMinutes;
const finalHours = endHours - todayHours;
const finalDays = endDay - todayDate;

days.forEach((day) => {
    day.textContent = finalDays;
})
hours.forEach((hour) => {
    hour.textContent = -finalHours;
})
minutes.forEach((minute) => {
    
    minute.textContent = finalMinutes;
})


console.log(finalDays)
}



// console.log(changeDate())


