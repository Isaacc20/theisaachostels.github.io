let pro = document.getElementById("pro")
let logg = document.getElementById("log")
let hostel = document.getElementById("hostel")
let hostels_div = document.getElementById("hostels")
let body = document.getElementById("body")
let faa = document.getElementById("faa")
let far = document.getElementById("fa")
let form = document.getElementById("form")
let book_name = document.getElementById("book_name")
let book_email = document.getElementById("book_email")
let book_no = document.getElementById("book_no")
let check_in = document.getElementById("check_in")
let check_out = document.getElementById("check_out")
let occ_no = document.getElementById("occ_no")
let inspect_check = document.getElementById("inspect_check")
let pp = document.getElementById("pp")
let ppp = document.getElementById("ppp")
let amo = document.getElementById("amo")
let c_user = JSON.parse(localStorage.getItem("c_user"))
let sa = localStorage.getItem('SA')
let hostels = JSON.parse(localStorage.getItem("hostels"))
let viewing_hostel = JSON.parse(localStorage.getItem("Viewing-hostel"))
console.log(hostels);
console.log(c_user);
let view_hostel = hostels.find(where=>where.hostel_id == viewing_hostel.hostel_id)
console.log(viewing_hostel);
let single_arr = []
let single_book = []
let double_book = []
let self_book = []

if (c_user === null){
    pro.innerHTML = `<img src="My avatar.png" class="rounded-5" width="40vw" alt="">`
    logg.innerHTML = "Log In"
    pro.style.padding = "0px"
} else if (sa === "Super Admin") {
    pro.innerHTML = `<i class="fa fa-star text-warning fs-6 position-absolute top-0 bottom-0"></i>`
    pro.style.padding = "0px"
} else{
    let letter = c_user.userFirstname
    pro.innerHTML = letter.charAt(0)
    console.log(letter);
    pro.style.paddingBlock = "6px"
    pro.style.paddingInline = "15px"
}
function logout(e) {
    e.preventDefault();
    if (logg.innerHTML == "Log In") {
        window.location.href = 'index.html';
    } else {
        logg.innerHTML = "Log In"
        localStorage.removeItem("c_user")
        localStorage.removeItem("SA")
        window.location.reload()
    }
    
}
hostel.addEventListener("click", ()=>{
    window.location.href = "post.html"
})
alert("Click a room to book or inspect")
console.log(viewing_hostel);
body.innerHTML += `
    <div class="each d-flex flex-wrap align-items-stretch w-100 rounded-1 p-3">
        <div id="imgs" class="imgs gap-1">
        ${viewing_hostel.images.map(images => `<div style="width:500px;" class="w-100 h-100 overflow-hidden"><img src="${images}" width="300px" height="100%" alt=""></div>`).join('')}
        </div>
        <div>

            <h2>Hostel Information</h2>
                        <p><strong>Hostel Name:</strong> ${viewing_hostel.hostelname}</p>
                        <p><strong>Description:</strong> ${viewing_hostel.description}</p>
                        <p><strong>City:</strong> ${viewing_hostel.city}</p>
                        <p><strong>Location:</strong> ${viewing_hostel.location}</p>
                        <h3>Utilities</h3>
                        <ul>
                            ${viewing_hostel.utilities.map(utility => `<li>${utility}</li>`).join('')}
                        </ul>
                        <h3>Room Types and Numbers</h3>
                        <ul>
                            <li>Single occupancy apartment: ${viewing_hostel.roomnumbers.single} rooms</li>
                            <li>Double occupancy apartment: ${viewing_hostel.roomnumbers.double} rooms</li>
                            <li>Self-Contained apartment: ${viewing_hostel.roomnumbers.self}</li>
                        </ul>
                        <h3>Room Prices</h3>
                        <ul>
                            <li>Single: ₦${viewing_hostel.roomprices.single}</li>
                            <li>Double: ₦${viewing_hostel.roomprices.double}</li>
                            <li>Self-Contained: ₦${viewing_hostel.roomprices.self}</li>
                        </ul>

            <div class="w-100">
                <h6 id="soa" class="">Single: ${viewing_hostel.roomnumbers.single} rooms</h6>
                <div class="d-flex flex-wrap justify-content-between w-100 gap-1" id="s_rooms"></div>
                <h6 id="doa" class="">Double: ${viewing_hostel.roomnumbers.double} rooms</h6>
                <div class="d-flex flex-wrap justify-content-between w-100 gap-1" id="d_rooms"></div>
                <h6 id="scr" class="">Self-con: ${viewing_hostel.roomnumbers.self} rooms</h6>
                <div class="d-flex flex-wrap justify-content-between w-100 gap-1" id="sc_rooms"></div>
                <p id="cont"></p>
            </div>
            <p><strong>Agent Contact:</strong> ${viewing_hostel.agentcontact}</p>
            <p><strong>Agent Email:</strong> ${viewing_hostel.agentmail}</p>
        </div>
</div>
`
console.log(viewing_hostel);

