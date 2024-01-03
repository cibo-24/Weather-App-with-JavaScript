const apiKey = "99b04049a3f9bc023b20984f5fcfe854";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=bangalore";

async function checkWeather () {
    // fetch ile apiUrl'nin varlığını kontrol ediyoruz.
    const response = await fetch(apiUrl + `&appid=${apiKey}` );
    let data = await response.json();

    console.log(data);
}

checkWeather();