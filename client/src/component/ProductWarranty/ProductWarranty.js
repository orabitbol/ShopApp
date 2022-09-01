import React from 'react'
import './productWarranty.css'
import return_money from './img/return_money.png'
import customer_service from './img/customer_service.png'
import quality_products from './img/quality_products.png'
import secure_purchase from './img/secure_purchase.png'

const ProductWarranty = () => {
    return (
        <div className='product-warranty'>
            <ul className='product-warranty-header-list'>
                <div className='return-money-wapper'>
                    <li className='return-money'>
                        <a className='position-product-warranty'> החזר כספי
                            <br />
                            תוך 14 יום</a>
                        <img style={{ height: "100px", width: "100px" }} src={return_money} />
                    </li>
                </div>
                <div className='customer-service-wapper'>
                    <li className='customer-service'>
                        <a className='position-product-warranty'>שירות לקוחות
                            <br />
                            זמין 7\24 </a>
                        <img style={{ height: "100px", width: "100px" }} src={customer_service} />
                    </li>
                </div>
                <div className='quality-products-wapper'>
                    <li className='quality-products'>
                        <a className='position-product-warranty'> מוצרים איכותיים
                            <br />
                            מייבואנים רשמיים</a>
                        <img style={{ height: "100px", width: "100px" }} src={quality_products} />
                    </li>
                </div>
                <div className='secure-purchase-wapper'>
                    <li className='secure-purchase'>
                        <a className='position-product-warranty'> קנייה מאובטחת
                            <br />
                            ומהירה</a>
                        <img style={{ height: "100px", width: "100px" }} src={secure_purchase} />
                    </li>
                </div>
            </ul>


        </div>
    )
}

export default ProductWarranty