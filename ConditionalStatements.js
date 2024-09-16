     ["CD-Rom", 15],
     ["Walkman", 45],
     ["Boombox", 90],
     ["Headphones", 30]
];
const cart = [];
let total_cost = 0;

display_products();
add_to_cart(product_list[3]);
check_cart_total();
console.log(cart, `total cost: `, total_cost);
