"use strict"
// Print
 let pasteText = ""

// Navigation
let navBurger = document.querySelector(".nav-burger")
let sidebarClose = document.querySelector(".close")
let sidebar = document.querySelector(".options")

// Containers 
let optionsContainers = document.querySelectorAll(".options-container")
let deleteButtons = document.querySelectorAll(".delete-button")

//Action Container
let cssName = document.querySelector(".css-name")
let nameId = document.querySelector("#name-id")
let nameClass = document.querySelector("#name-class")
let box = document.querySelector(".box")
let innerBox = document.querySelector(".inner-box")

// Unknown
let cssBox = document.querySelector(".css-box")

// Colour Container
let slider = document.querySelector(".slider")
let sliderNum = document.querySelector(".slider-number")
let boxColour = document.querySelector(".box-colour")
let gradColour = document.querySelector(".tick-grad")
let gradDeglabel = document.querySelector(".grad-deg-label")
let boxColour2 = document.querySelector(".box-colour-2")
let linear1 = document.querySelector(".linear-1")
let linear2 = document.querySelector(".linear-2")
let gradDeg = document.querySelector(".grad-deg")

// Padding
let paddingTypeGrid = document.querySelector(".padding-type-grid")
let separatePadding = document.querySelector(".separate-padding")
let separatePaddingOptions = document.querySelector(".separate-padding-options")
let allPadding = document.querySelector(".all-padding-number")
let topPadding = document.querySelector(".top-padding-number")
let rightPadding = document.querySelector(".right-padding-number")
let bottomPadding = document.querySelector(".bottom-padding-number")
let leftPadding = document.querySelector(".left-padding-number")
let paddingType = 'px'

// Box Shadows Container
let shadowX = document.querySelector(".shadow-x")
let shadowY = document.querySelector(".shadow-y")
let shadowBlur = document.querySelector(".shadow-blur")
let shadowSpread = document.querySelector(".shadow-spread")
let shadowColour = document.querySelector(".shadow-colour")

// Border Container
let borderSize = document.querySelector(".border-number")
let borderSlider = document.querySelector(".border-slider")
let borderColour = document.querySelector(".border-colour")
let borders = document.querySelectorAll(".border-type")
let borderType = "solid"

// Position Container
let positionCheck = document.querySelector(".position-check")
let positionTypeContainer = document.querySelector(".position-type-container")
let positionTypeOptions = document.querySelector(".position-type")
let positionNumbersContainer = document.querySelector(".position-numbers-container")
let positionNumbers = document.querySelector(".position-numbers")
let positionNumbersTypeContainer = document.querySelector(".position-type-grid")
let topPosition = document.querySelector(".top-position-number")
let rightPosition = document.querySelector(".right-position-number")
let bottomPosition = document.querySelector(".bottom-position-number")
let leftPosition = document.querySelector(".left-position-number")
let positionType = "static"
let positionNumbersType = "px"

// Width and Height Container

let widthAndHeightTypeContainer = document.querySelector(".widthAndHeightType")
let widthNum = document.querySelector(".widthNumBox")
let widthSlider = document.querySelector(".widthNumSlider")
let heightNum = document.querySelector(".heightNumBox")
let heightSlider = document.querySelector(".heightNumSlider")
let widthAndHeightType = "px"


// Code box Container
let cssGeneratedText = ["{", null, null, null, null, null, null, null, null, null, null, null, null, "}"]
let pasteButton = document.querySelector(".paste")

// Animation Timer
let timeUpdate = 0;


// Navigation Code

navBurger.addEventListener("click", () => { 

        if(sidebar.classList.contains("active"))
        {
            sidebar.classList.remove("active")
        }
        else
        {
            sidebar.classList.add("active")
        }
      
})

sidebarClose.addEventListener("click", (e) => {
        sidebar.classList.remove("active")  
})

//Containers Code

optionsContainers.forEach((container) => {
    let content = container.querySelector("div")
    let containerHeader = container.querySelector(".options-container-header")
    let containerButton = container.querySelector(".options-container-button")
    containerHeader.addEventListener("click", () => {    
        content.classList.toggle("accordion-close")
        containerHeader.classList.toggle("options-container-h2-closed")
        containerButton.classList.toggle("button-flip")
    })
})

deleteButtons.forEach((deleteBT) => {
    deleteBT.addEventListener("click", () => {
        let type = deleteBT.getAttribute('data-item')
        removedCSSCode(type)
    })
})


