// var typed = new Typed("#typed", {
//     stringsElement: '#typed-string',
//     typeSpeed: 100,
//     backSpeed: 60,
//     loop: true
// })

let abs = document.getElementById("abs")
let imgs = document.getElementById("imgs")
let land = document.getElementById("land")
let form = document.getElementById("form")
let login = document.getElementById("login")
let signup = document.getElementById("signup")
let fa = document.getElementById("fa")
let faa = document.getElementById("faa")
let what = document.getElementById("what")
let dev = document.getElementById("dev")
let devs = document.getElementById("devs")
let img = document.getElementById("img")
let imgg = document.getElementById("imgg")
let p = document.getElementById("p")
let pp = document.getElementById("pp")
let nam = document.getElementById("name")
let email = document.getElementById("email")
let password = document.getElementById("password")
let pass = document.getElementById("pass")
let c_password = document.getElementById("c_password")
let eye = document.getElementById("eye")
let eyee = document.getElementById("eyee")
let eyes = document.getElementById("eyes")

window.onscroll = function () { scroll() };
// location.reload(){
//     dev.style.marginTop = "0%"
// }
// dev.style.marginTop = '0%'
// devs.style.marginTop = '0%'
// img.style.top = '25%'
// imgg.style.top = '25%'
function scroll(){
    imgs.style.marginTop = "7%";
}
function start() {
    form.style.display = 'flex'
    login.style.display = "none"
    signup.style.display = "flex"
}
function get(ev) {
    ev.preventDefault()
    start()
}
function get1() {
    start()
}
// function get2() {
//     start()
//     what.value = "agent"
// }
// function fa(ev){
//     ev.preventDefault()
//     form.style.display = 'none'
// }
abs.addEventListener("click", ()=>{
    
})
fa.addEventListener("click", (ev)=>{
    ev.preventDefault()
    form.style.display = 'none'
})
faa.addEventListener("click", (ev)=>{
    ev.preventDefault()
    form.style.display = 'none'
})
// function showeye(){
//     let bat = event.target;
//     let batt = event.target.nextElementSibling.childElement
//     console.log(batt);
// }
function eyess() {
    let bat = event.target
    let batt = bat.nextElementSibling.firstElementChild
    batt.style.visibility = "visible"
}
function slash() {
    let bat = event.target
    let batt = bat.className
    let battt = bat.parentElement.previousElementSibling
    console.log(batt, battt);
    bat.classList.toggle("fa-eye")
    if (battt.type == "password") {
        battt.type = "text"
    } else {
        battt.type = "password"
    }
}
c_password.addEventListener("input", (ev)=>{
    ev.preventDefault()
    eyess()
})

password.addEventListener("input", (ev)=>{
    ev.preventDefault()
    eyess()
})
eye.addEventListener("click", (ev)=>{
    ev.preventDefault();
    slash()
})
eyes.addEventListener("click", (ev)=>{
    ev.preventDefault();
    slash()
})
function create(ev) {
    ev.preventDefault();
    if (nam.value == "" || email.value == "" || password.value == "" || c_password.value == "") {
        p.style.display = "block"
        p.style.backgroundColor = "red"
        p.innerHTML = "Input fields cannot be left empty"
        return;
    } else {
        if (password.value != c_password.value) {
            p.style.display = "block"
            p.style.backgroundColor = "red"
            p.innerHTML = "Fill the same password"
            return;
        } else {
            p.style.display = "block"
            p.style.backgroundColor = "green"
            p.innerHTML = "Account successfuly created"
            setTimeout(() => {
                window.location.href = "iDev HM Black.png"
            }, 3000);
        }
    }
}

pass.addEventListener("input", (ev)=>{
    ev.preventDefault()
    eyess()
})
eyee.addEventListener("click", (ev)=>{
    ev.preventDefault();
    slash()
})
function log(ev) {
    ev.preventDefault();
    if (gmail.value == "" || pass.value == "") {
        pp.style.display = "block"
        pp.style.backgroundColor = "red"
        pp.innerHTML = "Input fields cannot be left empty"
        return;
    } else {
        
    }
}
function sign(ev) {
    ev.preventDefault();
    login.style.display = "none"
    signup.style.display = "flex"
}
function log_in(ev) {
    ev.preventDefault();
    login.style.display = "flex"
    signup.style.display = "none"
}