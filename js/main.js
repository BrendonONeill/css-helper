let slider = document.querySelector(".slider")
let sliderNum = document.querySelector(".slider-number")
let box = document.querySelector(".box")
let cssBox = document.querySelector(".css-box")
let boxColour = document.querySelector(".box-colour")
let gradColour = document.querySelector(".tick-grad")
let gradDeglabel = document.querySelector(".grad-deg-label")
let boxColour2 = document.querySelector(".box-colour-2")
let linear1 = document.querySelector(".linear-1")
let linear2 = document.querySelector(".linear-2")
let gradDeg = document.querySelector(".grad-deg")
let shadowX = document.querySelector(".shadow-x")
let shadowY = document.querySelector(".shadow-y")
let shadowBlur = document.querySelector(".shadow-blur")
let shadowSpread = document.querySelector(".shadow-spread")
let shadowColour = document.querySelector(".shadow-colour")
let borderSize = document.querySelector(".border-number")
let borderSlider = document.querySelector(".border-slider")
let borderColour = document.querySelector(".border-colour")
let borders = document.querySelectorAll(".border-type")
let borderType = "solid"
let setPrint = ["{", null, null, null, null, "}"]
let est = document.querySelector(".paste")



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
        test(e.target.value, linear1.value, boxColour2.value, linear2.value,gradDeg.value)
    }
    else
    {
        box.style.background = e.target.value
    }
})

boxColour2.addEventListener("input", (e) => {
    test(boxColour.value, linear1.value, e.target.value, linear2.value,gradDeg.value)
})

gradDeg.addEventListener("change", (e) => {
    test(boxColour.value, linear1.value, boxColour2.value, linear2.value, e.target.value)
})

linear1.addEventListener("input", (e) => {
    //linear2.value = 100 - e.target.value
    test(boxColour.value, e.target.value, boxColour2.value, linear2.value,gradDeg.value)
})

linear2.addEventListener("input", (e) => {
    //linear1.value = 100 - e.target.value
    test(boxColour.value, linear1.value,boxColour2.value, e.target.value,gradDeg.value)
})

slider.addEventListener("input", (e) => {
    sliderNum.value = e.target.value
    box.style.borderRadius = `${e.target.value}%`
    setPrint[2] = `border-radius: ${e.target.value}px; `
    print(setPrint)
})

sliderNum.addEventListener("change", (e) => {
    slider.value = e.target.value
    box.style.borderRadius = `${e.target.value}px`
})


shadowX.addEventListener("input", (e) => {
    box.style.boxShadow = `${e.target.value}px ${shadowY.value}px ${shadowBlur.value}px  ${shadowSpread.value}px ${shadowColour.value}`;
    setPrint[4] = `box-shadow: ${e.target.value}px ${shadowY.value}px ${shadowBlur.value}px  ${shadowSpread.value}px ${shadowColour.value}; `
    print(setPrint)
})
shadowY.addEventListener("input", (e) => {
    box.style.boxShadow = `${shadowX.value}px ${e.target.value}px ${shadowBlur.value}px  ${shadowSpread.value}px ${shadowColour.value}`;
    setPrint[4] = `box-shadow: ${shadowX.value}px ${e.target.value}px ${shadowBlur.value}px  ${shadowSpread.value}px ${shadowColour.value}; `;
    print(setPrint)
})
shadowBlur.addEventListener("input", (e) => {
    box.style.boxShadow = `${shadowX.value}px ${shadowY.value}px ${e.target.value}px  ${shadowSpread.value}px ${shadowColour.value}`;
    setPrint[4] = `box-shadow: ${shadowX.value}px ${shadowY.value}px ${e.target.value}px  ${shadowSpread.value}px ${shadowColour.value}; `;
    print(setPrint)
})
shadowSpread.addEventListener("input", (e) => {
    box.style.boxShadow = `${shadowX.value}px ${shadowY.value}px ${shadowBlur.value}px  ${e.target.value}px ${shadowColour.value}`;
    setPrint[4] = `box-shadow: ${shadowX.value}px ${shadowY.value}px ${shadowBlur.value}px  ${e.target.value}px ${shadowColour.value}; `;
    print(setPrint)
})
shadowColour.addEventListener("input", (e) => {
    box.style.boxShadow = `${shadowX.value}px ${shadowY.value}px ${shadowBlur.value}px  ${shadowSpread.value}px ${e.target.value}`;
    setPrint[4] = `box-shadow: ${shadowX.value}px ${shadowY.value}px ${shadowBlur.value}px  ${shadowSpread.value}px ${e.target.value}; `;
    print(setPrint)
})


borderSize.addEventListener("input", (e) => {
    box.style.border = `${e.target.value}px ${borderType} ${borderColour.value}`
    setPrint[3] = `border: ${e.target.value}px ${borderType} ${borderColour.value}; `
    print(setPrint)

})

borderSlider.addEventListener("input", (e) => {
    borderSize.value = e.target.value
    box.style.border = `${borderSize.value}px ${borderType} ${borderColour.value}`
    setPrint[3] = `border: ${borderSize.value}px ${borderType} ${borderColour.value}; `
    print(setPrint)
})

borderColour.addEventListener("input", (e) => {
    box.style.border = `${borderSize.value}px ${borderType} ${e.target.value}`
    setPrint[3] = `border: ${borderSize.value}px ${borderType} ${e.target.value}; `
    print(setPrint)
})

borders.forEach((bt) => {
    bt.addEventListener("click", (e) => {
        borderType = e.target.value;
        box.style.border = `${borderSize.value}px ${e.target.value} ${borderColour.value}`
        setPrint[3] = `border: ${borderSize.value}px ${e.target.value} ${borderColour.value}; `
        print(setPrint)
    })
})


function test(a,b,c,d,e)
{
     box.style.background = `linear-gradient(${e}deg, ${a} ${b}%, ${c} ${d}%)`
     setPrint[1] = `background: linear-gradient(${e}deg, ${a} ${b}%, ${c} ${d}%); `
}


function print(codelines)
{
    let fragment = document.createDocumentFragment()
    let text = ""
    codelines.map((code) => {
        if(code !== null){
            text +=  code + " \n"
            return
        }
    })
    let line = document.createElement("pre")
    line.classList.add("line")
    line.textContent = text
    fragment.appendChild(line)
    document.querySelector(".css-code-block").innerHTML = ""
    document.querySelector(".css-code-block").appendChild(fragment)
}

est.addEventListener("click", (e) => {
    e.preventDefault()
    let a = document.querySelector(".css-code-block").textContent
    navigator.clipboard.writeText(a).then(() => {
        est.classList.add("copied")
        est.textContent = "Copied"
        setTimeout(() => {
            est.classList.remove("copied");
            est.textContent = "Copy"; 
        }, 2000)
    })
})



