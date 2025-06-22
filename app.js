let iconCart = document.querySelector('.cartIcon');
let closeCart = document.querySelector('.close');
let body = document.querySelector('body');
let listProductHTML = document.querySelector('.listProduct');
let addCart = document.querySelector('.addCart');

let listProducts = [];

iconCart.addEventListener('click' , ()=>{
    body.classList.toggle('showCart');
})

closeCart.addEventListener('click' , ()=>{
    body.classList.toggle('showCart');
})

addCart.addEventListener('click' , (event)=>{
    let positionClick = event.target;
    if(positionClick.classList.contains('addCart')){
        let product_id = positionClick.parentElement.dataset.id;
        alert(product_id);
    }
})

const addDataToHTML =()=>{
    if (listProducts.length < 16){
        listProducts.forEach(product =>{
            listProducts.push(product);
        })
    }
    console.log(listProducts.id);
}

listProducts.addEventListener('click', (event)=>{
    let positionClick = event.target;
    if (positionClick.classList.contains('addCart')){
        let product_id = positionClick.parentElement.dataset.id;
        alert(product_id);
    }
})

const initApp = ()=>{
    fetch('products.json')
    .then(response => response.json())
    .then(data =>{
        listProducts = data;
        addDataToHTML();
        console.log(addCart);
    })
}
initApp();