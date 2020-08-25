var windowWidth = $("body").width();
var svipCarouselWidth = (windowWidth / 100) * 85;

var navbar__content = [
    {text: "Main page", href: "index.html"}, {text: "Help", href: "help.html"},
    {text: "Contact", href: "contact.html"}, {text: "Rules", href: "#"}
];

var questions = [
    "How to register", "How do I add a statement", "How to find an ad", "How do I add a statement in SVIP", 
    "How to update an statement", "How to top-up my credit"
]

function CreateNavbar__LI(Masive, IDName){
    for(let i = 0; i < Masive.length; i++){
        let createElementLi = document.createElement("li");
        let createElementA = document.createElement("a");
        createElementA.innerText = Masive[i].text;
        createElementA.href = Masive[i].href
        document.getElementById(IDName).appendChild(createElementLi).appendChild(createElementA);
    }
}

function CreateQuestions__LI(Masive, IDName){
    for(let i = 0; i < Masive.length; i++){
        let createElementLi = document.createElement("li");
        let createElementA = document.createElement("a");
        createElementA.innerText = Masive[i];
        createElementA.href = Masive[i];
        document.getElementById(IDName).appendChild(createElementLi).appendChild(createElementA);
    }
}

CreateQuestions__LI(questions, "question__LI");

$(document).ready(function(){
    $(".SingIn").click(function(){    
        $(".bgModal").addClass("active");
    })
})

$(document).ready(function(){
    $(".close__SingIn").click(function(){    
        $(".bgModal").removeClass("active");
    })
})

$(document).ready(function(){
    $(".Answers__container").width(svipCarouselWidth - 400);
})

CreateNavbar__LI(navbar__content, "navbar__menu");

$(document).ready(function(){
    $(".bar").click(function(){    
        if($(".navbar__container").hasClass("active")){
            $(".navbar__container").removeClass("active");
        }else{
            $(".navbar__container").addClass("active");
        }
    })
})