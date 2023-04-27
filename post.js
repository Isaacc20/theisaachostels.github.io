let hname = document.getElementById("hname")
// let single = document.getElementById("single")
// let double = document.getElementById("double")
// let self = document.getElementById("self")
// let private = document.getElementById("private")
// let nas = document.getElementById("nas")
// let nad = document.getElementById("nad")
// let nap = document.getElementById("nap")
// let pic1 = document.getElementById("pic1")
// let pic2 = document.getElementById("pic2")
// let pic3 = document.getElementById("pic3")
// let pic4 = document.getElementById("pic4")
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
// let hprice = document.getElementById("hprice")
// let s_highest = document.getElementById("s_highest")
// let d_highest = document.getElementById("d_highest")
// let p_highest = document.getElementById("p_highest")
// let save = document.getElementById("sn")
// let reader = new FileReader();
// let reader1 = new FileReader();
// let reader2 = new FileReader();
// let reader3 = new FileReader();
// let myFile = document.getElementById("myFile")
// let image = document.getElementById("image")
let amen = document.getElementById("amen")
let amenity = []
// let avail = document.getElementById("avail")
let rooms = []

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
description.addEventListener("input", ()=>{
    desc.innerHTML = description.value
})

// function na(){
//     let targ = event.target
//     let prices = targ.previousElementSibling.lastElementChild
//     let btn = targ.previousElementSibling.nextElementSibling
//     console.log(btn);
//     if (prices.disabled == true) {
//         prices.disabled = false
//         prices.placeholder = "in Naira(₦)"
//         btn.style.color = "cadetblue"
//         btn.style.border = "1px solid cadetblue"
//         prices.style.border = "1px solid orange"
//         prices.style.boxShadow = "0px 0px 10px grey"
//     } else {
//         prices.disabled = true
//         prices.placeholder = "Not available"
//         btn.style.color = "grey"
//         btn.style.border = "1px solid grey"
//         prices.style.border = "1px solid grey"
//         prices.style.boxShadow = "0px 0px 0px transparent"
//     }
// }
// nas.addEventListener("click", ()=>{
//     na()

// })
// nad.addEventListener("click", ()=>{
//     na()
// })


