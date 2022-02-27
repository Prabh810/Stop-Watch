var minutes = document.getElementById("minutes");
var seconds = document.getElementById("seconds");

var start = document.getElementById("start");
var lap = document.getElementById("lap");

var totalTime = 0;

var reset = false;

var isTimerOn = false;
var timerId = false;

start.addEventListener("click",function(){
  if (isTimerOn){
    // turn off the timer
    clearInterval(timerId);
    start.innerHTML = "start";
    start.style.background = "white";
    lap.innerHTML = "reset";
    //reset = false;
    reset = true;
    isTimerOn = false;

  } else {
    // turn on the timer
    timerId = setInterval(function(){
    totalTime++;
    // for minutes
    if (minutes.innerHTML < 9 || minutes.innerHTML == 0){
      minutes.innerHTML = "0" + parseInt(totalTime / 60);
    } else{
      if (minutes.innerHTML == 60){
        seconds.innerHTML = "0" + totalTime % 60;
      }else{
        minutes.innerHTML = parseInt(totalTime / 60);
      }
    }
    // for seconds 
    if (seconds.innerHTML < 9 || seconds.innerHTML == 0){
      seconds.innerHTML = "0" + totalTime % 60;
    }else{
      if (seconds.innerHTML == 60){
        seconds.innerHTML = "0" + totalTime % 60;
      }else{
        seconds.innerHTML = totalTime % 60;
      }
    }
  },1000);

  start.innerHTML = "stop";
  start.style.background = "#C70039";
  lap.innerHTML = "lap";
  //lap.innerHTML= "reset";
  //reset = true;
  //reset = false;
  isTimerOn = true;
}
  }
);

var min = 0;
var sec = 0;
i = 0;

lap.addEventListener("mouseover", function(){
    lap.style.background = "#d1e231";
  
});

lap.addEventListener("mouseout", function(){
    lap.style.background = "white";
  
});

lap.addEventListener("click", function(){
  if (reset){
    reset = false;
    lap.innerHTML = "lap";
    minutes.innerHTML = "00";
    seconds.innerHTML = "00";
    totalTime = 0;
  } else {
    min = minutes.innerHTML;
    sec = seconds.innerHTML;
    console.log(min, sec, reset);

    // making laps
    i += 1;
    var laps = document.createElement("div");
    laps.setAttribute("id","laps");

    var para = document.createElement("label");
    para.setAttribute("id", "para");
    para.innerHTML = "Lap" + i;
    var hrLine = document.createElement("hr");
    hrLine.setAttribute("width", "100px");
    hrLine.setAttribute("id", "horiLine")
    para.appendChild(hrLine);
    laps.appendChild(para);

    var innerDiv = document.createElement("div");
    innerDiv.setAttribute("id", "innerDiv");
    var label1 = document.createElement("label");
    label1.setAttribute("class", "labels");
    label1.innerHTML = min;
    var labelMid = document.createElement("label");
    labelMid.setAttribute("class", "labels");
    labelMid.innerHTML = ":";
    var label2 = document.createElement("label");
    label2.setAttribute("class", "labels");
    label2.innerHTML = sec;
    innerDiv.appendChild(label1);
    innerDiv.appendChild(labelMid);
    innerDiv.appendChild(label2);

    var elem = document.createElement("hr");
    elem.setAttribute("width", "100px");
    innerDiv.appendChild(elem);

    laps.appendChild(innerDiv);


    var body = lap.parentNode.parentNode;
    console.log(body);
    body.appendChild(laps);

  }
});
