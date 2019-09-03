

$("#submit").on("click", function () {
    event.preventDefault();






    if (firstcol === "" || secondcol === "" || thirdcol === "" || trainTime === "") {

    } else {
        var firstcol = $("#trainName").val().trim();
        var secondcol = $("#destination").val().trim();
        var thirdcol = $("#frequency").val().trim();
        var trainTime = $("#trainTime").val().trim();

        var initialTime = moment(trainTime, "HH:mm").subtract(1, "years");
        var diffTime = moment().diff(moment(initialTime), "minutes");
        var remainder = diffTime % thirdcol;
        var timeTill = thirdcol - remainder;
        var nextTrain = moment().add(timeTill, "minutes");

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

        var database = firebase.database().ref();

        database.push({
            Name: firstcol,
            destination: secondcol,
            frequency: thirdcol,
            arrival: nextArrival,
            until: timeUntil
        });
        



    }
});
