let hname = document.getElementById("hname")
let pro = document.getElementById("pro")
// let double = document.getElementById("double")
// let self = document.getElementById("self")
// let private = document.getElementById("private")
// let nas = document.getElementById("nas")
// let nad = document.getElementById("nad")
// let nap = document.getElementById("nap")
// let pic1 = document.getElementById("pic1")
// let pic2 = document.getElementById("pic2")
// let pic3 = document.getElementById("pic3")
let logg = document.getElementById("log")
let description = document.getElementById("description")
let city = document.getElementById("city")
let locate = document.getElementById("location")
let price = document.getElementById("price")
let h_name = document.getElementById("h_name")
let h_stat = document.getElementById("h_stat")
let h_stan = document.getElementById("h_stan")
let himgs2 = document.getElementById("himgs2")
let himgs3 = document.getElementById("himgs3")
let himgs4 = document.getElementById("himgs4")
let desc = document.getElementById("desc")
let hcity = document.getElementById("hcity")
let hlocation = document.getElementById("hlocation")
let hostels = JSON.parse(localStorage.getItem("hostels"))
let amen = document.getElementById("amen")
let amenity = []
// let avail = document.getElementById("avail")
let rooms = []
let c_user = JSON.parse(localStorage.getItem("c_user"))
let sa = localStorage.getItem("SA")
// let myhost = JSON.parse(localStorage.getItem("myhostel"))

function logout(ev) {
    ev.preventDefault();
    if (log.innerHTML == "Log In") {
        window.location.href = 'index.html';
    } else {
        localStorage.removeItem("c_user")
        localStorage.removeItem("SA")
        window.location.href = "index.html"
        window.location.reload()
    }
    
}


hname.addEventListener("input", ()=>{
    h_name.innerHTML = hname.value
})
// single.addEventListener("input", ()=>{
//     soa.style.display = "block"
    // if(single.value.length > 3 && !single.value.includes("-")){
    //     soa.innerHTML = `Add (-) in place of (,)`
    //     soa.style.color = "red"
    //     return;
    // } else{
        // let sing = single.value;
        // let singe = sing.replace("-", ",");
        // soa.innerHTML = singe;
    // }
