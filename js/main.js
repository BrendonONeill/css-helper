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
let setPrint = ["{", null, null, null, null, null, null, null, null, null, null, null, null, "}"]
let est = document.querySelector(".paste")


// Navigation Code

navBurger.addEventListener("click", () => { 
        sidebar.classList.add("active")
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
        switch(type) {
            case 'colour':
                boxColour.value = '#306F9C'
                gradDeg.value = 0
                linear1.value = 50
                linear2.value = 50
                boxColour2.value = '#ffffff'
                box.style.background = '';
                setPrint[1] = null;
                break;
            case 'padding':
                allPadding.value = 0
                topPadding.value = 0
                rightPadding.value = 0
                bottomPadding.value = 0
                leftPadding.value = 0
                box.style.padding = "0"
                innerBox.classList.remove("colour-inner-box")
                setPrint[2] = null;
                break;
            case 'border-radius':
                box.style.borderRadius = ''
                slider.value = 0
                sliderNum.value = 0
                setPrint[3] = null;
                break;
            case 'border':
                
                borderSlider.value = 0;
                borderSize.value = 0;
                borderColour.value = '#ffffff';
                box.style.border = '';
                setPrint[4] = null;
                break;
            case 'box-shadow':
                shadowX.value = 0
                shadowY.value = 0
                shadowBlur.value = 0
                shadowSpread.value = 0
                shadowColour.value = '#ffffff'
                box.style.boxShadow = ''
                setPrint[5] = null;
                break;
            case 'position':
                
                topPosition.value = rightPosition.value = bottomPosition.value = leftPosition.value = "-0"
                setPrint[6] = setPrint[7] = setPrint[8] = setPrint[9] = setPrint[10] = null;
                break;

            case 'widthAndHeight':
                
                heightNum.value = heightSlider.value = widthNum.value = widthSlider.value = 200
                box.style.height = "200px"
                box.style.width = "200px"
                setPrint[11] = setPrint[12] = null;
                break;
            default:
                console.log("Oops that shouldn't happen")
        }
     pasteText = print(setPrint)
    })
})

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
            setPrint[0] = "." + name + "{"
        }
        if(nameId.checked)
        {
            setPrint[0] = "#" + name + "{"
        }
        
        pasteText = print(setPrint)
    }
})



// Colour Code
gradColour.addEventListener("change", (e) => {
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
        box.style.background = e.target.value
        setPrint[1] = `background: ${e.target.value}`
    }
    pasteText = print(setPrint)
})

boxColour2.addEventListener("input", (e) => {
    backgroundSetter(boxColour.value, linear1.value, e.target.value, linear2.value,gradDeg.value)
    pasteText =  print(setPrint)
})

gradDeg.addEventListener("input", (e) => {
    backgroundSetter(boxColour.value, linear1.value, boxColour2.value, linear2.value, e.target.value)
    pasteText =  print(setPrint)
})

linear1.addEventListener("input", (e) => {
    backgroundSetter(boxColour.value, e.target.value, boxColour2.value, linear2.value,gradDeg.value)
    pasteText =  print(setPrint)
})

linear2.addEventListener("input", (e) => {
    backgroundSetter(boxColour.value, linear1.value,boxColour2.value, e.target.value,gradDeg.value)
    pasteText = print(setPrint)
})

function backgroundSetter(a,b,c,d,e)
{
     box.style.background = `linear-gradient(${e}deg, ${a} ${b}%, ${c} ${d}%)`
     setPrint[1] = `background: linear-gradient(${e}deg, ${a} ${b}%, ${c} ${d}%); `
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
        console.log("is not checked")
        paddingSetter(e.target.value,null)
    }
})

document.g
function paddingSetter(AP,DP)
{
    if(!innerBox.classList.contains("colour-inner-box"))
    {
        innerBox.classList.add("colour-inner-box")
    }
    if(AP == null)
    {
        box.style.padding = `${DP[0]}${paddingType}  ${DP[1]}${paddingType} ${DP[2]}${paddingType} ${DP[3]}${paddingType}`
        setPrint[2] = `padding: ${DP[0]}${paddingType}  ${DP[1]}${paddingType} ${DP[2]}${paddingType} ${DP[3]}${paddingType}` 
    } 
    else
    {
        box.style.padding = `${AP}${paddingType}`
        setPrint[2] = `padding: ${AP}${paddingType}` 
    }
    pasteText = print(setPrint)
    
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
    box.style.borderRadius = `${e.target.value}%`
    setPrint[3] = `border-radius: ${e.target.value}px; `
    pasteText = print(setPrint)
})

sliderNum.addEventListener("change", (e) => {
    slider.value = e.target.value
    box.style.borderRadius = `${e.target.value}px`
})

