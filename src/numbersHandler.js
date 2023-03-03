// This function handles the logic for when a user clicks on a number button.
export const numbersHandler = (number, display, setDisplay, setCurDisp,
    bool, setBool, regex, last) => {
    // If bool is true, then this is the first click of a new operation.
    // Set the current display and overall display to the clicked number.
    // Set bool to false so that subsequent clicks are handled differently.
    if (bool) {
        setCurDisp(number)
        setDisplay(number)
        setBool(false)
    } else {
        // If the display currently shows a zero, replace it with the clicked number.
        if (display === '0') {
            setDisplay(number)
            setCurDisp(number)
        } else {
            // Otherwise, concatenate the clicked number onto the current display.
            setDisplay(display + number)
            // If the current display already contains a decimal point, update the current display to show the new number after the decimal.
            if (regex.test(display)) {
                setCurDisp(last + number)
            } else {
                // Otherwise, update the current display to show the new number concatenated onto the end of the existing display.
                setCurDisp(display + number)
            }
        }
    }
}