// for (let i = 1; i <= viewing_hostel.roomnumbers.single; i++) {
//     document.getElementById("s_rooms").innerHTML += `
//     <button class="d-grid rounded-1 p-1 text-light rm" id="S${i}" onclick="book_single(${i})">S${i}<i class="fa fa-bed"></i></button>
//     `
//     if (view_hostel.booked_room != null) {
//         let booked = view_hostel.booked_room.find(where=>where.room_details == document.getElementById(`S${i}`).innerText)
//         console.log(booked);
//         // localStorage.setItem("Single_book", booked)
//         console.log(booked.room_details);
//         document.getElementById(booked.room_details).style.backgroundColor = "red"
//         // booked.style.backgroundColor = "red"
//     }
//     // for (let e = 0; e < booked_o.length; e++) {
//     //     const element = array[e];
//     //     let equal = booked_o[e].booking_occ == document.getElementById(`S${i}`).innerText
//     //     console.log(equal);
//         // if () {
            
//         // }
//     // }
// single_arr.push(document.getElementById(`S${i}`).innerText)
// }

for (let i = 1; i <= viewing_hostel.roomnumbers.single; i++) {
    document.getElementById("s_rooms").innerHTML += `
        <button class="d-grid rounded-1 p-1 text-light rm" id="S${i}" onclick="book_single(${i})">S${i}<i class="fa fa-bed"></i></button>
    `

    // if (view_hostel && view_hostel.booked_room) {
    //     let booked = view_hostel.booked_room.find(where => where.room_details === document.getElementById(`S${i}`).innerText);
    //     console.log(booked);
    //     if (booked) {
    //         document.getElementById(booked.room_details).style.backgroundColor = "red";
    //     }
    // }
    

    if (view_hostel.booked_room != null) {
        let booked = view_hostel.booked_room.find(where => where.room_details == `S${i}`)
        console.log(booked);
        single_book.push(booked)
        if (booked) {
            console.log(document.getElementById(`S${i}`));
            document.getElementById(`S${i}`).style.backgroundColor = "red"
            document.getElementById(`S${i}`).disabled = true
        }
    }
    single_arr.push(`S${i}`)
}

for (let i = 1; i <= viewing_hostel.roomnumbers.double; i++) {
    document.getElementById("d_rooms").innerHTML += `
    <button class="d-grid rounded-1 p-1 text-light rm" id="D${i}" onclick="book_double(${i})">D${i}<i class="fa fa-bed"></i></button>
    `
    if (view_hostel.booked_room != null) {
        let counts = {};
        let booked = view_hostel.booked_room.find(where => where.room_details == `D${i}`)
        if (booked) {
        console.log(booked);
        double_book.push(booked)
        console.log(double_book);
        // double_book.forEach(function (x) { counts[x] = (counts[x] || 0) + 1; });
        // console.log(counts)
        // console.log(double_book.filter(where=>where.roomnumbers).length);
        // let found_population = view_hostel.booked_o.find(where=> where.population == 1)
        if (booked.population == 1) {
            document.getElementById(`D${i}`).style.backgroundColor = "darkgoldenrod"
            document.getElementById(`D${i}`).disabled = false
            
        } else if(booked.population == 2) {
            document.getElementById(`D${i}`).style.backgroundColor = "red"
            document.getElementById(`D${i}`).disabled = true
            
        }
            
        }
    }
}
for (let i = 1; i <= viewing_hostel.roomnumbers.self; i++) {
    document.getElementById("sc_rooms").innerHTML += `
    <button class="d-grid rounded-1 p-1 text-light rm" id="SC${i}" onclick="book_self(${i})">SC${i}<i class="fa fa-bed"></i></button>
    `
    // if (view_hostel.booked_room != null) {
    //     let booked = view_hostel.booked_room.find(where => where.room_details == `SC${i}`)
    //     console.log(booked);
    //     if (booked) {
    //         document.getElementById(`SC${i}`).style.backgroundColor = "red"
    //         document.getElementById(`SC${i}`).disabled = true
    //     }
    // }
}
document.getElementById("hostelname").innerHTML = `${viewing_hostel.hostelname}  <span id="ppp" class="text-black text-center fw-lighter py-1"> room <strong style="font-family: cursive;" id="no"></strong></span>`
let no = document.getElementById("no")
function check() {
    if (c_user == null) {
        if (confirm("Sorry, you have to logIn or create an account")) {
            window.location.href = "index.html"
        } else {
            return
        }
    } else if (c_user.status == "agent" && viewing_hostel.agentmail == c_user.agentmail) {
        if (confirm("You are about to book a room in your own hostel")) {
            
        } else {
            window.location.reload()
        }
    }
}
let letter = c_user.userFirstname
    book_email.value = c_user.userEmail
    // if (c_user.status == "agent") {
    //     book_name.value ==  c_user.agentname || `${c_user.agentfirstname} ${c_user.agentlastname}`
    // } else{
    //     book_name.value = `${c_user.Occ_firstname} ${c_user.Occ_lastname}` ||c_user.Occ_name
    // }
    console.log(letter);
    book_name.value = letter
