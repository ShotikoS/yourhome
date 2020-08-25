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

function fillNavbar(arr, ID__name){
    for (let i = 0; i < arr.length; i++) {
        let createLi = document.createElement("li");    //create navbar li element
        let createA = document.createElement("a");  //create navbar a element
        createA.href = arr[i].href;     //add href attribute on navbar A element
        createA.innerText = arr[i].text;    //inner text in A element
        createLi.appendChild(createA);  //append child A element into Li element
        document.getElementById(ID__name).appendChild(createLi);    //append child li element into ul
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

fillNavbar(navbar__content, "navbar"); //call funxtion for fill navbar

function toggle(clickBtn, actionObj){
    $(document).ready(function(){
        $(clickBtn).mouseover(function(){
            $(actionObj).animate({
                width: "toggle",
            })
        })
    });
    
    $(document).ready(function(){
        $(clickBtn).mouseleave(function(){
            $(actionObj).animate({
                width: "toggle"
            })
        })
    });
}

function Heighttoggle(clickBtn, actionObj){
    $(document).ready(function(){
        $(clickBtn).click(function(){
            $(actionObj).animate({
                height: "toggle"
            })
        })
    });
}

function showHideelement(open, close, showHide__element){
    $(document).ready(function(){
        $(open).click(function(){
            $(showHide__element).css({
                'display': 'block'
            })
        })
    })
    
    $(document).ready(function(){
        $(close).click(function(){
            $(showHide__element).css({
                'display': 'none'
            })
        })
    })
}

Heighttoggle(".bar", ".navbar");    //call height toggle function

toggle(".LogoImage", ".TextForLogo"); //call width toggle function

showHideelement(".SingIn", ".close__SingIn", ".bgModal");
showHideelement(".SignUp", ".close__SignUp", ".registration__bgmodal");