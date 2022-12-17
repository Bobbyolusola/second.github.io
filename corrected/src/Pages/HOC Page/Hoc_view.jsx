//a higher-order component is a function that takes in a component and returns a new component
//higher-order components allow developers to reuse code logic in their project

import {useState} from "react";
import First from "./First";
import Second from "./Second";
import {useSelector} from "react-redux";

const HOCview = ({ counter, setCounter}) => {
const data = useSelector(store => store.rickMorty.characters)
    return(
        <>
            <First counter={counter} setCounter={setCounter}/>
            <Second counter={counter} setCounter={setCounter}/>
        {data?.length > 0 &&
        data.map((item, index) => (
            <div key = {item.name}>
                <p>{item.name}</p>
                <img src={item.image} alt=""/>
            </div>
        ))}
        </>
    )
}

export default HOCview;