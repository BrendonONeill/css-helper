"use strict"
import { updateBox, box, innerBox } from "./action.js"
import { generateCss, cssGeneratedText, Text, print} from "./generation.js"

// Padding
export let paddingTypeGrid = document.querySelector(".padding-type-grid")
export let separatePadding = document.querySelector(".separate-padding")
export let separatePaddingOptions = document.querySelector(".separate-padding-options")
export let allPadding = document.querySelector(".all-padding-number")
export let topPadding = document.querySelector(".top-padding-number")
export let rightPadding = document.querySelector(".right-padding-number")
export let bottomPadding = document.querySelector(".bottom-padding-number")
export let leftPadding = document.querySelector(".left-padding-number")
export let paddingType = 'px'




//Padding Code

paddingTypeGrid.addEventListener("input",(e) => {
  paddingType =  e.target.value
  if(!separatePadding.checked)
    {
        paddingSetter(allPadding.value,null)
    }
    else
    {
        paddingSetter(null,[topPadding.value,rightPadding.value,bottomPadding.value,leftPadding.value])
    }
})

allPadding.addEventListener("input", (e) => {
    if(!separatePadding.checked)
    {
        paddingSetter(e.target.value,null)
    }
})


function paddingSetter(AP,DP)
{
        if(!innerBox.classList.contains("colour-inner-box"))
        {
            innerBox.classList.add("colour-inner-box")
        }
        if(AP == null)
        {
            updateBox('padding', `${DP[0]}${paddingType}  ${DP[1]}${paddingType} ${DP[2]}${paddingType} ${DP[3]}${paddingType}`, box)
            generateCss(2, `padding: ${DP[0]}${paddingType}  ${DP[1]}${paddingType} ${DP[2]}${paddingType} ${DP[3]}${paddingType};`)
        } 
        else
        {
            updateBox('padding', `${AP}${paddingType}`, box)
            generateCss(2, `padding: ${AP}${paddingType};`)
        }
        Text.pasteText = print(cssGeneratedText)
}

separatePaddingOptions.addEventListener("input", () => {
    paddingSetter(null,[topPadding.value,rightPadding.value,bottomPadding.value,leftPadding.value])
})


separatePadding.addEventListener("change", () => {
    if(separatePaddingOptions.classList.contains("box-invisible"))
    {
        separatePaddingOptions.classList.remove("box-invisible")
    }
    else
    {
        separatePaddingOptions.classList.add("box-invisible")
    }
})

