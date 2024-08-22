import { Enemy, Player } from "./Status"

export interface enemyChooseKeyProps{
    event: KeyboardEvent,
    setPhase: React.Dispatch<React.SetStateAction<number>>
    setCursor: React.Dispatch<React.SetStateAction<number>>
    setEnemyId: React.Dispatch<React.SetStateAction<string[]>>
    setChose: React.Dispatch<React.SetStateAction<number>>
    phase: number
    cursor: number
    enemyId: string[]
    chose: number
    len? : number
}

export interface gameScreenEnemyProps{
    enemy:Enemy[]
    enemyId:string[]
    setEnemyId:React.Dispatch<React.SetStateAction<string[]>>
    chose:number
    phase:number
    cursor:number
}

export interface damageCheckerProps{
    event: KeyboardEvent
    user: Player
    setEnemy: React.Dispatch<React.SetStateAction<Enemy[]>>
    setCursor: React.Dispatch<React.SetStateAction<number>>
    setPhase: React.Dispatch<React.SetStateAction<number>>
    setTurn: React.Dispatch<React.SetStateAction<number>>
    enemy: Enemy[]
    cursor:number
}
