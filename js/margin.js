"use strict"
import { updateBox, box } from "./action.js"
import { generateCss, cssGeneratedText, Text, print} from "./generation.js"


// Margin
export let marginTypeGrid = document.querySelector(".margin-type-grid")
export let separateMargin = document.querySelector(".separate-margin")
export let separateMarginOptions = document.querySelector(".separate-margin-options")
export let allMargin = document.querySelector(".all-margin-number")
export let topMargin = document.querySelector(".top-margin-number")
export let rightMargin = document.querySelector(".right-margin-number")
export let bottomMargin = document.querySelector(".bottom-margin-number")
export let leftMargin = document.querySelector(".left-margin-number")
export let marginType = 'px'
export let marginActive = true


// Margin Code

separateMargin.addEventListener("change", () => {
    if(separateMarginOptions.classList.contains("box-invisible"))
    {
        separateMarginOptions.classList.remove("box-invisible")
    }
    else
    {
        separateMarginOptions.classList.add("box-invisible")
    }
})
