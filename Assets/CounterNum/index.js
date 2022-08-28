let displayNumber = document.getElementById("display");
let addNumber = document.getElementById("add");
let resetNumber = document.getElementById("reset");

const addNum = () => {
  let counter_Number = displayNumber.innerHTML;
  displayNumber.innerHTML = parseInt(counter_Number) + 1;
};

const resetNum = () => {
  displayNumber.innerHTML = 0;
};

addNumber.addEventListener("click", addNum);
resetNumber.addEventListener("click", resetNum);
