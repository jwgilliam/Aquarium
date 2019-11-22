import initializeDetailButtonEvents from "./dialog.js"
import addMouseOverEventListeners from "./highlight.js"
import tipHighlight from "./asdf.js"
import { useFish } from "../fishdataprovider.js"


initializeDetailButtonEvents()
addMouseOverEventListeners()
tipHightlight()
const allOfTheFish = useFish()

console.log("all of the fish: ", allOfTheFish)
for (const fish of allOfTheFish) {
  console.log("individual fish object: ", fish)
}