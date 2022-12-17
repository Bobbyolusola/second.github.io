const Second = ({counter, setCounter}) => {

    return(
        <div style={{backgroundColor: "aqua"}}>
            Counter Second {counter}
            <button onClick={ ()=> setCounter((prevState)=> prevState+1)}>Increase</button>
        </div>

)
}

export default Second;