const Unauthorized = ({getAuth}) => {

    const handleClick = () => {
        getAuth()
    }
    
    return (
        <>
            <div className="header">Stop! Unauthorized!</div> 
            <button className="btn" onClick={handleClick} >Get authorized</button>
        </>
    )
}

export default Unauthorized