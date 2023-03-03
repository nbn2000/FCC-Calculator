import { useState } from "react";
import { create, all } from 'mathjs'

export const useStateAndVars = () => {
    // This function returns a set of state variables and other necessary variables for the calculator.

    const [display, setDisplay] = useState('0') // This state variable stores the current value displayed on the calculator.
    const [curDisp, setCurDisp] = useState('0') // This state variable stores the current value being entered by the user.
    const [bool, setBool] = useState(false) // This state variable is used to check if the user has clicked the '=' button.
    const regex = new RegExp(/[+\-*/⋅]/) // This regular expression is used to check for all the operation signs.
    const array = display.split(regex) // This variable is an array of all the values entered by the user (numbers and decimals).
    const last = array[array.length - 1] // This variable is the last value entered by the user.
    const lastEl = display[display.length - 1] // This variable is the last character entered by the user.
    const math = create(all) // This creates an instance of the mathjs library, which is used for performing mathematical operations.

    // Return all the variables as an object.
    return {
        math,
        display,
        setDisplay,
        curDisp,
        setCurDisp,
        bool,
        setBool,
        regex,
        last,
        lastEl
    }
}