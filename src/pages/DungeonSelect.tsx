import { useState, useEffect } from "react"
import { DungeonSelectByClick, DungeonSelectorByKey } from "./utility/KeyEvent"

const DungeonSelect = () => {

  const [cursor, setCursor] = useState(0)
  const [phase, setPhase] = useState(false)
  const dungeonList = ['初心者の森', '戻らずの洞窟', '試練の山', '死者の砂漠', '魔王の城'];

  const keyEvent = (e: KeyboardEvent) => {
    const key = {
      e: e,
      setCursor: setCursor,
      cursor: cursor,
      setPhase: setPhase,
      phase: phase
    }
    DungeonSelectorByKey(key)
  }

  const ClickEvent = (dungeonNumber: number) => {
    const key = {
      number: dungeonNumber,
      setCursor: setCursor,
      cursor: cursor,
      setPhase: setPhase,
      phase: phase
    }

    DungeonSelectByClick(key)
  }

  if (phase) {
    location.href = "/game"
  }

  useEffect(() => {
    document.addEventListener("keydown", keyEvent)

    return () => {
      document.removeEventListener("keydown", keyEvent)
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
                onClick={() => ClickEvent(index)}
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