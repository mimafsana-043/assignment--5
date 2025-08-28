const heartClick = document.getElementsByClassName("heart-icon");
let count = 0;
for(let i=0; i<heartClick.length; i++){
    heartClick[i].addEventListener("click",function(){
        const updatedValue = document.getElementById("update-value-heart")
        count++;
        updatedValue.innerText = count;
    })
}

// call section
const callAddress = document.getElementsByClassName("card-para");
for (let j = 0; j < callAddress.length; j++) {
   callAddress[j];
}
const callNumber = document.getElementsByClassName("call-number");
for (let j = 0; j < callNumber.length; j++) {
   callNumber[j];
}
const callClick = document.getElementsByClassName("call-btn");
for (let j = 0; j < callClick.length; j++) {
    callClick[j].addEventListener("click", function () {
        alert("Calling " + callAddress[j].innerText + " " + callNumber[j].innerText + "...");
    })
}

// Copy Section
const copyNumber = document.getElementsByClassName("copy-btn");
let count1 = 0;
for (let j = 0; j < copyNumber.length; j++) {
   copyNumber[j].addEventListener("click",function(){
        count1++;
        const totalCopy = document.getElementById("total-copy");
        totalCopy.innerText = count1 + " Copy";
   })
}

