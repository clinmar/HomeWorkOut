$(document).ready(function() {
    var questions = [
      {
        question: "Aling grupo ng kalamnan ang tinatarget ng mga deadlift?",
        choices: ["Quadriceps", "Hamstrings", "Glutes", "All of the above"],
        correctAnswer: 3
      },
      {
        question: "Ano ang pangunahing kalamnan na nagtrabaho sa panahon ng isang bench press?",
        choices: ["Pectorals", "Deltoids", "Triceps", "Biceps"],
        correctAnswer: 0
      },
      {
        question: "Anong uri ng ehersisyo ang isang burpee?",
        choices: ["Cardio", "Strength training", "Flexibility", "None of the above"],
        correctAnswer: 1
      },
      {
        question: "Ano ang isang magandang ehersisyo para sa pagpapabuti ng lakas ng pagkakahawak?",
        choices: ["Dead hang", "Bicep curls", "Leg press", "Plank"],
        correctAnswer: 0
      },
      {
        question: "Aling ehersisyo ang pangunahing nagta-target sa triceps?",
        choices: ["Push-ups", "Pull-ups", "Tricep dips", "Squats"],
        correctAnswer: 2
      },
      {
        question: "Ano ang pangunahing benepisyo ng HIIT (High-Intensity Interval Training)?",
        choices: ["Increased endurance", "Improved cardiovascular health", "Both A and B", "None of the above"],
        correctAnswer: 2
      },
      {
        question: "Ano ang magandang ehersisyo para sa pag-target sa mga obliques?",
        choices: ["Crunches", "Russian twists", "Planks", "Lunges"],
        correctAnswer: 1
      },
      {
        question: "Ano ang pangunahing grupo ng kalamnan na ginagamit sa isang pull-up?",
        choices: ["Biceps", "Triceps", "Latissimus dorsi", "Deltoids"],
        correctAnswer: 2
      },
      {
        question: "Ano ang magandang ehersisyo para sa pagpapalakas ng mas mababang likod?",
        choices: ["Superman exercise", "Leg press", "Calf raises", "Bench press"],
        correctAnswer: 0
      },
      {
        question: "Ano ang karaniwang ehersisyo para sa pagpapabuti ng pagsabog?",
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
  