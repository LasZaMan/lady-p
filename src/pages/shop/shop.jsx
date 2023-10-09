import React from 'react';
import { PRODUCTS } from '../../products';
import { Product } from './product';
import "./shop.css";



export const Shop = () => {
    return (
        <div className='shop'>
            <div className="shopTitle">
                <h1><span className="blue">SCENTS</span><span
                    className="white">BY</span><span className="green">LADYP</span></h1>
            </div>
            <div className='Headings'>
                <h1>Our Products</h1>
                <p>We have a wide variety of perfumes, of many sizes, scents, fragrances
                    suitable for all occasions, outings, events, dresses, parties, etc.
                    You can also pre-order a custom scent/fragrance/type/size.</p>
            </div>
            <div className="products">
                {PRODUCTS.map((product) => (
                    <Product data={product} />
                ))}
            </div>
          
            <script src="https://use.fontawesome.com/bb36df3d37.js"></script>
        </div>
    )
}
