// strict mode
"use strict";

// let a = 5; 
// a = 9; // -> error: ReferenceError
// alert(a);

// show/hide panels/box

window.addEventListener("load", function () {
    let headings = document.querySelectorAll(".box__heading"); // array
    if (headings.length > 0) {
        // we use 
        headings.forEach(headingEl => {
            headingEl.addEventListener("click", function () {
                let parentBox = this.closest('.box');
                if (parentBox != null) {

                    parentBox.classList.toggle("hide");

                    /*let boxContent = parentBox.querySelector(".box__content"); // returns first element
                    let boxIndicator = parentBox.querySelector(".box__indicator"); 
                    if (boxContent != null) {
                        // apply show / hide class
                        boxContent.classList.toggle("hide");
                    } else {
                        console.error('No box content element found');
                    }*/
                } else {
                    console.error("No parent box found");
                }
            }, false);
        });
    } else {
        console.error('No box heading elements found.',headings);
    }
}, false);