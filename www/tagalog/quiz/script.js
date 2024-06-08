$(document).ready(function() {
    var questions = [
      {
        question: "Aling ehersisyo ang nakatutok sa flexibility at stretching?",
        choices: ["Vascular exercise", "Abdominal exercise", "Stretching exercise", "Arms exercise"],
        correctAnswer: 2
      },
      {
        question: "Aling ehersisyo ang pangunahing nagta-target sa mga braso?",
        choices: ["Vascular exercise", "Abdominal exercise", "Stretching exercise", "Arms exercise"],
        correctAnswer: 3
      },
      {
        question: "Ano ang magandang vascular exercise?",
        choices: ["Walking", "Sit-ups", "Yoga", "Bicep curls"],
        correctAnswer: 0
      },
      {
        question: "Aling ehersisyo ang pinakamainam para sa pagpapalakas ng core?",
        choices: ["Push-ups", "Squats", "Planks", "Jumping jacks"],
        correctAnswer: 2
      },
      {
        question: "Ano ang karaniwang ehersisyo para sa mga kalamnan sa binti?",
        choices: ["Cycling", "Pull-ups", "Crunches", "Bench press"],
        correctAnswer: 0
      },
      {
        question: "Anong uri ng ehersisyo ang tumatakbo?",
        choices: ["Cardio", "Strength training", "Flexibility", "None of the above"],
        correctAnswer: 0
      },
      {
        question: "Ano ang magandang ehersisyo para sa dibdib?",
        choices: ["Lunges", "Push-ups", "Deadlifts", "Squats"],
        correctAnswer: 1
      },
      {
        question: "Aling ehersisyo ang pangunahing nagta-target sa mga kalamnan sa likod?",
        choices: ["Bicep curls", "Pull-ups", "Crunches", "Squats"],
        correctAnswer: 1
      },
      {
        question: "Ano ang magandang ehersisyo para sa pagpapabuti ng balanse?",
        choices: ["Yoga", "Sit-ups", "Cycling", "Bench press"],
        correctAnswer: 0
      },
      {
        question: "Ano ang magandang ehersisyo para sa mga balikat?",
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
  