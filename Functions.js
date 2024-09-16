
// Assignment 2
// Task 1
function deposit(x) {
     balance += x;
}

// Task 2
function withdraw(x) {
     if (balance >= x) {
          balance -= x;
     }
}

// Task 3
function get_balance() {
     console.log(`Your balance is ${balance}.`);
}

let balance = 0;

get_balance();
deposit(129);
get_balance();
withdraw(27);
get_balance();
