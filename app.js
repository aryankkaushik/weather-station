function fetchdata(){

    let cityname = document.getElementById('city').value
     if(cityname=== ''){
        alert("enter city name")
     }

    //  console.log(cityname)

     URL = 'https://api.openweathermap.org/data/2.5/weather?q='+cityname+'&appid=a4dbaa4cfad06b337e3b8c5af5dadf67&units=metric'

     fetch(URL)
     .then(response => response.json())
     .then(data => {

        let resp_code = data['cod']

        if(resp_code === '404'){
            alert("city not found")
        }
        else{
            let cityTemp = data['main']['temp']
            // console.log(cityTemp)
            let icon = data['weather']['0']['icon']
            // console.log(icon)

            let icon_url='https://openweathermap.org/payload/api/media/file/'+icon+'.png'
            document.getElementById('result').innerHTML = `<img src=`+icon_url+`>`+`<br>`+`<h3> Temprature is :`+cityTemp+`&deg;C </h3>`;
            }

    
        
     })





}