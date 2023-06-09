import React from 'react';
import Menu from '../components/Menu';
import Footer from '../components/Footer';
import DetailLaptop from '../detail/DetailLaptop';

function DetailLap() {
  return (
    <div>
            <Menu />

            <div className="container" style={{paddingTop:"100px"}}>< DetailLaptop /></div>

            <Footer />
        </div>
  )
}

export default DetailLap