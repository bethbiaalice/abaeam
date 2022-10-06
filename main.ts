input.onPinPressed(TouchPin.P0, function () {
    basic.showNumber(3)
    basic.showNumber(2)
    basic.showNumber(1)
    basic.showString("vai começar")
    basic.pause(randint(1000, 5000))
    basic.showIcon(IconNames.Heart)
    basic.pause(1000)
    basic.clearScreen()
})
input.onPinPressed(TouchPin.P2, function () {
    if (Tocar == 0) {
        cont2 = 0
        basic.showLeds(`
            . . . # #
            . . . # #
            . . . # #
            . . . # #
            . . . # #
            `)
        basic.pause(100)
        basic.clearScreen()
    }
})
input.onPinPressed(TouchPin.P1, function () {
    if (Tocar == 0) {
        cont1 += 1
        basic.showLeds(`
            # # . . .
            # # . . .
            # # . . .
            # # . . .
            # # . . .
            `)
        basic.pause(1000)
        basic.clearScreen()
    }
})
let Tocar = 0
let cont2 = 0
let cont1 = 0
cont2 = 0
