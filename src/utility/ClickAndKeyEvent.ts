import { handleClickEvent, handleKeyEvent } from "./KeyEvent"


export const keyEvent = (
  e: KeyboardEvent,
  setCursor: React.Dispatch<React.SetStateAction<number>>,
  cursor: number,
  setPhase: React.Dispatch<React.SetStateAction<number>>,
  phase: number,
  len: number,
  isBackButton: boolean | undefined = false
 ) => {
  handleKeyEvent({e, cursor, setCursor, setPhase, phase, len, isBackButton})
}

export const ClickEvent = (
  dungeonNumber: number,
  setCursor: React.Dispatch<React.SetStateAction<number>>,
  setPhase: React.Dispatch<React.SetStateAction<number>>,
  isBackButton: boolean | undefined = false
) => {
  const key = {
    number: dungeonNumber,
    setCursor: setCursor,
    setPhase: setPhase,
    isBackButton: isBackButton
  }

  handleClickEvent(key)
}