
import { useState } from "react"
import Mobile from "./Mobile"

const room = {
  name: "room1",
  ID: 2,
  token: "xyz"
} 

function App() {
  const [roomInfo, setRoominfo] = useState(null)  
  setRoominfo(room)
  console.log(room);
  console.log(roomInfo);  
  return (
    <>
    <h1>hello {room.name}</h1>
    <Mobile/>
    </>
    
  )
}

export default App
