
//var makeapt = function(name, aptdescr, aptdate, starttime, endtime) {
//  var apt = (name + ", " + aptdescr + ", " + aptdate + ", " + starttime + ", " + endtime);
//  return apt;
//}


$(document).ready(function() {
	$("#surveyAnswers").submit(function(event) {
    event.preventDefault();
  var name = ($("input#name1").val());

  var food = ($("input#food1").val());

  var music = ($("input#music1").val());

  var season = ($("input#season1").val());
  var org = ($("input#org1").val());


	//var result = makeapt(name, aptdescr, aptdate, starttime, endtime);
  //  $("#output").text(result);
    //$("#output").show();
    $(".name1").text(name);
    $(".food1").text(food);
    $(".music1").text(music);
    $(".season1").text(season);
    $(".org1").text(org);

    $("#output").show();
  var beverage = $("#beverage").val();
  var dob = $("#born").val();
  var favoriteColor = $("#color").val();
	});

});
