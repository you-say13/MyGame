import { useState, useEffect } from "react"
import { dungeonSelecter } from "./utility/KeyEvent"

const DungeonSelect = () => {

    const [cursor, setCursor] = useState(0)
    const [phase, setPhase] = useState(false)

    const keyEvent = (e: KeyboardEvent) => {
        const key = {
            e: e,
            setCursor:setCursor,
            cursor:cursor,
            setPhase: setPhase,
            phase: phase
        }
        dungeonSelecter(key)
    }

    if(phase){
        location.href = "/game"
    }

    useEffect(()=> {
        document.addEventListener("keydown", keyEvent)

        return () => {
            document.removeEventListener("keydown", keyEvent)
        }
    },[cursor])

    return (
        <div className="SelectMenu flex justify-center items-center w-full h-full bg-gray-900 text-white text-2xl font-bold">
            <div className="flex-col text-center w-1/3 h-2/3 max-h-2/3 bg-black border border-white rounded-xl">
                <div className="mt-[3%]">
                    初心者の森
                    {
                        cursor === 0 &&
                        <span> ←</span>
                    }
                </div>
                <div className="mt-[8%]">
                    戻らずの洞窟
                    {
                        cursor === 1 &&
                        <span> ←</span>
                    }
                </div>
                <div className="mt-[8%]">
                    試練の山
                    {
                        cursor === 2 &&
                        <span> ←</span>
                    }
                </div>
                <div className="mt-[8%]">
                    死者の砂漠
                    {
                        cursor === 3 &&
                        <span> ←</span>
                    }
                </div>
                <div className="mt-[8%]">
                    魔王の城
                    {
                        cursor === 4 &&
                        <span> ←</span>
                    }
                </div>
            </div>
        </div>
    )
}

export default DungeonSelect