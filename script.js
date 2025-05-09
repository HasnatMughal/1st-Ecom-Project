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



// function updateTimer(){
//     const finalDays =Math.floor( diff / (1000 * 60 *60 *24));
//     const finalHours = Math.floor(diff % (1000 * 60 *60 *24)/(1000 *60 * 60)) ;
//     const finalMinutes =Math.floor(diff / (1000 * 60 *60)/(1000 * 60)) ;

   

//     days.forEach(day => day.textContent = finalDays)
//     hours.forEach(hour => hour.textContent = finalHours)
//     minutes.forEach(minute => minute.textContent = finalMinutes)

//     if(finalMinutes < 0){
//         finalHours--;
//         return
//     }else if(finalHours <= 0){
//         finalDays - 1;
//         return
//     }
// }

// setInterval(updateTimer,1000);

// updateTimer()









// // const endDay = endDate.getDate();
// // const endHours = endDate.getHours();
// // const endMinutes = endDate.getMinutes();
// // console.log(newDate);

// // const todayDate = newDate.getDate();
// // const todayHours = newDate.getHours();
// // const todayMinutes = newDate.getMinutes();
// // // console.log(todayMinutes);

// // console.log(days)

// // function changeDate(){
// // const finalMinutes = endMinutes - todayMinutes;
// // const finalHours = endHours - todayHours;
// // const finalDays = endDay - todayDate;

// // days.forEach((day) => {
// //     day.textContent = finalDays;
// // })
// // hours.forEach((hour) => {
// //     hour.textContent = finalHours;
// // })

// //     minutes.forEach((minute) => {
    
// //         minute.textContent = finalMinutes;
// //     })

// // // minutes.forEach((minute) => {
    
// // //     minute.textContent = finalMinutes;
// // // })

// // }

// // setInterval(changeDate,1000);
// // // console.log(changeDate())
// // changeDate()

