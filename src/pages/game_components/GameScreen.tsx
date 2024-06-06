import { useEffect } from "react";
import { gsProps } from "./Interface";

const GameScreen = (props: gsProps) => {

  const gameScreenElement = document.getElementById("GameScreen");

  useEffect(() => {
    let temporaryList = []
    if (gameScreenElement !== undefined && gameScreenElement !== null) {
      for (let i = 0; i < gameScreenElement.children.length; i++) {
        temporaryList.push(gameScreenElement.children[i].id)
      }
      props.setEnemyId(temporaryList)
    }
  }, [])

  return (
    <div id="GameScreen" className="flex items-center justify-center w-10/12 h-2/3 bg-gray-900 text-white">
      {
        props.enemy.map((Element, index) => {
          return (
            <div key={index} className="flex flex-col justify-center items-center">
              {
                index === props.cursor && props.phase === 2 &&
                <div>↓</div>
              }

              <div key={index} id={index.toString()} className={`w-1/${100 / props.enemy.length}`}><img className="h-1/2 w-1/2 flex mx-auto" src={`/images/${Element.src}`} /></div>
            </div>
          )
        })
      }
    </div>
  )
}

export default GameScreen