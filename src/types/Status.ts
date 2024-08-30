/// 敵のステータス
export interface Enemy{
  EnemyId: number
  name: string
  src: string
  status:{
      HitPoints:number
      Attack:number
      MagicAttack:number
      Defense:number
      MagicDefense:number
      Speed:number
  }
}

/// プレイヤーのステータス
export interface Player{
  name: string
  level: number
  exp: number
  status:{
      HitPoints:number
      MagicPoints:number
      Attack:number
      MagicAttack:number
      Defense:number
      MagicDefense:number
      Speed:number
      Dex:number
      Luck:number
  }
  gold: number
}

/// 装備品のステータス
export interface EquipmentStatus{
  HitPoints?:number,
  MagicPoints?:number,
  Attack?:number,
  MagicAttack?:number
  Defense?:number,
  MagicDefense?:number,
  Speed?:number,
  Dex?:number,
  Luck?:number
}

/// プレイヤーが装備できる装備品の種類
export interface EquipmentSlot{
  weapon?: EquipmentStatus,
  shield?: EquipmentStatus,
  head?: EquipmentStatus,
  body?: EquipmentStatus,
  arms?: EquipmentStatus,
  waist?: EquipmentStatus,
  legs?: EquipmentStatus,
  accessories?: EquipmentStatus
}