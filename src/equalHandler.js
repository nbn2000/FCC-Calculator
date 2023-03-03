export const equalHandler = (math, display, setDisplay, setCurDisp,
    bool, setBool) => {

    // Toggle bool value to handle multiple clicks
    if (!bool) {
        setBool(true) // Set bool to true on first click
    } else {
        setBool(false) // Toggle bool on subsequent clicks
    }

    // Replace '⋅' with '*' to prepare expression for math evaluation
    let expression = display
    if (expression.includes('⋅')) {
        expression = expression.replace('⋅', '*')
    }

    try {
        // Evaluate the expression using math.js library
        const result = math.evaluate(expression)

        // Set display to show expression and result
        setDisplay(display + '=' + result)

        // Set the current display to the result
        setCurDisp(result)
    } catch (error) {
        // If there is an error, log it to the console
        console.error(error)
    }
}