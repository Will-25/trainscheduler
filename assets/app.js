
$("#submit").on("click", function(){
    
    var firstcol = $("#trainName").val().trim();
    var secondcol = $("#destination").val().trim();
    var thirdcol = $("#frequency").val().trim();
    var trainTime = $("#trainTime").val().trim();
    
    var initialTime = moment(trainTime, "HH:mm").subtract(1, "years");
    var diffTime = moment().diff(moment(initialTime), "minutes");
    var remainder = diffTime % thirdcol;
    var timeTill = thirdcol - remainder;
    var nextTrain = moment().add(timeTill, "minutes");


if (firstcol === "" || secondcol === "" || thirdcol === "" || trainTime === "") {
    
} else {
    
    var name = $("<div>").text(firstcol)
    $("#first").append(name);

    var destination = $("<div>").text(secondcol)
    $("#second").append(destination);

    var frequency = $("<div>").text(thirdcol)
    $("#third").append(frequency);

    var nextArrival = $("<div>").text(nextTrain.format("hh:mm"));
    $("#fourth").append(nextArrival)

    var timeUntil = $("<div>").text(timeTill);
   $("#fifth").append(timeUntil);

    $("#trainName").val("");
    $("#destination").val("");
    $("#frequency").val("");
    $("#trainTime").val("");
    console.log("ARRIVAL TIME: " + moment(nextTrain).format("hh:mm"));

    
}});
