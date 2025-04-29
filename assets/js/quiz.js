// -------------------------------------------
// Social Engineering Awareness Quiz Script
// -------------------------------------------

// Array of quiz questions
// Each object includes: question text, answer options, and the correct answer index
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
      question: "Why is asking for an employee ID or IT ticket number helpful?",
      options: [
        "It gives attackers more info",
        "It proves you're suspicious",
        "It can help verify legitimacy"
      ],
      correct: 2
    },
    {
      question: "You receive a call about a payroll issue. They ask for your employee ID. What should you do?",
      options: [
        "Provide your ID to help resolve the issue",
        "Ask for their extension and call HR to verify",
        "Ask for a callback in an hour"
      ],
      correct: 1
    },
    {
      question: "What's a common sign of a phishing email?",
      options: [
        "It comes from a coworker",
        "It asks you to update credentials urgently",
        "It's formatted perfectly and has no typos"
      ],
      correct: 1
    },
    {
      question: "A caller says they're with your IT provider and want to run diagnostics. You weren't expecting this. What's the best next step?",
      options: [
        "Give them temporary access",
        "Ask who their supervisor is",
        "Hang up and report the call to your IT/security team"
      ],
      correct: 2
    },
    {
      question: "Why do attackers often use urgent or emotional language?",
      options: [
        "To make the message more entertaining",
        "To bypass your logical thinking and get quick compliance",
        "To educate you about cybersecurity"
      ],
      correct: 1
    },
    {
      question: "You get a text that says your password expired. There’s a link to reset it. What should you do?",
      options: [
        "Click the link before time runs out",
        "Call your IT department to verify the message",
        "Forward the text to coworkers to warn them"
      ],
      correct: 1
    },
    {
      question: "What should you do if you suspect a coworker has been targeted by a scam?",
      options: [
        "Let them figure it out",
        "Notify IT/security and offer to help",
        "Post about it on your personal social media"
      ],
      correct: 1
    },
    {
      question: "Why is it important to verify instructions sent via email or phone?",
      options: [
        "To show you're detail-oriented",
        "Because messages can be spoofed",
        "So your boss doesn’t get mad"
      ],
      correct: 1
    }
  ];
  
  // Track the current question index and score
  let current = 0;
  let score = 0;
  
  // Function to display the current question and answer buttons
  function showQuestion() {
    const q = questions[current];
    document.getElementById("question").innerText = q.question;
  
    const answersDiv = document.getElementById("answers");
    answersDiv.innerHTML = ""; // Clear old answers
  
    // Create a button for each answer option
    q.options.forEach((option, i) => {
      const btn = document.createElement("button");
      btn.innerText = option;
      btn.classList.add("button");
      btn.onclick = () => checkAnswer(i); // Check answer when clicked
      answersDiv.appendChild(btn);
    });
  
    // Clear feedback and hide "Next" button
    document.getElementById("quiz-feedback").innerHTML = "";
    document.getElementById("next-btn").style.display = "none";
  }
  
  // Function to check whether the selected answer is correct
  function checkAnswer(selected) {
    const q = questions[current];
    const feedback = document.getElementById("quiz-feedback");
  
    if (selected === q.correct) {
      feedback.innerHTML = "✅ <strong>Correct!</strong>";
      score++;
    } else {
      feedback.innerHTML = "❌ <strong>Not quite.</strong> Always verify through proper channels.";
    }
  
    // Reveal the "Next" button after selection
    document.getElementById("next-btn").style.display = "inline-block";
  }
  
  // Function to go to the next question or show results
  function nextQuestion() {
    current++;
    if (current < questions.length) {
      showQuestion();
    } else {
      showResults();
    }
  }
  
  // Function to show the final quiz result
  function showResults() {
    document.getElementById("quiz-container").style.display = "none";
    document.getElementById("quiz-result").style.display = "block";
    document.getElementById("quiz-result").innerHTML = `
      <h2>Quiz Complete!</h2>
      <p>You scored ${score} out of ${questions.length}.</p>
      <p>${score >= 8 ? "🎉 Great job! You’ve got sharp instincts!" : "🧐 Keep practicing and stay alert!"}</p>
    `;
  }
  
  // Start the quiz
  showQuestion();
  