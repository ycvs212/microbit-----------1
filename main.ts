let x = 2
let y = 2
basic.forever(function () {
    basic.clearScreen()
    led.plot(x, y)
})
basic.forever(function () {
    if (input.rotation(Rotation.Roll) < -60) {
        x = 0
    }
    if (input.rotation(Rotation.Roll) >= -60 && input.rotation(Rotation.Roll) < -30) {
        x = 1
    }
    if (input.rotation(Rotation.Roll) > -30 && input.rotation(Rotation.Roll) < 30) {
        x = 2
    }
    if (input.rotation(Rotation.Roll) >= 30 && input.rotation(Rotation.Roll) < 60) {
        x = 3
    }
    if (input.rotation(Rotation.Roll) >= 60) {
        x = 4
    }
})
basic.forever(function () {
    if (input.rotation(Rotation.Pitch) < -60) {
        y = 0
    }
    if (input.rotation(Rotation.Pitch) >= -60 && input.rotation(Rotation.Pitch) < -30) {
        y = 1
    }
    if (input.rotation(Rotation.Pitch) > -30 && input.rotation(Rotation.Pitch) < 30) {
        y = 2
    }
    if (input.rotation(Rotation.Pitch) >= 30 && input.rotation(Rotation.Pitch) < 60) {
        y = 3
    }
    if (input.rotation(Rotation.Pitch) >= 60) {
        y = 4
    }
})
