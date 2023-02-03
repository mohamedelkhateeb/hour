
onload = function showTime(){
    let append = document.getElementById('MyClockDisplay');
    let date = new Date()
    let h = date.getHours()
    let m = date.getMinutes()
    let s = date.getSeconds()
    let session = "PM"
    
    if(h > 12){
        h = h - 12
    }

    if(h == 0){
        h = 12;
        session = "AM"
    }
    
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;

    append.innerHTML = h + " : " + m + ' : ' + s + "  " + session;
    
    
    setTimeout(showTime, 1000)
}


