$(document).ready(function() {
    var questions = [
      {
        question: "Ano ang pangunahing kalamnan na ginagamit sa isang Turkish Get-Up exercise?",
        choices: ["Quadriceps", "Deltoids", "Glutes", "Core muscles"],
        correctAnswer: 3
      },
      {
        question: "Ano ang tamang pattern ng paghinga para sa isang powerlifter na nagsasagawa ng mabigat na deadlift?",
        choices: ["Huminga habang papaakyat, huminga habang pababa", "Hinga sa pataas, huminga habang pababa", "Hawakan ang hininga sa buong pag-angat", "Hinga at huminga nang ritmo sa buong pag-angat"],
        correctAnswer: 2
      },
      {
        question: "Ano ang tamang lapad ng grip para sa isang bench press para mas ma-target ang triceps?",
        choices: ["Narrow grip", "Wide grip", "Standard grip", "Overhand grip"],
        correctAnswer: 0
      },
      {
        question: "Ano ang inirerekomendang rep range para sa hypertrophy na pagsasanay?",
        choices: ["1-5 reps", "6-12 reps", "15-20 reps", "Higit sa 20 reps"],
        correctAnswer: 1
      },
      {
        question: "Aling ehersisyo ang pangunahing nagta-target sa teres major na kalamnan?",
        choices: ["Bent-over rows", "Front raises", "Side lateral raises", "Lateral pulldowns"],
        correctAnswer: 3
      },
      {
        question: "Ano ang layunin ng maniobra ng Valsalva sa panahon ng mabigat na pag-aangat?",
        choices: ["Upang madagdagan ang paggamit ng oxygen", "Upang maiwasan ang pagkahilo", "Upang patatagin ang gulugod", "Upang mapabuti ang flexibility"],
        correctAnswer: 2
      },
      {
        question: "Aling ehersisyo ang nangangailangan ng pinakamaraming koordinasyon at balanse?",
        choices: ["Deadlifts", "Overhead squats", "Kettlebell swings", "Leg presses"],
        correctAnswer: 1
      },
      {
        question: "Ano ang pangunahing kalamnan na nagtrabaho sa panahon ng ehersisyo ng dragon flag?",
        choices: ["Abs", "Obliques", "Pectorals", "Glutes"],
        correctAnswer: 0
      },
      {
        question: "Ano ang layunin ng pagsasanay sa plyometric?",
        choices: ["Para mapataas ang flexibility", "Upang mapabuti ang muscular endurance", "Upang mapahusay ang lakas at explosiveness", "Upang bawasan ang tibok ng puso"],
        correctAnswer: 2
      },
      {
        question: "Aling ehersisyo ang pangunahing nagta-target sa serratus anterior na kalamnan?",
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
  