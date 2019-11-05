window.addEventListener("load", ()=>
{
    //location and weather storing
    let tempDescription = document.querySelector('.temperature-description');
    let tempDescription2 = document.querySelector('.temperature-description2');
    let tempDescription3 = document.querySelector('.temperature-description3');
    let tempDescription4 = document.querySelector('.temperature-description4');
    let tempDescription5 = document.querySelector('.temperature-description5');
    let tempDescription6 = document.querySelector('.temperature-description6');
    let tempDescription7 = document.querySelector('.temperature-description7');

    let tempDegree = document.querySelector(".temperature-degree");
    let tempDegree2 = document.querySelector(".temperature-degree2");
    let tempDegree3 = document.querySelector(".temperature-degree3");
    let tempDegree4 = document.querySelector(".temperature-degree4");
    let tempDegree5 = document.querySelector(".temperature-degree5");
    let tempDegree6 = document.querySelector(".temperature-degree6");
    let tempDegree7 = document.querySelector(".temperature-degree7");

    let timezoneLocation = document.querySelector(".location-timezone");
    let timezoneLocation2 = document.querySelector(".location-timezone2");
    let timezoneLocation3 = document.querySelector(".location-timezone3");
    let timezoneLocation4 = document.querySelector(".location-timezone4");
    let timezoneLocation5 = document.querySelector(".location-timezone5");
    let timezoneLocation6 = document.querySelector(".location-timezone6");
    let timezoneLocation7 = document.querySelector(".location-timezone7");

    let tempSection = document.querySelector('.temperature');
    let tempSection2 = document.querySelector('.temperature2');
    let tempSection3 = document.querySelector('.temperature3');
    let tempSection4 = document.querySelector('.temperature4');
    let tempSection5 = document.querySelector('.temperature5');
    let tempSection6 = document.querySelector('.temperature6');
    let tempSection7 = document.querySelector('.temperature7');

    const tempSpan = document.querySelector('.temperature span');
    const tempSpan2 = document.querySelector('.temperature span2');
    const tempSpan3 = document.querySelector('.temperature span3');
    const tempSpan4 = document.querySelector('.temperature span4');
    const tempSpan5 = document.querySelector('.temperature span5');
    const tempSpan6 = document.querySelector('.temperature span6');
    const tempSpan7 = document.querySelector('.temperature span7');

    const now = new Date();
    const later = new Date();
    let tempTime = document.querySelector('.time');

    let long;
    let lat;

    if(navigator.geolocation)
    {
        navigator.geolocation.getCurrentPosition(position => 
        {
            const proxy = "http://cors-anywhere.herokuapp.com/";
            
            long = position.coords.longitude;
            lat = position.coords.latitude;

            const api = `${proxy}https://api.darksky.net/forecast/92d098babd7ceed2a88dd35086467e72/${lat},${long}`;


            fetch(api)
                .then(response =>
                {
                    return response.json();
                })
                .then(data =>
                {
                    console.log(data);  
                    const {temperature, summary, time, icon} = data.currently;
                    const icon2 = data.daily.data[0].icon;
                    const icon3 = data.daily.data[1].icon;
                    const icon4 = data.daily.data[2].icon;
                    const icon5 = data.daily.data[3].icon;
                    const icon6 = data.daily.data[4].icon;
                    const icon7 = data.daily.data[5].icon;
                    const temperature12 = data.daily.data[0].temperatureHigh;
                    const temperature22 = data.daily.data[0].temperatureLow;
                    const temperature13 = data.daily.data[1].temperatureHigh;
                    const temperature23 = data.daily.data[1].temperatureLow;
                    const temperature14 = data.daily.data[2].temperatureHigh;
                    const temperature24 = data.daily.data[2].temperatureLow;
                    const temperature15 = data.daily.data[3].temperatureHigh;
                    const temperature25 = data.daily.data[3].temperatureLow;
                    const temperature16 = data.daily.data[4].temperatureHigh;
                    const temperature26 = data.daily.data[4].temperatureLow;
                    const temperature17 = data.daily.data[5].temperatureHigh;
                    const temperature27 = data.daily.data[5].temperatureLow;
                    const summary2 = data.daily.data[0].summary;
                    const summary3 = data.daily.data[1].summary;
                    const summary4 = data.daily.data[2].summary;
                    const summary5 = data.daily.data[3].summary;
                    const summary6 = data.daily.data[4].summary;
                    const summary7 = data.daily.data[5].summary;
                    timezoneLocation.textContent = data.timezone;
                    

                    tempDescription.textContent = summary;
                    tempDescription2.textContent = summary2;
                    tempDescription3.textContent = summary3;
                    tempDescription4.textContent = summary4;
                    tempDescription5.textContent = summary5;
                    tempDescription6.textContent = summary6;
                    tempDescription7.textContent = summary7;

                    tempDegree.textContent = temperature; 
                    tempDegree2.textContent = "High: " + temperature12 + " F\nLow: " + temperature22 + " F"; 
                    tempDegree3.textContent = "High: " + temperature13 + " F\nLow: " + temperature23 + " F";  
                    tempDegree4.textContent = "High: " + temperature14 + " F\nLow: " + temperature24 + " F";  
                    tempDegree5.textContent = "High: " + temperature15 + " F\nLow: " + temperature25 + " F"; 
                    tempDegree6.textContent = "High: " + temperature16 + " F\nLow: " + temperature26 + " F";  
                    tempDegree7.textContent = "High: " + temperature17 + " F\nLow: " + temperature27 + " F";


                    tempTime.textContent = now;

                    //Set icon
                    setIcons(icon, document.querySelector(".icon"));
                    setIcons(icon2, document.querySelector(".icon2"));
                    setIcons(icon3, document.querySelector(".icon3"));
                    setIcons(icon4, document.querySelector(".icon4"));
                    setIcons(icon5, document.querySelector(".icon5"));
                    setIcons(icon6, document.querySelector(".icon6"));
                    setIcons(icon7, document.querySelector(".icon7"));

                    //Conversion
                    let celsius = (temperature - 32) * (5 / 9);

                    /*Change degree type
                    tempSection.addEventListener('click', ()=>
                    {
                        if(tempSpan.textContent === "F")
                        {
                            tempSpan.textContent = "C";
                            tempDegree.textContent = Math.floor(celsius);
                            tempDegree2.textContent = Math.floor(celsius) + " C";
                            tempDegree3.textContent = Math.floor(celsius) + " C";
                            tempDegree4.textContent = Math.floor(celsius) + " C";
                            tempDegree5.textContent = Math.floor(celsius) + " C";
                            tempDegree6.textContent = Math.floor(celsius) + " C";
                            tempDegree7.textContent = Math.floor(celsius) + " C";
                        }
                        else
                        {
                            tempSpan.textContent = "F";
                            tempDegree.textContent = temperature;
                            tempDegree2.textContent = temperature + " F"; 
                            tempDegree3.textContent = temperature + " F"; 
                            tempDegree4.textContent = temperature + " F"; 
                            tempDegree5.textContent = temperature + " F"; 
                            tempDegree6.textContent = temperature + " F"; 
                            tempDegree7.textContent = temperature + " F";
                        }
                    })
                    */
                });
        });

    }

    function setIcons(icon, iconID)
    {
        const skycons = new Skycons({color: "white"});
        const currentIcon = icon.replace(/-/g, "_").toUpperCase();
        skycons.play();
        return skycons.set(iconID, Skycons[currentIcon]);
    }
});