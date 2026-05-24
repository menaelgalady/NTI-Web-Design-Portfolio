const tasks = [
  { id: 1, title: "Finish homework", priority: "HIGH", status: "Pending" },
  { id: 2, title: "Buy groceries", priority: "LOW", status: "Completed" },
  { id: 3, title: "Update documentation", priority: "MEDIUM", status: "Pending" },
  { id: 4, title: "Team meeting", priority: "HIGH", status: "Completed" },
  { id: 5, title: "DDD", priority: "MEDIUM", status: "Pending" },
  { id: 6, title: "Call friend", priority: "LOW", status: "Pending" }
];

function formatTask(t) {
  const isDone = t.status.toLowerCase() === "completed";
  const mark = isDone ? "✅" : "✗";

  return `ID: ${t.id}
Title: ${t.title}
Priority: ${t.priority.toUpperCase()}
Status: ${mark} ${isDone ? "Completed" : "Pending"}`;
}

function viewTasks() {
  if (!tasks.length) return alert("No tasks found.");

  const msg = tasks
    .slice() 
    .sort((a, b) => a.id - b.id) 
    .map(formatTask) 
    .join("\n---------------------\n");

  alert(msg);
}

function addTask() {
  const title = prompt("Enter task title:");
  if (!title) return alert("Task not added (title required).");

  const priority = prompt("Enter priority (low/medium/high):", "low");
  if (!priority) return alert("Task not added (priority required).");


  const status = prompt("Enter status (pending/completed):", "pending");
  if (!status) return alert("Task not added (status required).");

  const newTask = {

    id: tasks.length ? Math.max(...tasks.map(t => t.id)) + 1 : 1,
    title: title,
    priority: priority.toUpperCase(),
    status: status.charAt(0).toUpperCase() + status.slice(1).toLowerCase()
  };

  
  tasks.push(newTask);

  alert(" Task added successfully!\n\n" + formatTask(newTask));
  viewTasks();
}

function completeTask() {
  if (!tasks.length) return alert("No tasks found.");

  const task = tasks[tasks.length - 1];

  if (task.status.toLowerCase() === "completed") {
    return alert(" Last task is already completed.\n\n" + formatTask(task));
  }

  task.status = "Completed";

  alert(" Last task marked as completed!\n\n" + formatTask(task));
}

function deleteTask() {
  if (!tasks.length) return alert("No tasks found to delete.");

  const msg = tasks
    .slice()
    .sort((a, b) => a.id - b.id)
    .map(formatTask)
    .join("\n---------------------\n");

  alert(" Current Tasks:\n\n" + msg);
  const id = +prompt("Enter the ID of the task to delete:");
  const index = tasks.findIndex(t => t.id === id);
  if (index === -1) return alert(" Task not found.");
  tasks.splice(index, 1);
  alert(" Delete successful!");
}

function taskStats() {
  const total = tasks.length;
  const completed = tasks.filter(t => t.status.toLowerCase() === "completed").length;
  const completedPercent = total ? ((completed / total) * 100).toFixed(0) : 0;
  const pending = tasks.filter(t => t.status.toLowerCase() === "pending").length;
  const highPriority = tasks.filter(t => t.priority.toLowerCase() === "high").length;
  const msg = 
`TASK STATISTICS
Total Tasks: ${total}
Completed: ${completed} (${completedPercent}%)
High Priority: ${highPriority}
Pending: ${pending}`;
  alert(msg);
}

const recipes = [
  {
    id: 1,
    name: "Chicken Curry",
    cuisine: "Indian",
    cookingTime: "45 minutes",
    ingredients: ["chicken", "curry powder", "coconut milk", "onion", "garlic"],
    instructions: ["Sauté onions", "Add chicken", "Add spices", "Simmer in coconut milk"]
  },
  {
    id: 2,
    name: "Spaghetti Bolognese",
    cuisine: "Italian",
    cookingTime: "60 minutes",
    ingredients: ["spaghetti", "ground beef", "tomato sauce", "garlic", "olive oil"],
    instructions: ["Cook spaghetti", "Prepare sauce", "Mix pasta with sauce"]
  }
];

function formatRecipe(r) {
  return `ID: ${r.id}
Name: ${r.name}
Cuisine: ${r.cuisine}
Cooking Time: ${r.cookingTime}
Ingredients: ${r.ingredients.join(", ")}
Instructions:
${r.instructions.map((step, i) => (i + 1) + ". " + step).join("\n")}`;
}


function viewRecipes() {
  if (!recipes.length) return alert("No recipes found.");

  const msg = recipes
    .map(formatRecipe)
    .join("\n---------------------\n");

  alert(" ALL RECIPES \n\n" + msg);
}

function addRecipe() {
  const name = prompt("Enter recipe name:");
  if (!name) return alert("Recipe not added (name required).");

  const cuisine = prompt("Enter cuisine type:", "International");
  if (!cuisine) return alert("Recipe not added (cuisine required).");

  const cookingTime = prompt("Enter cooking time:", "30 minutes");
  if (!cookingTime) return alert("Recipe not added (cooking time required).");

  const ingredientsInput = prompt("Enter ingredients (comma separated):");
  if (!ingredientsInput) return alert("Recipe not added (ingredients required).");
  const ingredients = ingredientsInput.split(",").map(i => i.trim());

  const instructionsInput = prompt("Enter instructions (comma separated):");
  if (!instructionsInput) return alert("Recipe not added (instructions required).");
  const instructions = instructionsInput.split(",").map(i => i.trim());

  const newRecipe = {
    id: recipes.length ? Math.max(...recipes.map(r => r.id)) + 1 : 1,
    name: name,
    cuisine: cuisine,
    cookingTime: cookingTime,
    ingredients: ingredients,
    instructions: instructions
  };

  recipes.push(newRecipe);

  alert(" Recipe added successfully!\n\n" + formatRecipe(newRecipe));
}

function searchRecipes() {
  const searchName = prompt("Enter recipe name to search:")?.trim().toLowerCase();
  if (!searchName) return alert(" Search cancelled.");

  const found = recipes.filter(r => r.name.toLowerCase().includes(searchName));

  if (found.length === 0) {
    alert(" No recipe found with that name.");
  } else {
    const msg = found.map(formatRecipe).join("\n---------------------\n");
    alert(" SEARCH RESULTS \n\n" + msg);
  }
}

function randomRecipe() {
  if (!recipes.length) return alert("No recipes available.");

  const randomIndex = Math.floor(Math.random() * recipes.length);
  const recipe = recipes[randomIndex];

  alert(" RANDOM RECIPE \n\n" + formatRecipe(recipe));
}