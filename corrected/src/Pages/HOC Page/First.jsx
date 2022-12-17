const First = ({counter, setCounter}) => {
    console.log('counter', counter)
    return(
        <div style={{backgroundColor: "yellow"}}>
            Counter First {counter}
            <button onClick={ ()=> setCounter((prevState)=> prevState-1)}>Decrease</button>
        </div>
    )
}

export default First;