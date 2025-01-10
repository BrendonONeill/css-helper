//Action Container
export let cssName = document.querySelector(".css-name")
export let nameId = document.querySelector("#name-id")
export let nameClass = document.querySelector("#name-class")
export let box = document.querySelector(".box")
export let innerBox = document.querySelector(".inner-box")
export let outerBox = document.querySelector(".outer-box")

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
        pasteText = print(cssGeneratedText)
    }
})


export function updateBox(key,value,updatedItem)
{
    console.log(key,value,updatedItem)
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



export function calculateHeightAndWidth(padding, type, direction)
{
    console.log(boxesValues)
    if(type == "rem" || type == "em")
    {
        let test = (padding * 16) * 2

        if(direction == "Height")
            {   
                let a = test + Number(boxesValues.boxHeight)
                return a
            }
            if(direction == "Width")
            {
                let a = test + Number(boxesValues.boxWidth)
                return a
            }
    }
    if(type == 'px')
    {
        let test = boxesValues.outerBoxAllPadding * 2
        
        if(direction == "Height")
        {   
            let a = test + Number(boxesValues.boxHeight)
            return a
        }
        if(direction == "Width")
        {
            let a = test + Number(boxesValues.boxWidth)
            return a
        }
        
    }
    if(type == "%")
    {
        let test = (boxesValues.boxWidth * (padding/100) * 2)
        console.log(test)
        if(direction == "Height")
            {   
                let a = test + Number(boxesValues.boxHeight)
                return a
            }
            if(direction == "Width")
            {
                let a = test + Number(boxesValues.boxWidth)
                return a
            }
    }
}