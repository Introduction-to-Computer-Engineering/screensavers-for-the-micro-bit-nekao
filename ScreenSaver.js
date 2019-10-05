input.onGesture(Gesture.TiltLeft, function () {
    if (input.buttonIsPressed(Button.A) && input.runningTime() >= 900) {
        for (let i = 0; i < 1; i++) {
            for (let n = 0; n <= list.length - 1; n++) {
                for (let o = 0; o <= list[n] - 1; o++) {
                    led.plot(Math.randomRange(0, 5), Math.randomRange(0, 5))
                }
                basic.pause(1000)
                basic.clearScreen()
            }
        }
    }
})
input.onGesture(Gesture.LogoDown, function () {
    if (input.buttonIsPressed(Button.A) && input.runningTime() >= 900) {
        for (let i = 0; i < 2; i++) {
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
    }
})
input.onButtonPressed(Button.B, function () {
    while (!(input.buttonIsPressed(Button.A))) {
        basic.showIcon(IconNames.Heart)
        basic.showIcon(IconNames.SmallHeart)
        basic.clearScreen()
    }
})
input.onGesture(Gesture.LogoUp, function () {
    if (input.buttonIsPressed(Button.A) && input.runningTime() >= 900) {
        led.setBrightness(185)
        for (let i = 0; i < 2; i++) {
            for (let index = 0; index <= 4; index++) {
                led.plot(index, Math.randomRange(0, 5))
                led.plot(index2, Math.randomRange(0, 5))
            }
        }
    }
})
input.onGesture(Gesture.Shake, function () {
    if (input.buttonIsPressed(Button.A) && input.runningTime() >= 900) {
        for (let i = 0; i < 2; i++) {
            for (let yindex2 = 0; yindex2 <= Math.randomRange(0, 4); yindex2++) {
                for (let xindex = 0; xindex <= Math.randomRange(0, 4); xindex++) {
                    led.plot(xindex, yindex2)
                    basic.pause(100)
                    led.unplot(xindex, yindex2)
                    basic.pause(100)
                }
            }
        }
    }
})
input.onGesture(Gesture.TiltRight, function () {
    if (input.buttonIsPressed(Button.A) && input.runningTime() >= 900) {
        for (let i = 0; i < 5; i++) {
            basic.showAnimation(`

                            
                # . . # . . # . # . # . . # . . # . # . # . . # . # . . # .

                            
                # . . # # # . . # # # . . # # # . . # # # . . # # # . . # #

                            
                # # # # . # # # # . # # # # . # # # # . # # # # . # # # # .

                            
                # # # # . # # # # . # # # # . # # # # . # # # # . # # # # .

                            
                # . # . # # # . # . # # . # . # . . # . . # # . . # . # . #

                            
                `, 700)
basic.clearScreen()
        }
    }
})
let reverse = 0
let list: number[] = []
let speed = 0
let index2 = 0
index2 = 0
let yindex = 0
let inner = 0
speed = 10
let index = 0
led.setBrightness(255)
while (!(input.buttonIsPressed(Button.A))) {
    basic.showIcon(IconNames.Heart)
    basic.showIcon(IconNames.SmallHeart)
    basic.clearScreen()
}
list = [5, 2, 1, 3, 4]
