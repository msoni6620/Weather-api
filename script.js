
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '42268c793cmsh9895075f36c312cp1fea5djsn367e44e94ed4',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};


const getWeather = (city)=>{
	cityName.innerHTML=city

	const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city;
fetch(url, options)
	.then(response => response.json())
	.then(response => {
		console.log(response)
		cloud_pct.innerHTML = response.cloud_pct
		cloud_pct1.innerHTML = response.cloud_pct
		feels_like.innerHTML =response.feels_like
		humidity.innerHTML = response.humidity
		
		max_temp.innerHTML= response.max_temp
		min_temp.innerHTML =response.min_temp
		sunrise.innerHTML =response.sunrise
		sunset.innerHTML =response.sunset
		temp.innerHTML =response.temp
		temp2.innerHTML =response.temp
	
		wind_degrees.innerHTML =response.wind_degrees
		wind_speed.innerHTML =response.wind_speed
		wind_speed2.innerHTML =response.wind_speed
		
		




	})
	.catch(err => console.error(err));
}


fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Shanghai', options)
	.then(response => response.json())
	.then(response => {
		console.log(response)
		cloud_pct.innerHTML = response.cloud_pct
		cloud_pct3.innerHTML = response.cloud_pct
		
		feels_like.innerHTML =response.feels_like
		feels_like3.innerHTML =response.feels_like

		humidity.innerHTML = response.humidity
		humidity3.innerHTML = response.humidity
		
		max_temp.innerHTML= response.max_temp
		max_temp3.innerHTML= response.max_temp

		min_temp.innerHTML =response.min_temp
		min_temp3.innerHTML =response.min_temp

		sunrise.innerHTML =response.sunrise
		sunrise3.innerHTML =response.sunrise

		sunset.innerHTML =response.sunset
		sunset3.innerHTML =response.sunset
		temp.innerHTML =response.temp
		temp3.innerHTML =response.temp
		
	
		wind_degrees.innerHTML =response.wind_degrees
		wind_degrees3.innerHTML =response.wind_degrees
		wind_speed.innerHTML =response.wind_speed
		wind_speed3.innerHTML =response.wind_speed
		
		
		




	})
	.catch(err => console.error(err));


	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Jaipur', options)
	.then(response => response.json())
	.then(response => {
		console.log(response)
		cloud_pct.innerHTML = response.cloud_pct
		cloud_pct4.innerHTML = response.cloud_pct
		
		feels_like.innerHTML =response.feels_like
		feels_like4.innerHTML =response.feels_like

		humidity.innerHTML = response.humidity
		humidity4.innerHTML = response.humidity
		
		max_temp.innerHTML= response.max_temp
		max_temp4.innerHTML= response.max_temp

		min_temp.innerHTML =response.min_temp
		min_temp4.innerHTML =response.min_temp

		sunrise.innerHTML =response.sunrise
		sunrise4.innerHTML =response.sunrise

		sunset.innerHTML =response.sunset
		sunset4.innerHTML =response.sunset
		temp.innerHTML =response.temp
		temp4.innerHTML =response.temp
		
	
		wind_degrees.innerHTML =response.wind_degrees
		wind_degrees4.innerHTML =response.wind_degrees
		wind_speed.innerHTML =response.wind_speed
		wind_speed4.innerHTML =response.wind_speed
		
		
		




	})
	.catch(err => console.error(err));


	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Banda', options)
	.then(response => response.json())
	.then(response => {
		console.log(response)
		cloud_pct.innerHTML = response.cloud_pct
		cloud_pct5.innerHTML = response.cloud_pct
		
		feels_like.innerHTML =response.feels_like
		feels_like5.innerHTML =response.feels_like

		humidity.innerHTML = response.humidity
		humidity5.innerHTML = response.humidity
		
		max_temp.innerHTML= response.max_temp
		max_temp5.innerHTML= response.max_temp

		min_temp.innerHTML =response.min_temp
		min_temp5.innerHTML =response.min_temp

		sunrise.innerHTML =response.sunrise
		sunrise5.innerHTML =response.sunrise

		sunset.innerHTML =response.sunset
		sunset5.innerHTML =response.sunset
		temp.innerHTML =response.temp
		temp5.innerHTML =response.temp
		
	
		wind_degrees.innerHTML =response.wind_degrees
		wind_degrees5.innerHTML =response.wind_degrees
		wind_speed.innerHTML =response.wind_speed
		wind_speed5.innerHTML =response.wind_speed
		
		
		




	})
	.catch(err => console.error(err));

submit.addEventListener("click",(e)=>
{ 	e.preventDefault()
	getWeather(city.value)
})

getWeather("Delhi")


