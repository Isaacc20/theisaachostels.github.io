let pro = document.getElementById("pro")
let dev = document.getElementById("dev")
let img = document.getElementById("img")
let c_user = JSON.parse(localStorage.getItem("c_user"))

// dev.style.marginTop = '0%'
// img.style.top = '13%'

if (c_user == null){
    pro.innerHTML = "Login"
} else{
    let letter = c_user.Occ_firstname
    pro.innerHTML = letter.charAt(0)
    pro.style.paddingBlock = "6px"
    pro.style.paddingInline = "15px"
}