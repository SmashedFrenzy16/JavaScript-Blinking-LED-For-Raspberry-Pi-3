var Gpio = require("onoff").Gpio;
var LED = new Gpio(4, "out");
var blinkInterval = setInterval(blinLED, 250);
