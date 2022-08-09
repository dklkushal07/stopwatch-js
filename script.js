var hours = 0
var minutes = 0
var seconds = 0
var tens = 0
var timing = false

function start(){
    timing = true
    stopwatch();
}

function stop(){
    timing = false
}

function reset(){
    timing = false
    hours = 0
    minutes = 0
    seconds = 0
    tens = 0
    document.getElementById("tens").innerHTML = "00"
    document.getElementById("seconds").innerHTML = "00"
    document.getElementById("minutes").innerHTML = "00"
    document.getElementById("hours").innerHTML = "00"

}



function stopwatch(){
    if (timing == true){
        tens = tens + 1
        
        if (tens==99){
            seconds = seconds + 1
            tens = 0
        }

        if (seconds==59){
            minutes = minutes + 1
            seconds = 0
        }

        if (minutes==59){
            hours = hours + 1
            minutes = 0
            seconds = 0
        }

        var Dtens = tens //dtens means displaying
        var Dseconds = seconds
        var Dminutes = minutes
        var Dhours = hours

        if (hours<10){
            Dhours = "0" + Dhours
        }
        if (minutes<10){
            Dminutes = "0" + Dminutes
        }
        if (seconds<10){
            Dseconds = "0" + Dseconds
        }

        document.getElementById("hours").innerHTML = Dhours
        document.getElementById("seconds").innerHTML = Dseconds
        document.getElementById("minutes").innerHTML = Dminutes
        document.getElementById("tens").innerHTML = Dtens

        setTimeout("stopwatch()",10)
    }
}

function lap(){
    var Dtens = tens //dtens means displaying
    var Dseconds = seconds
    var Dminutes = minutes
    var Dhours = hours
    if (hours<10){
        Dhours = "0" + Dhours
    }
    if (minutes<10){
        Dminutes = "0" + Dminutes
    }
    if (seconds<10){
        Dseconds = "0" + Dseconds
    }

    var elems = document.getElementsByClassName("lap-section");
    for (var i=0;i<elems.length;i+=1){
        elems[i].style.display = 'block';
    }


    var lap = Dhours + ":" + Dminutes + ":" + Dseconds + ":" + Dtens
    const lapElems = document.createElement("p")
    lapElems.innerText = lap
    document.getElementById("lap-value").appendChild(lapElems);
}

function clearlap(){
    var elems = document.getElementsByClassName("lap-section");
    for (var i=0;i<elems.length;i+=1){
        elems[i].style.display = 'none';
    }
}