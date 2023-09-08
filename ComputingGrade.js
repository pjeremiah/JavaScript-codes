<!DOCTYPE html>
<html lang="en">
  <head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-4bw+/aepP/YC94hEpVNVgiZdgIC5+VKNBQNGCHeKRQN+PtmoHDEXuppvnDJzQIu9" crossorigin="anonymous">

  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-HwwvtgBNo3bZJJLYd8oVXjrBZt8cqVSpeBNS5n7C8IVInixGAoxmnlMuBnhbgrkm" crossorigin="anonymous"></script>

  <title>Document</title>
</head>
<body>
  <br>

  <div class="text-left">

    <h2>Semestral Grade Activity</h2>

    <p>Calculate your Semestral Grade</p>

    <form>

      <h4>Learning Activities</h4>

      <label for="ass1">Assignment 1:</label>
      <input type="number" id="ass1" name="ass1"><br>
      
      <label for="ass2">Assignment 2:</label>
      <input type="number" id="ass2" name="ass2"><br>

      <label for="q1">Quiz 1:</label>
      <input type="number" id="q1" name="q1"><br>

      <label for="q2">Quiz 2:</label>
      <input type="number" id="q2" name="q2"><br>

      <label for="act1">Activity 1:</label>
      <input type="number" id="act1" name="act1"><br>

      <label for="act2">Activity 2:</label>
      <input type="number" id="act2" name="act2"><br>

      <label for="attendance">Attendance:</label>
      <input type="number" id="attendance" name="attendance"><br>

      <label for="recitation">Recitation:</label>
      <input type="number" id="recitation" name="recitation"><br><br>

      <p id="LAtotal"></p>
      
      <h4>Long Exam</h4>

      <label for="longExam">Long Exam:</label>
      <input type="number" id="longExam" name="longExam"><br><br>

      <h4>Final Exam</h4>

      <label for="finalExam">Final Exam:</label>
      <input type="number" id="finalExam" name="finalExam"><br><br>

      <button type="button" onclick="calculateGrade()">Calculate Grade</button>

    </form>

  <p id="result"></p>
  </div>
  <script>
    function calculateGrade() {

      var ass1 = parseFloat(document.getElementById("ass1").value);
      var ass2 = parseFloat(document.getElementById("ass2").value);
      var q1 = parseFloat(document.getElementById("q1").value);
      var q2 = parseFloat(document.getElementById("q2").value);
      var act1 = parseFloat(document.getElementById("act1").value);
      var act2 = parseFloat(document.getElementById("act2").value);
      var attendance = parseFloat(document.getElementById("attendance").value);
      var recitation = parseFloat(document.getElementById("recitation").value);
      var LEscore = parseFloat(document.getElementById("longExam").value);
      var FEscore = parseFloat(document.getElementById("finalExam").value);
      var LAweight = 0.3;
      var LEweight = 0.3;
      var FEweight = 0.4;
      var LAweightedScore = (ass1 + ass2 + q1 + q2 + act1 + act2 + attendance + recitation) / 8;
      var LEweightedScore = LEscore * LEweight;
      var FEweightedScore = FEscore * FEweight;
      
      // Calculate semestral grade
      var semestralGrade = LAweightedScore * LAweight + LEweightedScore + FEweightedScore;
      
      // Display result as a string
      document.getElementById("LAtotal").innerHTML = "Learning Average: " + LAweightedScore;
      document.getElementById("result").textContent = "Final grade: " + semestralGrade.toFixed(2);
    }
  </script>
</body>
</html>
