function chooseOption(option) {
  const feedbackElement = document.getElementById("feedback");
  const step2 = document.getElementById("step2");

  let message = "";

  if (option === 'A') {
    message = "❌ <strong>Incorrect.</strong> Never grant remote access without verification!";
  } else if (option === 'B') {
    message = "✅ <strong>Good job.</strong> Always verify the identity through official channels.";
    step2.style.display = "block"; // Show next step
  } else if (option === 'C') {
    message = "⚠️ <strong>Neutral choice.</strong> Hanging up is safe, but don’t forget to report the call.";
  }

  feedbackElement.innerHTML = message;
}

function chooseStep2(choice) {
  const feedback2 = document.getElementById("step2-feedback");
  let message = "";

  if (choice === 'A') {
    message = "❌ <strong>Incorrect.</strong> Dropping internal names doesn’t prove legitimacy.";
  } else if (choice === 'B') {
    message = "✅ <strong>Perfect!</strong> Calling IT yourself ensures you're talking to the right person.";
  } else if (choice === 'C') {
    message = "✔️ <strong>Good thinking.</strong> It’s smart to ask for credentials, but still verify independently.";
  }

  feedback2.innerHTML = message;
  document.getElementById("step3").style.display = "block"; // Reveal Step 3
}

function chooseStep3(choice) {
  const feedback3 = document.getElementById("step3-feedback");
  const step4 = document.getElementById("step4");
  let message = "";

  if (choice === 'A') {
    message = "❌ <strong>Incorrect.</strong> Never approve access based on urgency alone.";
  } else if (choice === 'B') {
    message = "✔️ <strong>Good call.</strong> Stick to your protocol and don't let pressure sway you.";
    step4.style.display = "block"; // Show Step 4
  } else if (choice === 'C') {
    message = "✅ <strong>Excellent response.</strong> Reporting suspicious behavior protects everyone.";
    step4.style.display = "block"; // Show Step 4
  }

  feedback3.innerHTML = message;
}

function chooseStep4(choice) {
  const feedback4 = document.getElementById("step4-feedback");
  let message = "";

  if (choice === 'A') {
    message = "⚠️ <strong>Not ideal.</strong> If the account is compromised, replying could confirm it's active.";
  } else if (choice === 'B') {
    message = "✅ <strong>Great thinking!</strong> Always verify the source through technical headers or IT.";
  } else if (choice === 'C') {
    message = "❌ <strong>Risky move.</strong> Never act on unexpected instructions without verification.";
  }

  feedback4.innerHTML = message;
}

