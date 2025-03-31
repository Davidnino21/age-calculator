//Selecting the button element
const button = document.querySelector("button");

// Selecting the input element with id "birthday"
const birthdayEl = document.getElementById("birthday");

// Selecting the element with id "result" where age will be displayed
const resultEl = document.getElementById("result");

// Function to calculate age based on the entered birthday
function calculateAge() {
  const birthdayValue = birthdayEl.value;

  // Checking if the birthday value is empty
  if (birthdayValue === "") {
    alert("Please enter your birthday");
  } else {
    // Calculating age using the getAge function
    const age = getAge(birthdayValue);

    // Displaying the calculated age in the result element
    resultEl.innerText = `Your age is ${age} ${age > 1 ? "years" : "year"} old`;
  }
}

// Function to calculate age based on the provided birth date
function getAge(birthdayValue) {
  const today = new Date();
  const birthDate = new Date(birthdayValue);
  let age = today.getFullYear() - birthDate.getFullYear();
  const month = today.getMonth() - birthDate.getMonth();

  // Adjusting age calculation based on month and date comparison
  if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return age;
}

// Adding an event listener to the button element to trigger age calculation
button.addEventListener("click", calculateAge);
