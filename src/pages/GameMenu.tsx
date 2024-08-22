const GameMenu = (props:{msg:string, className?:string}) => {
    return (
        <div className={props.className ?? `GameMenu text-2xl flex items-center justify-center w-hull h-1/3 bg-black border-1 border border-white rounded-xl text-white`}>
            {props.msg}
        </div>
    )
}

export default GameMenu