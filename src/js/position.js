"use strict"
import { updateBox, outerBox } from "./action.js"
import { generateCss, cssGeneratedText, Text, print} from "./generation.js"


// Position Container
export let positionCheck = document.querySelector(".position-check")
export let positionTypeContainer = document.querySelector(".position-type-container")
export let positionTypeOptions = document.querySelector(".position-type")
export let positionNumbersContainer = document.querySelector(".position-numbers-container")
export let positionNumbers = document.querySelector(".position-numbers")
export let positionNumbersTypeContainer = document.querySelector(".position-type-grid")
export let topPosition = document.querySelector(".top-position-number")
export let rightPosition = document.querySelector(".right-position-number")
export let bottomPosition = document.querySelector(".bottom-position-number")
export let leftPosition = document.querySelector(".left-position-number")
export let positionType = "static"
export let positionNumbersType = "px"



// Position Code

positionCheck.addEventListener("click", () => {
    if(positionCheck.checked)
    {
        positionTypeContainer.classList.remove("box-invisible")
    }
    else
    {
        positionTypeContainer.classList.add("box-invisible")
    }
})

positionNumbersTypeContainer.addEventListener("input", (e) => {
   positionNumbersType = e.target.value
})

positionNumbers.addEventListener("input", () => {
    positionSetter([topPosition.value,rightPosition.value,bottomPosition.value,leftPosition.value],positionNumbersType,positionType)
})

positionTypeOptions.addEventListener("input", (e) => {
    positionType = e.target.value
    if(positionType != 'static')
    {
        positionNumbersContainer.classList.remove("box-invisible")
        updateBox('position', positionType, outerBox)
    }
    else
    {
        positionNumbersContainer.classList.add("box-invisible")
        updateBox('position', "", outerBox)
    }
})

function positionSetter(numPos, type, postype)
{
    cssGeneratedText[6] = `position: ${postype};`
    for(let i = 0; i <= 3; i++)
    {
        if(Object.is(Number(numPos[i]),-0))
        {
            generateCss((i+7), null)
        }
        else
        {
            updateBox(positionDirection(i), `${numPos[i]}${type}`,outerBox)
            generateCss((i + 7), `${positionDirection(i)}: ${numPos[i]}${type};`)
        }
    }
    Text.pasteText = print(cssGeneratedText)
}

function positionDirection(direction)
{
    if(direction == 0) return  "top"
    if(direction == 1) return  "right"
    if(direction == 2) return  "bottom"
    if(direction == 3) return  "left"
}

