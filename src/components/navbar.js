function Navbar(props) {
    
    return(
        <nav className="navbar" style={{width:'100vw',height:'20vh', backgroundColor: 'black',color:'white', opacity:0.78}}>
            <div className="Navbar">
                <h1 className="justify-content-center">
            {props.title}
            </h1>
            </div>
        </nav>
    )
}

export default Navbar