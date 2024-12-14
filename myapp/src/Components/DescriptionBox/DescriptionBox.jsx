import React from "react";
import './DescriptionBox.css'

const DescriptionBox = () => {
    return (
        <div className="descriptionbox">
          <div className="discriptionbox-navigator"> 
              <div className="descriptionbox-nav-box"> Description </div>
              <div className="descriptionbox-nav-box fade">  Reviews (122)  </div>
          </div>
          <div className="descriptionbox-description">
            <p>An e-commerce website is an online platform that allows businesses to showcase and sell
                their products or services to customers over the internet. It typically includes features
                such as product catalogs, secure payment gateways, user accounts, and a seamless checkout
                process. E-commerce websites enable businesses to reach a global audience, operate 24/7, 
                and provide convenient shopping experiences for customers.</p>
                <p>
                    E-commerce website typically display products or service along with detailed description,images
                    ,prices and any available variations (e.g. sizes,colors). Each product usually has its own dedicated page
                    with relevant information
                </p>
          </div>
        </div>
    )
}

export default DescriptionBox