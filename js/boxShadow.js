"use strict"
import { updateBox, box } from "./action.js"
import { generateCss, cssGeneratedText, Text, print} from "./generation.js"

// Box Shadows Container
export let shadowX = document.querySelector(".shadow-x")
export let shadowY = document.querySelector(".shadow-y")
export let shadowBlur = document.querySelector(".shadow-blur")
export let shadowSpread = document.querySelector(".shadow-spread")
export let shadowColour = document.querySelector(".shadow-colour")

//Box Shadow Code

shadowX.addEventListener("input", (e) => {
    updateBox('boxShadow',`${e.target.value}px ${shadowY.value}px ${shadowBlur.value}px  ${shadowSpread.value}px ${shadowColour.value}`, box)
    generateCss(5,`box-shadow: ${e.target.value}px ${shadowY.value}px ${shadowBlur.value}px  ${shadowSpread.value}px ${shadowColour.value};`)
    Text.pasteText = print(cssGeneratedText)
})
shadowY.addEventListener("input", (e) => {
    updateBox('boxShadow',`${shadowX.value}px ${e.target.value}px ${shadowBlur.value}px  ${shadowSpread.value}px ${shadowColour.value}`, box)
    generateCss(5,`box-shadow: ${shadowX.value}px ${e.target.value}px ${shadowBlur.value}px  ${shadowSpread.value}px ${shadowColour.value};`)
    Text.pasteText = print(cssGeneratedText)
})
shadowBlur.addEventListener("input", (e) => {
    updateBox('boxShadow', `${shadowX.value}px ${shadowY.value}px ${e.target.value}px  ${shadowSpread.value}px ${shadowColour.value}`, box)
    generateCss(5, `box-shadow: ${shadowX.value}px ${shadowY.value}px ${e.target.value}px  ${shadowSpread.value}px ${shadowColour.value};`)
    Text.pasteText = print(cssGeneratedText)
})
shadowSpread.addEventListener("input", (e) => {
    updateBox('boxShadow', `${shadowX.value}px ${shadowY.value}px ${shadowBlur.value}px  ${e.target.value}px ${shadowColour.value}`, box)
    generateCss(5,`box-shadow: ${shadowX.value}px ${shadowY.value}px ${shadowBlur.value}px  ${e.target.value}px ${shadowColour.value};`)
    Text.pasteText = print(cssGeneratedText)
})
shadowColour.addEventListener("input", (e) => {
    updateBox('boxShadow', `${shadowX.value}px ${shadowY.value}px ${shadowBlur.value}px  ${shadowSpread.value}px ${e.target.value}`, box)
    generateCss(5,`box-shadow: ${shadowX.value}px ${shadowY.value}px ${shadowBlur.value}px  ${shadowSpread.value}px ${e.target.value};`)
    Text.pasteText = print(cssGeneratedText)
})
