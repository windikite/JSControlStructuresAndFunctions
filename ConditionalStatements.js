// Assignment 1

// Task 1
let loggedIn = Math.random() >= .5 ? true : false;

function display_products(){
     products.forEach(x => console.log(`${x[0]} ${x[1]}`))
};

function add_to_cart(product){
     cart.push(product)
}

function check_cart_total(){
     console.log('Cart total:', cart.map(x => (x[1])).reduce((a, b) => a + b, 0))
}

const products = [
     ["CD-Rom", 15],
     ["Walkman", 45],
     ["Boombox", 90],
     ["Headphones", 30]
];

const cart = [];
let total_cost = 0;

// Task 2
if(!loggedIn){
     console.log('You must log in to see your cart')
}else{
     display_products();
     add_to_cart(products[3]);
     add_to_cart(products[2]);
     check_cart_total();
}

