import addMouseOverEventListeners from "./highlight.js"
import tipHighlight from "./asdf.js"
import { useFish } from "./Fish/fishdataprovider.js"
import FishListComponent from "./Fish/fishlist.js"
import tipListComponent from "./tips/tipList.js"
import tipComponent from "./tips/tip.js"
import allDetailButtons from "./dialog.js"

addMouseOverEventListeners()
// tipHighlight()
const allOfTheFish = useFish()
tipListComponent()
// tipComponent()
FishListComponent()
allDetailButtons()


console.log("all of the fish: ", allOfTheFish)
for (const fish of allOfTheFish) {
  console.log("individual fish object: ", fish)
}