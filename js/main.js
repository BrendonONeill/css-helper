"use strict"
import { box } from "./action.js"
import { cssGeneratedText, Text, print} from "./generation.js"
import { boxColour, boxColour2, linear1, linear2, gradDeg} from "./colour.js";
import {shadowX, shadowY, shadowBlur, shadowSpread, shadowColour} from "./boxShadow.js"
import {allPadding,topPadding,rightPadding,leftPadding,bottomPadding} from "./padding.js"
import {borderSize, borderSlider, borderColour,topLeftRadiusNumber,topRightRadiusNumber,bottomLeftRadiusNumber,bottomRightRadiusNumber,slider,sliderNum} from "./border.js"
import {topPosition, rightPosition, bottomPosition, leftPosition} from "./position.js"
import {widthNum, widthSlider, heightNum, heightSlider} from "./widthAndHeight.js"


// Navigation
let navBurger = document.querySelector(".nav-burger")
let sidebarClose = document.querySelector(".close")
let sidebar = document.querySelector(".options")

// Containers 
let optionsContainers = document.querySelectorAll(".options-container")
let deleteButtons = document.querySelectorAll(".delete-button")

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
    if(!containerHeader.classList.contains("disabled"))
    {
        containerHeader.addEventListener("click", () => {    
            content.classList.toggle("accordion-close")
            containerHeader.classList.toggle("options-container-h2-closed")
            containerButton.classList.toggle("button-flip")
        })    
    }
})

deleteButtons.forEach((deleteBT) => {
    deleteBT.addEventListener("click", (e) => {
        e.preventDefault()
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
            topLeftRadiusNumber.value = topRightRadiusNumber.value = bottomLeftRadiusNumber.value = bottomRightRadiusNumber.value = 0
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
 Text.pasteText = print(cssGeneratedText)
} 








