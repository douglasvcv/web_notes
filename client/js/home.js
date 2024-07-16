const roomName = document.getElementById("roomName")
const joinRoomButton = document.querySelector("#joinRoomButton")

joinRoomButton.addEventListener('click', ()=>{
    if(!roomName.value){
        return
    }
    window.location.href = `/client/room.html?name=${roomName.value}`
})