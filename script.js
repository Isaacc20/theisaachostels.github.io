// var typed = new Typed("#typed", {
//     stringsElement: '#typed-string',
//     typeSpeed: 100,
//     backSpeed: 60,
//     loop: true
// })

let imgs = document.getElementById("imgs")
let land = document.getElementById("land")
let client = document.getElementById("client")
let clients = document.getElementById("clients")
let clients1 = document.getElementById("clients1")
let clients2 = document.getElementById("clients2")
let clients3 = document.getElementById("clients3")
let form = document.getElementById("form")
let login = document.getElementById("login")
let person = document.getElementById("person")
let agentlog = document.getElementById("agentlog")
let signup = document.getElementById("signup")
let agentsign = document.getElementById("agentsign")
// let admin = document.getElementById("admin")
let admin_not = document.getElementById("admin_not")
let admin_faa = document.getElementById("admin_faa")
let admin_mail = document.getElementById("admin_mail")
let admin_pass = document.getElementById("admin_pass")
let admins = document.getElementById("admin_log")
let one = document.getElementById("one")
let two = document.getElementById("two")
let three = document.getElementById("three")
let fa = document.getElementById("fa")
let faa = document.getElementById("faa")
let faaa = document.getElementById("faaa")
let faaaa = document.getElementById("faaaa")
let what = document.getElementById("what")
let dev = document.getElementById("dev")
let devs = document.getElementById("devs")
let img = document.getElementById("img")
let imgg = document.getElementById("imgg")
let p = document.getElementById("p")
let pp = document.getElementById("pp")
let ppp = document.getElementById("ppp")
let pppp = document.getElementById("pppp")
let nam = document.getElementById("name")
let lnam = document.getElementById("lname")
let aname = document.getElementById("aname")
let laname = document.getElementById("laname")
let email = document.getElementById("email")
let agmail = document.getElementById("agmail")
let amail = document.getElementById("amail")
let password = document.getElementById("password")
let apass = document.getElementById("apass")
let c_password = document.getElementById("c_password")
let apassword = document.getElementById("apassword")
let ac_password = document.getElementById("ac_password")
let a_country = document.getElementById("a_country")
let a_state = document.getElementById("a_state")
let a_city = document.getElementById("a_city")
let a_address = document.getElementById("a_address")
let exist = document.getElementById("exist")
let occ_arr = JSON.parse(localStorage.getItem("Occupants"))
let agents_arr = JSON.parse(localStorage.getItem("Agents"))
let c_user = JSON.parse(localStorage.getItem("c_user"))

// ANIMATIONS
// window.onscroll = function () { scroll(), scrolls() };
// function scroll(){
//     imgs.style.marginTop = "-7%";
//     if (document.documentElement.scrollTop > 1000) {
//         // clients.style.marginLeft = '0px';
//         // clients1.style.marginLeft = '0px';
//         // clients2.style.marginLeft = '0px';
//         // clients3.style.marginLeft = '0px';
//         person.style.transform = 'scale(100%)';
//     } else {
//     // clients.style.marginLeft = '-100%';
//     // clients1.style.marginLeft = '-100%';
//     // clients2.style.marginLeft = '-100%';
//     // clients3.style.marginLeft = '-100%';
//     person.style.transform = 'scale(40%)';
// }
// }
// function scrolls(){
//     if (document.documentElement.scrollTop > 1800) {
//         person.style.transform = 'scale(100%)';
//     } else {
//     person.style.transform = 'scale(40%)';
// }
// }

window.addEventListener('scroll', () => {
    let content = document.querySelectorAll('#clients, #clients1, #clients2, #clients3');
    content.forEach((el)=>{
        let contentPosition = el.getBoundingClientRect().top;
        let screenPosition = window.innerHeight;
    //content.forEach((el)=>{
        if(contentPosition < screenPosition){
        // console.log("less than");
           el.style.marginLeft = 0
        }else{
        // console.log("greater than");
            el.style.marginLeft = "-100%"
        }
    //})
    })
    let c_Position = person.getBoundingClientRect().top;
    let cPosition = imgs.getBoundingClientRect().top;
    let s_Position = window.innerHeight;
    if(c_Position < s_Position || cPosition < s_Position){
        // console.log("less than");
        // content.forEach((el)=>{
            // imgs.style.marginTop = "0%"
            person.style.transform = 'scale(100%)';
        // })
    }else{
        // console.log("greater than");
        // content.forEach((el)=>{
            // imgs.style.marginTop = "40%"
            person.style.transform = 'scale(0%)';
        // })
    }
})

