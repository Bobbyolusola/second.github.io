import {AppRoutes} from "../Routes";
import { Navigate } from "react-router-dom"
import {userTypes} from "../constants";

export const PublicRouteHOC = ({Component}) => {
    const user = JSON.parse(localStorage.getItem('user'))
    // console.log('userHOC', user)
    return user
        ? <Component/>
        : <Navigate to={AppRoutes.NoPerm} />
}