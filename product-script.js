const jacketBtn = document.querySelector('.jackets');
const coatBtn = document.querySelector('.coats');
const trouserBtn = document.querySelector('.trousers');

const jacketWrap = document.querySelector('.jackets-wrap')
const coatWrap = document.querySelector('.coats-wrap')
const trouserWrap = document.querySelector('.trousers-wrap')

jacketBtn.addEventListener('click',function(){
jacketWrap.classList.add('active');
coatWrap.classList.remove('active')
trouserWrap.classList.remove('active')
})

coatBtn.addEventListener('click',function(){
    coatWrap.classList.add('active')
jacketWrap.classList.remove('active');
trouserWrap.classList.remove('active')
})

trouserBtn.addEventListener('click',function(){
    trouserWrap.classList.add('active')
jacketWrap.classList.remove('active');
coatWrap.classList.remove('active')
})