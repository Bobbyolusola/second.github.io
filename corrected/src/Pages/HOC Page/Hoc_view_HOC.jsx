import {useEffect, useState} from "react";
import HOCview from "./Hoc_view";
import {CharacterAPI, EpisodesAPI, LocationsAPI} from "../../API/API";
import {getCharactersThunk, rickMortyActions} from "../../redux/actions/rickMortyActions.jsx";
import {useDispatch} from "react-redux";
import useGetDataHook from "../../Component/customHook/useGetDataHook";

const HOCComponentWithState = ({Component}) => {
    const [data, setData] = useState([])
    // const [userData, setUserData] = useState([])
    const [needToDo, setNeedToDo] = useState(false)
    const [counter, setCounter] = useState(5)
    const [needGetData, setNeedGetData] = useState(5)
    const [specificData, setSpecificData] = useState([])
    const {REACT_APP_RICK_MORTY} = process.env
    const obj = process.env
    const dispatch = useDispatch();
    const getCharacters = (a, someFunc) => dispatch(getCharactersThunk(a, someFunc))


    console.log("REACT_APP_RICK_MORTY", obj)
    const user = {
        name: 'bobby',
        role: 'student'
    }

    // useEffect( ()=>{
    //     fetch('https://rickandmortyapi.com/api/character',{
    //         method: 'POST',
    //         body: JSON.stringify(user)
    //     })
    //         .then((res) => res.json())
    //         .then((fetchData) => {
    //             setData(fetchData.results)
    //             const arr = fetchData.results.map((item, index) => index<counter && item)
    //             setUserData(arr)
    //         })
    // }, [])


    // useEffect( ()=>{ // FOR AXIOS API
    //     CharacterAPI.getCharacters("1234")
    //         .then((fetchData) => {
    //             console.log(fetchData.data)
    //             setData(fetchData.data.results)
    //             const arr = fetchData?.data.results?.map((item, index) => index<counter && item)
    //             setUserData(arr)
    //         })
    // }, [])

    const checkTODO = () => {
        alert('HE')
    }

    const name = useGetDataHook(needGetData, getCharacters, checkTODO, setSpecificData)
    useEffect( ()=>{
        setTimeout( ()=> setNeedGetData(true), 5000)
    });

    useEffect( ()=>{
        console.log("name", name)
    })
    // useEffect( ()=>{ // FOR THUNK
    //     getCharacters("hello", checkTODO);
    // }, [])
    //
    // useEffect( ()=>{
    //     needToDo
    //         && console.log("EXECUTE FUNCTION", needToDo)
    // }, [needToDo])

    // useEffect( ()=>{ // FOR REDUCERS API
    //     CharacterAPI.getCharacters("1234")
    //         .then((fetchData) => {
    //             dispatch(rickMortyActions.addCharacters(fetchData.data.results))
    //             dispatch(rickMortyActions.addInfo(fetchData.data.info))
    //             const arr = fetchData?.data.results?.map((item, index) => index<counter && item)
    //             console.log(arr)
    //             setUserData(arr)
    //         })
    // }, [])



    // LocationsAPI.getCharacters()
    //     .then(res => console.log(res.data))
    //
    // EpisodesAPI.getCharacters()
    //     .then(res => console.log(res.data))

    // useEffect( ()=>{
    //     const arr = data?.map((item, index) => index<counter && item)
    //     setUserData(arr)
    // }, [counter])

    // const sum = (a) => { /// FUNCTION EXAMPLES
    //     return function(b){
    //         console.log(a+b)
    //     }
    // }
    // sum(2)(4)


    return(
        <Component
        // data={userData}
        counter={counter}
        setCounter={setCounter}
        />
    )
}

// export default HOCComponentWithState;
export const HOC = () => <HOCComponentWithState Component={HOCview}/>;