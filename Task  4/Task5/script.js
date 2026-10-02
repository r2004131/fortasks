let num = Number(prompt("Enter a Number"));
let result = 1;

if (isNaN(num) || num < 0){
    console.log("Enter A Valid Number ");
    
}else{
    for (let i = 2; i <= num; i++) {
        result = result * i;
    }
}

    


console.log(`${num}! = ${result}`);
