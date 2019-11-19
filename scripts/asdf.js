const tipHighlight = () => {
  const tipCards = document.querySelectorAll(".tip")

  for (const card of tipCards) {
      card.addEventListener(
          "mouseover",
          (theMouseOverEvent) => {
              card.classList.add("highlightTips")
          }
      )


      card.addEventListener("mouseout", theMouseOutEvent => {
          card.classList.remove("highlightTips")
      })
  }
}

export default tipHighlight