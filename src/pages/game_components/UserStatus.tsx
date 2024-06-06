import { Player } from "./Interface"

const UserStatus = (props:{
    user: Player,
    className: string
}) => {

    return(
        <div className={`${props.className} text-2xl`}>
            <div className="border-b w-full">{props.user.name}</div>
            <div className="h-full">
                <div className="w-full h-1/3 mt-[2%]">LV: {props.user.level}</div>
                <div className="w-full h-1/3">HP: {props.user.status.hp}</div>
                <div className="w-full h-1/3">MP: {props.user.status.mp}</div>
            </div>

        </div>
    )
}

export default UserStatus