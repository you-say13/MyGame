import { Enemy } from "../types/Status"

const randomMath = (max: number, index? : number) => {
    if(index === undefined || index === null){
        return Math.floor(Math.random() * max)
    }else{
        return Math.floor((Math.random() * max)+index)
    }
    
}

export const setEnemy = (json:Enemy[]) :Enemy[] => {
    const len = json.length
    const enemy = randomMath(4, 1)
    let enemy_view : Enemy[] = [];
    for(let i = 0; i < enemy; i++){
        const enemyId = randomMath(len)
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
