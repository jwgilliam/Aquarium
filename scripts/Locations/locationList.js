import { useLocation } from "./locationDataProvider.js";
import locationComponent from "./locations.js";

const locationListComponent = () => {

  const contentElement = document.querySelector(".locationList")
  const locations = useLocation()


  contentElement.innerHTML += `
  <section class="tipList">
  ${
    locations.map(
      (currentLocation) => {
       return locationComponent(currentLocation)
      }
    ).join("")
  }
</section>
  `
}

export default locationListComponent