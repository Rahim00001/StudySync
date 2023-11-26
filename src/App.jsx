import './App.css'
import { Button } from 'flowbite-react'

function App() {
  return (
    <>
      <h1>Vite + React</h1>
      <div className="flex flex-wrap gap-2">
        <Button gradientDuoTone="purpleToBlue">Purple to Blue</Button>
        <Button gradientDuoTone="cyanToBlue">Cyan to Blue</Button>
        <Button gradientDuoTone="greenToBlue">Green to Blue</Button>
        <Button gradientDuoTone="purpleToPink">Purple to Pink</Button>
        <Button gradientDuoTone="pinkToOrange">Pink to Orange</Button>
        <Button gradientDuoTone="tealToLime">Teal to Lime</Button>
        <Button gradientDuoTone="redToYellow">Red to Yellow</Button>
      </div>

    </>
  )
}

export default App
