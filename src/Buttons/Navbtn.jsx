import React from 'react';
import {useNavigate} from 'react-router-dom';



function Navbtn () {
    const navigate = useNavigate();
    return (
        <div className="nav-buttons">
            <button onClick={()=> navigate ("/Home")}>Home</button>            
            <button onClick={()=> navigate ("/Mylibrary")}>Mylibrary</button>
            <button onClick={()=> navigate ("/Expired")}>Expired</button>
            <button onClick={()=> navigate ("/About")}>About</button>            
            {/* <button onClick={()=> navigate ("/Settings")}>Settings</button> */}
        </div>
    )
};

export default Navbtn;