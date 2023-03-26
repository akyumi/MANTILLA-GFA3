function random() {
    var one = parseInt(Math.random()*20)+1;
    document.getElementById("wow").innerHTML = one;

    var two = parseInt(Math.random()*20)+1;
    document.getElementById("shish").innerHTML = two;

    var three = parseInt(Math.random()*20)+1;
    document.getElementById("luh").innerHTML = three;

    if (one >= two && one >= three) {
        document.getElementById("output").innerHTML = "Most visited machine: Machine #1 (" + one + ")";
    }
    if (two >= one && two >= three) {
        document.getElementById("output").innerHTML = "Most visited machine: Machine #2 (" + two + ")";
    }
    if (three >= one && three >= two){
        document.getElementById("output").innerHTML = "Most visited machine: Machine #3 (" + three + ")"
    }

    var tr = two*three;
    var hr = Math.floor(tr / 60);
    var time = tr - hr * 60;
    document.getElementById("helo").innerHTML = "Working time of the machine (" + tr + "mins): " + hr + "hr " + time + "min";

    var letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    document.getElementById("mm").innerHTML = "Letter Machine: " + letters[Math.floor(Math.random() * letters.length)];
}
