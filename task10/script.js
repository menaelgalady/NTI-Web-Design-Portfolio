function runCard1() {
  let name = prompt("Enter your name:");
  let age = prompt("Enter your age:");
  let isActive = prompt("Are you active? (yes/no)");

  if (isActive && isActive === "yes") {
    isActive = true;
  } else {
    isActive = false;
  }

  alert("Name: " + name + "\nAge: " + age + "\nActive: " + isActive);
}

function runCard2() {
  let age = prompt("Enter your age:");

  let sum = 5 + 3;
  let isAdult = age >= 18;
  let isValid = true && false;

  alert(
    "Results:\n" +
    "5 + 3 = " + sum + "\n" +
    "age >= 18 = " + isAdult + "\n" +
    "true && false = " + isValid
  );
}


function runCard3() {
  let age = prompt("Enter your age:");

  if (age >= 18) {
    alert("Adult");
  } else {
    alert("Minor");
  }
}

function runCard4() {
  let output = "For loop:\n";
  for (let i = 0; i < 5; i++) {
    output += "Count " + i + "\n";
  }

  output += "\nWhile loop\n";
  let x = 5;
  while (x > 0) {
    output += x + "\n";
    x--;
  }

  alert(output);
}

function runCard5() {
    let name = prompt("Enter your name:");
  function greet(name) {
    return "Hello " + name;
  }

  let message = greet("mena");
  alert(message);
}


function runCard6() {
  let day = prompt("Enter a day number (1-7):");
  if (day == 1) {
    alert("saturday");
  } else if (day == 2) {
    alert("sunday");
  } else if (day == 3) {
    alert("monday");
  } else if (day == 4) {
    alert("tuesday");
  } else if (day == 5) {
    alert("wednesday");
  } else if (day == 6) {
    alert("thursday");
  } else if (day == 7) {
    alert("friday");
  } else {
     alert("Other day");
  }
}
