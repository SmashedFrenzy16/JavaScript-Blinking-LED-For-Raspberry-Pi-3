var Gpio = require("onoff").Gpio;
var LED = new Gpio(4, "out");
var blinkInterval = setInterval(blinkLED, 250);

function blinkLED() {
  
  if (LED.readSync() === 0) {
    
    LED.writeSync(1);
  
  } else {
    
    LED.writeSync(0);
  
  }

}
