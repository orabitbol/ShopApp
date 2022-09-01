import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

import HeaderMenu from './component/HeaderMenu/HeaderMenu';
import HeaderSearch from './component/HeaderSearch/HeaderSearch';
import NavbarWapper from './component/Navbar/NavbarWapper';
import ProductWarranty from './component/ProductWarranty/ProductWarranty';
import BestSellerSwiper from './component/BestSellerSwiper/BestSellerSwiper';
import Recommendations from './component/Recommendations/Recommendations';
import AllProducts from './component/AllProducts/AllProducts';
import { Counter } from './component/Counter';
import Register from './component/Register/Register';
import LogIn from './component/LogIn/LogIn';
import Test from './component/Test';
import Temp from './component/Temp'


const App = () => {

  // const [backendData, setBackendData] = useState([{}])
  // const [list, setList] = useState([{}])

  // useEffect(() => {
  //   fetch("/api").then(response => response.json()).then(data => {
  //     setBackendData(data)
  //   })
  // }, [])

  // const ShowServer = () => {

  //   {
  //     (typeof backendData.users === 'undefined') ? (
  //       <p>Loading...</p>
  //     ) : (
  //       backendData.users.map((user, i) => (
  //         <p key={i}> {user}</p>
  //       ))
  //     )
  //   }
  // }
  return (
    <div>
      <NavbarWapper />
      {/* <HeaderMenu />
      <HeaderSearch />
      <ProductWarranty/>
      <BestSellerSwiper/>
      <Recommendations/>
      <AllProducts/> */}
      <Register />
      <LogIn/>
       {/* <Test/> */}
      {/* <Temp/> */}
    </div>
  )
}

export default App