//     soa.innerHTML = `Single occupancy room : ₦${single.value} yearly`
// })
// double.addEventListener("input", ()=>{
//     doa.style.display = "block"
//     doa.innerHTML = `Double occupancy room : ₦${double.value} yearly`
// })
// private.addEventListener("input", ()=>{
//     pr.style.display = "block"
//     pr.innerHTML = `Private residence : ₦${private.value} yearly`
// })
description.addEventListener("input", ()=>{
    desc.innerHTML = description.value
})
city.addEventListener("input", ()=>{
    hcity.innerHTML = `<i class="fa fa-location-dot text-warning"></i> ${city.value}, `
})
locate.addEventListener("input", ()=>{
    hlocation.innerHTML = locate.value
})

    const imageInput = document.getElementById('imageInput');
    const imageUrls = [];

    imageInput.addEventListener('change', (event) => {
    const files = event.target.files;

    for (let i = 0; i < files.length; i++) {
        const reader = new FileReader();

        reader.readAsDataURL(files[i]);

        reader.onload = () => {
        const imageUrl = reader.result;
        imageUrls.push(imageUrl);
        document.querySelector("#imgs").innerHTML = "";
        for (let i = 0; i < imageUrls.length; i++) {
            document.querySelector("#imgs").innerHTML += `
            <img src="${imageUrls[i]}" width="300px" height="200px" alt="">
            `;
        }
        };
    }
    });

    let amenities = document.querySelectorAll("#bunks, #wifi, #electricity, #clean, #cafe")
    amenities.forEach((el)=>{
        let tagg = el.parentElement.innerText
        console.log(tagg);
        if (el.checked == true) {
            amenity.push(tagg)
            amen.innerHTML += `<li class="fs-6 font">${tagg}</li>`
        } else {
            let found = amenity.findIndex(where=>where == tagg)
            amenity.splice(found, 1)
        }
        console.log(amenity);
        el.addEventListener("click", (e) => {
            let tag = e.target.parentElement.innerText;
            console.log(tag);
            if (el.checked == true) {
                amenity.push(tag);
                console.log(amenity);
                amen.innerHTML += `<li class="fs-6 font">${tag}</li>`
            } else {
                let found = amenity.findIndex(where => where == tag);
                // let finding = amenity.indexOf(found);
                amenity.splice(found, 1);
                console.log(amenity);
                amen.innerHTML = ""
                for (let i = 0; i < amenity.length; i++) {
                    amen.innerHTML += `<li class="fs-6 font">${amenity[i]}</li>`
                }
            }
        });
        
    })

    let room_b = document.querySelectorAll("#s_n, #d_n, #sc_n")
    let room_n = document.querySelectorAll("#single_r, #double_r, #self_r")
    room_n.forEach(el => {
        el.addEventListener("input", (e)=>{
            e.preventDefault()
            console.log(el.id);
            let cr = e.target.parentElement.firstElementChild
            if (el.id == "single_r") {
                if (document.querySelector('.single').checked == false) {
                    alert("Make this accomodation type available first")
                    cr.value = "";
                    console.log(cr.value);
                    return;
                } else {
                    document.querySelector('#soa').innerHTML = `Single: ${cr.value} rooms`
                        document.querySelector('#s_rooms').innerHTML = ""
                        for (let i = 1; i <= cr.value; i++) {
                        // const element = array[i];
                        document.querySelector('#s_rooms').innerHTML += `
                            <button class="d-grid rounded-1 px-1 text-light rm" onclick="select(${i})">${i}<i class="fa fa-bed"></i></button>
                        `
                    }
                }
            } else if (el.id == "double_r") {
            let cr = e.target.parentElement.firstElementChild
            if (document.querySelector('.double').checked == false) {
                    alert("Make this accomodation type available first")
                    cr.value = "";
                    console.log(cr.value);
                    return;
                } else {
                    document.querySelector('#doa').innerHTML = `Double: ${cr.value} rooms`
                    document.querySelector('#d_rooms').innerHTML = ""
                        for (let i = 1; i <= cr.value; i++) {
                        // const element = array[i];
                        document.querySelector('#d_rooms').innerHTML += `
                            <button class="d-grid rounded-1 px-1 text-light rm" onclick="select(${i})">${i}<i class="fa fa-bed"></i></button>
                        `
                }
                }
            }
            if (el.id == "self_r") {
                if (document.querySelector('.self').checked == false) {
                    alert("Make this accomodation type available first")
                    cr.value = "";
                    console.log(cr.value);
                    return;
                } else {
                    document.querySelector('#scr').innerHTML = `Self con.: ${cr.value} rooms`
                    document.querySelector('#sc_rooms').innerHTML = ""
                        for (let i = 1; i <= cr.value; i++) {
                        // const element = array[i];
                        document.querySelector('#sc_rooms').innerHTML += `
                            <button class="d-grid rounded-1 px-1 text-light rm" onclick="select(${i})">${i}<i class="fa fa-bed"></i></button>
                        `
                }
            } 
        }
    })
    });

    let room_p = document.querySelectorAll("#single_m, #double_m, #self_m")
    room_p.forEach(el => {
        el.addEventListener("input", (e)=>{
            e.preventDefault()
            console.log(el.id);
            let cr = e.target.parentElement.lastElementChild
            if (el.id == "single_m") {
                if (document.querySelector('.single').checked == false) {
                    alert("Make this accomodation type available first")
                    cr.value = "";
                    console.log(cr.value);
                    return;
                } else {
                    document.querySelector('#som').innerHTML = `Single occupancy room: ₦${cr.value}`
                }
            } else if (el.id == "double_m") {
                if (document.querySelector('.double').checked == false) {
                    alert("Make this accomodation type available first")
                    cr.value = "";
                    console.log(cr.value);
                    return;
                } else {
                    document.querySelector('#dom').innerHTML = `Double occupancy room: ₦${cr.value}`
                }
            } if (el.id == "self_m") {
                if (document.querySelector('.self').checked == false) {
                    alert("Make this accomodation type available first")
                    cr.value = "";
                    console.log(cr.value);
                    return;
                } else {
                    document.querySelector('#scm').innerHTML = `Self contained apartment: ₦${cr.value}`
                }
            } 
        })
    });
    let types = document.querySelectorAll(".single, .double, .self")
    types.forEach((el)=>{
        // el.addEventListener("click", (e)=>{
        //     console.log(el.checked);
        // })
        let tagg = el.parentElement.innerText
        console.log(tagg);
        if (el.checked == true) {
            rooms.push(tagg)
            // avail.innerHTML += `<li class="fs-6 font">${tagg}</li>`
        } else {
            let found = rooms.findIndex(where=>where == tagg)
            rooms.splice(found, 1)
        }
        el.addEventListener("change", (e)=>{
            let tag = e.target.parentElement.innerText
            if (el.checked == true) {
                rooms.push(tag)
            } else {
                let found = rooms.findIndex(where=>where == tag)
                rooms.splice(found, 1)
                if (rooms.length == 0) {
                    // avail.innerHTML = ""
                } else {
                    // avail.innerHTML = ""
                    for (let i = 0; i < rooms.length; i++) {
                        // avail.innerHTML += `<li class="fs-6 font">${rooms[i]}</li>`
                    }
                }
            }
            
            console.log(rooms);
        })
    })

    let conts = document.querySelector("#contact")
    let ids = 0
    conts.addEventListener("input", ()=>{
        document.querySelector("#cont").innerHTML = conts.value
    })




    let inpts = document.querySelectorAll("#s_n, #d_n, #sc_n, #single, #double, #contain")
    inpts.forEach((el)=>{
        el.addEventListener("wheel", (e)=>{
            e.preventDefault();
        })
    })
