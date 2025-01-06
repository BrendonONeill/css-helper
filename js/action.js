//Action Container
export let cssName = document.querySelector(".css-name")
export let nameId = document.querySelector("#name-id")
export let nameClass = document.querySelector("#name-class")
export let box = document.querySelector(".box")
export let innerBox = document.querySelector(".inner-box")
export let outerBox = document.querySelector(".outer-box")

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
    if(key == "top" || key == "right" || key == "bottom" || key == "left")
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
