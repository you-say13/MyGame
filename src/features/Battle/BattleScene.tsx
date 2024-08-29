import { useEffect, useState } from "react";
import GameMenu from "../../components/GameMenu";
import BattleMenu from "../../components/BattleMenu";
import GameScreen from "../../components/GameScreen";
import { BattleEndHandler, BattleHandler, DamageHandler, DungeonBackHandler, eventHandler, firstEnterHandler,  } from "../../utility/KeyEvent";
import { setEnemy } from "../../utility/EnemyPop";
import SelectEnemy from "../../components/SelectEnemy";
import Data from "../../Data/Enemy.json"
import User from "../../Data/Player.json"
import { damageCheckerProps, enemyChooseKeyProps } from "../../types/Props";
import { Enemy, Player } from "../../types/Status";
import UserStatus from "../../components/UserStatus";

const Game = () => {
    

    const json :Enemy[] = Data.Enemy
    const user :Player = User.Player

    const [phase, setPhase] = useState(0)

    const [chose, setChose] = useState(-1)

    const [cursor, setCursor] = useState(0)

    const [enemyData, setEnemyData] = useState<Enemy[]>([])

    const [enemyId, setEnemyId] = useState<string[]>([])

    const [Turn, setTurn] = useState(1)

    

    document.title = `${Turn}ターン目`

    // 敵のデータを取得
    useEffect(()=> {
        setEnemyData(setEnemy(json))
    },[])

    const keyBoardHandler = ((e:KeyboardEvent) => {
        if(!e.repeat){
            const key : enemyChooseKeyProps = {
                event:e,
                setPhase:setPhase,
                setCursor:setCursor,
                setEnemyId:setEnemyId,
                setChose:setChose,
                phase:phase,
                cursor:cursor,
                enemyId:enemyId,
                chose:chose
            }
            const enemyKey : enemyChooseKeyProps = {
                event:e,
                setPhase:setPhase,
                setCursor:setCursor,
                setEnemyId:setEnemyId,
                setChose:setChose,
                phase:phase,
                cursor:cursor,
                enemyId:enemyId,
                chose:chose,
                len:enemyData.length
            }
            const damageHandler : damageCheckerProps = {
                event: e,
                user:user,
                setEnemy:setEnemyData,
                enemy:enemyData,
                setCursor:setCursor,
                cursor:cursor,
                setPhase:setPhase,
                setTurn:setTurn,
            }
            if(phase === 0){
                firstEnterHandler(key)
            }else if(phase === 1){
                eventHandler(key)
            }else if(phase === 2){
                BattleHandler(enemyKey)
            }else if(phase === 3 && chose === 0){
                DamageHandler(damageHandler)
            }else if(phase === 4 && enemyData.length !== 0){
                firstEnterHandler(key)
            }else if(phase === 4 && enemyData.length === 0 && cursor !== -1){
                console.log("pass battle")
                BattleEndHandler(key)
            }else if(cursor === -1){
                console.log("pass dungeon")
                DungeonBackHandler(key)
            }
        }
    })

    useEffect(() => {

        document.addEventListener("keydown", keyBoardHandler)

        return () => {
            document.removeEventListener("keydown", keyBoardHandler)
        }

    }, [phase, cursor, Turn, chose, enemyData])


    return (
        <div id="screen" className="w-full h-full flex-col justify-center items-center">
            <div className="flex items-center justify-center w-full h-2/3 bg-gray-900">
                {
                    enemyData.length > 0 &&
                    <GameScreen
                        enemy={enemyData}
                        enemyId={enemyId}
                        setEnemyId={setEnemyId}
                        chose={chose}
                        phase={phase}
                        cursor={cursor}
                    />
                }
            </div>
            {
                phase === 0 && enemyData.length !== 0 &&
                <GameMenu msg="敵が現れた！！" />
            }

            {
                phase === 1 && enemyData.length !== 0 &&
                <div className="flex items-center justify-center w-full h-1/3 bg-black text-white border border-1 border-white rounded-xl">
                    <UserStatus user={user} className={`flex flex-col text-center h-full w-1/3 border-r`} />
                    <div id="COMMAND TEXTBOX" className="text-2xl h-full w-1/3 flex items-center justify-center border-r">
                        {user.name}はどうする？
                    </div>
                    <BattleMenu className={`text-2xl flex flex-col items-center justify-center w-1/3 h-full`} user={user} value={cursor} />
                </div>
            }
            {
                phase === 2 && chose === 0 && enemyData.length !== 0 &&
                <div className="flex items-center justify-center w-full h-1/3 bg-black text-white border border-1 border-white rounded-xl">
                    <UserStatus user={user} className={`flex flex-col text-center h-full w-1/3 border-r`} />
                    <div id="COMMAND TEXTBOX" className="text-2xl h-full w-1/3 flex items-center justify-center border-r">
                        {enemyData[cursor].name}をこうげきする？
                    </div>
                    <SelectEnemy className={"text-2xl flex flex-col items-center justify-center h-full w-1/3"} user={user} enemyData={enemyData} setCursor={setCursor} cursor={cursor}/>
                </div>
            }
            {
                phase === 3 &&
                <GameMenu msg={`${user.name}の攻撃,${enemyData[cursor].name}に${user.status.atk}のダメージ！`} />
            }
            {
                phase === 4 && enemyData.length !== 0 &&
                <GameMenu msg={`${user.status.atk}のダメージを与えて倒した！`} />
            }
            {
                enemyData.length === 0 &&
                <GameMenu msg={`敵をすべて倒した！！`} />
            }
        </div>
    )
}

export default Game;