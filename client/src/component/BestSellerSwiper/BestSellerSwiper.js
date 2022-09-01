import './bestSellerSwiper.css'
import React, { useState } from 'react'
import drone from './img/drone.jpg';
import ice_machine from './img/ice_machine.jpg';
import iPhone_13_Pro from './img/iPhone_13_Pro.jpg';
import microwave from './img/microwave.jpg';
import ninja_Grill from './img/ninja_Grill.jpg';
import scooter from './img/scooter.jpg';
import bestsellers_icon from './img/bestsellers_icon.png';
import { Swiper, SwiperSlide } from 'swiper/react';

import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";




const BestSellerSwiper = () => {

    const [swiper, setSwiper] = useState();

    const items = [

        {
            name: 'ice_machine',
            description: 'מכונת קרח ביתית ניידת בנפח 2.2 ליטר KING FCALM-22',
            image: ice_machine,
            price: "₪  639",
            information_purchase: 'למידע ורכישה'
        },
        {
            name: 'iPhone_13_Pro',
            description: ' סמארטפון בצבע כחול APPLE IPHONE 13 PRO MAX 256GB',
            image: iPhone_13_Pro,
            price: "₪  5,229",
            information_purchase: 'למידע ורכישה'
        },
        {
            name: 'microwave',
            description: 'מיקרוגל שף 28 ליטר תוצרת Samsung דגם MS28J5215AW',
            image: microwave,
            price: "₪  639",
            information_purchase: 'למידע ורכישה'
        },
        {
            name: 'ninja_Grill',
            description: ' נינגה גריל כלל משלוח NINJA SMART GRILL XL AG553',
            image: ninja_Grill,
            price: "₪  1,100",
            information_purchase: 'למידע ורכישה'
        },
        {
            name: 'scooter',
            description: 'קורקינט חשמלי דגם OX מבית INOKIM צבע שחור',
            image: scooter,
            price: "₪  7,990",
            information_purchase: 'למידע ורכישה'

        },
        {
            name: 'drone',
            description: ' רחפן חכם הדגן המשופר והחדיש ביותר DJI MINI 3 PRO (RC)',
            image: drone,
            price: "₪  3,879",
            information_purchase: 'למידע ורכישה'
        },
    ]
    return (
        <div className='best-seller-swiper-wapper'>
            <div className='title-wapper'>
                <div className='separation'>
                    <div className='line'></div>
                    <div className='icon-position'>
                        <img style={{ height: " 90px", width: "200px" }} src={bestsellers_icon} />
                    </div>
                    <div className='title'>
                        <p> הכי נמכרים </p>
                    </div>
                </div>
            </div>
            <div className='best-seller-swiper'>
                <Swiper
                    className="mySwiper"
                    slidesPerView={4}
                    spaceBetween={10}
                    slidesPerGroup={3}
                    loop={true}
                    loopFillGroupWithBlank={true}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Pagination, Navigation]}
                    onSwiper={setSwiper}
                    onSlideChange={(swiper) => {
                        console.log('Slide index changed to: ', swiper.activeIndex);
                    }}
                >
                    {items.map((item, index) => (
                        <SwiperSlide >
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

export default BestSellerSwiper