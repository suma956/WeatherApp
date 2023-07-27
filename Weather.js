const apiKey = "c9fe9d1374123191c9512b1acaa68b83";
    const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
    
    const searchBox=document.querySelector(".search input");
    const searchBtn=document.querySelector(".search button");
    const weatherIcon = document.querySelector(".weather-icon");

    async function checkWeather(city){
        const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

        if(response.status==404){
            document.querySelector(".error").style.display="block";
            document.querySelector(".weather").style.display="none";
        }else{
            var data = await response.json();
        
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";
        document.querySelector(".feels_like").innerHTML = Math.round(data.main.feels_like) + "°c";
        document.querySelector(".pressure").innerHTML = data.main.pressure + "hPa";
        
        if(data.weather[0].main == "Clouds"){
            weatherIcon.src = "clouds.png";
        }
        else if(data.weather[0].main =="clear"){
            weatherIcon.src = "clear.png";
        }
        else if(data.weather[0].main =="Rain"){
            weatherIcon.src = "rain.png";
        }
        else if(data.weather[0].main =="Drizzle"){
            weatherIcon.src = "drizzle.png";
        }
        else if(data.weather[0].main =="Mist"){
            weatherIcon.src = "mist.png";
        }
        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none"; 
        }
        searchBox.value="";
    }
   searchBtn.addEventListener("click",()=>{
    checkWeather(searchBox.value);
   })
