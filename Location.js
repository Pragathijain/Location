//*********TO GET CURRENT LOCATION***********/
function GetCurrentLocation(){
    if(window.navigator.geolocation){
        window.navigator.geolocation.getCurrentPosition(function(position){
            console.log(position);
            document.write(`my current latitude <h1>${position.coords.latitude}</h1>
            my current longitude <h1>${position.coords.longitude}</h1>`);
        });
    }else{
        console.log("geolocation is not supported...");
    }
}
GetCurrentLocation();