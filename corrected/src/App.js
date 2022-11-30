import logo from './logo.svg';
import './App.css';
import Bobby from "./Pages/Bobby/Bobby";
import Ihor from "./Pages/Ihor/Ihor";
import Header from "./Header/Header";
import {Routes, Route, BrowserRouter} from "react-router-dom";
import {AppRoutes, NestedRoutes} from "./common/Routes";
import Main from "./Pages/Main/Main";
import {PublicRouteHOC} from "./common/routeHOC/PublicRoute";
import NoPerm from "./Pages/NoPermission/NoPermission";
import {AdminRouteHOC} from "./common/routeHOC/AdminRoute";
import CustomRoute from "./Component/customRoute/CustomRoute";

function App() {

  return (
    < div>
        <BrowserRouter>
        <Header/>

        <Routes>
                <Route path ={AppRoutes.home} element = {<Main/>}/>
                <Route path ={AppRoutes.NoPerm}  element = {<NoPerm/>}/>

                <Route path ={NestedRoutes.bobby} element = {<PublicRouteHOC Component ={Bobby}/>}/> //user

                {/*<Route path ={NestedRoutes.ihor}  element = {<AdminRouteHOC Component ={Ihor}/>}/> //admin*/}
                <Route path ={NestedRoutes.ihor}  element = {
                    <AdminRouteHOC Component ={Ihor}>
                            <Route path={AppRoutes.friends} element={<h1>Ihors Friends</h1>}/>
                            <Route path={AppRoutes.custom} element={<CustomRoute />}/>
                    </AdminRouteHOC>
                }/> //admin

                <Route path = '*' element ={<h1>Error404</h1>}/>
                <Route path ={AppRoutes.notFound} element ={<h1>Not Found</h1>}/>
                {/*<Route path ={AppRoutes.friends} element ={<h1>Friends</h1>}/>*/}
        </Routes>
        </BrowserRouter>



    </div>
  );
}

export default App;
