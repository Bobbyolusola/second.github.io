const HOCview = ({data}) => {

    return(
        <>
        {data?.length > 0 &&
        data.map((item, index) => (
            <div key = {item.name + index}>
                <p>{item.name}</p>
                <img src={item.image} alt=""/>
            </div>
        ))}
        </>
    )
}

export default HOCview;