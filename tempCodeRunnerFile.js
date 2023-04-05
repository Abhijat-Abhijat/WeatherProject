const express = require('express');
const https = require('https');

const app = express();

app.get('/', (req, res) => {
    https.get('https://api.openweathermap.org/data/2.5/weather?q=London&appid=6e403c227534f5cb9edc478307b2d3a3', (response) => {
        console.log(response.statusCode);
        response.on('data', (data) => {
            const weatherData = JSON.parse(data);
            const temp = weatherData.main.temp;
            const weatherDescription = weatherData.weather[0].description;
            const icon = weatherData.weather[0].icon;
            res.send('<h1>The temperature in London is ' + temp + ' degrees Celcius.</h1><p>The weather is currently ' + weatherDescription + '</p><img src="http://openweathermap.org/img/w/' + icon + '.png">');
        })    
});
});




app.listen(3000, () => console.log('listening at 3000'));