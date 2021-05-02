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

    // Arrays

    let persons = ['Max','Mia'];
    persons.push("Paula");
    let justAnotherStudent = "Mira";
    // add at end of array:
    persons.push(justAnotherStudent);
    // length
    console.log("persons.length =",persons.length);
    console.log("First person",persons[0]);
    // add at beginning
    persons.unshift("Erster");
    console.log("Persons after unshift:",persons.toString());
    // remove last el
    let removedPerson =  persons.pop();
    console.log("Persons after pop()",persons.toString(),"// removed person:",removedPerson);
    // remove first el
    persons.shift();
    console.log("Persons after shift()",persons.toString());

    for (let person of persons){
        console.log('Person: ',person);
    }

    let personsMultiDimensional = [
        ['Max','Mira'],
        ['Tom','Tina']
    ];
    console.log(personsMultiDimensional[1][1]);

    for(let personGroup of personsMultiDimensional){
        console.log('Group:',personGroup);
        for(let person of personGroup){
            console.log('Person: ',person);
        }
    }

}, false);