
                    
                //     document.getElementById("myhos").innerHTML += `
                //     <div style="background-color: gold; color: cadetblue; padding: 20px;">
                //     <h2>Hostel Information</h2>
                //     <p><strong>Hostel Name:</strong> ${myhost[i].hostelname}</p>
                //     <p><strong>Description:</strong> ${myhost[i].description}</p>
                //     <p><strong>City:</strong> ${myhost[i].city}</p>
                //     <p><strong>Location:</strong> ${myhost[i].location}</p>
                //     <h3>Images</h3>
                //     <div>
                //       ${myhost[i].images.map(imageUrl => `<img src="${myhost[i].imageUrl}" width="300px" height="200px" alt="">`).join('')}
                //     </div>
                //     <h3>Utilities</h3>
                //     <ul>
                //       ${myhost[i].utilities.map(utility => `<li>${myhost[i].utility}</li>`).join('')}
                //     </ul>
                //     <h3>Room Types and Numbers</h3>
                //     <ul>
                //       ${myhost[i].entries(roomnumbers).map(([type, number]) => `<li>${myhost[i].type}: ${myhost[i].number}</li>`).join('')}
                //     </ul>
                //     <h3>Room Prices</h3>
                //     <ul>
                //       ${myhost[i].Object.entries(roomprices).map(([type, price]) => `<li>${myhost[i].type}: ${myhost[i].price}</li>`).join('')}
                //     </ul>
                //     <p><strong>Agent Contact:</strong> ${myhost[i].agentcontact}</p>
                //     <p><strong>Agent Email:</strong> ${myhost[i].agentmail}</p>
                //   </div>
                
                //     `
                    // document.getElementById("myhos").innerHTML += `
                    //     <div class="each rounded-1 py-3 mx-5 w-75">
                    //         <h6 class="text-center">${myhost[i].hostelname}</h6>
                    //         <p>${myhost[i].description}</p>
                    //         <div id="myimg" style="" class="imgs d-flex overflow-x-scroll gap-1"></div>
                    //         <div class="px-3">
                    //             <p>${myhost[i].city}, ${myhost[i].location}</p>
                    //         <div id="price" class="py-2">${("₦"+myhost[i].roomprices.single + " - " + "₦"+myhost[i].roomprices.self) || ("₦"+myhost[i].roomprices.single + " - " + "₦"+myhost[i].roomprices.double) || ("₦"+myhost[i].roomprices.double + " - " + "₦"+myhost[i].roomprices.self) || "₦"+myhost.roomprices.single || "₦"+myhost.roomprices.double || "₦"+myhost.roomprices.self}</div>
                    //         </div>
                    //         <div id="more">
                    //             <button class="btn text-info">See more</button>
                    //             <div>
                    //                 <div class="p-3 w-100 px-5">
                    //                     <h6 id="soa" class=""></h6>
                    //                     <div class="d-flex flex-wrap justify-content-between w-100 gap-2" id="s_rooms"></div>
                    //                     <h6 id="doa" class=""></h6>
                    //                     <div class="d-flex flex-wrap justify-content-between w-100 gap-2" id="d_rooms"></div>
                    //                     <h6 id="scr" class=""></h6>
                    //                     <div class="d-flex flex-wrap justify-content-between w-100 gap-2" id="sc_rooms"></div>
                    //                     <p id="cont"></p>
                    //                 </div>
                    //             </div>
                    //         </div>
                    //     </div>


                    //     <div class="each d-flex flex-wrap align-items-stretch w-75 mx-5 rounded-1 py-3">
                    //             <h3 id="h_name" class="text-center fs-1 h2 font">${myhost[i].hostelname}</h3>
                    //             <div id="imgs" class="imgs d-flex overflow-x-scroll w-100 gap-1">
                    //             </div>
                    //             <div>
                    //                 <h5 id="desc">${myhost[i].description}</h5>
                    //                 <ol id="amen"></ol>
                    //                 <p><i class="fa fa-location-dot text-warning"></i>${myhost[i].city}, ${myhost[i].location}</p>
                    //                 <div class="p-3">
                    //                     <h6 id="som" class=""></h6>
                    //                     <h6 id="dom" class=""></h6>
                    //                     <h6 id="scm" class=""></h6>
                    //                 </div>
                    //                 <div class="p-3 w-100 px-5">
                    //                     <h6 id="soa" class=""></h6>
                    //                     <div class="d-flex flex-wrap justify-content-between w-100 gap-2" id="s_rooms"></div>
                    //                     <h6 id="doa" class=""></h6>
                    //                     <div class="d-flex flex-wrap justify-content-between w-100 gap-2" id="d_rooms"></div>
                    //                     <h6 id="scr" class=""></h6>
                    //                     <div class="d-flex flex-wrap justify-content-between w-100 gap-2" id="sc_rooms"></div>
                    //                     <h6 id="cont"></h6>
                    //                 </div>
                    //             </div>
                    //         </div>
                    // `
                    // console.log(myhost[i].images);
                    // for (let i = 0; i < myhost[i].images.length; i++) {
                    //     document.getElementById("imgs").innerHTML += `
                    //     <img id="" src="${myhost[i].images[i]}" width="40%" height="300px" alt="">
                    //     `
                    // }