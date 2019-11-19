

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
  document.querySelector("#button--steve").addEventListener(
    "click",
    theClickEvent => {
        const theDialog = document.querySelector("#details--steve")
        theDialog.showModal()
    }
)
document.querySelector("#button--patrick").addEventListener(
  "click",
  theClickEvent => {
      const theDialog = document.querySelector("#details--patrick")
      theDialog.showModal()
  }
)
document.querySelector("#button--glen").addEventListener(
  "click",
  theClickEvent => {
      const theDialog = document.querySelector("#details--glen")
      theDialog.showModal()
  }
)
document.querySelector("#button--andy").addEventListener(
  "click",
  theClickEvent => {
      const theDialog = document.querySelector("#details--andy")
      theDialog.showModal()
  }
)
document.querySelector("#button--capn").addEventListener(
  "click",
  theClickEvent => {
      const theDialog = document.querySelector("#details--capn")
      theDialog.showModal()
  }
)
}
export default initializeDetailButtonEvents