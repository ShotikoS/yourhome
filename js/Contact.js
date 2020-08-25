var navbar__content = [
    {text: "Main page", href: "index.html"}, {text: "Help", href: "help.html"},
    {text: "Contact", href: "contact.html"}, {text: "Rules", href: "#"}
];


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
toggle(".LogoImage", ".TextForLogo"); //call width toggle function

fillNavbar(navbar__content, "navbar");

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

function Heighttoggle(clickBtn, actionObj){
    $(document).ready(function(){
        $(clickBtn).click(function(){
            $(actionObj).animate({
                height: "toggle"
            })
        })
    });
}

Heighttoggle(".bar", ".navbar");    //call height toggle function

showHideelement(".SingIn", ".close__SingIn", ".bgModal");
showHideelement(".SignUp", ".close__SignUp", ".registration__bgmodal");