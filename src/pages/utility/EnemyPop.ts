import { Enemy } from "../game_components/Interface"

const ramdomMath = (max: number, index? : number) => {
    if(index === undefined || index === null){
        return Math.floor(Math.random() * max)
    }else{
        return Math.floor((Math.random() * max)+index)
    }
    
}

export const setEnemy = (json:Enemy[]) :Enemy[] => {
    const len = json.length
    const enemy = ramdomMath(4, 1)
    let enemy_view : Enemy[] = [];
    for(let i = 0; i < enemy; i++){
        const enemyId = ramdomMath(len)
        const tmp :Enemy = {
            EnemyId:json[enemyId].EnemyId,
            name:json[enemyId].name,
            src:json[enemyId].src,
            status:json[enemyId].status
        }
        enemy_view.push(tmp)
    }
    return enemy_view;
}
