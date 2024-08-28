import { useEffect, useState } from "react";
import SelectMenu from "../../components/SelectMenu";
import GameMenu from "../../pages/GameMenu";
import { shopMenuText } from "../../Data/Text";
import { handleKeyEvent } from "../../utility/KeyEvent";
import { useNavigate } from "react-router-dom";
import BuyMenu from "./BuyMenu";
import SellMenu from "./SellMenu";

const StoreScene = () => {

  const selectList = shopMenuText.map((list) => list.title);
  const descList = shopMenuText.map((list) => list.desc);

  const [cursor, setCursor] = useState(0)
  const [phase, setPhase] = useState(99999)

  const [section, setSection] = useState('none');

  const navigator = useNavigate();

  const keyEvent = (e: KeyboardEvent) => {
    const key = {
      e: e,
      setCursor: setCursor,
      cursor: cursor,
      setPhase: setPhase,
      phase: phase,
      len: selectList.length - 1,
      isBackButton: true,
    }
    handleKeyEvent(key)
  }

  const ClickEvent = (selectedNumber: number) => {
    if((selectList.length - 1)  === selectedNumber){
      setPhase(-1);
    }else{
      setPhase(selectedNumber)
    }
  }

  useEffect(() => {
    switch (phase) {
      case -1:
        navigator("/")
        break;
      case 0:
        setSection("buy")
        break;
      case 1:
        setSection("sell")
        break;
      default:
        setSection("none")
        break;
    }
  }, [phase])


  return (
    <div className="relative w-full h-full">
      {
        section === "buy" &&
        <div className="flex absolute w-full h-2/3 py-10 items-center justify-center">
          <BuyMenu />
        </div>
      }
      {
        section === "sell" &&
        <div className="flex absolute w-full h-2/3 py-10 items-center justify-center">
          <SellMenu />
        </div>
      }
      <img src="/src/images/shop.jpg" alt="background" className="z-10 w-full h-2/3 object-cover" />
      <div className="flex justify-center items-center h-1/3 w-full z-20">
        <SelectMenu
          style={{ width: 'w-1/3', fontSize: 'text-base', isBlock: true }}
          selectList={[...selectList]}
          keyEvent={keyEvent}
          mouseEnterEvent={ClickEvent}
          cursor={cursor}
          setCursor={setCursor}
        />
        <GameMenu msg={descList[cursor]} className={`GameMenu text-2xl flex items-center justify-center w-2/3 h-full bg-black border-1 border border-white rounded-xl text-white`} />
      </div>
    </div>
  )
}

export default StoreScene;