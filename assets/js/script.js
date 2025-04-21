function chooseOption(option) {
  const feedbackElement = document.getElementById("feedback");
  let message = "";

  if (option === 'A') {
    message = "❌ <strong>Incorrect.</strong> Never grant remote access without verification!";
  } else if (option === 'B') {
    message = "✅ <strong>Good job.</strong> Always verify the identity through official channels.";
  } else if (option === 'C') {
    message = "⚠️ <strong>Neutral choice.</strong> Hanging up is safe, but don’t forget to report the call.";
  }

  feedbackElement.innerHTML = message;
}
