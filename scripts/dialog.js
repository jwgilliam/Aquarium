

const initializeDetailButtonEvents = () => {
  // CAN'T TOUCH THIS - START
  const allCloseButtons = document.querySelectorAll(".button--close")

  for (const btn of allCloseButtons) {
      btn.addEventListener(
          "click",
          theEvent => {
              const dialogElement = theEvent.target.parentNode
              dialogElement.close()
          }
      )
  }
  
  document.querySelector("#button--bart").addEventListener(
      "click",
      theClickEvent => {
          const theDialog = document.querySelector("#details--bart")
          theDialog.showModal()
      }
  )
  document.querySelector("#button--wamp").addEventListener(
    "click",
    theClickEvent => {
        const theDialog = document.querySelector("#details--wamp")
        theDialog.showModal()
    }
)
document.querySelector("#button--horseface).addEventListener(
  "click",
  theClickEvent => {
      const theDialog = document.querySelector("#details--horseface")
      theDialog.showModal()
  }
)
document.querySelector("#button--glen").addEventListener(
  "click",
  theClickEvent => {
      const theDialog = document.querySelector("#details--chuck")
      theDialog.showModal()
  }
)
document.querySelector("#button--andy").addEventListener(
  "click",
  theClickEvent => {
      const theDialog = document.querySelector("#details--chuck")
      theDialog.showModal()
  }
)
document.querySelector("#button--garth").addEventListener(
  "click",
  theClickEvent => {
      const theDialog = document.querySelector("#details--garth")
      theDialog.showModal()
  }
)
}
export default initializeDetailButtonEvents