import React, { useEffect, useState } from 'react'
import "./css/style.css";
function Tampapp() {
     const [city,setCity] =  useState(null);
     const [search,setSearch] = useState("patna");

     useEffect(()=>{
         const fetchApi = async ()=>{
             const url = `http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=4aa1502a76c3bfdae9c32ec721f7ad3f`
             const response = await fetch(url)
            // console.log(response)
            const resJson = await response.json();
            //console.log(resJson)
            setCity(resJson.main);
         }
         fetchApi();
     },[search])

    return (
        <>
            <div className="box">
                <div className="inputData">
                    <input
                        type="search"
                        className= "inputField" 
                        value ={search}
                        onChange ={(event)=>{
                            setSearch(event.target.value)
                        }}
                    />
                </div>
                {!city ? (
                    <p className="errorMsg">No Data Found</p>
                ) : (
                    <div>
                    <div className="info">
                    <h2 className="location">
                        <i className="fas fa-street-view"></i>{search}
                    </h2>
                    <h1 className="temp">
                        {city.temp}°Celcius
                    </h1>
                    <h3 className="tempmin_max">min: {city.temp_min}°Cel | max: {city.temp_max}°Cel</h3>
            </div>

                <div className="wave -one"></div>
                <div className="wave -two"></div>
                <div className="wave -three"></div>
            </div>
                )
                }
            
            
            </div>
        </>
    )
}

export default Tampapp
