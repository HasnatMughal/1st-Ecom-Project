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


// ###############################



const prices = [12.99 , 15.99 , 10.99, 9.99 ,12.99 , 15.99 , 10.99, 9.99 ,12.99 , 15.99 , 10.99, 9.99 ,12.99 , 15.99 , 10.99, 7.99 ,4.99 , 5.99 ,5.99];

const price = document.querySelectorAll('.price');

price.forEach((price, index) => {
price.innerHTML = prices[index]
})

const productNames = [
    "Black Puffer Jacket",
    "Dark Grey Winter Coat",
    "Olive Green Hooded Jacket",
    "Navy Blue Puffer Coat",
    "Black Bomber Jacket",
    "Army Green Vest",
    "Beige Hooded Vest",
    "Black and White Varsity Jacket",
    "Grey Pullover Hoodie",
    "Black Zip-up Jacket",
    "Black and Grey Checkered Jacket"
  ];

  const productName =
   document.querySelectorAll('.product-name');
   
  productName.forEach((product, index) => {
product.innerHTML = productNames[index]

  })

// ############################
const cartWrap = document.querySelector('.cart-products-wrap');

function addCartProduct(name,price ){
    
    let cartProductName = document.createElement('p');
    cartProductName.className = 'cart-product-name';
   
    let productPrice = document.createElement('p');
    productPrice.className = 'cart-product-price';

    let removeBtn = document.createElement('button');
    removeBtn.className = 'remove-btn'
   
    

      let cartDescDiv = document.createElement('div');
    cartDescDiv.className ='cart-product-desc';
    cartDescDiv.appendChild(cartProductName);
    cartDescDiv.appendChild(productPrice);

    let cartProduct = document.createElement('div');
    cartProduct.className = 'cart-product';
    cartProduct.appendChild(cartDescDiv)
    cartProduct.appendChild(removeBtn);

     removeBtn.textContent = "Remove"
       cartProductName.textContent = `${name}` 
productPrice.textContent = `${price}`+ "$"

    cartWrap.appendChild(cartProduct);
    
    return{cartProductName,productPrice}
}


let cartData = [];


const addToCartBtn = document.querySelectorAll('.cart-btn');

addToCartBtn.forEach(btn => btn.addEventListener('click',(event) => {
const product = event.target.closest('.product');
const productNameForCart = product.querySelector('.product-name').textContent;
const productPriceForCart = product.querySelector('.price').textContent;
// const productImgForCart = product.querySelector('.price').textContent;

cartData.push({productNameForCart, productPriceForCart});


addCartProduct(productNameForCart, productPriceForCart)

}))
console.log(cartData);





// Notes and mistakes
// const productElements = document.querySelectorAll('.product');
// console.log(productElements);
// productElements.forEach(element => {
//   element.addEventListener('click',function(){
//   console.log(element.querySelector('.product-name').textContent)  
//   })
// productElements.forEach(element => {
//   console.log(element.querySelector('.product-name'))
// })
// productElements.forEach(element => {
//   console.log(element.querySelector('.price'))
  
// })