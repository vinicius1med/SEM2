const search = document.querySelector('.search-box button');
const container = document.querySelector('.container')
const weatherBox = document.querySelector('.weather-box');
const weatherDetails = document.querySelector('.weather-details');
const error404= document.querySelector('.not-found');

search.addEventListener('click', ()=>{
    console.log('carregar dados');

    const APIKey ='6971acb58fdbe71863cbeabfcba1eb96'
    const city = document.querySelector('.search-box input').value;

    if (city ==='') return

    fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKey}`
    )

    .then((response) => response.json())
    .then((json) => {
        console.log(json);
        if(json.cod === "404"){
            container.style.height = "400px";
            weatherBox.style.display = 'none';  
            weatherDetails.style.display = 'none';
            error404.style.display = 'block';
            error404.classList.add('fadeIn');
            return;
        }
    });
})