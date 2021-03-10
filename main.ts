input.onButtonPressed(Button.AB, function () {
    basic.showNumber(num1)
    basic.showLeds(`
        . . . . .
        . . # . .
        . # # # .
        . . # . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . # # # .
        . . . . .
        . # # # .
        . . . . .
        `)
    basic.showNumber(num1 + num2)
    basic.showNumber(num2)
})
input.onGesture(Gesture.Shake, function () {
    basic.showNumber(num1)
    basic.showLeds(`
        . . . . .
        . . . . .
        . # # # .
        . . . . .
        . . . . .
        `)
    basic.showNumber(num2)
    basic.showLeds(`
        . . . . .
        . # # # .
        . . . . .
        . # # # .
        . . . . .
        `)
    basic.showNumber(num1 - num2)
})
let num2 = 0
let num1 = 0
num1 = 0
num2 = 0
basic.forever(function () {
    if (input.pinIsPressed(TouchPin.P0)) {
        num2 += 1
        basic.showNumber(num2)
    } else if (input.pinIsPressed(TouchPin.P1)) {
        num2 += -1
        basic.showNumber(num2)
    }
})
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        num1 += 1
        basic.showNumber(num1)
    } else if (input.buttonIsPressed(Button.B)) {
        num1 += -1
        basic.showNumber(num1)
    }
})
