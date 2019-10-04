input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    if (input.runningTime() >= 900) {
        running_time_ms = 0
        if (input.isGesture(Gesture.TiltLeft)) {
            for (let i = 0; i < 10; i++) {
                basic.showAnimation(`
                # . . # . . # . # . # . . # . . # . # . # . . # . # . . # .
                # . . # # # . . # # # . . # # # . . # # # . . # # # . . # #
                # # # # . # # # # . # # # # . # # # # . # # # # . # # # # .
                # # # # . # # # # . # # # # . # # # # . # # # # . # # # # .
                # . # . # # # . # . # # . # . # . . # . . # # . . # . # . #
                `, 700)
                basic.clearScreen()
            }
        } else if (input.isGesture(Gesture.LogoDown)) {
            for (let i = 0; i < 10; i++) {
                basic.showAnimation(`
                # . . # . . # . # . # . . # . . # . # . # . . # . # . . # .
                # . . # # # . . # # # . . # # # . . # # # . . # # # . . # #
                # # # # . # # # # . # # # # . # # # # . # # # # . # # # # .
                # # # # . # # # # . # # # # . # # # # . # # # # . # # # # .
                # . # . # # # . # . # # . # . # . . # . . # # . . # . # . #
                `, 700)
            }
        } else if (input.isGesture(Gesture.ScreenUp)) {
            for (let i = 0; i < 10; i++) {
                for (let outer23 = 0; outer23 <= 4; outer23++) {
                    reverse = 4 - outer23
                    for (let inner23 = 0; inner23 <= 4; inner23++) {
                        led.plot(outer23, reverse)
                        basic.pause(speed)
                        led.plot(reverse, outer23)
                        basic.pause(speed)
                        led.plot(reverse - inner23, reverse)
                        basic.pause(speed)
                        led.plot(reverse, reverse - inner23)
                        basic.pause(speed)
                    }
                }
                for (let outer33 = 0; outer33 <= 4; outer33++) {
                    reverse = 4 - outer33
                    for (let inner33 = 0; inner33 <= 4; inner33++) {
                        led.unplot(outer33, reverse)
                        basic.pause(speed)
                        led.unplot(reverse, outer33)
                        basic.pause(speed)
                        led.unplot(reverse - inner33, reverse)
                        basic.pause(speed)
                        led.unplot(reverse, reverse - inner33)
                        basic.pause(speed)
                    }
                }
            }
        } else if (input.isGesture(Gesture.TiltRight)) {
            for (let i = 0; i < 10; i++) {
                basic.showAnimation(`
                # . . # . . # . # . # . . # . . # . # . # . . # . # . . # .
                # . . # # # . . # # # . . # # # . . # # # . . # # # . . # #
                # # # # . # # # # . # # # # . # # # # . # # # # . # # # # .
                # # # # . # # # # . # # # # . # # # # . # # # # . # # # # .
                # . # . # # # . # . # # . # . # . . # . . # # . . # . # . #
                `, 700)
            }
        } else if (input.isGesture(Gesture.LogoUp)) {
            for (let i = 0; i < 10; i++) {
                basic.showAnimation(`
                # # . # # . # . # . # . . # . . # . # . # . . # . # . . # .
                # # . # # # . . # # # . . # # # . . # # # . . # # # . . # #
                . . # . . # # # # . # # # # . # # # # . # # # # . # # # # .
                . . # . . # # # # . # # # # . # # # # . # # # # . # # # # .
                . . # . # # # . # . # # . # . # . . # . . # # . . # . # . #
                `, 700)
            }
        }
    }
})
input.onButtonPressed(Button.B, function () {
    while (!(input.buttonIsPressed(Button.A))) {
        basic.showIcon(IconNames.Heart)
        basic.showIcon(IconNames.SmallHeart)
    }
})
let reverse = 0
let running_time_ms = 0
let speed = 0
let inner = 0
speed = 10
while (!(input.buttonIsPressed(Button.A))) {
    basic.showIcon(IconNames.Heart)
    basic.showIcon(IconNames.SmallHeart)
    basic.clearScreen()
}
