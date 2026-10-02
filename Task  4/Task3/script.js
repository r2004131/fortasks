let products = [
    {name : "Laptop" , price : "3000" ,rating:3.4},
    {name : "iphone" , price : "28000" ,rating:4},
    {name : "airpods" , price : "1500" ,rating:3.8},
    {name : "keyboard" , price : "500" ,rating:2.5},
    {name : "Mouse" , price : "1200" ,rating:1.5},
    {name : "MousePad" , price : "200" ,rating:3.5},
];


products.forEach(function(product){
    if(product.rating > 3){
        // console.log(product);
        let stars = "⭐".repeat(Math.floor(product.rating));
        console.log(`${product.name} + ${stars}`);
        
    }else if (product.rating < 3){
        // console.log(product);
        let stars = "⭐".repeat(Math.floor(product.rating));
        console.log(`${product.name} + ${stars} (low Rating)` );
    }
});