import React from 'react';
import Hero from '../Components/Hero/Hero';
// import Popular from '../Components/Popular/Popular';
import Offers from '../Components/Offers/Offers';
import NewCollection from '../Components/NewCollection/NewCollection';
import Newsletter from '../Components/Newsletter/Newsletter';
import LoginSignup from './LoginSingnup';



const Shop = () => {
  return (
    <div>
      <Hero />
      {/* <Popular /> */}
      <Offers />
      <NewCollection />
      <Newsletter />
      <LoginSignup />
      
    </div>
  );
};

export default Shop;
