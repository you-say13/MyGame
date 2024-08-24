import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { dungeonMenuText } from "../../Data/Text"
import { ClickEvent, keyEvent } from "../../utility/ClickAndKeyEvent"
import GameMenu from "../../pages/GameMenu"

const DungeonSelect = () => {

  const [cursor, setCursor] = useState(0)
  const [phase, setPhase] = useState(0)
  const dungeonList = dungeonMenuText.map((list) => list.title);
  const dungeonDesc = dungeonMenuText.map((list) => list.desc);

  const navigator = useNavigate();
  
  const handleKeyEvent  = (e: KeyboardEvent) => keyEvent(e, setCursor, cursor, setPhase, phase, dungeonList.length - 1, true);

  useEffect(() => {
    if(phase === 1){
      navigator('/game')
    }else if(phase === -1){
      navigator('/')
    }
  }, [phase])

  useEffect(() => {
    document.addEventListener("keydown", handleKeyEvent)

    return () => {
      document.removeEventListener("keydown", handleKeyEvent)
    }
  }, [cursor])

  return (
    <div className="SelectMenu flex justify-center items-center w-full h-full bg-gray-900 text-white text-2xl font-bold">
      <div className="flex-col text-center w-1/3 h-2/3 max-h-2/3 bg-black border border-white rounded-xl overflow-auto hidden-scrollbar">
        {
          dungeonList.map((dungeon, index) => {
            return (
              <div
                className="my-[8%] hover:cursor-pointer hover:rounded-sm"
                key={index}
                onClick={() => ClickEvent(index, setCursor, setPhase, cursor === dungeonList.length - 1)}
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
      <GameMenu className={`flex w-1/3 h-2/3 max-h-2/3 bg-black border border-white rounded-r-xl items-center justify-center`} msg={`${dungeonDesc[cursor]}`} />
    </div>
  )
}

export default DungeonSelect