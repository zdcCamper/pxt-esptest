input.onButtonPressed(Button.A, function () {
    ESP8266ThingSpeak.connectThingSpeak(
    "https://api.thingspeak.com/update?api_key=AA6IPIT3TG9JW9GD&field1=0",
    "AA6IPIT3TG9JW9GD",
    101,
    0,
    0,
    0,
    0,
    0,
    0,
    0
    )
})
ESP8266ThingSpeak.connectWifi(
SerialPin.P0,
SerialPin.P1,
BaudRate.BaudRate115200,
"WirelessSpark",
"Privacy101"
)
basic.forever(function () {
	
})
