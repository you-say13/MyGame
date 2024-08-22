import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { dungeonMenuText } from "../../Data/Text"
import { ClickEvent, keyEvent } from "../../utility/ClickAndKeyEvent"

const DungeonSelect = () => {

  const [cursor, setCursor] = useState(0)
  const [phase, setPhase] = useState(false)
  const dungeonList = dungeonMenuText.map((list) => list.title);

  const navigator = useNavigate();
  
  const handleKeyEvent  = (e: KeyboardEvent) => keyEvent(e, setCursor, cursor, setPhase, phase, dungeonList.length - 1);


  if (phase) {
    navigator('/game'); 
  }

  useEffect(() => {
    document.addEventListener("keydown", handleKeyEvent)

    return () => {
      document.removeEventListener("keydown", handleKeyEvent)
    }
  }, [cursor])

  return (
    <div className="SelectMenu flex justify-center items-center w-full h-full bg-gray-900 text-white text-2xl font-bold">
      <div className="flex-col text-center w-1/3 h-2/3 max-h-2/3 bg-black border border-white rounded-xl">
        {
          dungeonList.map((dungeon, index) => {
            return (
              <div
                className="mt-[8%] hover:cursor-pointer hover:rounded-sm"
                key={index}
                onClick={() => ClickEvent(index, setCursor, setPhase, phase)}
                onMouseEnter={() => setCursor(() => index)}
              >
                {dungeon}
                {
                  cursor === index &&
                  <span> ←</span>
                }
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default DungeonSelect