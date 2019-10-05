input.onButtonPressed(Button.B, function () {
    while (!(input.buttonIsPressed(Button.A))) {
        basic.showIcon(IconNames.Heart)
        basic.showIcon(IconNames.SmallHeart)
        basic.clearScreen()
    }
})
let reverse = 0
let inner = 0
let yindex = 0
let index2 = 0
let speed = 10
led.setBrightness(255)
while (!(input.buttonIsPressed(Button.A))) {
    basic.showIcon(IconNames.Heart)
    basic.showIcon(IconNames.SmallHeart)
    basic.clearScreen()
}
let list = [5, 2, 1, 3, 4]
basic.forever(function () {
    if (input.buttonIsPressed(Button.A) && input.runningTime() >= 900) {
        if (input.isGesture(Gesture.TiltLeft)) {
            for (let i = 0; i < 5; i++) {
                for (let yindex2 = 0; yindex2 <= 4; yindex2++) {
                    for (let xindex = 0; xindex <= 4; xindex++) {
                        led.plot(xindex, yindex2)
                        basic.pause(100)
                        led.unplot(xindex, yindex2)
                        basic.pause(100)
                    }
                }
            }
        } else if (input.isGesture(Gesture.LogoDown)) {
            for (let i = 0; i < 5; i++) {
                for (let index = 0; index <= 4; index++) {
                    led.plot(index, Math.randomRange(0, 5))
                    led.setBrightness(64)
                    led.plot(index, Math.randomRange(0, 5))
                }
            }
        } else if (input.isGesture(Gesture.ScreenUp)) {
            for (let i = 0; i < 5; i++) {
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
            for (let i = 0; i < 5; i++) {
                for (let m = 0; m <= list.length - 1; m++) {
                    for (let n = 0; n <= list[m] - 1; n++) {
                        led.plot(Math.randomRange(0, 5), Math.randomRange(0, 5))
                    }
                    basic.pause(1000)
                    basic.clearScreen()
                }
            }
        }
    }
})