let agent = JSON.parse(localStorage.getItem("Agents"))
function post(e) {
    if (hname.value == "" || description.value == "" || city.value == "" || locate.value == "" || imageInput.value == "" || (document.querySelector(".single").checked == false && document.querySelector(".double").checked == false && document.querySelector(".self").checked == false) || (document.getElementById("single_r").value == "" && document.getElementById("double_r").value == "" && document.getElementById("self_r").value == "") || (document.getElementById("single_m").value == "" && document.getElementById("double_m").value == "" && document.getElementById("self_m").value == "") || conts.value == "") {
        alert("Input fields cannot be empty");
        return;
    } else {
        ids++
        alert("correct")
        let post_room = {
            hostelname : hname.value,
            description : description.value,
            city : city.value,
            location : locate.value,
            images : imageUrls,
            utilities : amenity,
            roomtypes : rooms,
            roomnumbers : {single : room_b[0].value,
                            double : room_b[1].value,
                            self : room_b[2].value
                        },
            roomprices : {single : room_p[0].value,
                            double : room_p[1].value,
                            self : room_p[2].value
                        },
            agentcontact : conts.value,
            agentmail : c_user.agentmail,
            hostel_id : ids
        }
        if (hostels == null) {
            hostels = [];
            hostels.push(post_room);
            localStorage.setItem("hostels", JSON.stringify(hostels))
            window.location.reload()
        } else {
            hostels.push(post_room);
            localStorage.setItem("hostels", JSON.stringify(hostels))
            window.location.reload()
        }
        console.log(hostels);
    }
}

