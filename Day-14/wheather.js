async function getWeather() {

    let city = document.getElementById("city").value;
    let result = document.getElementById("result");

    if(city==""){
        alert("Please Enter City Name");
        return;
    }

    try{

        // Get Latitude & Longitude
        let geoUrl = `https://nominatim.openstreetmap.org/search?city=${city}&format=json&limit=1`;

        let geoResponse = await fetch(geoUrl);

        let geoData = await geoResponse.json();

        if(geoData.length==0){
            result.innerHTML="<h3>City Not Found</h3>";
            return;
        }

        let lat = geoData[0].lat;
        let lon = geoData[0].lon;

        // Get Weather
        let weatherUrl = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,relative_humidity_2m,wind_speed_10m`;

        let weatherResponse = await fetch(weatherUrl);

        let weatherData = await weatherResponse.json();

        result.innerHTML=`
            <h3>${city.toUpperCase()}</h3>

            <p><b>Temperature:</b> ${weatherData.current.temperature_2m} °C</p>

            <p><b>Humidity:</b> ${weatherData.current.relative_humidity_2m}%</p>

            <p><b>Wind Speed:</b> ${weatherData.current.wind_speed_10m} km/h</p>
        `;

    }

    catch(error){

        result.innerHTML="<h3>Something Went Wrong</h3>";

    }

}