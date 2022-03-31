import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './ProductReview.css'

const ProductReviw = (props) => {
    const { product, handleRemoveItem } = props;
    const { name, img, quantity, shipping, price } = product;

    return (
        <div className='reviw-item flex'>
            <div className='mr-2'>
                <img src={img} alt="" />
            </div>
            <div className="flex justify-between w-[100%]">
                <div className="item-details">
                    <h1 title={name} className='text-2xl'>{name.length > 20 ? name.slice(0, 20) + '...' : name}</h1>
                    <p className=' text-lg font-bold'>Price: <span className='text-[#FF9900]'>${price}</span></p>
                    <p className='text-xs font-bold'>quantity: {quantity}</p>
                    <p className='text-xs font-bold'>Shipping Carge: <span className='text-[#FF9900]'>${shipping}</span></p>
                </div>
                <div className="flex items-center">
                    <button onClick={() => handleRemoveItem(product)} className='text-[#EB5757] text-[27px] rounded-[50%] bg-red-200 w-[55px] h-[55px]'>
                        <FontAwesomeIcon icon={faTrashAlt}></FontAwesomeIcon>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductReviw;