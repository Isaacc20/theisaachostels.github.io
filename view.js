let pro = document.getElementById("pro")
let logg = document.getElementById("log")
let hostel = document.getElementById("hostel")
let hostels_div = document.getElementById("hostels")
let c_user = JSON.parse(localStorage.getItem("c_user"))
let hostels = JSON.parse(localStorage.getItem("hostels"))
console.log(hostels);

if (c_user == null){
    pro.innerHTML = `<img src="My avatar.png" class="rounded-5" width="40vw" alt="">`
    logg.innerHTML = "Log In"
    pro.style.padding = "0px"
} else{
    let letter = c_user.Occ_firstname || c_user.Occ_name || c_user.agentname || c_user.agentfirstname
    pro.innerHTML = letter.charAt(0)
    pro.style.paddingBlock = "6px"
    pro.style.paddingInline = "15px"
}
function logout(ev) {
    ev.preventDefault();
    if (logg.innerHTML == "Log In") {
        window.location.href = 'index.html';
    } else {
        localStorage.removeItem("c_user")
        window.location.reload()
    }
    
}
hostel.addEventListener("click", ()=>{
    window.location.href = "post.html"
})