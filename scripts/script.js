
// with function:

let workDone =0;
// frist button work:

document.getElementById("card-one").addEventListener("click", function (event) {
    event.preventDefault();
    alert("Board updated Successfully")

    getIDAndWorkDone("card-one")

     // set time to Active log:
       let currentTime = new Date().toLocaleTimeString();
       document.getElementById("notic-board-1").innerText = `you have completed the task Fix Mobile Button Issue at ${currentTime}`;
       workDone++;
       if (workDone ===6){
        alert("all the work is done");
       }
    

})

// second button work:

document.getElementById("card-two").addEventListener("click", function (event) {
    event.preventDefault();
    alert("Board updated Successfully")

    getIDAndWorkDone("card-two")

     // set time to Active log:
       let currentTime = new Date().toLocaleTimeString();
       document.getElementById("notic-board-2").innerText = `you have completed the task Fix Mobile Button Issue at ${currentTime}`;
       workDone++;
       if (workDone ===6){
        alert("all the work is done");
       }
    

})

// third button work:

document.getElementById("card-three").addEventListener("click", function (event) {
    event.preventDefault();
    alert("Board updated Successfully")

    getIDAndWorkDone("card-three")

     // set time to Active log:
       let currentTime = new Date().toLocaleTimeString();
       document.getElementById("notic-board-3").innerText = `you have completed the task Fix Mobile Button Issue at ${currentTime}`;
       workDone++;
       if (workDone ===6){
        alert("all the work is done");
       }
    

})

// four button work:

document.getElementById("card-four").addEventListener("click", function (event) {
    event.preventDefault();
    alert("Board updated Successfully")

    getIDAndWorkDone("card-four")

     // set time to Active log:
       let currentTime = new Date().toLocaleTimeString();
       document.getElementById("notic-board-4").innerText = `you have completed the task Fix Mobile Button Issue at ${currentTime}`;
       workDone++;
       if (workDone ===6){
        alert("all the work is done");
       }
    

})

// fifth button work:

document.getElementById("card-five").addEventListener("click", function (event) {
    event.preventDefault();
    alert("Board updated Successfully")

    getIDAndWorkDone("card-five")

     // set time to Active log:
       let currentTime = new Date().toLocaleTimeString();
       document.getElementById("notic-board-5").innerText = `you have completed the task Fix Mobile Button Issue at ${currentTime}`;
       workDone++;
       if (workDone ===6){
        alert("all the work is done");
       }
    

})

// sixth button work:

document.getElementById("card-six").addEventListener("click", function (event) {
    event.preventDefault();
    alert("Board updated Successfully")

    getIDAndWorkDone("card-six")

     // set time to Active log:
       let currentTime = new Date().toLocaleTimeString();
       document.getElementById("notic-board-6").innerText = `you have completed the task Fix Mobile Button Issue at ${currentTime}`;
       workDone++;
       if (workDone ===6){
        alert("all the work is done");
       }
    

})


// clear history btn: 

document.getElementById("clear-btn").addEventListener("click",function(event){
document.getElementById("hide-in-dom").style.visibility = "hidden"
// document.getElementById("clear-btn").classList.add("bg-gray-500");
document.getElementById("clear-btn").disabled = true;

})



