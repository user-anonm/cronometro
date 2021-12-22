"use strict"

var hh = 0;
var mm = 0;
var ss = 0;
var cm = 0;

var tempo = 10;
var cron = 0;

function start(){
    cron = setInterval(() =>{timer(); }, tempo);
    document.getElementById('start').innerText = 'start';
    
}

function reset(){
    clearInterval(cron);
    hh = 0;
    mm = 0;
    ss = 0;
    cm = 0;
    document.getElementById('cont').innerText = '00:00:00';
    document.getElementById('start').innerText = 'start';
    

}

function stop(){
    clearInterval(cron);
    if( cm > 1){
        document.getElementById('start').innerText = 'continue';
    }
    
}

function timer(){
    cm++;

    if(cm == 100){
        cm = 0;
        ss++;

        if(ss == 60){
            ss = 0;
            mm++;
        }

        if(mm == 60){
            mm = 0;
            hh++;
        }
    }

    var format = (hh < 10 ? '0' + hh:hh) + ':' + (mm < 10 ? '0'+ mm:mm) + ':' + (ss < 10 ? '0' + ss:ss) + ':' + (cm < 10 ? '0' + cm:cm);
    document.getElementById('cont').innerText = format;
}