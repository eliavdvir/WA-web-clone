import { useState } from "react"

function App() {
  const [newMsg, setNewMsg] = useState("this is Elias testing")
  return <>hi this is Tomer testing -{newMsg}</>
}

export default App
