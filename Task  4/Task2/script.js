let users = [ 
    {name : "Rabea" , email:"Rab@gmail.com" , type :"Admin"},
    {name : "Rami" , email:"ram@gmail.com" , type :"user"},
    {name : "Ahmed" , email:"ah@gmail.com" , type :"Admin"},
    {name : "ALi" , email:"al@gmail.com" , type :"user"},
    {name : "sama" , email:"sa@gmail.com" , type :"Admin"},
    {name : "Mohamed" , email:"moh@gmail.com" , type :"user"},
    {name : "zain" , email:"za@gmail.com" , type :"Admin"},
    {name : "nora" , email:"nor@gmail.com" , type :"user"},
    {name : "malak" , email:"mal@gmail.com" , type :"Admin"},
    {name : "magdi" , email:"mad@gmail.com" , type :"user"},
    {name : "mai" , email:"mai@gmail.com" , type :"Admin"},
    {name : "linda" , email:"lind@gmail.com" , type :"user"},
    {name : "sara" , email:"sar@gmail.com" , type :"Admin"},
    {name : "razan" , email:"raz@gmail.com" , type :"user"},
    {name : "belal" , email:"bel@gmail.com" , type :"Admin"},
]

let admin_count = 0 ;
let user_count = 0 ;

users.forEach(function(user){
        if (user.type == "Admin"){
        admin_count++
        
    }else{
        user_count++
        
    }
});

console.log(`Admin ${admin_count} + users ${user_count}`)