// nap.addEventListener("click", ()=>{
//     na()
// })
// single.addEventListener("scroll", ()=>{
//     return;
// })
// double.addEventListener("scroll", ()=>{
//     return;
// })
// private.addEventListener("scroll", ()=>{
//     return;
// })

    // function chooseImage(){
    //     let data = myFile.files[0];
    //     console.log(data);
    //     reader.addEventListener("load", function(){
    //         console.log(reader.result);
    //     document.getElementById("image").src = reader.result
    //     })
    //     if(data) {
    //         reader.readAsDataURL(data)
    //     }   
    // }


  const imageInput = document.getElementById('imageInput');
  const imageUrls = [];

  imageInput.addEventListener('change', (event) => {
    const files = event.target.files;
    
    for (let i = 0; i < files.length; i++) {
      const reader = new FileReader();

        reader.readAsDataURL(files[i]);
      reader.onload = (event) => {
        const imageUrl = event.target.result;
        imageUrls.push(imageUrl);
        const url = reader.result;
        imageUrls.push(url);
        console.log(url);
      for (let i = 0; i < imageUrls.length; i++) {
        document.querySelector("#imgs").innerHTML = ""
        document.querySelector("#imgs").innerHTML += `
        <img src="${imageUrls[i]}" width="300px" height="200px" alt="">
        `
      }
      };
    }
  });


    // pic2.addEventListener("change", ()=>{
    //     let data = pic2.files[0];
    //     console.log(data);
    //     reader1.addEventListener("load", function(){
    //         console.log(reader.result);
    //         himgs2.src = reader.result
    //     })
    //     if(data) {
    //         reader1.readAsDataURL(data)
    //     }   
    // })
    // pic3.addEventListener("change", ()=>{
    //     let data = pic3.files[0];
    //     console.log(data);
    //     reader2.addEventListener("load", function(){
    //         console.log(reader.result);
    //         himgs3.src = reader.result
    //     })
    //     if(data) {
    //         reader2.readAsDataURL(data)
    //     }   
    // })
    // pic4.addEventListener("change", ()=>{
    //     let data = pic4.files[0];
    //     console.log(data);
    //     reader3.addEventListener("load", function(){
    //         console.log(reader.result);
    //         himgs4.src = reader.result
    //     })
    //     if(data) {
    //         reader3.readAsDataURL(data)
    //     }   
    // })

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
                            <button class="d-grid rounded-1 text-light rm" onclick="select(${i})">${i}<i class="fa fa-bed"></i></button>
                        `
                    }
                }
            } else if (el.id == "double_r") {
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
                            <button class="d-grid rounded-1 text-light rm" onclick="select(${i})">${i}<i class="fa fa-bed"></i></button>
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
                            <button class="d-grid rounded-1 text-light rm" onclick="select(${i})">${i}<i class="fa fa-bed"></i></button>
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
                // avail.innerHTML += `<li class="fs-6 font">${tag}</li>`
                // if (el.className == "form-check-input single") {
                //     room_n[0].style.disabled = false
                // } else {
                //     room_n[0].disabled = true
                // }
                // if (el.className == "form-check-input double") {
                //     room_n[1].style.disabled = false
                // } else {
                //     room_n[1].disabled = true
                // }
                // if (el.className == "form-check-input self") {
                //     room_n[2].style.disabled = false
                // } else {
                //     room_n[2].disabled = true
                // }
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

    // let prices = document.querySelectorAll("#som, #dom, #scm")
    // prices.forEach((el)=>{
    //     el.addEventListener
    // })

//     let types = document.querySelectorAll(".single, .double, .self");
// let room_n = document.querySelectorAll("#single_r, #double_r, #self_r");
// room_n.forEach(el => {
//     el.disabled = true;
// });
// types.forEach((el)=>{
//     let tagg = el.parentElement.innerText;
//     console.log(tagg);
//     if (el.checked == true) {
//         rooms.push(tagg);
//         avail.innerHTML += `<li class="fs-6 font">${tagg}</li>`;
//     } else {
//         let found = rooms.findIndex(where=>where == tagg);
//         rooms.splice(found, 1);
//     }
//     el.addEventListener("change", (e)=>{
//         let tag = e.target.parentElement.innerText;
//         if (el.checked == true) {
//             rooms.push(tag);
//             avail.innerHTML += `<li class="fs-6 font">${tag}</li>`;
//             if (el.classList.contains("single")) {
//                 // Use el instead of room_n[0] to enable/disable the corresponding room number input
//                 el.parentElement.parentElement.parentElement.parentElement.nextElementSibling.nextElementSibling.nextElementSibling.lastElementChild.firstElementChild.lastElementChild.firstElementChild.disabled = false;
//             } else {
//                 el.parentElement.parentElement.parentElement.parentElement.nextElementSibling.nextElementSibling.nextElementSibling.lastElementChild.firstElementChild.lastElementChild.firstElementChild.disabled = true;
//             }
//             // if (el.classList.contains("double")) {
//             //     el.parentElement.nextElementSibling.nextElementSibling.disabled = false;
//             // } else {
//             //     el.parentElement.nextElementSibling.nextElementSibling.disabled = true;
//             // }
//             // if (el.classList.contains("self")) {
//             //     el.parentElement.nextElementSibling.nextElementSibling.nextElementSibling.disabled = false;
//             // } else {
//             //     el.parentElement.nextElementSibling.nextElementSibling.nextElementSibling.disabled = true;
//             // }
//         } else {
//             let found = rooms.findIndex(where=>where == tag);
//             rooms.splice(found, 1);
//             if (rooms.length == 0) {
//                 avail.innerHTML = "";
//             } else {
//                 avail.innerHTML = "";
//                 for (let i = 0; i < rooms.length; i++) {
//                     avail.innerHTML += `<li class="fs-6 font">${rooms[i]}</li>`;
//                 }
//             }
//         }
//         console.log(rooms);
//     })
// })

// const types = document.querySelectorAll('.single, .double, .self');
// const room_n = document.querySelectorAll('#single_r, #double_r, #self_r');
// // const avail = document.querySelector('#available');

// types.forEach((type) => {
//   type.addEventListener('change', (event) => {
//     const tag = event.target.parentElement.innerText;

//     if (event.target.checked) {
//       rooms.push(tag);
//       avail.innerHTML += `<li class="fs-6 font">${tag}</li>`;
//     } else {
//       const found = rooms.findIndex((room) => room === tag);
//       rooms.splice(found, 1);
//       avail.innerHTML = rooms.map((room) => `<li class="fs-6 font">${room}</li>`).join('');
//     }

//     room_n.forEach((room) => {
//       room.disabled = true;
//     });

//     if (document.querySelector('.single').checked) {
//       room_n[0].disabled = false;
//     }

//     if (document.querySelector('.double').checked) {
//       room_n[1].disabled = false;
//     }

//     if (document.querySelector('.self').checked) {
//       room_n[2].disabled = false;
//     }
//   });
// });



    let inpts = document.querySelectorAll("#s_n, #d_n, #sc_n, #single, #double, #contain")
    inpts.forEach((el)=>{
        el.addEventListener("wheel", (e)=>{
            e.preventDefault();
        })
    })
    let aparts = document.querySelectorAll("#single, #double, #self")
    aparts.forEach((el)=>{
        el.addEventListener("click", (e)=>{
            e.preventDefault();
        })
    })
// save.addEventListener("click", (e)=>{
//     e.preventDefault()
    // let nos = []
    // nos.push(s_least.value, d_least.value)
    // let nulls = nos.find((where)=>where === null || where === undefined || where === "")
    // // nos.slice(nulls)
    // console.log(nulls);
    // console.log(nos);
//     if (s_least.value == undefined && d_least.value == undefined) {
//         save.disabled = true
//     } else {
        
//     }
// })