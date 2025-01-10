import { updateBox, box } from "./action.js"
import { generateCss, cssGeneratedText, Text, print} from "./generation.js"

// Colour Container
export let boxColour = document.querySelector(".box-colour")
export let gradColour = document.querySelector(".tick-grad")
export let gradDeglabel = document.querySelector(".grad-deg-label")
export let boxColour2 = document.querySelector(".box-colour-2")
export let linear1 = document.querySelector(".linear-1")
export let linear2 = document.querySelector(".linear-2")
export let gradDeg = document.querySelector(".grad-deg")



// Colour Code
gradColour.addEventListener("change", () => {
    if(boxColour2.classList.contains("box-hide"))
    {
        boxColour2.classList.remove("box-hide")
        gradDeglabel.classList.remove("box-hide")
        linear1.classList.remove("box-hide")
        linear2.classList.remove("box-hide")
    }
    else
    {
        boxColour2.classList.add("box-hide")
        gradDeglabel.classList.add("box-hide")
        linear1.classList.add("box-hide")
        linear2.classList.add("box-hide")
    }
})



boxColour.addEventListener("input", (e) => {
    if(gradColour.checked)
    {
        backgroundSetter(e.target.value, linear1.value, boxColour2.value, linear2.value,gradDeg.value)
    }
    else
    {
        updateBox('background', e.target.value, box)
        generateCss(1,  `background: ${e.target.value}`)
    }
    Text.pasteText = print(cssGeneratedText)
})

boxColour2.addEventListener("input", (e) => {
    backgroundSetter(boxColour.value, linear1.value, e.target.value, linear2.value,gradDeg.value)
    Text.pasteText =  print(cssGeneratedText)
})

gradDeg.addEventListener("input", (e) => {
    backgroundSetter(boxColour.value, linear1.value, boxColour2.value, linear2.value, e.target.value)
    Text.pasteText =  print(cssGeneratedText)
})

linear1.addEventListener("input", (e) => {
    backgroundSetter(boxColour.value, e.target.value, boxColour2.value, linear2.value,gradDeg.value)
    Text.pasteText =  print(cssGeneratedText)
})

linear2.addEventListener("input", (e) => {
    backgroundSetter(boxColour.value, linear1.value,boxColour2.value, e.target.value,gradDeg.value)
    Text.pasteText = print(cssGeneratedText)
})

function backgroundSetter(a,b,c,d,e)
{
    updateBox('background', `linear-gradient(${e}deg, ${a} ${b}%, ${c} ${d}%)`, box)
    generateCss(1,`background: linear-gradient(${e}deg, ${a} ${b}%, ${c} ${d}%);`)
}