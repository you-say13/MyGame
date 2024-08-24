import { useEffect } from "react"

const SelectMenu = ({
  style,
  selectList,
  keyEvent,
  mouseEnterEvent,
  cursor,
  setCursor,
}:{
  style?: {
    width?: string,
    height?: string,
    fontSize?: string,
    isBlock?: boolean,
  }
  selectList: string[],
  keyEvent: (e: KeyboardEvent) => void,
  mouseEnterEvent: (number: number) => void,
  cursor: number,
  setCursor: React.Dispatch<React.SetStateAction<number>>
}) => {
  useEffect(() => {
    document.addEventListener("keydown", keyEvent)

    return () => {
      document.removeEventListener("keydown", keyEvent)
    }
  }, [cursor])

  return (
    <div className={`SelectMenu flex justify-center items-center ${style?.width ?? 'w-full'} ${style?.height ?? 'h-full'} ${style?.isBlock ?? 'bg-gray-900'} text-white ${style?.fontSize ?? 'text-2xl'} font-bold`}>
      <div className={`flex-col items-center grid grid-row-${selectList.length} text-center ${style?.isBlock ? `h-full w-full` : `w-1/3 h-2/3 max-h-2/3`} bg-black border border-white rounded-xl`}>
        {
          selectList.map((list, index) => {
            return (
              <div
                className="hover:cursor-pointer hover:rounded-sm"
                key={index}
                onClick={() => mouseEnterEvent(index)}
                onMouseEnter={() => setCursor(() => index)}
              >
                {list}
                {
                  cursor === index &&
                  <span> ←</span>
                }
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default SelectMenu