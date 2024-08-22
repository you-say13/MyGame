interface Props{
    size:number,
}

const Mybox = (props:Props)=>{

    return (
        <>
            <input
                className={`text-sm w-[`+ props.size +`%] h-[`+props.size+`%] flex flex-row jusity-center flex-wrap border border-1 border-black`}

            />
        </>
    )
}

export default Mybox