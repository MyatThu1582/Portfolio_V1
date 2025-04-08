let body = document.querySelector("#body"); 
let home = document.querySelector("#home");
let about = document.querySelector("#about");
let service = document.querySelector("#service");
let portfolio = document.querySelector("#portfolio");
let contact = document.querySelector("#contact");
let menu = document.querySelector(".menu");
let change = document.querySelector("#change");
let change2 = document.querySelector("#change2");
let title = document.querySelector("#title");
let logo = document.querySelector("#logo");
let one = document.querySelector("#btn1");
let two = document.querySelector("#btn2");
let three = document.querySelector("#btn3");
let four = document.querySelector("#btn4");
let five = document.querySelector("#btn5");

home.classList.add('hide');
portfolio.classList.remove('hide');


one.addEventListener('click',function(){
    home.classList.remove('hide');
    about.classList.add('hide');
    service.classList.add('hide');
    portfolio.classList.add('hide');
    contact.classList.add('hide');
    two.classList.remove('link_active');
    three.classList.remove('link_active');
    four.classList.remove('link_active');
    five.classList.remove('link_active');
})
two.addEventListener('click',function(){
    home.classList.add('hide');
    about.classList.remove('hide');
    service.classList.add('hide');
    portfolio.classList.add('hide');
    contact.classList.add('hide');
    two.classList.add('link_active');
    four.classList.remove('link_active');
    three.classList.remove('link_active');
    five.classList.remove('link_active');
})
three.addEventListener('click',function(){
    home.classList.add('hide');
    about.classList.add('hide');
    service.classList.remove('hide');
    portfolio.classList.add('hide');
    contact.classList.add('hide');
    three.classList.add('link_active');
    two.classList.remove('link_active');
    four.classList.remove('link_active');
    five.classList.remove('link_active');
})
four.addEventListener('click',function(){
    home.classList.add('hide');
    about.classList.add('hide');
    service.classList.add('hide');
    portfolio.classList.remove('hide');
    contact.classList.add('hide');
    four.classList.add('link_active');
    two.classList.remove('link_active');
    three.classList.remove('link_active');
    five.classList.remove('link_active');
})
five.addEventListener('click',function(){
    home.classList.add('hide');
    about.classList.add('hide');
    service.classList.add('hide');
    portfolio.classList.add('hide');
    contact.classList.remove('hide');
    five.classList.add('link_active');
    two.classList.remove('link_active');
    three.classList.remove('link_active');
    four.classList.remove('link_active');
})
change.addEventListener('click',function(){
    // menu.style.background = "rgba(10, 10, 10,0.3)";
    body.classList.remove('light-mode');
    body.classList.add('dark-mode');
    change.classList.add('hide');
    change2.classList.remove('hide');
})
change2.addEventListener('click',function(){
    body.classList.add('light-mode');
    body.classList.remove('dark-mode');
    menu.style.background = "transparent";
    change.classList.remove('hide');
    change2.classList.add('hide');
})

