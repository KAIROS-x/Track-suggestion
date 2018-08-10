$(document).ready(function(){
  $("form#questionaire").submit(function(event){
    var q1 = $("input#q1").val();
    var q2 = $("input#q2").val();
    if (q1 === "yes") {// css/react
    }
    $("#answer").empty().append(track);
    $("#track").show();

    return false;

  });
});
