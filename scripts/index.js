"use strict";

// Let the window's onload know there is a function called init
window.onload = init;    // Do not put () after init!
                         // This isn't calling init now -- it 
                         // saying call the init function when
                         // the window finishes loading

// The init function connect the button to the code that
// should run when the button is clicked
function init() {
   // Find the helloBtn
   const addBtn = document.getElementById("addBtn");
   const subBtn = document.getElementById("subBtn");

   // Let helloBtn's onclick know there is a function
   // called onHelloBtnClicked that should be called when
   // the button is clicked
   addBtn.onclick = onAddBtnClicked; 
   subBtn.onclick = onSubBtnClicked; 
   mulBtn.onclick = onMulBtnClicked; 
   divBtn.onclick = onDivBtnClicked; 

   // Find the clearBtn
   let clearBtn = document.getElementById("clearBtn");

   // Let clearBtn's onclick know there is a function
   // called onClearBtnClicked that should be called when
   // the button is clicked
   clearBtn.onclick = onClearBtnClicked; 

}



// This function is called when helloBtn is clicked
function onAddBtnClicked() {
   // Find the messageDiv
   let answerField = document.getElementById("answerField");
   let number1 = document.getElementById("number1");
   let number2 = document.getElementById("number2");
   let answer = Number(number1.value) + Number(number2.value);
   // Set the contents of the div
   answerField.value = answer;
}

// This function is called when helloBtn is clicked
function onSubBtnClicked() {
    // Find the messageDiv
    let answerField = document.getElementById("answerField");
    let number1 = document.getElementById("number1");
    let number2 = document.getElementById("number2");
    let answer = Number(number1.value) - Number(number2.value);
    // Set the contents of the div
    answerField.value = answer;
 }
 
// This function is called when helloBtn is clicked
function onMulBtnClicked() {
    // Find the messageDiv
    let answerField = document.getElementById("answerField");
    let number1 = document.getElementById("number1");
    let number2 = document.getElementById("number2");
    let answer = Number(number1.value) * Number(number2.value);
    // Set the contents of the div
    answerField.value = answer;
 }

 // This function is called when helloBtn is clicked
function onDivBtnClicked() {
    // Find the messageDiv
    let answerField = document.getElementById("answerField");
    let number1 = document.getElementById("number1");
    let number2 = document.getElementById("number2");
    let answer = Number(number1.value) / Number(number2.value);
    // Set the contents of the div
    answerField.value = answer;
 }

 // This function is called when clearBtn is clicked
function onClearBtnClicked() {
    // Find the messageDiv
    let messageDiv = document.getElementById("messageDiv");
    // Clear the contents of the div
    messageDiv.innerHTML = "";
 }
