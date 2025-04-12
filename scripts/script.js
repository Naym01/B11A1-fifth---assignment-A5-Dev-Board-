document.getElementById("card-one").addEventListener("click", function (event) {
    event.preventDefault();
    alert("Board updated Successfully")


    const five = document.getElementById("six").innerText;
    const convertedFive = parseFloat(five);
    const sum = convertedFive - 1;
    document.getElementById("six").innerText = sum;


    const twentyThree = document.getElementById("twenty-three").innerText;
    const convertedTwentyThree = parseFloat(twentyThree);
    const value = convertedTwentyThree + 1;
    document.getElementById("twenty-three").innerText = value;

    // set time to Active log:
    let currentTime = new Date().toLocaleTimeString();
    document.getElementById("notic-board-1").innerText = `you have completed the task Fix Mobile Button Issue at ${currentTime}`;

    // button disable:
    // document.getElementById("card-one").style.bg-color = gray;
    document.getElementById("card-one").classList.add("bg-gray-500");
    document.getElementById("card-one").disabled = true;

    alert("Board updated Successfully!");
 






})