import React from 'react';
import banner from '../assets/banner_nav.svg'
import './Banner.scss'

const Banner = () => {
    return ( 
        <div className="contenedor-banner">
            <img className="banner-img" src={banner} top width="70%" alt="banner-img"/>
        </div>
     );
}
 
export default Banner;