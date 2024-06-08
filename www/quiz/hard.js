$(document).ready(function() {
    var questions = [
      {
        question: "Which muscle group is targeted by deadlifts?",
        choices: ["Quadriceps", "Hamstrings", "Glutes", "All of the above"],
        correctAnswer: 3
      },
      {
        question: "What is the primary muscle worked during a bench press?",
        choices: ["Pectorals", "Deltoids", "Triceps", "Biceps"],
        correctAnswer: 0
      },
      {
        question: "What type of exercise is a burpee?",
        choices: ["Cardio", "Strength training", "Flexibility", "None of the above"],
        correctAnswer: 1
      },
      {
        question: "What is a good exercise for improving grip strength?",
        choices: ["Dead hang", "Bicep curls", "Leg press", "Plank"],
        correctAnswer: 0
      },
      {
        question: "Which exercise primarily targets the triceps?",
        choices: ["Push-ups", "Pull-ups", "Tricep dips", "Squats"],
        correctAnswer: 2
      },
      {
        question: "What is the main benefit of HIIT (High-Intensity Interval Training)?",
        choices: ["Increased endurance", "Improved cardiovascular health", "Both A and B", "None of the above"],
        correctAnswer: 2
      },
      {
        question: "What is a good exercise for targeting the obliques?",
        choices: ["Crunches", "Russian twists", "Planks", "Lunges"],
        correctAnswer: 1
      },
      {
        question: "What is the primary muscle group used in a pull-up?",
        choices: ["Biceps", "Triceps", "Latissimus dorsi", "Deltoids"],
        correctAnswer: 2
      },
      {
        question: "What is a good exercise for strengthening the lower back?",
        choices: ["Superman exercise", "Leg press", "Calf raises", "Bench press"],
        correctAnswer: 0
      },
      {
        question: "What is a common exercise for improving explosiveness?",
        choices: ["Box jumps", "Yoga", "Cycling", "Walking"],
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
  