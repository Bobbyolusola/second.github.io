import styles from './Header.module.css'
import {Link} from "react-router-dom";
import {AppRoutes} from "../common/Routes";

const Header = () => {
    const links = Object.keys(AppRoutes)
    // console.log(Object.keys(AppRoutes))
    // console.log(Object.entries(AppRoutes))
    // console.log(Object.values(AppRoutes))

    return(
        <div className={styles.container}>
            {/*{links.map((link) => <Link to = {AppRoutes[link]}>{link}</Link>)}*/}

            <Link to = {AppRoutes.home}>Home</Link>
            <Link to = {AppRoutes.bobby}>Bobby</Link>
            <Link to = {AppRoutes.ihor}>Ihor</Link>
            {/*<Link to = {AppRoutes.friends}>Ihor</Link>*/}
        </div>
    );
}

export default Header;