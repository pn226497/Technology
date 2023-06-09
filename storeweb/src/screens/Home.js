import React from 'react';
import Menu from '../components/Menu';
import Footer from '../components/Footer';
// import data from '../data/data.json';
import HomeLayout from '../layouts/HomeLayout';
import '../layouts/icon.css'


function Home() {
  // console.log(data.products.phone);








  return (
    <div style={{ background: "linear-gradient(#DAFDBA, #9AEBA3 )" }}>
      <Menu />
      

      <div className='container' style={{ paddingTop: "100px" }}><HomeLayout />

      </div>
    
      <div id="iconpulse" className='fixed-bottom'>
        <div class="pulse" >

        <i class="fa fa-headset"></i>
          
        </div>
</div>
   
      
      



      <Footer />
    </div>
  );

}

export default Home;