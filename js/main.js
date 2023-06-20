const btn = document.querySelector(".btn-rounded");
const showcase = document.querySelector(".showcase-content");
const log = document.querySelector(".log");
const back = document.querySelector('.back')
const btnxl = document.querySelector(".btn-xl")
const signup = document.querySelector(".signup")
const bac = document.querySelector(".bac")


btn.addEventListener("click",function(){
    showcase.classList.add("hide")
    log.classList.add("show")
})

back.addEventListener('click',function(){
    showcase.classList.remove("hide");
    log.classList.remove("show");
})

btnxl.addEventListener("click",function(){
    showcase.classList.add("hid")
    signup.classList.add("sho")
})

bac.addEventListener("click",function(){
    showcase.classList.remove("hid")
    signup.classList.remove("sho")
})