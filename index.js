// Write your code here!

const mainRemove = document.querySelector("main")
mainRemove.remove()


// create h1 element
const newHeader = document.createElement('h1')

// set h1 id to victory
newHeader.setAttribute("id", "victory")

// create text
const newContent = document.createTextNode('Chris is the champion')

//append header with text
newHeader.appendChild(newContent)

document.body.appendChild(newHeader)
