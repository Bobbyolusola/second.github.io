import {userTypes} from "../../common/constants";

const Main = () => {
const setAdmin  = () => {

    const user = {
        name: 'admin',
        role: userTypes.admin
    }
    localStorage.setItem('user', JSON.stringify(user))
}

    const setUser = () => {
        const user = {
            name: 'user',
            role: userTypes.user
        }
        localStorage.setItem('user', JSON.stringify(user))
    }

    const setLogOut = () => {
        localStorage.removeItem('user')
    }


    return(
        <div>
            <h1>Main</h1>
            <button onClick={setAdmin}>Set as Admin</button>
            <button onClick={setUser}>Set as User</button>
            <button onClick={setLogOut}>Set as Unauth</button>
        </div>
    )
}

export default Main;