// function scrollFunction() {
// }
// if (window.scrollTop > 10000) {
    
//   }
  
// GET STARTED/SIGN UP/LOGIN BUTTON
function start() {
    if (c_user == null) {
        form.style.display = 'flex'
        login.style.display = "flex"
        agentsign.style.display = "none"
        agentlog.style.display = "none"
        signup.style.display = "none"
    } else {
        window.location.href = 'dashboard.html'
    }
    
}
// loggin.addEventListener("click", (ev)=>{
//     ev.preventDefault();
//     startt(ev)
// })
function get(ev){
    ev.preventDefault()
    form.style.display = 'flex'
    login.style.display = "none"
    signup.style.display = "flex"
    agentsign.style.display = "none"
    agentlog.style.display = "none"
}
// AGENT SIGN UP/LOGIN BUTTON
function launch(ev){
    ev.preventDefault()
    if (c_user == null) {
        form.style.display = 'flex'
        login.style.display = "none"
        signup.style.display = "none"
        agentsign.style.display = "none"
        agentlog.style.display = "flex"
    } else {
        window.location.href = 'dashboard.html'
    }
}
function asign(ev){
    ev.preventDefault()
    if (c_user == null) {
        form.style.display = 'flex'
        login.style.display = "none"
        signup.style.display = "none"
        agentsign.style.display = "flex"
        agentlog.style.display = "none"
    } else {
        window.location.href = 'dashboard.html'
    }
}

// NEXT/PREV BUTTONS IN AGENT SIGN UP
function next(ev) {
    ev.preventDefault();
    one.style.marginLeft = "-100%"
    two.style.marginRight = "0%"
    one.style.transition = "all ease-in-out 0.3s"
    two.style.transition = "all ease-in-out 0.3s"
}
function nextt(ev) {
    ev.preventDefault();
    two.style.marginLeft = "-100%"
    three.style.marginRight = "0%"
    two.style.transition = "all ease-in-out 0.3s"
    three.style.transition = "all ease-in-out 0.3s"
}
function prev(ev){
    ev.preventDefault();
    one.style.marginLeft = "0%"
    two.style.marginRight = "-100%"
    one.style.transition = "all ease-in-out 0.3s"
    two.style.transition = "all ease-in-out 0.3s"
}
function prevv(ev){
    ev.preventDefault();
    two.style.marginLeft = "0%"
    three.style.marginRight = "-100%"
    two.style.transition = "all ease-in-out 0.3s"
    three.style.transition = "all ease-in-out 0.3s"
}
// FORMS
function startt(ev) {
    ev.preventDefault()
    start(ev)
}
// function get1() {
//     start()
// }

