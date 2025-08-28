const callDetails = [];
const heartClick = document.getElementsByClassName("heart-icon");
let count = 0;
for (let i = 0; i < heartClick.length; i++) {
    heartClick[i].addEventListener("click", function () {
        const updatedValue = document.getElementById("update-value-heart");
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

 const callDetailsContainer = document.getElementById("call-details-container");

const callClick = document.getElementsByClassName("call-btn");
for (let j = 0; j < callClick.length; j++) {

    callClick[j].addEventListener("click", function () {
        let coinValue = document.getElementById("update-value-coin");
        let coinValueElement = parseInt(coinValue.innerText);

        const data = {
            name : callAddress[j].innerText,
            number : callNumber[j].innerText,
            date : new Date().toLocaleTimeString()
        }
        callDetails.push(data);
        const div = document.createElement("div");
        div.innerHTML =`
         <div class="flex justify-around items-center ml-[20px] mr-[40px] font-semibold bg-[#f0f5fc] w-[330px] h-[72px] drop-shadow-sm rounded-md ... " id="call-info">
                <div class="side-left">
                    <p>${data.name}</p>
                    <p class=" text-gray-400">${data.number}</p>
                </div>

                <div class="side-right">
                    ${data.date}
                </div>

            </div>
        `;
        callDetailsContainer.appendChild(div)
        
        if (coinValueElement >= 20) {
            coinValueElement = coinValueElement - 20;
            coinValue.innerText = coinValueElement;
            alert("Calling " + callAddress[j].innerText + " " + callNumber[j].innerText + "...");
        }
        else if (coinValueElement < 20) {
            alert("You dont have sufficient coin, 20 coins are needed to call");
        }

    })
}

// Copy Section
const copyNumber = document.getElementsByClassName("copy-btn");
let count1 = 0;
for (let j = 0; j < copyNumber.length; j++) {
    copyNumber[j].addEventListener("click", function () {
        count1++;
        const totalCopy = document.getElementById("total-copy");
        totalCopy.innerText = count1 + " Copy";
        alert("Number has been copied " + callNumber[j].innerText);
    })
}

// Clear Section

