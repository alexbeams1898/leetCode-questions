////// Event Listeners //////

// Difficulty selector
document
  .getElementById("difficulty")
  .addEventListener("change", filterDifficulty);

// Search questions
document.getElementById("search").addEventListener("input", filterItems);

////// Functions /////

// filterDifficulty
function filterDifficulty(e) {
  // Get selected difficulty
  var selection = e.target.value;
  var questions = document.querySelectorAll("#question");
  // Create switch statement that filters
  // questions based on user selection
  switch (selection) {
    case "easy":
      questions.forEach(function(question) {
        let difficulty = question.querySelector("#questionDifficulty")
          .innerHTML;
        if (difficulty.toUpperCase() == "EASY") {
          question.style.display = "block";
        } else {
          question.style.display = "none";
        }
      });
      break;
    case "medium":
      questions.forEach(function(question) {
        let difficulty = question.querySelector("#questionDifficulty")
          .innerHTML;
        if (difficulty.toUpperCase() == "MEDIUM") {
          question.style.display = "block";
        } else {
          question.style.display = "none";
        }
      });
      break;
    case "hard":
      questions.forEach(function(question) {
        let difficulty = question.querySelector("#questionDifficulty")
          .innerHTML;
        if (difficulty.toUpperCase() == "HARD") {
          question.style.display = "block";
        } else {
          question.style.display = "none";
        }
      });
      break;
    default:
      break;
  }
}

// filterSearch
function filterItems(e) {
  // Convert input text to lowercase
  var input = e.target.value.toLowerCase();
  // Get questions
  var questions = document.querySelectorAll("#question");
  // Convert to an Array
  Array.from(questions).forEach(function(question) {
    var questionName = question.querySelector("#questionName").innerHTML;
    if (questionName.toLowerCase().indexOf(input) != -1) {
      question.style.display = "block";
    } else {
      question.style.display = "none";
    }
  });
}
