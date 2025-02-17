import { cssGeneratedText, Text, print } from "./generation.js"

//Action Container
export let cssName = document.querySelector(".css-name")
export let nameId = document.querySelector("#name-id")
export let nameClass = document.querySelector("#name-class")
export let box = document.querySelector(".box")
export let innerBox = document.querySelector(".inner-box")
export let outerBox = document.querySelector(".outer-box")
let actionBox = document.querySelector(".action")

//Action Function grabs
export const boxFn = () => document.querySelector(".box")
export const innerBoxFn = () => document.querySelector(".inner-box")
export const outerBoxFn = () => document.querySelector(".outer-box")


// 
export const boxesValues = {
    boxHeight : 200,
    boxWidth : 200,
    boxAllPadding : 0,
    boxTopPadding: 0,
    boxRightPadding: 0,
    boxBottomPadding: 0,
    boxLeftPadding: 0,
    outerBoxAllPadding: 0,
    outerBoxTopPadding: 0,
    outerBoxRightPadding: 0,
    outerBoxBottomPadding: 0,
    outerBoxLeftPadding: 0
    //add padding of box
    //add padding of outerBox
}

// Animation Timer
export let timeUpdate = 0;



// Action Code

cssName.addEventListener("input", (e) => {
    let name = ""
    if(e.target.id === "css-name")
    {
        name = e.target.value
    }
    if(name !== "")
    {
        name = name.replaceAll(" ", "-")
        if(nameClass.checked)
        {
            cssGeneratedText[0] = "." + name + "{"
        }
        if(nameId.checked)
        {
            cssGeneratedText[0] = "#" + name + "{"
        }
        Text.pasteText = print(cssGeneratedText)
    }
})


export function updateBox(key,value,updatedItem)
{
    if(key == "top" || key == "right" || key == "bottom" || key == "left" || key == "width" || key == "height")
    {
        updatedItem.style[key] = value
        return
    }
    animationTime(() => {updatedItem.style[key] = value}) 
}





// Needs to be implemented after refactor
//
//  animationTime(() => cb(a,b))
//
// timer function
function animationTime(cb)
{
    const now = Date.now();
    if (now - timeUpdate > 50) 
    {
        cb()
        timeUpdate = now;
    }
}

export function calculateHeightAndWidth(padding, type, direction, separateMargins)
{
    let result = calculateOuterPadding(padding, type, direction, separateMargins)
    if(direction == "Height")
    {  
        return result + boxesValues.boxHeight
    }
    else
    {
        return result + boxesValues.boxWidth
    }

}


function calculateOuterPadding(padding, type, direction, separateMargins)
{
    let result = 0
    if(type == "rem" || type == "em")
    {
        if(separateMargins)
        {
            if(direction == "Height")
            {
                result = (padding[0] * 16) + (padding[2] * 16)
            }
            else
            {
                result = (padding[1] * 16) + (padding[3] * 16)
            }
        }
        else
        {
            result = (padding * 16) * 2
        }
        return result
    }

    if(type == 'px')
    {
        if(separateMargins)
        {
            if(direction == "Height")
            {
                result = padding[0] + padding[2]
            }
            else
            {
                result = padding[1] + padding[3]
            }
        }
        else
        {
            result = padding * 2
        }
       
        return result
        
    }
    if(type == "%")
    {
        if(separateMargins)
            {
                if(direction == "Height")
                {
                    result = (actionBox.clientWidth * (padding[0]/100)) + (actionBox.clientWidth * (padding[2]/100))  
                }
                else
                {
                    result = (actionBox.clientWidth * (padding[1]/100)) + (actionBox.clientWidth * (padding[3]/100)) 
                }
            }
            else
            {
                
                result = (actionBox.clientWidth * (padding/100)) * 2
            }
        return result
    }
}