function removedCSSCode(type)
{
    switch(type) {
        case 'colour':
            boxColour.value = '#306F9C'
            gradDeg.value = 0
            linear1.value = 50
            linear2.value = 50
            boxColour2.value = '#ffffff'
            box.style.background = '';
            cssGeneratedText[1] = null;
            break;
        case 'padding':
            allPadding.value = 0
            topPadding.value = 0
            rightPadding.value = 0
            bottomPadding.value = 0
            leftPadding.value = 0
            box.style.padding = "0"
            innerBox.classList.remove("colour-inner-box")
            cssGeneratedText[2] = null;
            break;
        case 'border-radius':
            box.style.borderRadius = ''
            slider.value = 0
            sliderNum.value = 0
            cssGeneratedText[3] = null;
            break;
        case 'border':
            
            borderSlider.value = 0;
            borderSize.value = 0;
            borderColour.value = '#ffffff';
            box.style.border = '';
            cssGeneratedText[4] = null;
            break;
        case 'box-shadow':
            shadowX.value = 0
            shadowY.value = 0
            shadowBlur.value = 0
            shadowSpread.value = 0
            shadowColour.value = '#ffffff'
            box.style.boxShadow = ''
            cssGeneratedText[5] = null;
            break;
        case 'position':
            box.style.top = box.style.right = box.style.bottom = box.style.left = ""
            topPosition.value = rightPosition.value = bottomPosition.value = leftPosition.value = "-0"
            cssGeneratedText[6] = cssGeneratedText[7] = cssGeneratedText[8] = cssGeneratedText[9] = cssGeneratedText[10] = null;
            break;

        case 'widthAndHeight':
            
            heightNum.value = heightSlider.value = widthNum.value = widthSlider.value = 200
            box.style.height = "200px"
            box.style.width = "200px"
            cssGeneratedText[11] = cssGeneratedText[12] = null;
            break;
        default:
            console.log("Oops that shouldn't happen")
    }
 pasteText = print(cssGeneratedText)
} 

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
        updateBox('background', e.target.value)
        generateCss(1,  `background: ${e.target.value}`)
    }
    pasteText = print(cssGeneratedText)
})

boxColour2.addEventListener("input", (e) => {
    backgroundSetter(boxColour.value, linear1.value, e.target.value, linear2.value,gradDeg.value)
    pasteText =  print(cssGeneratedText)
})

gradDeg.addEventListener("input", (e) => {
    backgroundSetter(boxColour.value, linear1.value, boxColour2.value, linear2.value, e.target.value)
    pasteText =  print(cssGeneratedText)
})

linear1.addEventListener("input", (e) => {
    backgroundSetter(boxColour.value, e.target.value, boxColour2.value, linear2.value,gradDeg.value)
    pasteText =  print(cssGeneratedText)
})

linear2.addEventListener("input", (e) => {
    backgroundSetter(boxColour.value, linear1.value,boxColour2.value, e.target.value,gradDeg.value)
    pasteText = print(cssGeneratedText)
})

function backgroundSetter(a,b,c,d,e)
{
    updateBox('background', `linear-gradient(${e}deg, ${a} ${b}%, ${c} ${d}%)`)
    generateCss(1,`background: linear-gradient(${e}deg, ${a} ${b}%, ${c} ${d}%);`)
}

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
            updateBox('padding', `${DP[0]}${paddingType}  ${DP[1]}${paddingType} ${DP[2]}${paddingType} ${DP[3]}${paddingType}`)
            generateCss(2, `padding: ${DP[0]}${paddingType}  ${DP[1]}${paddingType} ${DP[2]}${paddingType} ${DP[3]}${paddingType}`)
        } 
        else
        {
            updateBox('padding', `${AP}${paddingType}`)
            generateCss(2, `padding: ${AP}${paddingType}`)
        }
        pasteText = print(cssGeneratedText)
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


//Border Code

slider.addEventListener("input", (e) => {
    sliderNum.value = e.target.value
    updateBox('borderRadius', `${e.target.value}%`)
    generateCss(3, `border-radius: ${e.target.value}px;`)
    pasteText = print(cssGeneratedText)
})

sliderNum.addEventListener("change", (e) => {
    slider.value = e.target.value
    updateBox('borderRadius', `${e.target.value}px`)
    generateCss(3, `border-radius: ${e.target.value}px;`)
    pasteText = print(cssGeneratedText) 
})

borderSize.addEventListener("input", (e) => {
    borderSlider.value = e.target.value
    updateBox('border', `${e.target.value}px ${borderType} ${borderColour.value}`)
    generateCss(4, `border: ${e.target.value}px ${borderType} ${borderColour.value};`)
    pasteText = print(cssGeneratedText)
})

borderSlider.addEventListener("input", (e) => {
    borderSize.value = e.target.value
    updateBox('border', `${borderSize.value}px ${borderType} ${borderColour.value}`)
    generateCss(4, `border: ${borderSize.value}px ${borderType} ${borderColour.value};`)
    pasteText = print(cssGeneratedText)
})

borderColour.addEventListener("input", (e) => {
    updateBox('border', `${borderSize.value}px ${borderType} ${e.target.value}`)
    generateCss(4,  `border: ${borderSize.value}px ${borderType} ${e.target.value};`)
    pasteText = print(cssGeneratedText)
})

borders.forEach((bt) => {
    bt.addEventListener("click", (e) => {
        borderType = e.target.value;
        updateBox('border', `${borderSize.value}px ${e.target.value} ${borderColour.value}`)
        generateCss(4, `border: ${borderSize.value}px ${e.target.value} ${borderColour.value};`)
        pasteText =  print(cssGeneratedText)
    })
})



