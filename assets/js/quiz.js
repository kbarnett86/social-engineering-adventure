const questions = [
    {
      question: "What should you do if someone calls claiming to be IT and asks for access?",
      options: [
        "Give access immediately to avoid delays",
        "Verify their identity through official channels",
        "Ignore the call completely"
      ],
      correct: 1
    },
    {
      question: "You receive an urgent email from your manager asking you to share access. What should you do?",
      options: [
        "Click and respond immediately",
        "Call your manager or IT to confirm",
        "Forward it to your coworkers"
      ],
      correct: 1
    },
    {
      question: "Why is asking for employee ID or IT ticket number helpful?",
      options: [
        "It gives attackers more info",
        "It proves you're suspicious",
        "It can help verify legitimacy"
      ],
      correct: 2
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
      answersDiv.appendChild(btn);
    });
  
    document.getElementById("quiz-feedback").innerHTML = "";
    document.getElementById("next-btn").style.display = "none";
  }
  
  function checkAnswer(selected) {
    const q = questions[current];
    const feedback = document.getElementById("quiz-feedback");
  
    if (selected === q.correct) {
      feedback.innerHTML = "✅ Correct!";
      score++;
    } else {
      feedback.innerHTML = "❌ Not quite. Remember to verify requests independently.";
    }
  
    document.getElementById("next-btn").style.display = "inline-block";
  }
  
  function nextQuestion() {
    current++;
    if (current < questions.length) {
      showQuestion();
    } else {
      showResults();
    }
  }
  
  function showResults() {
    document.getElementById("quiz-container").style.display = "none";
    document.getElementById("quiz-result").style.display = "block";
    document.getElementById("quiz-result").innerHTML = `
      <h3>Quiz Complete!</h3>
      <p>You scored ${score} out of ${questions.length}.</p>
    `;
  }
  
  window.onload = showQuestion;
  