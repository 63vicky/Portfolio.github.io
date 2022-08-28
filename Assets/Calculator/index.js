let btns = document.querySelectorAll(".btn");
let display = document.getElementById("display");
let displayValue = "";
// btns.addEventListener("click", numbersClicked);

btns.forEach((button) => {
  button.addEventListener("click", () => {
    buttonText = button.innerText;
    // buttonText.toLocaleString("en");
    
    if(display.innerHTML == "0" && buttonText == "="){
      buttonText = "0";
      display.innerHTML = buttonText;
    }
    if(display.innerHTML == "0" && buttonText == "CE"){
      buttonText = "0";
      display.innerHTML = buttonText;
    }
    if (buttonText == "X") {
      buttonText = "*";
      display.innerHTML += buttonText;
    }
    if (display.innerHTML === "0") {
      display.innerHTML = "";
      displayValue = buttonText;
      display.innerHTML = displayValue;
    } else if (buttonText == "=") {
      displayValue = eval(displayValue);
      

      display.innerHTML = displayValue;
    } else if (buttonText == "CE") {
      displayValue = display.innerHTML.slice(0, -1);
      display.innerHTML = displayValue;

      if(display.innerHTML == ""){
        displayValue = "0";
        display.innerHTML = displayValue;
      }

    } else {
      displayValue += buttonText;
      display.innerHTML = displayValue;
    }
    if (buttonText == "AC") {
      displayValue = "0";
      display.innerHTML = displayValue;
    }
  });
});
