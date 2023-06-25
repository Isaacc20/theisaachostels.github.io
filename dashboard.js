// let default = 


let pro = document.getElementById("pro")
let logg = document.getElementById("log")
let hostel = document.getElementById("hostel")
let hostels_div = document.getElementById("hostels")
let c_user = JSON.parse(localStorage.getItem("c_user"))
let sa = localStorage.getItem('SA')
let hostels = JSON.parse(localStorage.getItem("hostels"))
console.log(hostels);
if (c_user == null || c_user == undefined) {
    let c_user = localStorage.getItem('c_user')
}
console.log(c_user);

if (c_user == null && sa == null){
    pro.innerHTML = `<img src="My avatar.png" class="rounded-5" width="40vw" alt="">`
    logg.innerHTML = "Log In"
    pro.style.padding = "0px"
} else if (sa == "Super Admin") {
    pro.innerHTML = `<i class="fa fa-star text-warning position-absolute top-0 bottom-0"></i>`
    pro.style.paddingBlock = "6px"
} else{
    let letter = c_user.Occ_firstname || c_user.Occ_name || c_user.agentname || c_user.agentfirstname
    pro.innerHTML = letter.charAt(0)
    console.log(letter);
    pro.style.paddingBlock = "6px"
    pro.style.paddingInline = "15px"
}
function logout(ev) {
    ev.preventDefault();
    if (logg.innerHTML == "Log In") {
        window.location.href = 'index.html';
    } else {
        localStorage.removeItem("c_user")
        localStorage.removeItem("SA")
        window.location.reload()
    }
    
}
hostel.addEventListener("click", ()=>{
    if (c_user == null || c_user == undefined || c_user == "") {
        alert("Sorry, you have to login")
        return;
    } else {
        window.location.href = "post.html"
    }
})

// PRINT HOSTELS
// for (let i = 0; i < hostels.length; i++) {
//     const element = hostels[i];
//     const keys = Object.keys(hostels[i].roomprices);

//     keys.forEach(key => {
//     const value = hostels[i].roomprices[key];
//     console.log(`${value}`);
//     });
//     // Get the highest and lowest number from the converted array
//     const valuesArray = keys.map(obj => obj.value); // Extract values to a new array
//     console.log(valuesArray);
//     const highestNumber = Math.max(...valuesArray);
//     const lowestNumber = Math.min(...valuesArray);

//     console.log(`Highest number: ${highestNumber}`);
//     console.log(`Lowest number: ${lowestNumber}`);

for (let i = 0; i < hostels.length; i++) {
    const keys = Object.keys(hostels[i].roomprices);
  
    keys.forEach(key => {
      const value = hostels[i].roomprices[key];
      console.log(`${value}`);
    });
  
    // Get the highest and lowest number from the converted array
    const valuesArray = keys.map(key => hostels[i].roomprices[key]); // Extract values to a new array
    console.log(valuesArray);
    const highestNumber = Math.max(...valuesArray);
    const lowestNumber = Math.min(...valuesArray);
  
    console.log(`Highest number: ${highestNumber}`);
    console.log(`Lowest number: ${lowestNumber}`);

    hostels_div.innerHTML += `
        <div class="each m-2">
            <div class="imgs d-flex overflow-x-hidden gap-1">
                <img src="${hostels[i].images[Math.floor(Math.random() * hostels[i].images.length)]}" style="min-height: 40%;" width="100%" height="200px" alt="">
                <button onclick="view(${i})" class="hover-btn"><i class="fa fa-eye"></i><br>View</button>
            </div>
            <div class="p-2">
                <h4 class="fw-medium">${hostels[i].hostelname}</h4>
                <p class="hostel-desc">${hostels[i].description}</p>
                <div>
                    <p><i class="fa fa-location-dot text-warning"></i> ${hostels[i].location},${hostels[i].city}<p>
                <h5 id="price" class="py-2 fw-medium"><span class="fs-5 fw-bolder">≦</span> ₦${highestNumber.toLocaleString()}</h5>
            </div>
        </div>
    `
    // const obj = { a: 1, b: 2, c: 3 };

    // console.log(hostels[i].roomprices.keys);
    // console.log(hostels[i].roomprices[1]);
    
}

function view(e) {
    console.log(e);
    console.log(hostels[e])
    localStorage.setItem("Viewing-hostel", JSON.stringify(hostels[e]))
    window.location.href = "view.html"
}