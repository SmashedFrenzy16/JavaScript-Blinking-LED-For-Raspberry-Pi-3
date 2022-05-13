var Gpio = require("onoff").Gpio;
var LED = new Gpio(4, "out");
var blinkInterval = setInterval(blinkLED, 250); // Executes blinkLED function after every 250 miliseconds

function blinkLED() {
  
  if (LED.readSync() === 0) {
    
    LED.writeSync(1); //Turn LED On
  
  } else {
    
    LED.writeSync(0); // Turn LED Off
  
  }

}

function endBlink() {
  
  clearInterval(blinkInterval)
  LED.writeSync(0); // Turns off LED
  LED.unexport(); // Frees resources after blinking has ended

}

setTimeout(endBlink, 10000); // Stops blinking after 10 seconds
