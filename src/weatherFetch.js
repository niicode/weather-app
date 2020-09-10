    import React, {useState, useEffect} from 'react';
    import { Jumbotron } from 'react-bootstrap';

    function WeatherFetch(){
        const key = '0364c57b9c18f93b459268621da06e3e';
        const [feels_like, setFeelsLike] = useState('');
        const [mainTemp, setMainTemp] = useState('');
        const [description, setDescription]= useState('');
        const [main,setMain] = useState('');
        const [iconID, setIconID] = useState('');
        useEffect(()=>{
            fetch(
                'https://api.openweathermap.org/data/2.5/weather?q=Accra&appid=0364c57b9c18f93b459268621da06e3e&units=metric'
            )
            .then((res)=> res.json())
            .then((data)=>{
                console.log(data)
                setFeelsLike(data.main.feels_like);
                setMainTemp(data.main.temp);
                setDescription(data.weather[0].description);
                setDescription(data.weather[0].description);
                setMain(data.weather[0].main);
                setIconID(data.weather[0].icon);
            })
        },[])
        return(
            <>
            <Jumbotron>
            <h1>Main Temperature : {mainTemp} Degrees Celsius</h1>
            <h1>Feels like: {feels_like} Degrees Celsius</h1>
            <h1>Weather Parameter: {description}</h1>
            <img src = {"https://assets.weatherstack.com/images/wsymbols01_png_64/wsymbol_0004_black_low_cloud.png"}/>
            </Jumbotron>
            </>
        )
    }
        export default WeatherFetch;