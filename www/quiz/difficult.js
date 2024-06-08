$(document).ready(function() {
    var questions = [
      {
        question: "What is the main muscle used during a Turkish Get-Up exercise?",
        choices: ["Quadriceps", "Deltoids", "Glutes", "Core muscles"],
        correctAnswer: 3
      },
      {
        question: "What is the correct breathing pattern for a powerlifter performing a heavy deadlift?",
        choices: ["Exhale on the way up, inhale on the way down", "Inhale on the way up, exhale on the way down", "Hold breath throughout the lift", "Inhale and exhale rhythmically throughout the lift"],
        correctAnswer: 2
      },
      {
        question: "What is the proper grip width for a bench press to target the triceps more?",
        choices: ["Narrow grip", "Wide grip", "Standard grip", "Overhand grip"],
        correctAnswer: 0
      },
      {
        question: "What is the recommended rep range for hypertrophy training?",
        choices: ["1-5 reps", "6-12 reps", "15-20 reps", "More than 20 reps"],
        correctAnswer: 1
      },
      {
        question: "Which exercise primarily targets the teres major muscle?",
        choices: ["Bent-over rows", "Front raises", "Side lateral raises", "Lateral pulldowns"],
        correctAnswer: 3
      },
      {
        question: "What is the purpose of the Valsalva maneuver during heavy lifting?",
        choices: ["To increase oxygen intake", "To prevent dizziness", "To stabilize the spine", "To improve flexibility"],
        correctAnswer: 2
      },
      {
        question: "Which exercise requires the most coordination and balance?",
        choices: ["Deadlifts", "Overhead squats", "Kettlebell swings", "Leg presses"],
        correctAnswer: 1
      },
      {
        question: "What is the primary muscle worked during a dragon flag exercise?",
        choices: ["Abs", "Obliques", "Pectorals", "Glutes"],
        correctAnswer: 0
      },
      {
        question: "What is the purpose of plyometric training?",
        choices: ["To increase flexibility", "To improve muscular endurance", "To enhance power and explosiveness", "To decrease heart rate"],
        correctAnswer: 2
      },
      {
        question: "Which exercise primarily targets the serratus anterior muscle?",
        choices: ["Push-ups", "Chest flies", "Deadlifts", "Lateral raises"],
        correctAnswer: 0
      }
    ];
  
    var currentQuestion = 0;
    var score = 0;
  
    function displayQuestion() {
      var question = questions[currentQuestion];
      var questionHTML = "<h2>" + question.question + "</h2>";
      for (var i = 0; i < question.choices.length; i++) {
        questionHTML += '<input type="radio" name="choice" value="' + i + '"> ' + question.choices[i] + '<br>';
      }
      $('#question-container').html(questionHTML);
    }
  
    displayQuestion();
  
    $('#submit-answer').click(function() {
      var selectedChoice = $('input[name="choice"]:checked').val();
      if (selectedChoice == undefined) {
        alert("Please select an answer");
        return;
      }
      if (selectedChoice == questions[currentQuestion].correctAnswer) {
        score++;
      }
      currentQuestion++;
      if (currentQuestion < questions.length) {
        displayQuestion();
      } else {
        $('#question-container').hide();
        $('#submit-answer').hide();
        $('#score-container').html('<h2>Your Score: ' + score + '/' + questions.length + '</h2>');
      }
    });
  });
  