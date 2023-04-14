// var typed = new Typed("#typed", {
//     stringsElement: '#typed-string',
//     typeSpeed: 100,
//     backSpeed: 60,
//     loop: true
// })

let imgs = document.getElementById("imgs")
let land = document.getElementById("land")
let form = document.getElementById("form")
let fa = document.getElementById("fa")
let faa = document.getElementById("faa")
let what = document.getElementById("what")
let dev = document.getElementById("dev")
let img = document.getElementById("img")

window.onscroll = function () { scroll() };
// location.reload(){
//     dev.style.marginTop = "0%"
// }
dev.style.marginTop = '0%'
img.style.top = '25%'
what.value = ""
function scroll(){
    imgs.style.marginTop = "0%";
    imgs.style.transition = "all ease-in-out 2s"
}
function start() {
    form.style.display = 'flex'
}
function get() {
    start()
}
function get1() {
    start()
    what.value = "tenant"
}
function get2() {
    start()
    what.value = "agent"
}
// function fa(){
//     form.style.display = 'none'
// }
fa.addEventListener("click", ()=>{
    form.style.display = 'none'
})