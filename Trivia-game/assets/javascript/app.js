$(document).ready(function(){
    $("#start-button").click(function(){
  // ----------------------------------------------------------------
   // declaring the value for the timer to 50 seconds
   // hide the start button and rules
        var number = 50;
        alert("Click ok to see the questions!!!");
      $("#start-button").on("click", start);  // starts the questions 
      $("#submit").on("click", finish);  // submits answers and finishes 
      $("#restart").on("click", restart);  // restarts the questions 
  // ----------------------------------------------------------------
  // functions
      function start(){
          counter = setInterval(timer, 1000);
          showMe(".question");
          showMe(".answers");
          showMe("#submit");
          hideMe("#start-button");
          hideMe(".rules");
          hideMe("#restart");
          hideMe("#results");
      }
      function timer(){
        number-- // decrements the timer by 1
        $("#show-number").html("<h2>" + number + "</h2>" );
        if (number === 0){
          alert("Time Up!")
          stop(); // then calls the stop function
        }
      }
      function stop(){
          clearInterval(counter); // stops the timer
          $("#results").show();
          $("#restart").show();
          $(".question").hide();
          $(".answers").hide();
          $("#submit").hide();
      }
      function finish(){
          number = 1; // if number is equal to 0 number will show -1 so 1 has to be selected
          clearInterval(counter); // stops the timer
          timer();
      }
  
      function restart(){
          number = 50;
          start();
      }
  
      function hideMe(e) {
          $(e).hide();
      }
      function showMe(e) {
          $(e).show();
      }
  
  // ----------------------------------------------------------------
  //calling functions
        start(); // calls the start function
    });
  });