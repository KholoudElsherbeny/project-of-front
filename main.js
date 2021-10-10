let openBtn = document.querySelector(".banner .open-btn");
let cloBtn = document.querySelector(".overLay .clo-btn");
let overLay = document.querySelector(".overLay");

let open2Btn = document.querySelector(".banner .open2-btn");
let clo2Btn = document.querySelector(".overLay2 .clo2-btn");
let overLay2 = document.querySelector(".overLay2");

//add eventlistner

openBtn.addEventListener('click' , ()=>{
    overLay.classList.add("open-lay");
});

open2Btn.addEventListener('click' , ()=>{
    overLay2.classList.add("open2-lay");
});

//close
cloBtn.addEventListener('click' , function(){
    overLay.classList.remove("open-lay");
});

clo2Btn.addEventListener('click' , function(){
    overLay2.classList.remove("open2-lay");
});
