import React from 'react'
import './allProducts.css'


import bestsellers_icon from '../Recommendations/img/bestsellers_icon.png'
import corner_work_station_1 from '../Recommendations/img/corner_work_station_1.jpg'
import gaming_chair from '../Recommendations/img/gaming_chair.jpg'
import laptop_hp from '../Recommendations/img/laptop_hp.jpg'
import shawarma_machine from '../Recommendations/img/shawarma_machine.jpg'
import sony_5 from '../Recommendations/img/sony_5.jpg'
import tv_lg from '../Recommendations/img/tv_lg.jpg'
import tv_table from '../Recommendations/img/tv_table.jpg'
import corner_work_station_2 from '../Recommendations/img/corner_work_station_2.jpg'

const AllProducts = () => {

    const items = [

        {
            name: 'corner_work_station_1',
            description: 'עמדת עבודה פינתית עם מדפים דגם Cansın Raflı',
            image: corner_work_station_1,
            price: "₪  1,199",
            information_purchase: 'למידע ורכישה'
        },
        {
            name: 'gaming_chair',
            description: 'כסא גיימינג דגם עור ייחודי ומלא MIGAVER',
            image: gaming_chair,
            price: "₪  699",
            information_purchase: 'למידע ורכישה'
        },
        {
            name: 'laptop_hp',
            description: 'מחשב נייח HP מחודש + מסך "22 מחודש',
            image: laptop_hp,
            price: "₪  999",
            information_purchase: 'למידע ורכישה'
        },
        {
            name: 'shawarma_machine',
            description: 'מכשיר שווארמה מקצועי דגם PRO 2B מבית אמגזית',
            image: shawarma_machine,
            price: "₪  1,590",
            information_purchase: 'למידע ורכישה'
        },
        {
            name: 'sony_5',
            description: ' ערכת קונסולה כלל 2 משחקים לבחירה PS5 בלו-ריי',
            image: sony_5,
            price: "₪  3,547",
            information_purchase: 'למידע ורכישה'

        },
        {
            name: 'tv_lg',
            description: 'טלוויזיה "65 OLED SMART 4K דגם LG OLED65A16LA/PVA',
            image: tv_lg,
            price: "₪  3,973",
            information_purchase: 'למידע ורכישה'
        },
        {
            name: 'tv_table',
            description: 'מזנון טלוויזיה דגם פלוס אחריות ל4 שנים SALIVAR',
            image: tv_table,
            price: "₪  1,290",
            information_purchase: 'למידע ורכישה'
        },
        {
            name: 'corner_work_station_2',
            description: 'עמדת עבודה פינתית דגם JERSY מבית MY CASA',
            image: corner_work_station_2,
            price: "₪  444",
            information_purchase: 'למידע ורכישה'
        },
    ]
    return (
        <div className='all-products'>
            <div className='title-wapper'>
                <div className='separation'>
                    <div className='line'></div>
                    <div className='icon-position'>
                        <img style={{ height: " 90px", width: "200px" }} src={bestsellers_icon} />
                    </div>
                    <div className='title'>
                        <p> המלצות השבוע </p>
                    </div>
                </div>
            </div>
            <div className='product-data-wapper'>
                {items.map((item, index) => (
                    <div className='product-data'>
                        <div className='image'>
                            <img src={item.image} />
                        </div>
                        <div className='description'>
                            {item.description}
                        </div>
                        <div className='price'>
                            {item.price}
                        </div>
                    </div>

                ))}

            </div>
        </div>
    )
}

export default AllProducts