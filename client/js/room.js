let notePadContent = document.querySelector("#notepadContent")
let roomNameLabel = document.querySelector("#roomNameLabel")


const params = new URLSearchParams(window.location.search)
const roomName = params.get("name")

roomNameLabel.innerHTML = roomName[0].toUpperCase() + roomName.slice(1)

notePadContent.addEventListener('keydown', (event) => {
    console.log("change")
})