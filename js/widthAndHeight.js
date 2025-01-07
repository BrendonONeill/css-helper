"use strict"
import { updateBox, box, outerBox, boxesValues, calculateHeightAndWidth } from "./action.js"
import { generateCss, cssGeneratedText, Text, print} from "./generation.js"
import { allMargin, marginType} from "./margin.js"



// Width and Height Container

export let widthAndHeightTypeContainer = document.querySelector(".widthAndHeightType")
export let widthNum = document.querySelector(".widthNumBox")
export let widthSlider = document.querySelector(".widthNumSlider")
export let heightNum = document.querySelector(".heightNumBox")
export let heightSlider = document.querySelector(".heightNumSlider")
export let widthAndHeightType = "px"




// Width and Height Code

widthAndHeightTypeContainer.addEventListener("input", (e) => {
    widthAndHeightType = e.target.value
})

widthNum.addEventListener("input", (e) => {
   widthSlider.value = e.target.value
   widthAndHeightSetter(e.target.value, "width", widthAndHeightType)
})
widthSlider.addEventListener("input", (e) => {
    widthNum.value = e.target.value
    widthAndHeightSetter(e.target.value, "width", widthAndHeightType)
})
heightNum.addEventListener("input", (e) => {
    heightSlider.value = e.target.value
    widthAndHeightSetter(e.target.value, "height", widthAndHeightType)
})
heightSlider.addEventListener("input", (e) => {
    heightNum.value = e.target.value
    widthAndHeightSetter(e.target.value, "height", widthAndHeightType)
})

function widthAndHeightSetter(value, direction, type)
{

   if(direction === 'height')
   {
        debugger
       updateBox('height', `${value}${type}`, box)
       boxesValues.boxHeight = value
       updateBox('height', `${calculateHeightAndWidth(boxesValues.outerBoxAllPadding,marginType,"Height")}${marginType}`,outerBox)
       generateCss(11, `height: ${value}${type}`)
   }
   else
   {
       updateBox('width', `${value}${type}`, box)
       boxesValues.boxWidth = value
       updateBox('width', `${calculateHeightAndWidth(boxesValues.outerBoxAllPadding,marginType,"Width")}${marginType}`,outerBox)
       generateCss(12, `width: ${value}${type}`)
   }
   Text.pasteText = print(cssGeneratedText)
}
