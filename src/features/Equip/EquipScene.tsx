import { useEffect, useState } from "react";
import { EquipmentSlot } from "../../types/Status";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { handleKeyEvent } from "../../utility/KeyEvent";

const EQUIPMENT_SLOT_DEFAULT_LENGTH = 8;

const EquipScene = () => {

  const [playerEquipment, setPlayerEquipment] = useState<EquipmentSlot>();
  const [cursor, setCursor] = useState(0)
  const [phase, setPhase] = useState(999)

  const navigator = useNavigate()

  const keyEvent = (e: KeyboardEvent) => {
    const key = e.key
    if (!e.repeat) {
      console.log(key)
      if (key === "ArrowUp") {
        if (cursor === -1) {
          setCursor(() => EQUIPMENT_SLOT_DEFAULT_LENGTH - 1)
        } else {
          setCursor((state) => state - 1)
        }
      } else if (key === "ArrowDown") {
        if (cursor === EQUIPMENT_SLOT_DEFAULT_LENGTH - 1) {
          setCursor(() => -1)
        } else {
          setCursor((state) => state + 1)
        }
      }
      if (key === "Enter") {
        cursor === -1 ? navigator("/") : setPhase(cursor)
      }
    }
  }

  useEffect(() => {
    document.addEventListener("keydown", keyEvent)

    return () => {
      document.removeEventListener("keydown", keyEvent)
    }
  }, [cursor])

  const ClickEvent = (selectedNumber: number) => {
    setPhase(selectedNumber)
  }

  return (
    <div className="relative w-full h-full">
      <div className="flex absolute w-full h-2/3 mt-24 items-center justify-center">
        <div className={`bg-black border border-white ${phase !== 999 ? "rounded-l-lg w-1/3" : "rounded-lg w-1/2"} h-full mt-24 text-white text-center font-bold`}>
          <div className="w-full flex items-center">
            <div className="w-1/5">
              <FaArrowLeft className={`mx-auto hover:cursor-pointer ${cursor === -1 ? "border border-white rounded-sm" : ""}`} onMouseEnter={() => setCursor(-1)} onClick={() => navigator("/")} />
            </div>
            <h1 className="my-4 w-3/5">装備</h1>
          </div>
          <div className="w-full h-full pt-4 px-2 flex flex-col gap-7">
            <div className="w-full flex justify-around">
              <label className="w-1/5 text-start">右手</label>
              :
              <span
                className={`w-3/5 text-center hover:cursor-pointer ${cursor === 0 ? "border border-white rounded-sm" : ""}`}
                onClick={() => ClickEvent(0)}
                onMouseEnter={() => setCursor(0)}
              >
                {playerEquipment?.weapon?.toString() ?? "-"}
              </span>
            </div>
            <div className="w-full flex justify-around">
              <label className="w-1/5 text-start">左手</label>
              :
              <span
                className={`w-3/5 text-center hover:cursor-pointer ${cursor === 1 ? "border border-white rounded-sm" : ""}`}
                onClick={() => ClickEvent(1)}
                onMouseEnter={() => setCursor(1)}
              >
                {playerEquipment?.shield?.toString() ?? "-"}
              </span>
            </div>
            <div className="w-full flex justify-around">
              <label className="w-1/5 text-start">頭</label>
              :
              <span
                className={`w-3/5 text-center hover:cursor-pointer ${cursor === 2 ? "border border-white rounded-sm" : ""}`}
                onClick={() => ClickEvent(2)}
                onMouseEnter={() => setCursor(2)}
              >
                {playerEquipment?.head?.toString() ?? "-"}
              </span>
            </div>
            <div className="w-full flex justify-around">
              <label className="w-1/5 text-start">胴体</label>
              :
              <span
                className={`w-3/5 text-center hover:cursor-pointer ${cursor === 3 ? "border border-white rounded-sm" : ""}`}
                onClick={() => ClickEvent(3)}
                onMouseEnter={() => setCursor(3)}
              >
                {playerEquipment?.body?.toString() ?? "-"}
              </span>
            </div>
            <div className="w-full flex justify-around">
              <label className="w-1/5 text-start">腕</label>
              :
              <span
                className={`w-3/5 text-center hover:cursor-pointer ${cursor === 4 ? "border border-white rounded-sm" : ""}`}
                onClick={() => ClickEvent(4)}
                onMouseEnter={() => setCursor(4)}
              >
                {playerEquipment?.arms?.toString() ?? "-"}
              </span>
            </div>
            <div className="w-full flex justify-around">
              <label className="w-1/5 text-start">腰</label>
              :
              <span
                className={`w-3/5 text-center hover:cursor-pointer ${cursor === 5 ? "border border-white rounded-sm" : ""}`}
                onClick={() => ClickEvent(5)}
                onMouseEnter={() => setCursor(5)}
              >
                {playerEquipment?.waist?.toString() ?? "-"}
              </span>
            </div>
            <div className="w-full flex justify-around">
              <label className="w-1/5 text-start">足</label>
              :
              <span
                className={`w-3/5 text-center hover:cursor-pointer ${cursor === 6 ? "border border-white rounded-sm" : ""}`}
                onClick={() => ClickEvent(6)}
                onMouseEnter={() => setCursor(6)}
              >
                {playerEquipment?.legs?.toString() ?? "-"}
              </span>
            </div>
            <div className="w-full flex justify-around">
              <label className="w-1/5 text-start">アクセ</label>
              :
              <span
                className={`w-3/5 text-center hover:cursor-pointer ${cursor === 7 ? "border border-white rounded-sm" : ""}`}
                onClick={() => ClickEvent(7)}
                onMouseEnter={() => setCursor(7)}
              >
                {playerEquipment?.accessories?.toString() ?? "-"}
              </span>
            </div>
          </div>
        </div>
        {
          phase !== 999 &&
          <div className="w-1/3 h-full bg-black border border-white rounded-r-lg mt-24 text-white text-center">所持している装備品を表示</div>
        }
      </div>
      <img src="src/images/equip.jpg" className="object-cover w-full h-full" />
    </div>
  );
}

export default EquipScene;
