var email = document.getElementById("email");
var pass = document.getElementById("pass");
var btnSubmit = document.getElementById("btnSubmit");

var errText1 = document.querySelector(".errText-1");
var errText2 = document.querySelector(".errText-2");
var errText3 = document.querySelector(".errText-3");
var errText4 = document.querySelector(".errText-4");

var errImage1 = document.querySelector(".image-1");
var errImage2 = document.querySelector(".image-2");
var errImage3 = document.querySelector(".image-3");
var errImage4 = document.querySelector(".image-4");

function regValidation() {
  if (email.value == "") {
    alert("Enter email");
    return false;
  }
  return true;
}

pass.addEventListener("input", function () {
  var value = pass.value;

  if (/^[0-9]+$/.test(value)) {
    errImage1.innerHTML = "&#10003;";
    errText1.innerHTML = "You have entered only numbers.";
  
  } else if (/^[a-zA-Z]+$/.test(value)) {
    errImage2.innerHTML = "&#10003;";
    errText2.innerHTML = "You have entered only letters.";
   
  } else if (/[0-9]/.test(value) && /[a-zA-Z]/.test(value)) {
    errImage3.innerHTML = "&#10003;";
    errText3.innerHTML = "You have entered a mix of numbers and letters.";
   
  } else {

  }
});

pass.addEventListener('focus', function () {
  errText1.innerHTML = "Enter numbers.";
  errImage1.innerHTML = "&#46;";
  errText2.innerHTML = "Enter characters.";
  errImage1.innerHTML = "&#46;";
 
});

// pass.addEventListener("change", function () {
//   errText1.innerHTML = "";
//   errText2.innerHTML = "";
//   errText3.innerHTML = "";
//   errImage1.src = "";
//   errImage2.src = "";
//   errImage3.src = "";
// });

btnSubmit.addEventListener('click', function (event) {
  event.preventDefault();
  if (regValidation()) {
    alert("Form submitted successfully!");
  }
});
