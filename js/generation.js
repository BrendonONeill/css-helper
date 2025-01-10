"use strict"

// Print
export let Text = { pasteText: ""} 

 
// Code box Container
export let cssGeneratedText = ["{", null, null, null, null, null, null, null, null, null, null, null, null, null, "}"]
export let pasteButton = document.querySelector(".paste")

/*
1. colour
2. padding
3. border-radius
4. border
5. box-shadow
6. position
7. top
8. right
9. bottom
10. left
11. height
12. width
13. margin
*/




// Code Box Code
export function print(codelines)
{
    let text = ""
    let pasteText = ""
    let fragment = document.createDocumentFragment()
    codelines.map((code,index) => {
        if(index === 0 || index === 14)
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

export function generateCss(cssPos, cssText)
{
    console.log(cssGeneratedText)
    cssGeneratedText[cssPos] = cssText;
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

