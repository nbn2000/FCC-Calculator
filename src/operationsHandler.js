export const operationsHandler = (operator, display, setDisplay, curDisp, setCurDisp,
    bool, setBool, regex, lastEl) => {
    // This function handles the operation when the user clicks an operator button.

    if (bool) {
        //if bool is true then concatenate to resulted value of equal with current operator then
        // update the stored value, and reset the 'bool' flag to false.
        setCurDisp(curDisp + operator)
        setDisplay(curDisp + operator)
        setBool(false)
    } else {
        // If the previous button was not clicked an operator, we need to determine how to handle
        // the current operator. First, we check if the last character is an operator.
        if (regex.test(lastEl)) {
            // If the last character is an operator, we need to check for certain conditions.
            if (lastEl !== '-' && operator === '-') {
                // If the last operator was not a '-', and the current operator is '-', then we
                // concatenate the '-' to the display value, update the stored value to '-', and update
                // the displayed value.
                setDisplay(display + operator)
                setCurDisp(operator)
            } else {
                // If the last operator was not a '-' and the current operator is not '-', then we check
                // if the last operator was also an operator. If it was, then we ignore the current operator.
                // Otherwise, we concatenate the current operator to the display value and update the stored value.
                if (display[display.length - 1] === "-") {
                    // If the last operator was '-', we remove it and replace it with the current operator.
                    setDisplay(display.slice(0, -2) + operator)
                    setCurDisp(operator)
                } else {
                    // If the last operator was not '-', we ignore the current operator.
                    return;
                }
            }
        } else {
            // If the last character was not an operator, we need to determine how to handle the current operator.
            // If the current operator is 'x', we replace it with the multiplication symbol '⋅'.
            // Otherwise, we concatenate the current operator to the display value and update the stored value.
            if (operator === 'x') {
                setDisplay(display + '⋅')
                setCurDisp('x')
            } else {
                setDisplay(display + operator)
                setCurDisp(operator)
            }
        }
    }
}