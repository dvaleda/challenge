const questions = [
  // Geography and Flags
  { question: "Which country has this flag?", image: "assets/flags/brazil.png", answer: "brazil" },
  { question: "What is the capital of Australia?", image: "", answer: "canberra" },
  
  // Landmarks
  { question: "Where is the Colosseum located?", image: "assets/landmarks/colosseum.png", answer: "rome" },
  { question: "What country is known for Machu Picchu?", image: "", answer: "peru" },

  // Math Challenges
  { question: "Solve: (7 × 8) - 14 =", image: "", answer: "42" },
  { question: "What is the square root of 144?", image: "", answer: "12" },

  // Memory Game Challenge (Simulated)
  { question: "Remember this number: 8453. What was it?", image: "", answer: "8453" },

  // Science Questions
  { question: "Which planet is closest to the sun?", image: "", answer: "mercury" },
  { question: "What element has the chemical symbol 'Au'?", image: "", answer: "gold" },

  // History
  { question: "Who was the first president of the USA?", image: "", answer: "george washington" },
  { question: "In which year did World War II end?", image: "", answer: "1945" },
  // Logic Puzzles
  { question: "Which number comes next in the sequence: 1, 1, 2, 3, 5, 8, ___?", image: "", answer: "13" },

  // Triathlon Questions
  { question: "What is the swim distance in an Olympic triathlon?", image: "", answer: "1500m" },
  { question: "How many transition zones are there in a triathlon?", image: "", answer: "2" },

  // Bonus Challenge - Hardest
  { question: "Decode this cipher: ‘URYYB’ (ROT13)", image: "", answer: "hello" },
];

let currentQuestion = 0;
let lives = 5;
let xp = 0;

// Load the question
function loadQuestion() {
  if (currentQuestion >= questions.length) {
    document.querySelector("#question-container").innerHTML = "<h2>You Won! Renew Your Subscription Now!</h2>";
    return;
  }
 const q = questions[currentQuestion];
  document.querySelector("#question").textContent = q.question;

  if (q.image) {
    const img = document.querySelector("#image");
    img.src = q.image;
    img.style.display = "block";
  } else {
    document.querySelector("#image").style.display = "none";
  }

  document.querySelector("#answer").value = "";
  document.querySelector("#result").textContent = "";
}

// Submit the answer
function submitAnswer() {
  const userAnswer = document.querySelector("#answer").value.trim().toLowerCase();
  const correctAnswer = questions[currentQuestion].answer.toLowerCase();

  if (userAnswer === correctAnswer) {
    xp += 10;
    currentQuestion++;
    updateXP();
    loadQuestion();
  } else {
    lives--;
    updateLives();
    document.querySelector("#result").textContent = "Incorrect! Try again.";
 if (lives === 0) {
      document.querySelector("#question-container").innerHTML = "<h2>Game Over. Try Again!</h2>";
    }
  }
}

// Update XP bar and lives
function updateXP() {
  const xpBar = document.querySelector("#xp-fill");
  xpBar.style.width = ${xp}%;
}

function updateLives() {
  const livesDisplay = "❤".repeat(lives);
  document.querySelector("#lives").textContent = livesDisplay;
}

window.onload = loadQuestion;
