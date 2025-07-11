let sending = 0
basic.showIcon(IconNames.Heart)
basic.forever(function () {
    sending = pins.analogReadPin(AnalogReadWritePin.P0)
    pins.servoWritePin(AnalogPin.P2, pins.map(
    sending,
    0,
    1023,
    0,
    180
    ))
    if (sending > 0 && sending < 205) {
        basic.showLeds(`
            # . . . .
            # . . . .
            # . . . .
            # . . . .
            # . . . .
            `)
    } else if (sending > 204 && sending < 410) {
        basic.showLeds(`
            . # . . .
            . # . . .
            . # . . .
            . # . . .
            . # . . .
            `)
    } else if (sending > 409 && sending < 615) {
        basic.showLeds(`
            . . # . .
            . . # . .
            . . # . .
            . . # . .
            . . # . .
            `)
    } else if (sending > 614 && sending < 820) {
        basic.showLeds(`
            . . . # .
            . . . # .
            . . . # .
            . . . # .
            . . . # .
            `)
    } else if (sending > 819 && sending < 1025) {
        basic.showLeds(`
            . . . . #
            . . . . #
            . . . . #
            . . . . #
            . . . . #
            `)
    }
    basic.pause(100)
})
