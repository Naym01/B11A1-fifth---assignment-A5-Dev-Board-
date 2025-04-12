
function getIDAndWorkDone(id){ 
const five = document.getElementById("six").innerText;
const convertedFive = parseFloat(five);
const sum = convertedFive - 1;
document.getElementById("six").innerText = sum;


const twentyThree = document.getElementById("twenty-three").innerText;
const convertedTwentyThree = parseFloat(twentyThree);
const value = convertedTwentyThree + 1;
document.getElementById("twenty-three").innerText = value;


// button disable:

document.getElementById(id).classList.add("bg-gray-500");
document.getElementById(id).disabled = true;
}



 