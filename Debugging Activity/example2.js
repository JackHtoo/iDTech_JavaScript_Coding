function checkPoint2(){
    alert3();

    const friends = ["Rei", "Miya", "Alexis", "Ethan", "Anna"];
    const studentID = [];
    for (var i = 0; i < friends.length; i++){
        studentID.push("JSMIT " + i);
    }
    console.log(studentID);
    
    alerts(studentID);
}

function alert3() {
    alert("All students need to get their student IDs, but it seems like the system is down. Can you help debug the system? Go to the example2.js file and work on checkpoint 2.");
}
function alerts(studentID) {
    if (studentID.length == 5) {
        alert("Yay! You got the system running!");
    }
    else {
        alert("Hmmm! It seems like Rei hasn't received his ID. Keep debugging!");
    }
}