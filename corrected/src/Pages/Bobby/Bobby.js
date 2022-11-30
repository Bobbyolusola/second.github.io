import {Route, Routes, useLocation} from "react-router-dom";
import {useEffect} from "react";
import {AppRoutes} from "../../common/Routes";
import styles from './Bobby.module.scss'

const Bobby = () => {
    console.log('Bobby')
    const location = useLocation();
    useEffect( ()=>{
        console.log(location)
    }, [])
    return(
        <div>
            <h1>hello</h1>
            <div className={styles.Container}>
                <h3>Bobby page</h3>
                <span>Bobby changes</span>
            </div>
            <Routes>
                <Route path = {AppRoutes.friends} element = {<h1>Bobby friends</h1>}/>
            </Routes>
        </div>
    )
}

export default Bobby;

