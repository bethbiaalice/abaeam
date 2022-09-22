input.onPinPressed(TouchPin.P0, function () {
    basic.showNumber(3)
    basic.showNumber(2)
    basic.showNumber(1)
    basic.showString("oi ")
    basic.pause(randint(1000, 5000))
    basic.showIcon(IconNames.Skull)
    basic.pause(2000)
    basic.clearScreen()
})
basic.showLeds(`
    . # . # .
    # . # . #
    # # # . #
    . # # . .
    . # # . .
    `)
basic.forever(function () {
	
})
