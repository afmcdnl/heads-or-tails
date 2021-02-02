let Coin = 0
/**
 * coin
 * 
 * Flip - input
 * 
 * display 'H' or 'T'
 * 
 * two option - 0 or 1
 * 
 * if coin = 0 -> H
 * 
 * if coin = 1 -> T
 */
input.onGesture(Gesture.Shake, function () {
    Coin = randint(0, 1)
    if (Coin == 0) {
        basic.showLeds(`
            # . . # .
            # . . # .
            # # # # .
            # . . # .
            # . . # .
            `)
    } else if (Coin == 1) {
        basic.showLeds(`
            # # # # #
            . . # . .
            . . # . .
            . . # . .
            . . # . .
            `)
    }
})
