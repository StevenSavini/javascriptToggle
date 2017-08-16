let button = document. querySelector("button");
// let isRed = false;

// button.addEventListener("click", function(){
//   if(isRed){
//     document.body.style.background = "white";
//       isRed = false;
//   }
//   else {
//     document.body.style.background = "red";
//     isRed = true;
//   }
// })

button.addEventListener("click", function(){
  document.body.classList.toggle("red");
});
