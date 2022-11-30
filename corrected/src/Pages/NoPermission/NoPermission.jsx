import {useEffect, useState} from "react";
import { useNavigate } from 'react-router-dom';
import {AppRoutes} from "../../common/Routes";

const NoPerm = () => {
const [seconds, setSeconds] = useState( 5);
const navigate = useNavigate();

    useEffect( ()=> {
        const interval = setInterval( ()=>{
            seconds !== 0
            ? setSeconds( (prevState ) => prevState-1)
                : clearInterval(interval)
        }, 1000)

        seconds === 0 && navigate(AppRoutes.home)

        return ()=> clearInterval(interval)
    }, [seconds])

    return(
        <div className='wrapper'>
            <h3>You have no permission</h3>
            <p>You will be redirected in {seconds} to Main Page</p>
        </div>
    )
}

export default NoPerm;