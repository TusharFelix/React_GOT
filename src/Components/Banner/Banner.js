import React from 'react';
import banner from '../../assets/images/rVFdvk2.jpg';
import DragonIcon from '../../assets/images/dragon.png'

// import  
function Banner(){

    const bannerStyle = {
        background : "url("+banner+") no-repeat",
        height : '600px',
        backgroundSize : '100% 100%',
        display : 'flex',
        alignItems: 'center',
        justifyContent : 'center'
    }

    const bannerHeader= {
        fontFamily : 'GOT6',
        fontWeight: 'bold',
        fontSize : "55px",
        color : 'white',
        background: 'rgba(0,0,0,0.6)',
        display :'inline-block',
        textShadow : '10px 5px 8px rgba(0,0,0,0.5)',
        cursor: `url(${DragonIcon}), pointer`
    }

    return(
        <div>
            <div style={bannerStyle}>
                <h1 style={bannerHeader}>
                    THE HOUSES OF WESTEROS
                </h1>
            </div>
        </div>
    );
}

export default Banner;