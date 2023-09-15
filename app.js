const express = require("express");
const https = require("https");

const app = express();

app.get("/", function(req, res){
        const url = "";//here write the weather api url
        https.get(url, function(response){
                console.log(response.statusCode);
                response.on("data", function(data){
                        const weatherData = JSON.parse(data);
                        const temp = weatherData.main.temp
                        const weatherDescription = weatherData.weather[0].description
                        const icon = weatherData.weather[0].icon 
                        const imageURL = "https://openweatheramp.org/img/wn"+icon+"@2x.png"
                        res.write("<p>the weather is currently "+ weatherDescription+ "</p>");
                        res.write("<h1>The tempreture in Jeddah is"+ temp + " degree celcuis. </h1>");
                        res.write("<img src="+ imageURL + ">");
                        res.send();

                

                });

        })
 
})

app.listen(3000, function(){
        console.log("Server is running on port 3000");
})