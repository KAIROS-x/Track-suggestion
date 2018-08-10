$(document).ready(function(){
  $("#questionaire").submit(function(event){
    var q1 = $("input#q1").val();
    var q2 = $("input#q2").val();
    if (q1 == "yes")
    $("#track").show();
    event.preventDefault();
    
  });
});