borderSize.addEventListener("input", (e) => {
    borderSlider.value = e.target.value
    box.style.border = `${e.target.value}px ${borderType} ${borderColour.value}`
    setPrint[4] = `border: ${e.target.value}px ${borderType} ${borderColour.value}; `
    pasteText = print(setPrint)

})

borderSlider.addEventListener("input", (e) => {
    borderSize.value = e.target.value
    box.style.border = `${borderSize.value}px ${borderType} ${borderColour.value}`
    setPrint[4] = `border: ${borderSize.value}px ${borderType} ${borderColour.value}; `
    pasteText = print(setPrint)
})

borderColour.addEventListener("input", (e) => {
    box.style.border = `${borderSize.value}px ${borderType} ${e.target.value}`
    setPrint[4] = `border: ${borderSize.value}px ${borderType} ${e.target.value}; `
    pasteText = print(setPrint)
})

borders.forEach((bt) => {
    bt.addEventListener("click", (e) => {
        borderType = e.target.value;
        box.style.border = `${borderSize.value}px ${e.target.value} ${borderColour.value}`
        setPrint[4] = `border: ${borderSize.value}px ${e.target.value} ${borderColour.value}; `
        pasteText =  print(setPrint)
    })
})



//Box Shadow Code

shadowX.addEventListener("input", (e) => {
    box.style.boxShadow = `${e.target.value}px ${shadowY.value}px ${shadowBlur.value}px  ${shadowSpread.value}px ${shadowColour.value}`;
    setPrint[5] = `box-shadow: ${e.target.value}px ${shadowY.value}px ${shadowBlur.value}px  ${shadowSpread.value}px ${shadowColour.value}; `
    pasteText = print(setPrint)
})
shadowY.addEventListener("input", (e) => {
    box.style.boxShadow = `${shadowX.value}px ${e.target.value}px ${shadowBlur.value}px  ${shadowSpread.value}px ${shadowColour.value}`;
    setPrint[5] = `box-shadow: ${shadowX.value}px ${e.target.value}px ${shadowBlur.value}px  ${shadowSpread.value}px ${shadowColour.value}; `;
    pasteText = print(setPrint)
})
shadowBlur.addEventListener("input", (e) => {
    box.style.boxShadow = `${shadowX.value}px ${shadowY.value}px ${e.target.value}px  ${shadowSpread.value}px ${shadowColour.value}`;
    setPrint[5] = `box-shadow: ${shadowX.value}px ${shadowY.value}px ${e.target.value}px  ${shadowSpread.value}px ${shadowColour.value}; `;
    pasteText = print(setPrint)
})
shadowSpread.addEventListener("input", (e) => {
    box.style.boxShadow = `${shadowX.value}px ${shadowY.value}px ${shadowBlur.value}px  ${e.target.value}px ${shadowColour.value}`;
    setPrint[5] = `box-shadow: ${shadowX.value}px ${shadowY.value}px ${shadowBlur.value}px  ${e.target.value}px ${shadowColour.value}; `;
    pasteText = print(setPrint)
})
shadowColour.addEventListener("input", (e) => {
    box.style.boxShadow = `${shadowX.value}px ${shadowY.value}px ${shadowBlur.value}px  ${shadowSpread.value}px ${e.target.value}`;
    setPrint[5] = `box-shadow: ${shadowX.value}px ${shadowY.value}px ${shadowBlur.value}px  ${shadowSpread.value}px ${e.target.value}; `;
    pasteText = print(setPrint)
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
        box.style.position = positionType
    }
    else
    {
        positionNumbersContainer.classList.add("box-invisible")
        box.style.position = ""
    }
})


function positionSetter(numPos, type, postype)
{
    setPrint[6] = `position: ${postype}`
    for(let i = 0; i <= 3; i++)
    {
        if(Object.is(Number(numPos[i]),-0))
        {
            setPrint[i + 7] = null
            
        }
        else
        {
            setPrint[i + 7] = `${positionDirection(i)}: ${numPos[i]}${type}`
            box.style[positionDirection(i)] = `${numPos[i]}${type}`
        }
    }
    pasteText = print(setPrint)
   

}

function positionDirection(test)
{
    if(test == 0) return  "top"
    if(test == 1) return  "right"
    if(test == 2) return  "bottom"
    if(test == 3) return  "left"
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
        box.style.height = `${value}${type}`
        setPrint[11] = `height: ${value}${type}`
    }
    else
    {
        box.style.width = `${value}${type}`
        setPrint[12] = `width: ${value}${type}`
    }
    pasteText = print(setPrint)
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

est.addEventListener("click", (e) => {
    e.preventDefault()
    navigator.clipboard.writeText(pasteText).then(() => {
        est.classList.add("copied")
        est.textContent = "Copied"
        setTimeout(() => {
            est.classList.remove("copied");
            est.textContent = "Copy"; 
        }, 2000)
    })
})