if (c_user == null){
    if (sa == 'Super Admin') {
            document.getElementById("create").style.display = 'none'
            document.getElementById("demos").style.display = 'none'
            document.getElementById("display").innerHTML = ''
        for (let i = 0; i < hostels.length; i++) {
            const element = hostels[i];
            document.getElementById("display").innerHTML += `
                <div class=" w-100 d-flex align-items-center justify-content-between px-4 py-2">
                    <h6>${element.hostelname}</h6>
                    <label class="form-check-label">
                        Disable
                        <input onchange="disable(${element.hos})" class="form-check-input single" value="Single occupancy room" type="checkbox" role="switch" id="flexSwitchCheckDefault">
                    </label>
                </div>
                `
        }
    } else if(sa == null){
        pro.innerHTML = `<img src="My avatar.png" class="rounded-5" width="40vw" alt="">`
        logg.innerHTML = "Log In"
        pro.style.padding = "0px"
        pro.style.borderRadius = "100%"
        window.location.href = "index.html"
    }
} else{
    let letter = c_user.Occ_firstname || c_user.Occ_name || c_user.agentname || c_user.agentfirstname
    pro.innerHTML = letter.charAt(0)
    pro.style.paddingBlock = "6px"
    pro.style.paddingInline = "15px"

    if (c_user.status === "agent") {
        // let myhost = [];
        let myhost = hostels.filter(item => item.agentmail === c_user.agentmail)
        if (myhost.length > 0) {
            document.getElementById("have").innerHTML = "Your listed hostels";
            // hostels.forEach((el)=>{
            //     // let possible =    hostels.find(where => where.agentmail === c_user.agentmail)
            //     // if (possible) {
            //         myhost.push(possible);
            //         console.log(myhost);
            //     // }
                
            // })
            console.log(myhost);
            // console.log(possible);
            localStorage.setItem("myhostel", JSON.stringify(myhost));
            console.log(myhost);
            for (let i = 0; i < myhost.length; i++) {
                const element = myhost[i];
                document.getElementById("myhos").innerHTML += `
                    <div class="each w-75 text-start">
                        <div class="d-flex imgs w-100 justify-content-around overflow-x-scroll gap-3">
                            ${myhost[i].images.map(imageUrl => `<img src="${imageUrl}" alt="">`).join('')}
                        </div>
                        <h2>Hostel Information</h2>
                        <p><strong>Hostel Name:</strong> ${myhost[i].hostelname}</p>
                        <p><strong>Description:</strong> ${myhost[i].description}</p>
                        <p><strong>City:</strong> ${myhost[i].city}</p>
                        <p><strong>Location:</strong> ${myhost[i].location}</p>
                        <h3>Utilities</h3>
                        <ul>
                            ${myhost[i].utilities.map(utility => `<li>${utility}</li>`).join('')}
                        </ul>
                        <h3>Room Types and Numbers</h3>
                        <ul>
                            <li>Single occupancy apartment: ${myhost[i].roomnumbers.single} rooms</li>
                            <li>Double occupancy apartment: ${myhost[i].roomnumbers.double} rooms</li>
                            <li>Self-Contained apartment: ${myhost[i].roomnumbers.self}</li>
                        </ul>
                        <h3>Room Prices</h3>
                        <ul>
                            <li>Single: ₦${myhost[i].roomprices.single}</li>
                            <li>Double: ₦${myhost[i].roomprices.double}</li>
                            <li>Self-Contained: ₦${myhost[i].roomprices.self}</li>
                        </ul>
                        <p><strong>Agent Contact:</strong> ${myhost[i].agentcontact}</p>
                        <p><strong>Agent Email:</strong> ${myhost[i].agentmail}</p>
                    </div>
                `;
            }
        }else {
            
            document.getElementById("have").innerHTML = `<h1 class="font fs-1" style="height: 50vh;">Your launched hostel(s) will show here</h1>`;
        }
    function disable(index){
        // e.preventDefault()
        // console.log(e.target.parentElement)
        console.log(index)
    }

    // if (c_user.status === "agent") {
    //     let possible = hostels.find(where => where.agentmail == c_user.agentmail)
    //     if (possible) {
    //         document.getElementById("have").innerHTML = "Your listed hostels"
    //         // if (myhost == null) {
    //             myhost = []
    //             myhost.push(possible)
    //             localStorage.setItem("myhostel", JSON.stringify(myhost))
                
    //             for (let i = 0; i < myhost.length; i++) {
    //                 const element = myhost[i];
    //                 // let myhost = myhost[i]
    //                 document.getElementById("myhos").innerHTML += `
    //                 <div class="each w-75 text-start    ">
    //                 <h2>Hostel Information</h2>
    //                 <p><strong>Hostel Name:</strong> ${myhost[i].hostelname}</p>
    //                 <p><strong>Description:</strong> ${myhost[i].description}</p>
    //                 <p><strong>City:</strong> ${myhost[i].city}</p>
    //                 <p><strong>Location:</strong> ${myhost[i].location}</p>
    //                 <h3>Images</h3>
    //                 <div class="d-flex w-100 justify-content-around overflow-x-scroll gap-3 ">
    //                 ${myhost[i].images.map(imageUrl => `<img src="${imageUrl}" width="300px" height="200px" alt="">`).join('')}
    //                 </div>
    //                 <h3>Utilities</h3>
    //                 <ul>
    //                 ${myhost[i].utilities.map(utility => `<li>${utility}</li>`).join('')}
    //                 </ul>
    //                 <h3>Room Types and Numbers</h3>
    //                 <ul>
    //                 <li>Single occupancy apartment: ${myhost[i].roomnumbers.single} rooms</li>
    //                 <li>Double occupancy apartment: ${myhost[i].roomnumbers.double} rooms</li>
    //                 <li>Self-Contained apartment: ${myhost[i].roomnumbers.self}</li>
    //                 </ul>
    //                 <h3>Room Prices</h3>
    //                 <ul>
    //                 <li>Single: ₦${myhost[i].roomprices.single}</li>
    //                 <li>Double: ₦${myhost[i].roomprices.double}</li>
    //                 <li>Self-Contained: ₦${myhost[i].roomprices.self}</li>
    //                 </ul>
    //                 <p><strong>Agent Contact:</strong> ${myhost[i].agentcontact}</p>
    //                 <p><strong>Agent Email:</strong> ${myhost[i].agentmail}</p>
    //             </div>
                
    //                 `
    //             }
        //     } else {
        //         myhost.push(possible)
        //         localStorage.setItem("myhostel", JSON.stringify(myhost))
                
        //         for (let i = 0; i < myhost.length; i++) {
        //             const element = myhost[i];
        //             // let myhost = myhost[i]
        //             document.getElementById("myhos").innerHTML += `
        //             <div class="each w-75 text-start    ">
        //             <h2>Hostel Information</h2>
        //             <p><strong>Hostel Name:</strong> ${myhost[i].hostelname}</p>
        //             <p><strong>Description:</strong> ${myhost[i].description}</p>
        //             <p><strong>City:</strong> ${myhost[i].city}</p>
        //             <p><strong>Location:</strong> ${myhost[i].location}</p>
        //             <h3>Images</h3>
        //             <div class="d-flex w-100 justify-content-around overflow-x-scroll gap-3 ">
        //             ${myhost[i].images.map(imageUrl => `<img src="${imageUrl}" width="300px" height="200px" alt="">`).join('')}
        //             </div>
        //             <h3>Utilities</h3>
        //             <ul>
        //             ${myhost[i].utilities.map(utility => `<li>${utility}</li>`).join('')}
        //             </ul>
        //             <h3>Room Types and Numbers</h3>
        //             <ul>
        //             <li>Single occupancy apartment: ${myhost[i].roomnumbers.single} rooms</li>
        //             <li>Double occupancy apartment: ${myhost[i].roomnumbers.double} rooms</li>
        //             <li>Self-Contained apartment: ${myhost[i].roomnumbers.self}</li>
        //             </ul>
        //             <h3>Room Prices</h3>
        //             <ul>
        //             <li>Single: ₦${myhost[i].roomprices.single}</li>
        //             <li>Double: ₦${myhost[i].roomprices.double}</li>
        //             <li>Self-Contained: ₦${myhost[i].roomprices.self}</li>
        //             </ul>
        //             <p><strong>Agent Contact:</strong> ${myhost[i].agentcontact}</p>
        //             <p><strong>Agent Email:</strong> ${myhost[i].agentmail}</p>
        //         </div>
                
        //             `
        //     }
            
        // } 
    // } else {
    //     document.getElementById("body").innerHTML = "Your hostel will show here"
    // }
    }else{
        // console.log(hostels);
        // console.log(c_user.status);
        document.getElementById("body").innerHTML = `<h1 class="font" style="height: 50vh;">You booked hostel will show here</h1>`;
        hostels.forEach(el => {
                console.log(el.booked_room);
                el.booked_room.forEach((e)=>{
                    console.log(e);
                })
        });    
    }
}