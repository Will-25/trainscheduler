var firebaseConfig = {
    apiKey: "AIzaSyA_nuHs4y7nNOorlqO-Hrjn9JQczs31Gjo",
    authDomain: "train-schedule-54d14.firebaseapp.com",
    databaseURL: "https://train-schedule-54d14.firebaseio.com",
    projectId: "train-schedule-54d14",
    storageBucket: "",
    messagingSenderId: "1044490776607",
    appId: "1:1044490776607:web:8ad547648fe9d748"
};

firebase.initializeApp(firebaseConfig);
var database = firebase.database()

$("#submit").on("click", function () {
    
    event.preventDefault();





    if (firstcol === "" || secondcol === "" || thirdcol === "" || trainTime === "") {

    } else {
        
        var firstcol = $("#trainName").val().trim();
        var secondcol = $("#destination").val().trim();
        var thirdcol = $("#frequency").val().trim();
        var trainTime = $("#trainTime").val().trim();

        database.ref().push({
            name: firstcol,
            destination: secondcol,
            frequency: thirdcol,
            time: trainTime
        });

       
        $("#trainName").val("");
        $("#destination").val("");
        $("#frequency").val("");
        $("#trainTime").val("");

        

       
        
        


    }
});

database.ref().on("child_added", function(snapshot) {
  
    var values = snapshot.val();


    var initialTime = moment(values.time, "HH:mm").subtract(1, "years");
    var diffTime = moment().diff(moment(initialTime), "minutes");
    var remainder = diffTime % values.frequency;
    var timeTill = values.frequency - remainder;
    var nextTrain = moment().add(timeTill, "minutes");
    
    $("#first").append("<div>" + values.name);
    $("#second").append("<div>" + values.destination);
    $("#third").append("<div>" + values.frequency);
    $("#fourth").append("<div>" + moment(nextTrain).format("hh:mm"));
    $("#fifth").append("<div>" + timeTill)
});