var units = "&units=metric"
function getAPIdataID() {

	// construct request
	var requestWeather = "http://api.openweathermap.org/data/2.5/weather?q=Surabaya" + units + "&appid=fda11b8ead3709db4dd7185f90dbc4eb";
	
	
	// get data
	fetch(requestWeather)

	// parse response to JSON format 
	.then(function(responseWeather) {
		return responseWeather.json();
	})
	
	// do something with response
	.then(function(responseWeather) {
        var nameID = responseWeather.name;
        var descID = responseWeather.weather[0].main;
        var tempID = responseWeather.main.temp;
        console.log(nameID, descID, tempID);

        document.getElementById('nameID').innerHTML = nameID;
        document.getElementById('tempID').innerHTML = tempID + " °C";
		document.getElementById('weatherID').innerHTML = descID;
	})

}
getAPIdataID();

function getAPIdataNL() {

	// construct request
	var requestWeather = "http://api.openweathermap.org/data/2.5/weather?id=2747372&" + units + "&appid=fda11b8ead3709db4dd7185f90dbc4eb";
	
	// get data
	fetch(requestWeather)	
	
	// parse response to JSON format
	.then(function(responseWeather) {
		return responseWeather.json();
	})
	
	// do something with response
	.then(function(responseWeather) {
		var nameNL = responseWeather.name.substr(9);
        var descNL = responseWeather.weather[0].main;
        var tempNL = responseWeather.main.temp;
        console.log(nameNL, descNL, tempNL);

        document.getElementById('nameNL').innerHTML = nameNL;
        document.getElementById('tempNL').innerHTML = tempNL + " °C";
		document.getElementById('weatherNL').innerHTML = descNL;
    })

}
getAPIdataNL();


// spaceX
function getAPIdataSpaceX(){
var requestSX = "https://api.spacexdata.com/v3/launches/latest";
	
fetch(requestSX)

.then(function(responseSX){
	return responseSX.json();
})
.then(function(responseSX){
	var mission_name = responseSX.mission_name;
	var launch_date_local = responseSX.launch_date_local.substr(0,10);
	var launch_site = responseSX.launch_site.site_name_long;
	
	console.log(mission_name, launch_date_local, launch_site);

	document.getElementById('missionName').innerHTML = "Mission: " + mission_name;
    document.getElementById('launchDate').innerHTML = "Launch Date: " + launch_date_local;
	document.getElementById('launchSite').innerHTML = "Launch Site: " + launch_site;
})
}
getAPIdataSpaceX();

function getAPIdataNASA(){
	
	var requestN = "https://api.nasa.gov/planetary/apod?api_key=xHlmhhhrDsXr23rgVUeBoQ3eJeBL4mJRbyKlgYmf";

	fetch(requestN)

	.then(function(responseN){
		return responseN.json();
	})

	.then(function(responseN){
		var background = responseN.url; 
		console.log(background);

		document.body.style.backgroundImage = "url('" + background + "')"
	})
}
getAPIdataNASA();

function getAPIdataLocation(){
	var requestA = "http://api.open-notify.org/iss-now.json";

	fetch(requestA)

	.then(function(responseA){
		return responseA.json();
	})

	.then(function(responseA){ 
		console.log(responseA.iss_position);

		document.getElementById('issLat').innerHTML = "ISS Latitude Position: " + responseA.iss_position.latitude;
		document.getElementById('issLong').innerHTML = "ISS Longitude Position: " + responseA.iss_position.longitude;
	})
}
getAPIdataLocation();

function getAPIdataLocation(){
	var requestTM = "https://app.ticketmaster.com/discovery/v2/events?apikey=aBV1Y213YOorMAQDCQ0a3vqWwyy6SwqO&countryCode=US";

	fetch(requestTM)

	.then(function(responseTM){
		return responseTM.json();
	})

	.then(function(responseTM){ 
		var nmevFL = responseTM._embedded.events[0].name;
		var nmevCh = responseTM._embedded.events[1].name;
		console.log(nmevFL, nmevCh);


		
	})
}
getAPIdataLocation();