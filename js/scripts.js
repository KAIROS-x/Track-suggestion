$(document).ready(function(){
    $("#questionaire").submit(function(event){
      var q1 = $("input#q1").val();
      var q2 = $("input#q2").val();

      $(".q1").append(q1);
      $(".q2").append(q2);

      $("#story").show();

      event.preventDefault();

    });
});
