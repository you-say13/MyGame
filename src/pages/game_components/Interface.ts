export interface Enemy{
    EnemyId: number
    name: string
    src: string
    status:{
        hp:number
        atk:number
        def:number
        spd:number
    }
}

export interface Player{
    name: string
    level: number
    exp: number
    status:{
        hp:number
        mp:number
        atk:number
        def:number
        spd:number
    }
    gold: number
}

export interface Key{
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

export interface gsProps{
    enemy:Enemy[]
    enemyId:string[]
    setEnemyId:React.Dispatch<React.SetStateAction<string[]>>
    chose:number
    phase:number
    cursor:number
}

export interface DamageChecker{
    event: KeyboardEvent
    user: Player
    setEnemy: React.Dispatch<React.SetStateAction<Enemy[]>>
    setCursor: React.Dispatch<React.SetStateAction<number>>
    setPhase: React.Dispatch<React.SetStateAction<number>>
    setTurn: React.Dispatch<React.SetStateAction<number>>
    enemy: Enemy[]
    cursor:number
}