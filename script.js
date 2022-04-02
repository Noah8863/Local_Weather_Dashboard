//Variables grabbed through HTML
var inputFromUser = document.getElementById('cityLocater')
var submitBtnElemenet = document.getElementById('submitBtn')
var citiesSearched = document.getElementById('citiesSearched')
var mainBlock = document.getElementById('searchBlock')
var title = document.getElementById('mainTitle')
var cityBlock = document.getElementById('cityNameContainer')


//var city = inputFromUser.value
//var apiKeyForWeather = '&appid=05477151a72eb8675c1e912165d66a19'
//var units = '&units=metric'
//const url = 'https://api.openweathermap.org/geo/1.0/direct?q=' + city + units + apiKeyForWeather

submitBtnElemenet.addEventListener('click', grabbingData)


const url = 'https://api.openweathermap.org/data/2.5/forecast?lat=39.7392364&lon=-104.9848623&appid=05477151a72eb8675c1e912165d66a19'


function grabbingData () {
    title.innerHTML = "Search For A New City:"
    citiesSearched.classList.remove('hide')

    fetch (url) 
    .then(function (response) {
        if (!response.ok) {
            throw response.json();
    }
  
        return response.json();
      })
  
    .then(function (response) {
        console.log(response); //check results
        
        //Creating variables for the different data we need
        //Making variables for Day1
        var tempFor1 = 'Tempature: ' + response.list[2].main.temp
        var humidityFor1 = 'Humidity is: ' + response.list[2].main.humidity
        var windSpeedFor1 = 'Wind: ' + response.list[2].wind.speed + ' MPH'
        
        //Making variables for Day2
        var tempFor2 = 'Tempature: ' + response.list[10].main.temp
        var humidityFor2 = 'Humidity is: ' + response.list[10].main.humidity
        var windspeedFor2 = 'Wind: ' + response.list[10].wind.speed + ' MPH'
        
        //Making variables for Day3
        var tempFor3 = 'Tempature: ' + response.list[18].main.temp
        var humidityFor3 = 'Humidity is: ' + response.list[18].main.humidity
        var windspeedFor3 = 'Wind: ' + response.list[18].wind.speed + ' MPH'
        
        //Making variables for Day4
        var tempFor4 = 'Tempature: ' + response.list[26].main.temp
        var humidityFor4 = 'Humidity is: ' + response.list[26].main.humidity
        var windspeedFor4 = 'Wind: ' + response.list[26].wind.speed + ' MPH'
        
        //Making variables for Day5
        var tempFor5 = 'Tempature: ' + response.list[34].main.temp
        var humidityFor5 = 'Humidity is: ' + response.list[34].main.humidity
        var windspeedFor5 = 'Wind: ' + response.list[34].wind.speed + ' MPH'
        

        // Putting all the values for first day
        const temp1 = document.getElementById('temp1')
        temp1.innerHTML = tempFor1
        const hum1 = document.getElementById('hum1')
        hum1.innerHTML = humidityFor1 
        const wind1 = document.getElementById('wind1')
        wind1.innerHTML = windSpeedFor1

        // Putting all the values for the second day
        const temp2 = document.getElementById('temp2')
        temp2.innerHTML = tempFor2
        const hum2 = document.getElementById('hum2')
        hum2.innerHTML = humidityFor2
        const wind2 = document.getElementById('wind2')
        wind2.innerHTML = windspeedFor2

        //Putting all the values for the third day
        const temp3 = document.getElementById('temp3')
        temp3.innerHTML = tempFor3
        const hum3 = document.getElementById('hum3')
        hum3.innerHTML = humidityFor3
        const wind3 = document.getElementById('wind3')
        wind3.innerHTML = windspeedFor3

        //Putting all the values for the fourth day
        const temp4 = document.getElementById('temp4')
        temp4.innerHTML = tempFor4
        const hum4 = document.getElementById('hum4')
        hum4.innerHTML = humidityFor4
        const wind4 = document.getElementById('wind4')
        wind4.innerHTML = windspeedFor4

        //Putting all the values for the fifth day
        const temp5 = document.getElementById('temp5')
        temp5.innerHTML = tempFor5
        const hum5 = document.getElementById('hum5')
        hum5.innerHTML = humidityFor5
        const wind5 = document.getElementById('wind5')
        wind5.innerHTML = windspeedFor5
    })
}


//Displaying the cities that were searched for
function searchedCities () {

    const searched = document.querySelector('input').value

    const node = document.createTextNode(searched)

    const para = document.createElement('button')

    para.classList.add('searchedData')

    //Taking whatever the value is and appending it
    para.appendChild(node)
    mainBlock.appendChild(para)

}  