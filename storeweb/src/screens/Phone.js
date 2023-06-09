import React from "react";
import Menu from '../components/Menu';
import Footer from '../components/Footer';
import PhoneLayout from "../layouts/PhoneLayout";




function Phone() {

    return (
        <div style={{background:"linear-gradient(#DAFDBA, #9AEBA3 )"}}>
            <Menu />

            <div className="container" style={{paddingTop:"100px"}}><PhoneLayout /></div>
               
            <Footer />
        </div>
    );
}


export default Phone