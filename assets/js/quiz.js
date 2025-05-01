// quiz.js

// ===========================
// Cybersecurity Quiz Logic
// ===========================

const questions = [
  // === Level 1: Basic Cybersecurity Vishing Awareness ===
  {
    question: "You receive a call from someone claiming to be IT support, asking for remote access. What should you do?",
    options: [
      "Give access to avoid delays",
      "Verify through official company channels before acting",
      "Tell them to call back later"
    ],
    correct: 1
  },
  {
    question: "A caller urgently requests employee records, claiming there’s a system outage. What’s the best response?",
    options: [
      "Share the records immediately",
      "Confirm the request with your manager or IT",
      "Ignore the caller"
    ],
    correct: 1
  },
  {
    question: "Why is it important to ask for a callback number and verify it before responding to a request?",
    options: [
      "To stall the attacker",
      "To appear compliant",
      "To independently verify the caller’s legitimacy"
    ],
    correct: 2
  },
  {
    question: "What’s a common sign that a voice-based scam (vishing) may be occurring?",
    options: [
      "The caller uses urgent or emotional language",
      "The caller knows your name",
      "The caller is polite"
    ],
    correct: 0
  },

  // === Level 2: Advanced Cybersecurity Best Practices ===
  {
    question: "A vendor calls with a last-minute change to payment account details. What should you do?",
    options: [
      "Update the info and process the payment",
      "Ask for written confirmation only",
      "Verify with the vendor and finance through known contacts"
    ],
    correct: 2
  },
  {
    question: "Your colleague gets a voicemail asking them to call back and confirm access credentials. What’s your advice?",
    options: [
      "Call the number just to check",
      "Report it to security and do not respond",
      "Text them to ask if it’s really them"
    ],
    correct: 1
  },
  {
    question: "Why is call spoofing dangerous in vishing attempts?",
    options: [
      "It lets attackers avoid detection",
      "It makes fake calls appear from legitimate numbers",
      "It slows down response times"
    ],
    correct: 1
  },
  {
    question: "Which control can reduce the risk of successful vishing?",
    options: [
      "Multi-factor authentication (MFA)",
      "Using more phone lines",
      "Weekly password changes"
    ],
    correct: 0
  }
];

let current = 0;
let score = 0;

function showQuestion() {
  const q = questions[current];
  document.getElementById("question").innerText = q.question;

  const answersDiv = document.getElementById("answers");
  answersDiv.innerHTML = "";
  q.options.forEach((option, i) => {
    const btn = document.createElement("button");
    btn.innerText = option;
    btn.classList.add("button");
    btn.onclick = () => checkAnswer(i);
    btn.disabled = false;
    answersDiv.appendChild(btn);
  });

  document.getElementById("quiz-feedback").innerHTML = "";

  let imagePath = "";
  if (current === 0) {
    imagePath = "assets/images/intro-split-alex.png";
  } else if (current >= 1 && current <= 4) {
    imagePath = "assets/images/level1-hero-vs-alex.png";
  } else if (current >= 5 && current < 8) {
    imagePath = "assets/images/level2-hero-vs-alex.png";
  }

  const imgEl = document.getElementById("quiz-image");
  if (imagePath) {
    imgEl.src = imagePath;
    imgEl.alt = "Quiz Comic Panel";
    imgEl.style.display = "block";
  } else {
    imgEl.style.display = "none";
  }
}

function checkAnswer(selected) {
  const q = questions[current];
  const feedback = document.getElementById("quiz-feedback");
  const buttons = document.querySelectorAll("#answers .button");

  // Disable all buttons after a choice
  buttons.forEach(btn => btn.disabled = true);

  if (selected === q.correct) {
    feedback.innerHTML = "✅ <strong>Correct!</strong>";
    score++;
  } else {
    feedback.innerHTML = "❌ <strong>Not quite.</strong> Always verify through proper channels.";
  }

  setTimeout(() => {
    current++;
    if (current === 4 && score < 4) {
      showLevel1Fail();
    } else if (current < questions.length) {
      showQuestion();
    } else {
      showResults();
    }
  }, 1500);
}

function showLevel1Fail() {
  document.getElementById("quiz-container").style.display = "none";
  document.getElementById("quiz-result").style.display = "block";
  document.getElementById("quiz-result").innerHTML = `
    <h2>Try Again!</h2>
    <p>You must get all Level 1 questions correct to move forward.</p>
    <img src="assets/images/level1-fail-hero-fumble.png" alt="Fail Comic Panel" class="quiz-panel" />
    <button onclick="restartQuiz()" class="button">Retry Level 1</button>
  `;
}

function showResults() {
  document.getElementById("quiz-container").style.display = "none";
  document.getElementById("quiz-result").style.display = "block";
  const passed = score === questions.length;

  document.getElementById("quiz-result").innerHTML = passed
    ? `
      <h2>Victory!</h2>
      <p>You passed both levels with a perfect score!</p>
      <img src="assets/images/quiz-victory-hero.png" alt="Victory Panel" class="quiz-panel" />
      <button onclick="restartQuiz()" class="button">Play Again</button>
    `
    : `
      <h2>Level 2 Failed</h2>
      <p>You didn’t get all questions correct. Try again to beat Alex!</p>
      <img src="assets/images/level2-fail-hero-fumble.png" alt="Fail Panel" class="quiz-panel" />
      <button onclick="restartQuiz()" class="button">Retry</button>
    `;
}

function restartQuiz() {
  current = 0;
  score = 0;
  document.getElementById("quiz-result").style.display = "none";
  document.getElementById("quiz-container").style.display = "block";
  showQuestion();
}

// Start the quiz on load
window.onload = showQuestion;
