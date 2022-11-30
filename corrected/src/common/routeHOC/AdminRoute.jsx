import {Navigate} from "react-router-dom";
import {AppRoutes} from "../Routes";
import {userTypes} from "../constants";



export const AdminRouteHOC = ({Component, children}) => {
    const user = JSON.parse(localStorage.getItem('user'))
    console.log('userHOC', user)
    return user?.role === userTypes.admin
        ? <Component>
                {children}
            </Component >
        : <Navigate to={AppRoutes.NoPerm} />
}