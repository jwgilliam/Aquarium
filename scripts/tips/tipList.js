
import { useTips } from "./tipDataProvider.js";
import tipComponent from "./tip.js";

const tipListComponent = () => {

  const contentElement = document.querySelector(".tipsList")
  const tips = useTips()


  contentElement.innerHTML += `
  <section class="tipList">
  ${
    tips.map(
      (currentTip) => {
       return tipComponent(currentTip)
      }
    ).join("")
  }
</section>
  `
}

export default tipListComponent