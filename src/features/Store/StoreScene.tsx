import { useState } from "react";
import SelectMenu from "../../components/SelectMenu";
import GameMenu from "../../pages/GameMenu";
import { shopMenuText } from "../../Data/Text";
import { DungeonSelectByClick, handleKeyEvent } from "../../utility/KeyEvent";

const StoreScene = () => {

  const selectList = shopMenuText.map((list) => list.title);
  const descList = shopMenuText.map((list) => list.desc);

  const [cursor, setCursor] = useState(0)
  const [phase, setPhase] = useState(false)

  const keyEvent = (e: KeyboardEvent) => {
    const key = {
      e: e,
      setCursor: setCursor,
      cursor: cursor,
      setPhase: setPhase,
      phase: phase,
      len: selectList.length - 1
    }
    handleKeyEvent(key)
  }

  const ClickEvent = (dungeonNumber: number) => {
    const key = {
      number: dungeonNumber,
      setCursor: setCursor,
      setPhase: setPhase,
      phase: phase
    }

    DungeonSelectByClick(key)
  }

  return (
    <div className="h-full w-full">
      <img src="/src/images/shop.jpg" alt="background" className="w-full h-2/3 object-cover" />
      <div className="flex justify-center items-center h-1/3 w-full">
        <SelectMenu style={{ width: 'w-1/3', fontSize: 'text-base', isBlock: true }} selectList={[...selectList]} keyEvent={keyEvent} mouseEnterEvent={ClickEvent} cursor={cursor} setCursor={setCursor} />
        <GameMenu msg={descList[cursor]} className={`GameMenu text-2xl flex items-center justify-center w-2/3 h-full bg-black border-1 border border-white rounded-xl text-white`} />
      </div>
    </div>
  )
}

export default StoreScene;