import React from 'react';
import Menu from '../components/Menu';
import Footer from '../components/Footer';
import SmartwatchLayout from '../layouts/SmartwatchLayout';


function Smartwatch() {
    return (
        <div style={{background:"linear-gradient(#DAFDBA, #9AEBA3 )"}}>
            <Menu />

            <div className="container" style={{paddingTop:"100px"}}>< SmartwatchLayout /></div>

            <Footer />
        </div>
    )
}

export default Smartwatch