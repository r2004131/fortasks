let name = prompt("Enter Your Name Please ");
let age = Number(prompt("Enter Your Age Please"));

let user = {
    name : name,
    age  : age ,
    has_Access : age > 20 ? true : false 
};

alert(`Name: ${user.name}, Age: ${user.age}`);
