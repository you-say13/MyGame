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