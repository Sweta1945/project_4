function handleButtonClick(val) {
    var inputField = document.querySelector(".input"); // Assuming you have an input field with the class 'input'
    inputField.value += val;
  }
  function handlePlusClick() {
    var inputField = document.querySelector(".input");
    inputField.value += '+';
  }
  
  function handleMinusClick() {
    var inputField = document.querySelector(".input");
    inputField.value += '-';
  }
  
  function handleDeleteClick() {
    var inputField = document.querySelector(".input");
    // Remove the last character from the input
    inputField.value = inputField.value.slice(0, -1);
  }
  
  function handleDivideClick() {
    var inputField = document.querySelector(".input");
    inputField.value += '/';
  }
  function handleMultiplyClick(operator) {
    var inputField = document.querySelector(".input");
    inputField.value += '*';
  }
  
  
  function handleResetClick() {
    var inputField = document.querySelector(".input");
    inputField.value = '';
  }
  function handleDotClick() {
    var inputField = document.querySelector(".input");
    var inputValue = inputField.value;
  
    // Check if the current input already contains a dot
    if (!inputValue.includes('.')) {
      // If not, add a dot to the input
      inputField.value += '.';
    }
  }
  
  /* imporntant to note: The calculation happens in the handleEqualsClick function. This function uses the JavaScript
   eval() function to evaluate the mathematical expression entered in the input field and 
   then displays the result in the input field.*/
  function handleEqualsClick() {
    var inputField = document.querySelector(".input");
    var inputValue = inputField.value;
  
    try {
      // Use eval() to evaluate the expression
      var result = eval(inputValue);
  
      // Set the input field value to the result
      inputField.value = result;
    } catch (error) {
      // Handle any potential errors, e.g., division by zero
      inputField.value = "Error";
    }
  }
    

/*
In summary, this JavaScript code listens for input in an input field, filters out invalid characters
 based on a regular expression pattern, and updates the input field with only the valid characters while preventing the entry of invalid characters. 
This provides a way to allow only numbers and specified operators in the input field.
*/
document.querySelector(".input").addEventListener("input", function (event) {
    // Get the input element's value
    var inputValue = this.value;
  
    // Use a regular expression to check if the entered character is a number or an allowed operator
    var validCharacter = /^[\d+\-*/]$/;
  
    // Create a new string to store the filtered input
    var newStr= "";
  
    // Iterate through each character in the input and check if it's valid
    for (var i = 0; i < inputValue.length; i++) {
      if (validCharacter.test(inputValue[i])) {
        // If it's a valid character, add it to the filtered input
        newStr+= inputValue[i];
      }
    }
  
    // Set the input value to the filtered input
    this.value = newStr;
  
   // Finally, we call event.preventDefault() to prevent the default behavior of the input event, which would insert the invalid characters into the input field. This ensures that only valid characters are displayed in the input field.
    event.preventDefault();
  });
  