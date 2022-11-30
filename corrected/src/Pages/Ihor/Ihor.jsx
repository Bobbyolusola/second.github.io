import Button from "../../Component/Button";
import {AppRoutes} from "../../common/Routes";
import {Link, Route, Routes, Outlet} from "react-router-dom";
import CustomRoute from "../../Component/customRoute/CustomRoute";



const Ihor = () => {
    console.log('Ihor')
    const handleButtonClick = () => {
        console.log("CLICK")
    }
    return(
        <div className='wrapper'>
            <h3>Ihor</h3>
            <span>Ihors changes</span>
            <Button title='Click me' handleClick={handleButtonClick}/>
            <Link to ={AppRoutes.ihor + AppRoutes.friends}> Go to friends</Link>
            <Outlet />
            {/*<Routes>*/}
            {/*    <Route path={AppRoutes.friends} element={<h1>Ihors Friends</h1>}/>*/}
            {/*    <Route path={AppRoutes.custom} element={<CustomRoute />}/>*/}
            {/*</Routes>*/}
        </div>
    )
};

export default Ihor;
