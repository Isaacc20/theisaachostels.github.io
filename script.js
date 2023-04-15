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
let devs = document.getElementById("devs")
let img = document.getElementById("img")
let imgg = document.getElementById("imgg")

window.onscroll = function () { scroll() };
// location.reload(){
//     dev.style.marginTop = "0%"
// }
dev.style.marginTop = '0%'
devs.style.marginTop = '0%'
img.style.top = '25%'
imgg.style.top = '25%'
function scroll(){
    imgs.style.marginTop = "7%";
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
fa.addEventListener("click", (ev)=>{
    ev.preventDefault()
    form.style.display = 'none'
})