// FORM BACK ARROW BUTTON
fa.addEventListener("click", (ev)=>{
    ev.preventDefault()
    form.style.display = 'none'
})
faa.addEventListener("click", (ev)=>{
    ev.preventDefault()
    form.style.display = 'none'
})
faaa.addEventListener("click", (ev)=>{
    ev.preventDefault()
    form.style.display = 'none'
})
faaaa.addEventListener("click", (ev)=>{
    ev.preventDefault()
    form.style.display = 'none'
})
// FORM INPUTS
function eyess(e) {
    let bat = event.target
    let batt = bat.nextElementSibling.firstElementChild
    batt.style.visibility = "visible"
}
function slash(e) {
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
let ids = document.querySelectorAll("#c_password, #password, #apassword, #ac_password, #apass")
ids.forEach((el)=>{
    el.addEventListener("input", (ev)=>{
        ev.preventDefault();
        eyess()
    })
})
let showPass = document.querySelectorAll("#eye, #eyes, #eyese, #eyesss, #eyeeee")
showPass.forEach((el)=>{
    el.addEventListener("click", (ev)=>{
        ev.preventDefault();
        slash()
    })
})
// SIGNUP SUBMIT BUTTON
function create(ev) {
    ev.preventDefault();
    if (nam.value == "" || lnam.value == "" || email.value == "" || password.value == "" || c_password.value == "") {
        p.style.display = "block"
        p.style.backgroundColor = "red"
        p.innerHTML = "Input fields cannot be empty"
        fa.style.color = 'white'
        return;
    } else {
        
        if (password.value != c_password.value) {
            p.style.display = "block"
            fa.style.color = 'white'
            p.style.backgroundColor = "red"
            p.innerHTML = "Fill the same password"
            return;
        } else {
            let occ_details = {
                Occ_firstname: nam.value,
                Occ_lastname: lnam.value,
                Occ_email: email.value,
                Occ_password:password.value
            }
            if (occ_arr === null || occ_arr === "" || occ_arr === [] || occ_arr === undefined) {
                let occ_arr = []
                occ_arr.push(occ_details)
                localStorage.setItem("Occupants", JSON.stringify(occ_arr))
                console.log(occ_arr);
                console.log(occ_details);
                p.style.display = "block"
                fa.style.color = 'white'
                p.style.backgroundColor = "green"
                p.innerHTML = "Account successfuly created"
                occ_arr.push(occ_details)
                localStorage.setItem("Occupants", JSON.stringify(occ_arr))
                console.log(occ_arr);
                console.log(occ_details);
                setTimeout(() => {
                    window.location.href = "dashboard.html"
                    localStorage.setItem("c_user", JSON.stringify(found))
                }, 3000);
            } else{ 
                let found = occ_arr.find(where => occ_details.Occ_email === where.Occ_email)
                if(found){
                    p.style.display = "block"
                    p.style.backgroundColor = "red"
                    p.innerHTML = "The email address has already been used"
                    fa.style.color = 'white'
                    return;
                } else{
                    p.style.display = "block"
                    fa.style.color = 'white'
                    p.style.backgroundColor = "green"
                    p.innerHTML = "Account successfuly created"
                    occ_arr.push(occ_details)
                    localStorage.setItem("Occupants", JSON.stringify(occ_arr))
                    console.log(occ_arr);
                    console.log(occ_details);
                    setTimeout(() => {
                        window.location.href = "dashboard.html"
                        localStorage.setItem("c_user", JSON.stringify(found))
                    }, 3000);
                }
            }
            // setTimeout(() => {
            //     window.location.href = "iDev HM Black.png"
            // }, 3000);
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
    let found = occ_arr.find(where=> where.Occ_email == gmail.value && where.Occ_password == pass.value)
    if (gmail.value == "" || pass.value == "") {
        pp.style.display = "block"
        faa.style.color = "white"
        pp.style.backgroundColor = "red"
        pp.innerHTML = "Input fields cannot be empty"
        return;
    } else if(!found) {
        pp.style.display = "block"
        faa.style.color = "white"
        pp.style.backgroundColor = "red"
        pp.innerHTML = `User not found!! Do you want to Login as an agent? &nbsp <button onclick="alogin(event)" class="btn text-light">Ok</button>`
        return;
    } else if (found) {
        pp.style.display = "block"
        faa.style.color = "white"
        pp.style.backgroundColor = "green"
        pp.innerHTML = "Login Successful"
        console.log(found);
        found.status = "occupant"
        setTimeout(() => {
            window.location.href = "dashboard.html"
            localStorage.setItem("c_user", JSON.stringify(found))
        }, 3000);
    }
}
// TOGGLE LOGIN AND SIGNUP FORM
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

// AGENT SUBMIT BUTTON FOR SIGNUP
function sbmit(ev){
    ev.preventDefault()
    if (aname.value == "" || agmail.value == "" || apassword.value == "" || ac_password.value == "") {
        ppp.style.display = "block"
        ppp.style.backgroundColor = "red"
        ppp.innerHTML = "Input fields cannot be empty"
        faaa.style.color = "white"
        return;
    } else {
        if (apassword.value != ac_password.value) {
            ppp.style.display = "block"
            ppp.style.backgroundColor = "red"
            ppp.innerHTML = "Fill the same password"
            faaa.style.color = "white"
            return; 
        } else {
            let agents = {
                agentfirstname : aname.value,
                agentlastname : laname.value,
                agentmail : agmail.value,
                agentcountry : a_country.value,
                agentstate : a_state.value,
                agentcity : a_city.value,
                agentaddress : a_address.value,
                agentpassword : apassword.value,
            }
            if (agents_arr == null) {
                let agents_arr = []
                agents_arr.push(agents)
                localStorage.setItem("Agents", JSON.stringify(agents_arr))
                alog(ev)
            } else {
                let find = agents_arr.find(where=> where.agentmail == agents.agentmail)
                if (find) {
                    ppp.style.display = "block"
                    ppp.style.backgroundColor = "red"
                    ppp.innerHTML = "The email address has already been used"
                    faaa.style.color = "white"
                    return;
                } else {
                    ppp.style.display = "block"
                    ppp.style.backgroundColor = "green"
                    ppp.innerHTML = "Successful! You're now an Admin"
                    faaa.style.color = "white"
                    exist.innerHTML = `Continue to &nbsp;<button onclick="agsign(event)" class="h5">Log In</button>`
                    agents_arr.push(agents)
                    localStorage.setItem("Agents", JSON.stringify(agents_arr))
                    window.location.href = "dashboard.js"
                    // alog(ev)
                }
            }
        }
    }
}
function alog(ev){
    ev.preventDefault();
    if (amail.value == "" || apass.value == "") {
        pppp.style.display = "block"
        pppp.style.backgroundColor = "red"
        pppp.innerHTML = "Input fields cannot be empty"
        faaaa.style.color = "white"
        console.log("empty inputs");
        return;
    } else{
        let find = agents_arr.find(where=> where.agentmail == amail.value && where.agentpassword == apass.value)
        if (find){
            pppp.style.display = "block"
            pppp.style.backgroundColor = "green"
            pppp.innerHTML = "Log In Successful"
            faaaa.style.color = "white"
            find.status = "agent"
            setTimeout(() => {
                window.location.href = "dashboard.html"
                localStorage.setItem("c_user", JSON.stringify(find))
            }, 3000);
        } else {
            pppp.style.display = "block"
            pppp.style.backgroundColor = "red"
            pppp.innerHTML = `User not found!! Do you want to Login as a tenant? &nbsp <button onclick="tologin(event)" class="btn text-light">Ok</button>`
            faaaa.style.color = "white"
        }
    }
}
function tologin(ev){
    ev.preventDefault();
    startt(ev)
}
function alogin(ev){
    ev.preventDefault();
    launch(ev)
}

// let contexts = document.getElementById("#context")
// contexts.addEventListener("contextmenu", (e)=>{
        
//         // }, 3000);
        
//     })

    function context(e){
        e.preventDefault();
        let admini = e.target.parentElement.nextElementSibling.firstElementChild
        console.log(admini)
        admini.style.display = "block"
    }

function admin(ev){
    // ev.preventDefault();
    form.style.display = "flex"
    admins.style.display = "flex"
    login.style.display = "none"
    signup.style.display = "none"
    agentsign.style.display = "none"
    agentlog.style.display = "none"
}
// let admin_inps = document.querySelectorAll('#admin_mail', '#admin_pass')
// admin_inps.forEach((el)=>{
//     el.addEventListener('input', ()=>{
//     if (admin_mail.value == 'isaacoluwadarasimi002@gmail.com' && admin_pass.value == '1987') {
//         alert('Done')
//         window.location.href = 'post.html'
//     } else {
//         return
//     }
// })
// })
admin_mail.addEventListener('input', ()=>{
    if (admin_mail.value == 'isaacoluwadarasimi002@gmail.com' && admin_pass.value == '1987') {
        alert('Done')
        window.location.href = 'post.html'
    } else {
        return
    }
})
admin_pass.addEventListener('input', ()=>{
    if (admin_mail.value == 'isaacoluwadarasimi002@gmail.com' && admin_pass.value == '1987') {
        alert('Done')
        localStorage.setItem("SA", ('Super Admin'))
        localStorage.removeItem('c_user')
        window.location.href = 'post.html'
    } else {
        return
    }
})