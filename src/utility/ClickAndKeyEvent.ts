import { DungeonSelectByClick, handleKeyEvent } from "./KeyEvent"

export const keyEvent = (
  e: KeyboardEvent,
  setCursor: React.Dispatch<React.SetStateAction<number>>,
  cursor: number,
  setPhase: React.Dispatch<React.SetStateAction<boolean>>,
  phase: boolean,
  len: number
 ) => {
  const key = {
    e: e,
    setCursor: setCursor,
    cursor: cursor,
    setPhase: setPhase,
    phase: phase,
    len: len
  }
  handleKeyEvent(key)
}

export const ClickEvent = (
  dungeonNumber: number,
  setCursor: React.Dispatch<React.SetStateAction<number>>,
  setPhase: React.Dispatch<React.SetStateAction<boolean>>,
  phase: boolean
) => {
  const key = {
    number: dungeonNumber,
    setCursor: setCursor,
    setPhase: setPhase,
    phase: phase
  }

  DungeonSelectByClick(key)
}