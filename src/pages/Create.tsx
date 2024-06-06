import MyInput from "./components/myInput"
import MyButton from "./components/myButton"
import {useState} from "react"

const Create = () =>{
    const [row,setRow] = useState("")
    const [col,setCol] = useState("")
    const [title,setTitle] = useState("")

    const rowHandler = (value: string) =>{
        setRow(value)
    }
    const colHandler = (value: string) =>{
        setCol(value)
    }
    const titleHandler = (value: string) =>{
        setTitle(value)
    }
    const clickhandler = (value:Array<string>) =>{
        console.log(value)
    }

    return(
        <div className="w-full h-full flex flex-col justify-center items-center">
            <div className="flex justify-center font-bold">
                行：
                <MyInput
                    placeholder="数値を入力"
                    value={row}
                    type="text"
                    changeHandler={rowHandler}
                />
            </div>
            <div className="flex justify-center font-bold mt-8">
                桁：
                <MyInput
                    placeholder="数値を入力"
                    value={col}
                    type="text"
                    changeHandler={colHandler}
                />
            </div>
            <div className="flex justify-center font-bold mt-8">
                タイトル：
                <MyInput
                    placeholder="文字を入力"
                    value={title}
                    type="text"
                    changeHandler={titleHandler}
                />
            </div>
            <MyButton
                text="新規作成"
                value={[
                    row,
                    col,
                    title
                ]}
                onClick={() => clickhandler([row,col,title])}
            /> 

        </div>
    )
}

export default Create;