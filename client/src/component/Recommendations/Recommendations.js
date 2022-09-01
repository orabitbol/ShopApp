import React, { useState } from "react";
import './recommendations.css'

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";



// import required modules
import { Pagination } from "swiper";


import corner_work_station_1 from './img/corner_work_station_1.jpg'
import gaming_chair from './img/gaming_chair.jpg'
import laptop_hp from './img/laptop_hp.jpg'
import shawarma_machine from './img/shawarma_machine.jpg'
import sony_5 from './img/sony_5.jpg'
import tv_lg from './img/tv_lg.jpg'
import tv_table from './img/tv_table.jpg'
import corner_work_station_2 from './img/corner_work_station_2.jpg'
import bestsellers_icon from './img/bestsellers_icon.png';

const Recommendations = () => {
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
        <div className="recommendations">
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
            <div className="recommendations-swiper-wapper">
                <Swiper
                    className="recommendations-swiper"
                    slidesPerView={4}
                    spaceBetween={20}
                    loop={true}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}>

                    {items.map((item, index) => (
                        <SwiperSlide>
                            <div className='swiper-items'>
                                <div className='image'>
                                    <img src={item.image} style={{ width: '100px', height: '100px' }} />
                                </div>
                                <p className='description'>
                                    {item.description}
                                </p>
                                <div className='price'>
                                    {item.price}
                                </div>
                                <button className='button-style' type="submit">
                                    <p className='text-button' style={{ margin: '-6px 0px 0px 0px', fontSize: '16px' }}>{item.information_purchase}</p>
                                </button>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    )
}

export default Recommendations