function runOperation(type) {
  let result = "";

  switch (type) {
    case "Array":
      let numbers = [10, 20, 30, 40, 50];
      let original = [...numbers];

      numbers.push(60);
      let afterPush = [...numbers];

      numbers.pop();
      let afterPop = [...numbers];

      let doubled = numbers.map(n => n * 2);
      let filtered = numbers.filter(n => n > 25);
      let sum = numbers.reduce((acc, cur) => acc + cur, 0);
      let avg = (sum / numbers.length).toFixed(2);

      result =
`ARRAY OPERATIONS -
Original array: [${original.join(", ")}]

After push(60): [${afterPush.join(", ")}]

After pop(): [${afterPop.join(", ")}] (removed 60)

Doubled values: [${doubled.join(", ")}]

Numbers > 25: [${filtered.join(", ")}]

Sum of numbers: ${sum}
Average: ${avg}`;
      break;

    case "String":
      let text = "The quick brown fox jumps over the lazy dog. JavaScript is awesome!";
      result =
`STRING OPERATIONS -

Original text: "${text}"

Uppercase: ${text.toUpperCase()}

Lowercase: ${text.toLowerCase()}

Index of 'fox': ${text.indexOf("fox")}

Includes "JavaScript"? ${text.includes("JavaScript")}

Substring (4-19): "${text.substring(4, 19)}"

Split by spaces: ${JSON.stringify(text.split(" "))}

Replace 'fox' with 'cat': ${text.replace("fox", "cat")}`;
      break;

    case "Object":
      let person = {
        name: "Alice",
        age: 30,
        address: {
          street: "123 Main St",
          city: "Techville"
        },
        hobbies: ["reading", "hiking"]
      };

      let originalObj = JSON.stringify(person, null, 2);


      let name = person.name;
      let city = person.address.city;


      person.age = 31;
      person.address.city = "Techwillle";
      let modifiedObj = JSON.stringify(person, null, 2);

      result =
`OBJECT OPERATIONS ---

Original object:
${originalObj}

Name: ${name}
City: ${city}

After modifications:
${modifiedObj}`;
      break;

    case "Function":
      function square(x) { return x * x; }
      function cube(x) { return x * x * x; }
      const double = (x) => x * 2;

      function applyOperation(num, operation) {
        return operation(num);
      }

      function createCounter() {
        let count = 0;
        return function() {
          count++;
          return count;
        }
      }
      let counter = createCounter();
      let counts = [counter(), counter(), counter()];

      result =
`FUNCTION OPERATIONS
square(5): ${square(5)}
cube(3): ${cube(3)}
double(8): ${double(8)}
applyOperation(4, square): ${applyOperation(4, square)}
Counter: ${counts.join(", ")}`;
      break;

    default:
      result = "Operation not implemented yet!";
  }

  alert(result);
}

