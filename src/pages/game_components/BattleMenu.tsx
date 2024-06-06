import { Player } from "./Interface";


const BattleMenu = (Props:{
    user: Player,
    value: number,
    className: string
}) => {

    console.log(Props.value)

    return (
        //<div className="h-1/3 w-full flex flex-row items-center justify-center bg-black border border-1 rounded-xl text-white text-center">
            <div id="COMMAND SELECTBOX" className={`${Props.className}`}>
                <div>たたかう
                        {
                            Props.value === 0 &&
                            <span>←</span>
                        }
                </div>
                <div>どうぐ
                        {
                            Props.value === 1 &&
                            <span>←</span>
                        }
                </div>
                <div>とくぎ
                        {
                            Props.value === 2 &&
                            <span>←</span>
                        }
                </div>
                <div>にげる
                        {
                            Props.value === 3 &&
                            <span>←</span>
                        }
                </div>
            </div>
        //</div>
    )
}

export default BattleMenu;