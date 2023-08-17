const hourE1 = document.getElementById("hours");
const minutesE1 = document.getElementById("minutes");
const secondsE1 = document.getElementById("seconds");
const ampmE1 = document.getElementById("ampm");



setInterval(() => {
    function updateclock(){
        let h = new Date().getHours()
        let m = new Date().getMinutes()
        let s = new Date().getSeconds()
        let ampm = "AM"
    
        if(h>12){
            h= h-12
            ampm ="PM"
        }
           hourE1.innerText = h;
           minutesE1.innerText =m;
           secondsE1.innerHTML= s;
           ampmE1.innerHTML= ampm;
    
    }
    updateclock()
},1000);