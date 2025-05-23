"use strict"
import { updateBox, box, outerBox, calculateHeightAndWidth, boxesValues} from "./action.js"
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

marginTypeGrid.addEventListener("input",(e) => {
    marginType =  e.target.value
  if(!separateMargin.checked)
    {
        marginSetter(allMargin.value,null)
    }
    else
    {
        marginSetter(null,[topMargin.value,rightMargin.value,bottomMargin.value,leftMargin.value])
    }
})

allMargin.addEventListener("input", (e) => {
    if(!separateMargin.checked)
    {
        marginSetter(e.target.value, null)
    }
})


separateMarginOptions.addEventListener("input", () => {
    marginSetter(null,[Number(topMargin.value),Number(rightMargin.value),Number(bottomMargin.value),Number(leftMargin.value)])
})


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


function marginSetter(AM, DM)
{
    if(!outerBox.classList.contains("colour-outer-box"))
    {
        outerBox.classList.add("colour-outer-box")
    }
    if(AM == null)
    {
        updateBox('height',`${calculateHeightAndWidth(DM,marginType,'Height',separateMargin.checked)}px`,outerBox)
        updateBox('width',`${calculateHeightAndWidth(DM,marginType, 'Width', separateMargin.checked)}px`, outerBox)
        updateBox('padding', `${DM[0]}${marginType}  ${DM[1]}${marginType} ${DM[2]}${marginType} ${DM[3]}${marginType}`, outerBox)
        generateCss(13, `margin: ${DM[0]}${marginType}  ${DM[1]}${marginType} ${DM[2]}${marginType} ${DM[3]}${marginType};`)
    } 
    else
    {
        if(AM == "" || AM == 0)
        {
            return
        }
        updateBox('height',`${calculateHeightAndWidth(AM,marginType,'Height',separateMargin.checked)}px`,outerBox)
        updateBox('width',`${calculateHeightAndWidth(AM,marginType, 'Width', separateMargin.checked)}px`, outerBox)
        updateBox('padding', `${AM}${marginType}`, outerBox)
        boxesValues.outerBoxAllPadding = Number(AM)
        generateCss(13, `margin: ${AM}${marginType};`)
    }
    Text.pasteText = print(cssGeneratedText)
}