// lets set the date by dinamically: 
let today = new Date();
    let months = [
      "January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];

    document.getElementById("simple-date").innerText =
      months[today.getMonth()] + " " + today.getDate() + " " + today.getFullYear();





  // // changing bg color by click a button:

  document.getElementById("color-btn").addEventListener("click",function(event){
  
    document.body.style.backgroundColor = "green";
   
    
    })




  // let isSkyBlue = true; // Track the state

  // document.getElementById("color-btn").addEventListener("click", function () {
  //     if (isSkyBlue) { 
     
  //         document.getElementById("h").style.backgroundColor = "skyblue";
  //     } else {
  //         document.getElementById("h").style.backgroundColor = "green";
  //     }
  //     isSkyBlue = !isSkyBlue; // Toggle the state
  // });












// //01. button one work:

// document.getElementById("card-one").addEventListener("click", function (event) {
//     event.preventDefault();
//     alert("Board updated Successfully")


//     const five = document.getElementById("six").innerText;
//     const convertedFive = parseFloat(five);
//     const sum = convertedFive - 1;
//     document.getElementById("six").innerText = sum;


//     const twentyThree = document.getElementById("twenty-three").innerText;
//     const convertedTwentyThree = parseFloat(twentyThree);
//     const value = convertedTwentyThree + 1;
//     document.getElementById("twenty-three").innerText = value;

 
//     // button disable:

//     document.getElementById("card-one").classList.add("bg-gray-500");
//     document.getElementById("card-one").disabled = true;

//        // set time to Active log:
//        let currentTime = new Date().toLocaleTimeString();
//        document.getElementById("notic-board-1").innerText = `you have completed the task Fix Mobile Button Issue at ${currentTime}`;
 
 
// })



// //02. button two work:

// document.getElementById("card-two").addEventListener("click", function (event) {
//     event.preventDefault();
//     alert("Board updated Successfully")


//     const five = document.getElementById("six").innerText;
//     const convertedFive = parseFloat(five);
//     const sum = convertedFive - 1;
//     document.getElementById("six").innerText = sum;


//     const twentyThree = document.getElementById("twenty-three").innerText;
//     const convertedTwentyThree = parseFloat(twentyThree);
//     const value = convertedTwentyThree + 1;
//     document.getElementById("twenty-three").innerText = value;

 
//     // button disable:

//     document.getElementById("card-two").classList.add("bg-gray-500");
//     document.getElementById("card-two").disabled = true;

//        // set time to Active log:
//        let currentTime = new Date().toLocaleTimeString();
//        document.getElementById("notic-board-2").innerText = `you have completed the task Fix Mobile Button Issue at ${currentTime}`;
 
 
// })




// //03. button three work:

// document.getElementById("card-three").addEventListener("click", function (event) {
//     event.preventDefault();
//     alert("Board updated Successfully")


//     const five = document.getElementById("six").innerText;
//     const convertedFive = parseFloat(five);
//     const sum = convertedFive - 1;
//     document.getElementById("six").innerText = sum;


//     const twentyThree = document.getElementById("twenty-three").innerText;
//     const convertedTwentyThree = parseFloat(twentyThree);
//     const value = convertedTwentyThree + 1;
//     document.getElementById("twenty-three").innerText = value;

 
//     // button disable:

//     document.getElementById("card-three").classList.add("bg-gray-500");
//     document.getElementById("card-three").disabled = true;

//        // set time to Active log:
//        let currentTime = new Date().toLocaleTimeString();
//        document.getElementById("notic-board-3").innerText = `you have completed the task Fix Mobile Button Issue at ${currentTime}`;
 
 
// })




// //04. button four work:

// document.getElementById("card-four").addEventListener("click", function (event) {
//     event.preventDefault();
//     alert("Board updated Successfully")


//     const five = document.getElementById("six").innerText;
//     const convertedFive = parseFloat(five);
//     const sum = convertedFive - 1;
//     document.getElementById("six").innerText = sum;


//     const twentyThree = document.getElementById("twenty-three").innerText;
//     const convertedTwentyThree = parseFloat(twentyThree);
//     const value = convertedTwentyThree + 1;
//     document.getElementById("twenty-three").innerText = value;

 
//     // button disable:

//     document.getElementById("card-four").classList.add("bg-gray-500");
//     document.getElementById("card-four").disabled = true;

//        // set time to Active log:
//        let currentTime = new Date().toLocaleTimeString();
//        document.getElementById("notic-board-4").innerText = `you have completed the task Fix Mobile Button Issue at ${currentTime}`;
 
 
// })
// //05. button five work:

// document.getElementById("card-five").addEventListener("click", function (event) {
//     event.preventDefault();
//     alert("Board updated Successfully")


//     const five = document.getElementById("six").innerText;
//     const convertedFive = parseFloat(five);
//     const sum = convertedFive - 1;
//     document.getElementById("six").innerText = sum;


//     const twentyThree = document.getElementById("twenty-three").innerText;
//     const convertedTwentyThree = parseFloat(twentyThree);
//     const value = convertedTwentyThree + 1;
//     document.getElementById("twenty-three").innerText = value;

 
//     // button disable:

//     document.getElementById("card-five").classList.add("bg-gray-500");
//     document.getElementById("card-five").disabled = true;

//        // set time to Active log:
//        let currentTime = new Date().toLocaleTimeString();
//        document.getElementById("notic-board-5").innerText = `you have completed the task Fix Mobile Button Issue at ${currentTime}`;
 
 
// })
// //06. button six work:

// document.getElementById("card-six").addEventListener("click", function (event) {
//     event.preventDefault();
//     alert("Board updated Successfully")


//     const five = document.getElementById("six").innerText;
//     const convertedFive = parseFloat(five);
//     const sum = convertedFive - 1;
//     document.getElementById("six").innerText = sum;


//     const twentyThree = document.getElementById("twenty-three").innerText;
//     const convertedTwentyThree = parseFloat(twentyThree);
//     const value = convertedTwentyThree + 1;
//     document.getElementById("twenty-three").innerText = value;

 
//     // button disable:

//     document.getElementById("card-six").classList.add("bg-gray-500");
//     document.getElementById("card-six").disabled = true;

//        // set time to Active log:
//        let currentTime = new Date().toLocaleTimeString();
//        document.getElementById("notic-board-6").innerText = `you have completed the task Fix Mobile Button Issue at ${currentTime}`;
 
 
// })




