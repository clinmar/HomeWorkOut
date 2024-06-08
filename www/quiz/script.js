$(document).ready(function() {
    var questions = [
      {
        question: "Which exercise focuses on flexibility and stretching?",
        choices: ["Vascular exercise", "Abdominal exercise", "Stretching exercise", "Arms exercise"],
        correctAnswer: 2
      },
      {
        question: "Which exercise primarily targets the arms?",
        choices: ["Vascular exercise", "Abdominal exercise", "Stretching exercise", "Arms exercise"],
        correctAnswer: 3
      },
      {
        question: "What is a good vascular exercise?",
        choices: ["Walking", "Sit-ups", "Yoga", "Bicep curls"],
        correctAnswer: 0
      },
      {
        question: "Which exercise is best for strengthening the core?",
        choices: ["Push-ups", "Squats", "Planks", "Jumping jacks"],
        correctAnswer: 2
      },
      {
        question: "What is a common exercise for leg muscles?",
        choices: ["Cycling", "Pull-ups", "Crunches", "Bench press"],
        correctAnswer: 0
      },
      {
        question: "What type of exercise is running?",
        choices: ["Cardio", "Strength training", "Flexibility", "None of the above"],
        correctAnswer: 0
      },
      {
        question: "What is a good exercise for the chest?",
        choices: ["Lunges", "Push-ups", "Deadlifts", "Squats"],
        correctAnswer: 1
      },
      {
        question: "Which exercise primarily targets the back muscles?",
        choices: ["Bicep curls", "Pull-ups", "Crunches", "Squats"],
        correctAnswer: 1
      },
      {
        question: "What is a good exercise for improving balance?",
        choices: ["Yoga", "Sit-ups", "Cycling", "Bench press"],
        correctAnswer: 0
      },
      {
        question: "What is a good exercise for the shoulders?",
        choices: ["Deadlifts", "Shoulder press", "Jumping jacks", "Pull-ups"],
        correctAnswer: 1
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
  