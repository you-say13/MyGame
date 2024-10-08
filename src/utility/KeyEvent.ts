import { damageCheckerProps, enemyChooseKeyProps } from "../types/Props";
import { Enemy } from "../types/Status";


// キーボードで選択する
export const handleKeyEvent = (props: {
	e: KeyboardEvent,
	setCursor: React.Dispatch<React.SetStateAction<number>>,
	cursor: number,
	setPhase: React.Dispatch<React.SetStateAction<number>>,
	phase: number,
	len: number
	isBackButton?: boolean
}) => {
	const key = props.e.key
	if (!props.e.repeat) {
		console.log(key)
		if (key === "ArrowUp") {
			if (props.cursor === 0) {
				props.setCursor(() => props.len)
			} else {
				props.setCursor((state) => state - 1)
			}
		} else if (key === "ArrowDown") {
			if (props.cursor === props.len) {
				props.setCursor(() => 0)
			} else {
				props.setCursor((state) => state + 1)
			}
		}
		if (key === "Enter") {
			props.isBackButton && props.cursor === props.len ? props.setPhase(() => -1) : props.setPhase(() => 1)
		}
	}
}


// clickでダンジョンを選択する
export const handleClickEvent = (
	{ number, setCursor, setPhase, isBackButton }
		:
		{
			number: number,
			setCursor: React.Dispatch<React.SetStateAction<number>>,
			setPhase: React.Dispatch<React.SetStateAction<number>>,
			isBackButton?: boolean,
		}
) => {
	setCursor(() => number)
	isBackButton ? setPhase(() => -1) : setPhase(() => 1)
}

//store用のクリックイベント
export const shopClickEvent = (
	{number, setCursor, setPhase, isBackButton, compareValue}:{
		number: number,
		setCursor: React.Dispatch<React.SetStateAction<number>>,
		setPhase: React.Dispatch<React.SetStateAction<number>>,
		isBackButton?: boolean,
		compareValue: number
	}
) => {
	setCursor(() => number);
	if(isBackButton){
		setPhase((prev) => prev + compareValue);
	}
}

//phaseを０に変更
export const firstEnterHandler = (props: enemyChooseKeyProps) => {
	const key = props.event.key;
	if (!props.event.repeat) {
		console.log(key)
		if (key === "Enter") {
			props.setPhase(() => 1)
		}
	}
}

//phaseが1の時の行動選択画面でのイベント
export const eventHandler = (props: enemyChooseKeyProps) => {
	const key = props.event.key;
	if (!props.event.repeat) {
		console.log(key)
		if (key === "Enter") {
			if (props.cursor === 0) {
				props.setPhase(() => 2)
				props.setChose(() => 0)
			} else if (props.cursor === 1) {
				props.setPhase(() => 2)
				props.setChose(() => 1)
			} else if (props.cursor === 2) {
				props.setPhase(() => 2)
				props.setChose(() => 2)
			} else if (props.cursor === 3) {
				props.setPhase(() => 2)
				props.setChose(() => 3)
			}
			props.setCursor(() => 0)
		}
		if (key === "ArrowUp") {
			if (props.cursor === 0) {
				props.setCursor(() => 3)
			} else {
				props.setCursor(props.cursor - 1)
			}
		} else if (key === "ArrowDown") {
			if (props.cursor === 3) {
				props.setCursor(() => 0)
			} else {
				props.setCursor(props.cursor + 1)
			}
		}
	}
}

//phaseが2かつchoseが0の時の敵選択画面
export const BattleHandler = (props: enemyChooseKeyProps) => {
	if (props.len !== null && props.len !== undefined) {
		const key = props.event.key
		const len = props.len
		console.log(key)
		if (key === "ArrowDown" && len !== 1) {
			if (len - 1 !== props.cursor) {
				props.setCursor(() => props.cursor + 1)
			} else {
				props.setCursor(() => 0)
			}
		}
		if (key === "ArrowUp" && len !== 1) {
			if (props.cursor === 0) {
				props.setCursor(() => len - 1)
			} else {
				props.setCursor(() => props.cursor - 1)
			}
		}
		if (key === "Enter") {
			props.setPhase(() => props.phase + 1)
		}
	}
}

//敵を選択した後のダメージ処理と敵討伐の処理
export const DamageHandler = (props: damageCheckerProps) => {

	const key = props.event.key

	let checker: boolean = false;

	let res: Enemy[] = []

	console.log(`length:${props.enemy.length}`)

	for (let i = 0; i < props.enemy.length; i++) {

		const flag: boolean = ((props.enemy[i].status.HitPoints - props.user.status.Attack) <= 0)
		if (props.enemy[i] === props.enemy[props.cursor]) {
			if (!flag) {
				res.push({
					EnemyId: props.enemy[i].EnemyId,
					name: props.enemy[i].name,
					status: {
						HitPoints: props.enemy[i].status.HitPoints - props.user.status.Attack,
						Attack: props.enemy[i].status.Attack,
						MagicAttack: props.enemy[i].status.MagicAttack,
						Defense: props.enemy[i].status.Defense,
						MagicDefense: props.enemy[1].status.MagicDefense,
						Speed: props.enemy[i].status.Speed,
					},
					src: props.enemy[i].src
				})
			} else {
				checker = true;
			}
		} else {
			res.push(props.enemy[i])
		}
	}

	if (!props.event.repeat) {
		if (key === "Enter") {
			if (checker) {
				props.setPhase(() => 4)
			} else {
				props.setPhase(() => 1)
				props.setTurn((state) => state + 1)
				console.log("pass")
				props.setCursor(0)
			}
		}
	}
	props.setEnemy(res)
}

//Battleが終了した
export const BattleEndHandler = (props: enemyChooseKeyProps) => {
	const key = props.event.key
	if (!props.event.repeat) {
		if (key === "Enter") {
			props.setCursor(() => -1)
		}
	}
}

//Dungeon画面に戻る
export const DungeonBackHandler = (props: enemyChooseKeyProps) => {
	const key = props.event.key
	if (!props.event.repeat) {
		if (key === "Enter") {
			location.href = "/dungeon"
		}
	}
}