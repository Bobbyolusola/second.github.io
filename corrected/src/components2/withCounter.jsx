import React, {useState} from "react";


const UpdatedComponents = (OriginalComponent, increaseCount) => {
    function NewComponent(props){
        const [counter, setCounter] = useState(10);
        // return <OriginalComponent name = "LogRocket" />;
              return  <OriginalComponent
                  name = "LogRocket"
                  counter={counter} //export our counter Hook
        //now create an 'incrementSize' function
            // incrementCounter={ ()=> setCounter((counter) => counter + 1)}
                  incrementCounter = { ()=> setCounter((size)=> size + increaseCount)} //In this piece of code, we informed React that our function will now take in an additional parameter called increaseCount, and we will add to our wrapped components.
        />;
    }
  return NewComponent;
}

export default UpdatedComponents;

//we created a function called UpdatedComponent
// that takes in an argument called OriginalComponent.
// In this case, the OriginalComponent will be the React element which will be wrapped
//Later on, we told React to render OriginalComponent to the UI.