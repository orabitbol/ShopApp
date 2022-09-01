import React from 'react'
import './headerMenu.css'
import Appliances from './img/Appliances.png'
import Communication_photography from './img/Communication_photography.png'
import Computer from './img/Computer.png'
import Vehicle_accessories from './img/Vehicle_accessories.png'
const HeaderMenu = () => {
    return (
        <div className='header_menu'>
            <ul className='header-menu-header_list'>
                <div className="communication_photography_wapper">
                    <li className="position">
                        <div className='communication_photography'></div>
                        <a title='תקשורת וצילום' >
                            תקשורת וצילום
                        </a>
                    </li>
                </div>
                <div className="computer_wapper">
                    <li className="position">
                        <div className='computer'> </div>
                        <a title='מחשבים וציוד עקפי' >
                            מחשבים וציוד עקפי
                        </a>
                    </li>
                </div>
                <div className="appliances_wapper">
                    <li className="position">
                        <div className='appliances'></div>
                        <a title='מוצרי חשמל' >
                            מוצרי חשמל
                        </a>
                    </li>
                </div>
                <div className="vehicle_accessories_wapper">
                    <li className="position">
                        <div className='vehicle_accessories'> </div>
                        <a title='רכב ואביזרים' >
                            רכב ואביזרים
                        </a>
                    </li>
                </div>

            </ul>

        </div>
    )
}

export default HeaderMenu