import React, { useEffect, useState } from 'react'

const Test = () => {

    const [list, setList] = useState([{}])

    let listOfCitys = ["dallas", "tel aviv", "ramat gan", "london", "beer sheva", "dubai", "eilat", "las vegas", "miami", "houston"];

    const KEY = "4e945afda8f770bf36d6a88f2d02b0d3";

    const getData = async () => {
        let listOfObject = [{}];
        for (let i = 0; i < listOfCitys.length; i++) {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${listOfCitys[i]}&appid=${KEY}`)
            const result = await response.json();
            listOfObject.push(result);



        }
        setList(listOfObject);
    }

    const getSome = () => {
        console.log(list);
    }

    return (
        <div>test

            <button onClick={getData}> click me</button>
            <button onClick={getSome}> show me</button>
        </div>
    )
}

export default Test