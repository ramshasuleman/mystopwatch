var h=0; //hour
var m=0; //minute
var s=0;  //second
var ms=0;   //milisecond
let st;

function start(){
    if(!st){
        st=setInterval(timer,10);
    }
    
}

function timer(){
     
    let display=document.getElementById("timer")
    display.innerHTML=(h < 10?"0"+h:h)+":"+(m < 10?"0"+m:m)+":"+(s < 10?"0"+s:s)+":"+(ms < 10?"0"+ms:ms)
    ms++;
    if(ms==99){
        ms=0;
        s++;
       
    }
    if(s==59){
        s=0;
        m++;
       
    }
    if(m==59){
        m=0;
        h++;
        
    }
}
function stop(){
    clearInterval(st)
    st=false;
    
}
function reset(){
    h=0;
    m=0;
    s=0;
    ms=0;
    document.getElementById("timer").innerHTML=(h< 10?"0"+h:h)+":"+(m< 10?"0"+m:m)+":"+(s< 10?"0"+s:s)+":"+(ms< 10?"0"+ms:ms)
    

}
function lap(){
    let li=document.createElement("li");
    li.setAttribute("class","lap")
    li.innerHTML=(h< 10?"0"+h:h)+":"+(m< 10?"0"+m:m)+":"+(s< 10?"0"+s:s)+":"+(ms< 10?"0"+ms:ms)
    let ul=document.getElementById("laps");
    ul.appendChild(li);

}
function clear(){
    console.log("clear error");
    document.getElementById("lapbox").innerHTML="";

}
