const btn = document.querySelector(".btn-rounded");
const showcase = document.querySelector(".showcase-content");
const log = document.querySelector(".log");
const back = document.querySelector('.back')

btn.addEventListener("click",function(){
    showcase.classList.add("hide")
    log.classList.add("show")
})

back.addEventListener('click',function(){
    showcase.classList.remove("hide");
    log.classList.remove("show");
})