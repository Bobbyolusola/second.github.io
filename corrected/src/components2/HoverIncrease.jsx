import {useState} from "react";
import withCounter from "./withCounter";


const HoverIncrease = (props) => {
    const [fontSize, setFontSize] = useState(10);
    const {counter, incrementCounter} = props;
    return(
        <div>
            <button onMouseOver = { ()=> setFontSize ((size)=> size + 1)}>
            Increase on hover
            </button>
            <p style = {{ fontSize }}>
                Size of font in onMouseOver function: {fontSize}
            </p>

            <p>
                Value of 'name' in HoverIncrease: {props.name}
            </p>

            {/*Use the incrementCounter method to increment the 'counter' state..*/}
            <button onClick={ ()=> incrementCounter()}>
                Increment Counter
            </button>
                {/*Render the value of our 'counter' variable:*/}
                <p> Value of 'counter' in HoverIncrease: {counter}</p>

        </div>
    );
}

export default withCounter (HoverIncrease,10);