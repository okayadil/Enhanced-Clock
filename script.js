window.onload = () => {
    const analogClock = document.getElementById("analog-clock");
    const digitalClock = document.getElementById("digital-clock");
    const dateElement = document.getElementById("date");
    
    // logical function of Analog Clock
    setInterval( () => {
        const analog = new Date ();
        const second = analog.getSeconds() * 6;
        const minute = analog.getMinutes() * 6;
        const hour = analog.getHours() * 30 + Math.round(minute / 12);

        document.querySelector(".second-hand-container").style.transform = "rotate(" + second + "deg)";
        document.querySelector(".minute-hand-container").style.transform = "rotate(" + minute + "deg)";
        document.querySelector(".hour-hand-container").style.transform = "rotate(" + hour + "deg)";
   
    }, 1000);

    // Digital Clock
    setInterval( () => { 
        const updateClock = new Date ();
        const hours = updateClock.getHours();
        const minutes = updateClock.getMinutes();
        const seconds = updateClock.getSeconds();
        const amPm = hours >= 12 ? "PM" : "AM";

    // Date 
        const options = {
            weekday : "long",
            day : "numeric",
            month : "long",
            year : "numeric",
        };    
      
        document.getElementById("digital-clock").innerHTML = `${hours < 10 ? `0${hours % 12 || 12}` : hours % 12 || 12} : ${minutes < 10 ? `0${minutes}` : minutes} : ${seconds < 10 ? `0${seconds}` : seconds} ${amPm}`;
        document.getElementById("date").innerHTML = updateClock.toLocaleDateString(undefined, options)
 
    }, 1000);
};