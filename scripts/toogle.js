// additing toogle:


document.getElementById("second-index").style.display ="none";

document.getElementById("discover").addEventListener("click",function(){
    document.getElementById("first-index").style.display = "none";
    document.getElementById("second-index").style.display = "block";

})


document.getElementById("second").addEventListener("click",function(){
    document.getElementById("second-index").style.display = "none";
    document.getElementById("first-index").style.display = "block";

})