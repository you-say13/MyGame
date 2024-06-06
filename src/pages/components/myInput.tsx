interface Props{
    type:string,
    placeholder:string,
    value:string | number,
    min?:number,
    max?:number,
    changeHandler(value:string | number):void
}

const myInput = (props:Props) =>{
    return (
        <input
            className="border border-gray-800 rounded-md focus:outline-none focus:ring focus:border-blue-500"
            type={props.type}
            placeholder={props.placeholder}
            minLength={props.min ? props.min : 1}
            value={props.value}
            onChange={(event) => props.changeHandler(event.target.value)}
        />
    )
}

export default myInput;