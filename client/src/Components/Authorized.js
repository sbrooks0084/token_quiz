const Authorized = ({logOut}) => {

    const handleClick = () => {
        logOut()
    }

    return (
        <>
            <div className="header">Authorized... Good stuff...</div> 
            <button className="btn" onClick={handleClick}>Log out</button>
        </>
    )
}

export default Authorized