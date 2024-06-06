import { Link, useLocation } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";

const Header = () =>{
    const str = useLocation().pathname;
    let location = str.replace('/', '');
    if(location === ''){
        location = "私のアプリ";
    }

    return(
        <div className="w-full h-full flex items-center justify-between">
            {location !== '私のアプリ' ?
                <div className="w-1/3 h-1/2 flex items-center justify-center">
                    <Link to={"/"}>
                        <IoIosArrowBack className="hover:cursor-pointer text-4xl" />
                    </Link>    
                </div>
                :
                <div className="w-1/3"></div>
            }
            <p className="w-1/3 text-4xl font-bold text-center">{location}</p>
            <div className="w-1/3"></div>
        </div>
    )
}
export default Header;