function book_single(index) {
    // ev.preventDefault();
    console.log(index);
    check()
        document.getElementById("form").style.display = "flex"
        no.innerHTML = `S${index}`
        occ_no.innerHTML += `<option selected disabled value="">Number of occupants</option>
                            <option value="1">1</option>`
}
function book_double(index) {
    console.log(index);
    check()
        document.getElementById("form").style.display = "flex"
        no.innerHTML = `D${index}`
        if (view_hostel.booked_room.find(where=>where.room_details == `D${index}`)) {
            occ_no.innerHTML = `<option value="1">1</option>`
        } else {
            occ_no.innerHTML = `<option selected disabled value="">Number of occupants</option>
                            <option value="1">1</option>
                            <option value="2">2</option>`
        }
        console.log(index);
}
function book_self(index) {
    console.log(index);
    check()
        document.getElementById("form").style.display = "flex"
        no.innerHTML = `SC${index}`
        occ_no.innerHTML = `<option selected disabled value="">Number of occupants</option>
                            <option value="1">1</option>`
    
}
occ_no.addEventListener("change", (e)=>{
    e.preventDefault();
    if (no.innerHTML.startsWith("S") && !no.innerHTML.includes("C")) {
        console.log("single");
        amo.innerHTML = view_hostel.roomprices.single * occ_no.value
        console.log(view_hostel.roomprices.single * occ_no.value);
    } else if(no.innerHTML.startsWith("D")) {
        console.log("double");
        amo.innerHTML = view_hostel.roomprices.double * occ_no.value
        console.log(view_hostel.roomprices.double * occ_no.value);
    } else if(no.innerHTML.startsWith("SC")) {
        console.log("selfcon");
        amo.innerHTML = view_hostel.roomprices.self * occ_no.value
        console.log(view_hostel.roomprices.self * occ_no.value);
    }
})
faa.addEventListener("click", (ev)=>{
    ev.preventDefault()
    form.style.display = 'none'
})
function rooms(ev){
    dash_back(ev)
}
function dash_back(ev){
    ev.preventDefault()
    window.location.href = "dashboard.html"
}
function log(e) {
    e.preventDefault();
    document.getElementById("inspect_check").checked = true
}

let v_hostel = hostels.find(where=>where.hostel_id == viewing_hostel.hostel_id)
let booked_o = v_hostel.booked_room
console.log(booked_o);
console.log(single_arr);

const paymentForm = document.getElementById('login');
paymentForm.addEventListener("submit", pay, false);

// PAY
function pay(e) {
  e.preventDefault();
  if (book_name.value == "" || book_email.value == "" || book_no.value == "" || occ_no.value == "" || check_in.value == null || check_out.value == null) {
                    pp.style.display = "flex";
                    pp.style.backgroundColor = "red";
                    pp.innerHTML = "Fill details";
                } else {
                    if (inspect_check.checked == false) {
                        pp.style.display = "flex";
                        pp.style.backgroundColor = "red";
                        pp.innerHTML = "Sorry, you have to schedule inspection first";
                    } else {
                        let handler = PaystackPop.setup({
                            key: 'pk_test_26a5333b66afad3c454180ab4e151801a4c8175d', // Replace with your public key
                            email: book_email.value,
                            amount: amo.innerHTML * 100,
                            // ref: ''+Math.floor((Math.random() * 1000000000) + 1), // generates a pseudo-unique reference. Please replace with a reference you generated. Or remove the line entirely so our API will generate one for you
                            // label: "Optional string that replaces customer email"
                            onClose: function(){
                            alert('Window closed.');
                            },
                            callback: function(response){
                            let message = 'Payment complete! Reference: ' + response.reference;
                            alert(message);
                            }
                        });

                        handler.openIframe();
    
                        let booker_details = {
                            room_name: viewing_hostel,
                            room_details : no.innerHTML,
                            population : occ_no.value,
                            booking_occ : {
                                bookername : book_name.value,
                                bookermail : book_email.value,
                                book_no : book_no.value,
                                check_in : check_in.value,
                                check_out : check_out.value
                            }
                        }
                        if (booked_o == null) {
                            let booked_o = []
                            booked_o.push(booker_details)
                            v_hostel.booked_room = booked_o
                            localStorage.setItem("hostels", JSON.stringify(hostels))
                            localStorage.setItem("Viewing-hostel", JSON.stringify(v_hostel))
                            window.location.reload()
                        } else {
                            let found_population = booked_o.find(where=>where.population == 1)
                            if (found_population) {
                                found_population.population = 2
                                found_population.booking_occ2 = booker_details.booking_occ
                                localStorage.setItem("hostels", JSON.stringify(hostels))
                                localStorage.setItem("Viewing-hostel", JSON.stringify(v_hostel))
                                window.location.reload()
                            } else {
                                booked_o.push(booker_details)
                                v_hostel.booked_room = booked_o
                                localStorage.setItem("hostels", JSON.stringify(hostels))
                                localStorage.setItem("Viewing-hostel", JSON.stringify(v_hostel))
                                window.location.reload()
                            }
                        }
                        console.log(v_hostel);
                    }
                }
    // window.location.reload()
}