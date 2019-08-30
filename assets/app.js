
$("#submit").on("click", function(){
    
    var firstcol = $("#trainName").val().trim();
    var secondcol = $("#destination").val().trim();
    var thirdcol = $("#frequency").val().trim();
    var trainTime = $("#trainTime").val().trim();
    
if (firstcol === "" || secondcol === "" || thirdcol === "" || trainTime === "") {

} else {

    var name = $("<div>").text(firstcol)
    $("#first").append(name);

    var destination = $("<div>").text(secondcol)
    $("#second").append(destination);

    var frequency = $("<div>").text(thirdcol)
    $("#third").append(frequency);
   
    $("#trainName").val("");
    $("#destination").val("");
    $("#frequency").val("");
    $("#trainTime").val("");
}});
