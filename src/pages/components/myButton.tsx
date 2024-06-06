interface Props{
    text:string,
    value?:Array<string | number>,
    onClick(value?:string | number | Array<string | number> ): void
}

const myButton = (props:Props) =>{

    console.log("CHILD RUNNING")
    return(
        <button type="button" onClick={() => {
            if(props.value !== null && props.value !== undefined){
                props.onClick(props.value)
            }
            
        }}>
            {props.text}
        </button>
    )
}
export default myButton;