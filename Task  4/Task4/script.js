let  articles = [
{id : 1 , title : "Front-end" , content : "HTML ,Css, Js ", img:"Front.png"},
{id : 2 , title : "Conditions" , content : "If , If else , Switch ", img:"condition.png"},
{id : 3 , title : "Variables" , content : "Var , Let , Const ", img : null},
{id : 4 , title : "Loops" , content : "While , For , forEach ", img:null},
];


articles.forEach(function(article){
    if(article.img === null){
        console.log(article.id  + article.title + article.content +"Article Without Img ");

        
    }else {
        console.log(article.id  + article.title +article. content + article.img);
        
    }
});


