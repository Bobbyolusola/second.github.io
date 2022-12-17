import {useState} from "react";
import withCounter from "./withCounter";


const ClickIncrease = (props) => {
    const [fontSize, setFontSize] = useState(10);
    const { counter, incrementCounter} = props;
    return(
        <div>
            <button onClick={ ()=> setFontSize((size) => size + 1)}>
                Increase with click
            </button>
            <p style={{ fontSize }}>Size of font in onClick function: {fontSize} </p>
            <p>
            Value of 'name' in ClickIncrease: {props.name}
            </p>

            {/*Use the incrementCounter method to increment the 'counter' state..*/}
            <button onClick={ ()=> incrementCounter()}>
                Increment Counter
            </button>
                {/*Render the value of our 'counter' variable:*/}
            <p> Value of 'counter' in ClickIncrease: {counter}</p>


        </div>
    );
}

export default withCounter (ClickIncrease, 3);