//Box Shadow Code

shadowX.addEventListener("input", (e) => {
    updateBox('boxShadow',`${e.target.value}px ${shadowY.value}px ${shadowBlur.value}px  ${shadowSpread.value}px ${shadowColour.value}`)
    generateCss(5,`box-shadow: ${e.target.value}px ${shadowY.value}px ${shadowBlur.value}px  ${shadowSpread.value}px ${shadowColour.value};`)
    pasteText = print(cssGeneratedText)
})
shadowY.addEventListener("input", (e) => {
    updateBox('boxShadow',`${shadowX.value}px ${e.target.value}px ${shadowBlur.value}px  ${shadowSpread.value}px ${shadowColour.value}`)
    generateCss(5,`box-shadow: ${shadowX.value}px ${e.target.value}px ${shadowBlur.value}px  ${shadowSpread.value}px ${shadowColour.value};`)
    pasteText = print(cssGeneratedText)
})
shadowBlur.addEventListener("input", (e) => {
    updateBox('boxShadow', `${shadowX.value}px ${shadowY.value}px ${e.target.value}px  ${shadowSpread.value}px ${shadowColour.value}`)
    generateCss(5, `box-shadow: ${shadowX.value}px ${shadowY.value}px ${e.target.value}px  ${shadowSpread.value}px ${shadowColour.value};`)
    pasteText = print(cssGeneratedText)
})
shadowSpread.addEventListener("input", (e) => {
    updateBox('boxShadow', `${shadowX.value}px ${shadowY.value}px ${shadowBlur.value}px  ${e.target.value}px ${shadowColour.value}`)
    generateCss(5,`box-shadow: ${shadowX.value}px ${shadowY.value}px ${shadowBlur.value}px  ${e.target.value}px ${shadowColour.value};`)
    pasteText = print(cssGeneratedText)
})
shadowColour.addEventListener("input", (e) => {
    updateBox('boxShadow', `${shadowX.value}px ${shadowY.value}px ${shadowBlur.value}px  ${shadowSpread.value}px ${e.target.value}`)
    generateCss(5,`box-shadow: ${shadowX.value}px ${shadowY.value}px ${shadowBlur.value}px  ${shadowSpread.value}px ${e.target.value};`)
    pasteText = print(cssGeneratedText)
})


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
        updateBox('position', positionType)
    }
    else
    {
        positionNumbersContainer.classList.add("box-invisible")
        updateBox('position', "")
    }
})


function positionSetter(numPos, type, postype)
{
    cssGeneratedText[6] = `position: ${postype}`
    for(let i = 0; i <= 3; i++)
    {
        if(Object.is(Number(numPos[i]),-0))
        {
            generateCss((i+7), null)
        }
        else
        {
            updateBox(positionDirection(i), `${numPos[i]}${type}`)
            generateCss((i + 7), `${positionDirection(i)}: ${numPos[i]}${type}`)
        }
    }
    pasteText = print(cssGeneratedText)
   

}

function positionDirection(direction)
{
    if(direction == 0) return  "top"
    if(direction == 1) return  "right"
    if(direction == 2) return  "bottom"
    if(direction == 3) return  "left"
}

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
        updateBox('height', `${value}${type}`)
        generateCss(11, `height: ${value}${type}`)
    }
    else
    {
        updateBox('width', `${value}${type}`)
        generateCss(12, `width: ${value}${type}`)
    }
    pasteText = print(cssGeneratedText)
}

// Code Box Code
function print(codelines)
{
    let text = ""
    let pasteText = ""
    let fragment = document.createDocumentFragment()
    codelines.map((code,index) => {
        if(index === 0 || index === 13)
        {
            text +=  code + " \n"
            pasteText +=  code + " \n"
            return
        }
        if(code !== null){
            if(window.innerWidth < 600)
            {
                text += " \t" + code.slice(0, 32) + "..." + " \n"
                pasteText +=  " \t" + code + " \n"
                return
            }
            text +=  " \t" + code + " \n"
            pasteText +=  " \t" + code + " \n"
            return
        }
    })
    let line = document.createElement("pre")
    line.classList.add("line")
    line.textContent = text
    fragment.appendChild(line)
    document.querySelector(".css-code-block").innerHTML = ""
    document.querySelector(".css-code-block").appendChild(fragment)
    return pasteText
}

function generateCss(cssPos, cssText)
{
    cssGeneratedText[cssPos] = cssText;
}

function updateBox(key,value)
{
    animationTime(() => { box.style[key] = value}) 
}

pasteButton.addEventListener("click", (e) => {
    e.preventDefault()
    navigator.clipboard.writeText(pasteText).then(() => {
        pasteButton.classList.add("copied")
        pasteButton.textContent = "Copied"
        setTimeout(() => {
            pasteButton.classList.remove("copied");
            pasteButton.textContent = "Copy"; 
        }, 2000)
    })
})


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


