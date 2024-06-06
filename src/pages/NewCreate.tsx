import {useState, useCallback, useEffect} from 'react'
import Mybox from './components/Mybox'
import MyInput from './components/myInput'

const NewCreate = () =>{

    document.title="表作成アプリ"

    const [Rows, SetRows] = useState(1)
    const [Cols, SetCols] = useState(1)
    const [Size, SetSize] = useState(8)

    let tmp : Array<{
        id: String,
        style: String,
    }> = []

    let i = 0;
    let j = 0;

    const variable : Array<string> = [
        "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", 
        "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V",
        "W", "X", "Y", "Z"
    ]

    const roop = () =>{
        let counter = []
        for(i = 0; i < Rows; i++){
            counter.push(<tr>{(() => countroop(variable[i]))()}</tr>)
        }
        return counter
    }

    const countroop = (value:string) =>{
        let temp  = []
        let string:String;
        for(j = 0; j < Cols; j++){
            string = value+variable[j]
            tmp[j] = {id:string, style:""}
            temp.push(<div className='flex flex-row flex-wrap'><Mybox size={Size} /></div>)
        }
        return temp
    }

    const stylehandler = useCallback(() => {
        console.log(tmp)
    },[SetRows, SetCols, Rows, Cols])

    useEffect(()=>{
        stylehandler()
    },[stylehandler])

    const rowhandler = (value:number) =>{
        SetRows(value)
    }

    const colhandler = (value:number) => {
        SetCols(value)
    }

    const sizehandler = (value:number) => {
        SetSize(value)
    }

    return(
        <div className='flex flex-col items-center w-full h-full'>
            <div className='mt-8'>
                <div className='flex justify-center'>
                    横：<MyInput type='number' placeholder='数値を変更' value={Rows} changeHandler={rowhandler} />
                </div>
                <div className='flex justify-center'>
                    縦：<MyInput type='number' placeholder='数値を変更' value={Cols} changeHandler={colhandler} />
                </div>
                <div className='flex justify-center'>
                    ボックスのサイズ：<MyInput type='number' placeholder='数値を変更' value={Size} changeHandler={sizehandler} />
                </div>
            </div>
            <div className={`flex mt-4 max-w-[80%] max-h-[80%] overflow-x-scroll overflow-y-scroll border border-1 border-gray-800`}>
            {(() => 
                roop()
            )()}
            </div>
        </div>
    )
}

export default NewCreate;