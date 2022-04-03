//Variables grabbed through HTML
var inputFromUser = document.getElementById('cityLocater')
var submitBtnElemenet = document.getElementById('submitBtn')
var citiesSearched = document.getElementById('citiesSearched')
var mainBlock = document.getElementById('searchBlock')
var title = document.getElementById('mainTitle')
var cityBlock = document.getElementById('cityNameContainer')


//var city = inputFromUser.value
var apiKeyForWeather = '&appid=05477151a72eb8675c1e912165d66a19'
var units = '&units=metric'
var newURL = ''

submitBtnElemenet.addEventListener('click', pickingCity)


function pickingCity (){
    searchedCities()
    
    var city = inputFromUser.value
    const url = 'https://api.openweathermap.org/data/2.5/forecast?q=' + city + apiKeyForWeather
    console.log(url)

    fetch (url)
    .then(function (response) {
        if (!response.ok) {
            throw response.json();
    }
  
        return response.json();
      })
  
    .then(function (response) {
        
        var lat = response.city.coord.lat
        var lon = response.city.coord.lon

        lat = Math.round(lat)
        lon = Math.round(lon)

        var newURL = 'https://api.openweathermap.org/data/2.5/forecast?' + 'lat=' + lat + '&lon=' + lon + '&appid=05477151a72eb8675c1e912165d66a19'
        
        console.log(newURL)
        console.log('first Fetch is working!')

        grabbingData()

        function grabbingData () {
        
            title.innerHTML = "Search For A New City:"
            citiesSearched.classList.remove('hide')
            console.log('Second Fetch is called')
        
            fetch (newURL) 
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
                var humidityFor1 = 'Humidity is: ' + response.list[2].main.humidity + '%'
                var windSpeedFor1 = 'Wind is: ' + response.list[2].wind.speed + ' MPH'
                //choppin up the beat
                //I mean chop up the time
                var time1 = response.list[2].dt_txt
                newTime1 = time1.split(' ')[0]
                
        
                //Making variables for Day2
                var tempFor2 = 'Tempature: ' + response.list[10].main.temp
                var humidityFor2 = 'Humidity is: ' + response.list[10].main.humidity + '%'
                var windspeedFor2 = 'Wind is: ' + response.list[10].wind.speed + ' MPH'
                var time2 = response.list[10].dt_txt
                newTime2 = time2.split(' ')[0]
                
        
                //Making variables for Day3
                var tempFor3 = 'Tempature: ' + response.list[18].main.temp
                var humidityFor3 = 'Humidity is: ' + response.list[18].main.humidity + '%'
                var windspeedFor3 = 'Wind is: ' + response.list[18].wind.speed + ' MPH'
                var time3 = response.list[18].dt_txt
                newTime3 = time3.split(' ')[0]

        
                //Making variables for Day4
                var tempFor4 = 'Tempature: ' + response.list[26].main.temp
                var humidityFor4 = 'Humidity is: ' + response.list[26].main.humidity + '%'
                var windspeedFor4 = 'Wind is: ' + response.list[26].wind.speed + ' MPH'
                var time4 = response.list[26].dt_txt
                newTime4 = time4.split(' ')[0]
        
                //Making variables for Day5
                var tempFor5 = 'Tempature: ' + response.list[34].main.temp
                var humidityFor5 = 'Humidity is: ' + response.list[34].main.humidity + '%'
                var windspeedFor5 = 'Wind is: ' + response.list[34].wind.speed + ' MPH'
                var time5 = response.list[34].dt_txt
                newTime5 = time5.split(' ')[0]
        
        
                // Putting all the values for first day
                const temp1 = document.getElementById('temp1')
                temp1.innerHTML = tempFor1
                const hum1 = document.getElementById('hum1')
                hum1.innerHTML = humidityFor1 
                const wind1 = document.getElementById('wind1')
                wind1.innerHTML = windSpeedFor1
                const date1 = document.getElementById('date1')
                date1.innerHTML = newTime1


                // Putting all the values for the second day
                const temp2 = document.getElementById('temp2')
                temp2.innerHTML = tempFor2
                const hum2 = document.getElementById('hum2')
                hum2.innerHTML = humidityFor2
                const wind2 = document.getElementById('wind2')
                wind2.innerHTML = windspeedFor2
                const date2 = document.getElementById('date2')
                date2.innerHTML = newTime2
        
                //Putting all the values for the third day
                const temp3 = document.getElementById('temp3')
                temp3.innerHTML = tempFor3
                const hum3 = document.getElementById('hum3')
                hum3.innerHTML = humidityFor3
                const wind3 = document.getElementById('wind3')
                wind3.innerHTML = windspeedFor3
                const date3 = document.getElementById('date3')
                date3.innerHTML = newTime3
        
                //Putting all the values for the fourth day
                const temp4 = document.getElementById('temp4')
                temp4.innerHTML = tempFor4
                const hum4 = document.getElementById('hum4')
                hum4.innerHTML = humidityFor4
                const wind4 = document.getElementById('wind4')
                wind4.innerHTML = windspeedFor4
                const date4 = document.getElementById('date4')
                date4.innerHTML = newTime4
        
                //Putting all the values for the fifth day
                const temp5 = document.getElementById('temp5')
                temp5.innerHTML = tempFor5
                const hum5 = document.getElementById('hum5')
                hum5.innerHTML = humidityFor5
                const wind5 = document.getElementById('wind5')
                wind5.innerHTML = windspeedFor5
                const date5 = document.getElementById('date5')
                date5.innerHTML = newTime5
                
                
                var cityContainer = document.getElementById('cityNameContainer')
                var dateContainer = document.getElementById('dateContainers')
                var talkTrack = document.getElementById('talkTrack')
                var cityName = document.getElementById('mainTextContainer')


                var cityWindSpeed = document.getElementById('windSpeed')
                var uvIndex = document.getElementById('UVIndex')
                var tempForDay = document.getElementById('tempForDay')
                var humidityForDay = document.getElementById('humidity')


                var h1Tag = document.createElement('h1')
                var node = document.createTextNode('City of: ' + city)
                h1Tag.appendChild(node)
                cityName.appendChild(h1Tag)

                var para1 = document.createElement('h4')
                var node1 = document.createTextNode('Currently in ' + city + ' the wind speed is  ' + response.list[2].wind.speed + ' MPH')
                para1.appendChild(node1)
                cityName.appendChild(para1)

                var para2 = document.createElement('h4')
                var node2 = document.createTextNode(' The tempature is ' + response.list[2].main.temp)
                para2.appendChild(node2)
                cityName.appendChild(para2)

                var para3 = document.createElement('h4')
                var node3 = document.createTextNode('The Humidity is ' + response.list[2].main.humidity + '%')
                para3.appendChild(node3)
                cityName.appendChild(para3)

                talkTrack.innerHTML = newTime1
                cityContainer.classList.remove('hide')
                dateContainer.classList.remove('hide')
                cityWindSpeed.classList.remove('hide')
                uvIndex.classList.remove('hide')
                tempForDay.classList.remove('hide')
                humidityForDay.classList.remove('hide')
                
                
            })
        }
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

