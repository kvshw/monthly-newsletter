// let input = document.getElementById("email-input");
// let submit = document.getElementById("email-submit");

// const validate = () => {
//   var input = document.getElementById("emailInput").value;
//   var regx = /^([a-z0-9._]+)@([a-z0-9-]+\.)*([a-z0-9-]+\.[a-z]+)$/;
//   var error = document.getElementById("error-message");

//   if (regx.test(input)) {
//     alert("Provided a valid email");
//     return true;
//   } else {
//     return (
//       input.classList.add("border-[#ff0000]  bg-[#ff0000]"),
//       (error.textContent = "Valid email required")
//     );
//   }
// };

const validate = () => {
  var input = document.getElementById("emailInput");
  var value = input.value;
  var regx = /^([a-z0-9._]+)@([a-z0-9-]+\.)*([a-z0-9-]+\.[a-z]+)$/;
  var error = document.getElementById("error-message");
  var popup = document.getElementById("popup-display");

  if (regx.test(value)) {
    popup.classList.remove("hidden");

    return true;
  } else {
    input.classList.add("border-red-500", "bg-[#ffe8e6]");
    error.textContent = "Valid email required";
    return false;
  }
};
const dismissFunction = () => {
  var error = document.getElementById("error-message");
  var input = document.getElementById("emailInput");
  var popup = document.getElementById("popup-display");
  popup.classList.add("hidden");
  input.value = "";
  input.classList.remove("border-red-500", "bg-[#ffe8e6]");
  error.textContent = "";
};
