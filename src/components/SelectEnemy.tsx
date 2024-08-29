import { Enemy, Player } from "../types/Status"



const SelectEnemy = (props:{
    user: Player,
    enemyData: Enemy[],
    setCursor: React.Dispatch<React.SetStateAction<number>>
    cursor: number,
    className: string
}) => {
    return (
        <div id="ENEMY SELECTBOX" className={`${props.className}`}>
            {
                props.enemyData.map((Element, index)=> {
                    return(
                        <span key={index}>
                        {
                            props.cursor === index &&
                                <div className="text-center">{Element.name} ←</div>
                        }
                        {
                            props.cursor !== index &&
                                <div className="text-center">{Element.name}</div>
                        }
                        </span>
                    )
                })
            }
        </div>
    )
}

export default SelectEnemy;