import React, { useContext } from 'react';
import './CSS/ShopCategory.css';
import { ShopContext } from '../Context/ShopContext';
import dropdown_icon from '../Components/Assets/dropdown_icon.png';
import Item from '../Components/Item/Item';

const ShopCategory = (props) => {
    const { all_product } = useContext(ShopContext);

    // Filter products based on the selected category
    const filteredProducts = all_product.filter(item => item.category === props.category);

    return (
        <div className="shop-category">
            {props.banner && (
                <img className="shopcategory-banner" src={props.banner} alt="Category Banner" />
            )}
            <div className="shopcategory-indexSort">
                <p>
                    <span>Showing {filteredProducts.length} </span> out of {all_product.length} products
                </p>
                <div className="shopcategory-sort">
                    Sort by <img src={dropdown_icon} alt="Sort Dropdown Icon" />
                </div>
            </div>
            <div className="shopcategory-products">
                {filteredProducts.length > 0 ? (
                    filteredProducts.map((item, i) => (
                        <Item
                            key={i}
                            id={item.id}
                            name={item.name}
                            image={item.image}
                            new_price={item.new_price}
                            old_price={item.old_price}
                        />
                    ))
                ) : (
                    <p>No products found in this category.</p>
                )}
            </div>
            <div className="shopcategory-loadmore">
                  Explore More
            </div>
        </div>
    );
};

export default ShopCategory;
