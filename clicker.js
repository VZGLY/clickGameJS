var count = 0;
var timePerf = new Array;
var average;
var start;

function setPoint(){
    var svgns = "http://www.w3.org/2000/svg",
    container = document.getElementById( 'cont' );

        var circle = document.createElementNS(svgns, 'circle');
        circle.setAttributeNS(null, 'r', 50);
        circle.setAttributeNS(null, 'style', 'fill: freeze; stroke: black; stroke-width: 5px;' );
        container.appendChild(circle);
        var xy = getRandomPosition(circle);
        circle.setAttributeNS(null , 'cy' , xy[0] + "px")
        circle.setAttributeNS(null , 'cx' , xy[1] + "px")
      //circle.style.top = xy[0] + "px";
      
      circle.onclick=function(){clickCircle(circle)};
      start = new Date().getTime();
}

function getRandomPosition(element) {
    var x = document.getElementById( 'cont' ).clientHeight;
    var y = document.getElementById( 'cont' ).clientWidth;

    //var x = document.body.offsetHeight - element.clientHeight;
    //var y = document.body.offsetWidth - element.clientWidth;
    
    
    var randomX = Math.floor(Math.random() * x);
    var randomY = Math.floor(Math.random() * y);
    return [randomX, randomY];
  }

  function clickCircle(circ){
    var timeBetween = new Date().getTime() - start;
    calculateTime(timeBetween);
    circ.remove();
    countOver();
  }

  function clickOnStart(){
    document.getElementById("btnstart").remove();
    setPoint();

  }

  function calculateTime(newTime){
    timePerf.push(newTime);
    var sum = 0;
    for( var i = 0; i < timePerf.length; i++ ){
    sum += parseInt( timePerf[i], 10 ); //don't forget to add the base
    }

var avg = sum/timePerf.length;
    average = avg;
  }

  function countOver(){
    count++;
    if(count == 10){
        var div = document.getElementById('Body');
        div.innerHTML = 'average is ' + average + ' MS'
        
    }
    else{
        setPoint();
    }
  }
  
  