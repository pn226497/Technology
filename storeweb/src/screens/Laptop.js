import React from 'react';
import Menu from '../components/Menu';
import Footer from '../components/Footer';
import LaptopLayout from '../layouts/LaptopLayout';

function Laptop() {
    return (
        <div style={{background:"linear-gradient(#DAFDBA, #9AEBA3 )"}}>
            <Menu />

            <div className="container" style={{paddingTop:"100px"}}>< LaptopLayout /></div>

            <Footer />
        </div>
    )
}

export default Laptop