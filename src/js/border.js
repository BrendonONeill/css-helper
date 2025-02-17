"use strict"
import { updateBox, box } from "./action.js"
import { generateCss, cssGeneratedText, Text, print} from "./generation.js"

// Border Container
export let borderSize = document.querySelector(".border-number")
export let borderSlider = document.querySelector(".border-slider")
export let borderColour = document.querySelector(".border-colour")
export let borders = document.querySelectorAll(".border-type")
export let borderType = "solid"
export let radiusCheckBox = document.getElementById("separate-border-radius-checkbox")
export let separateRadiusOptions = document.getElementById("separate-radius-options")
export let borderRadiusType = 'px'
export let borderRadiusTypeCheck = document.querySelector(".border-radius-number-type")
export let topLeftRadiusNumber = document.querySelector(".top-left-radius")
export let topRightRadiusNumber = document.querySelector(".top-right-radius")
export let bottomLeftRadiusNumber = document.querySelector(".bottom-left-radius")
export let bottomRightRadiusNumber = document.querySelector(".bottom-right-radius")
export let slider = document.querySelector(".slider")
export let sliderNum = document.querySelector(".slider-number")




//Border Code

slider.addEventListener("input", (e) => {
    sliderNum.value = e.target.value
    updateBox('borderRadius', `${e.target.value}${borderRadiusType}`, box)
    generateCss(3, `border-radius: ${e.target.value}${borderRadiusType};`)
    Text.pasteText = print(cssGeneratedText)
})

sliderNum.addEventListener("change", (e) => {
    slider.value = e.target.value
    updateBox('borderRadius', `${e.target.value}${borderRadiusType}`, box)
    generateCss(3, `border-radius: ${e.target.value}${borderRadiusType};`)
    Text.pasteText = print(cssGeneratedText) 
})

borderSize.addEventListener("input", (e) => {
    borderSlider.value = e.target.value
    updateBox('border', `${e.target.value}px ${borderType} ${borderColour.value}`, box)
    generateCss(4, `border: ${e.target.value}px ${borderType} ${borderColour.value};`)
    Text.pasteText = print(cssGeneratedText)
})

borderSlider.addEventListener("input", (e) => {
    borderSize.value = e.target.value
    updateBox('border', `${borderSize.value}px ${borderType} ${borderColour.value}`, box)
    generateCss(4, `border: ${borderSize.value}px ${borderType} ${borderColour.value};`)
    Text.pasteText = print(cssGeneratedText)
})

borderColour.addEventListener("input", (e) => {
    updateBox('border', `${borderSize.value}px ${borderType} ${e.target.value}`, box)
    generateCss(4,  `border: ${borderSize.value}px ${borderType} ${e.target.value};`)
    Text.pasteText = print(cssGeneratedText)
})

borders.forEach((bt) => {
    bt.addEventListener("click", (e) => {
        borderType = e.target.value;
        updateBox('border', `${borderSize.value}px ${e.target.value} ${borderColour.value}`, box)
        generateCss(4, `border: ${borderSize.value}px ${e.target.value} ${borderColour.value};`)
        Text.pasteText =  print(cssGeneratedText)
    })
})


radiusCheckBox.addEventListener("change", () => {
    if(separateRadiusOptions.classList.contains("box-invisible"))
        {
            separateRadiusOptions.classList.remove("box-invisible")
        }
        else
        {
            separateRadiusOptions.classList.add("box-invisible")
        }
})

separateRadiusOptions.addEventListener("input", () => {
    test([topLeftRadiusNumber.value,topRightRadiusNumber.value,bottomRightRadiusNumber.value,bottomLeftRadiusNumber.value])
})

borderRadiusTypeCheck.addEventListener("change", (e) => {
    borderRadiusType = e.target.value
})

function test(SR)
{
    updateBox('borderRadius', `${SR[0]}${borderRadiusType} ${SR[1]}${borderRadiusType} ${SR[2]}${borderRadiusType} ${SR[3]}${borderRadiusType}`, box)
    generateCss(3, `border-radius: ${SR[0]}${borderRadiusType} ${SR[1]}${borderRadiusType} ${SR[2]}${borderRadiusType} ${SR[3]}${borderRadiusType};`)
    Text.pasteText =  print(cssGeneratedText)
}
