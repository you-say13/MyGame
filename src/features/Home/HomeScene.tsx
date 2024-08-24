import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"
import GameMenu from "../../pages/GameMenu";
import SelectMenu from "../../components/SelectMenu";
import { homeMenuText } from "../../Data/Text";
import { keyEvent, ClickEvent } from "../../utility/ClickAndKeyEvent";

const HomeScene = () => {

  const selectList = homeMenuText.map((list) => list.title)
  const [descList, _] = useState<Array<string>>(homeMenuText.map((list) => list.desc))

  const navigator = useNavigate();

  const [cursor, setCursor] = useState(0)
  const [phase, setPhase] = useState(0)

  useEffect(() => {
    if (phase == 1) {
      switch (selectList[cursor]) {
        case "ダンジョン選択":
          navigator('/dungeon');
          break;
        case "装備変更":
          navigator('/equip');
          break;
        case "ショップを開く":
          navigator('/store');
          break;
        case "持ち物":
          navigator('/inventory');
          break;
        case "設定":
          navigator('/setting');
          break;
      }
    }
  }, [phase])

  document.title = "ホーム";

  return (
    <div className="h-full w-full">
      <img src="/src/images/town.jpg" alt="background" className="w-full h-2/3 object-cover" />
      <div className="flex justify-center items-center h-1/3 w-full">
        <SelectMenu
          style={{ width: 'w-1/3', fontSize: 'text-base', isBlock: true }}
          selectList={[...selectList]}
          keyEvent={
            (e) => keyEvent(e, setCursor, cursor, setPhase, phase, selectList.length - 1)
          }
          mouseEnterEvent={
            (number) => ClickEvent(number, setCursor, setPhase)
          }
          cursor={cursor}
          setCursor={setCursor}
        />
        <GameMenu
          msg={descList[cursor]}
          className={`GameMenu text-2xl flex items-center justify-center w-2/3 h-full bg-black border-1 border border-white rounded-xl text-white`}
        />
      </div>
    </div>
  );
}

export default HomeScene;