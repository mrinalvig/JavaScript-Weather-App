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
                    timezoneLocation.textContent = data.timezone;
                    

                    tempDescription.textContent = summary;
                    tempDescription2.textContent = summary;
                    tempDescription3.textContent = summary;
                    tempDescription4.textContent = summary;
                    tempDescription5.textContent = summary;
                    tempDescription6.textContent = summary;
                    tempDescription7.textContent = summary;

                    tempDegree.textContent = temperature;
                    tempDegree2.textContent = temperature; 
                    tempDegree3.textContent = temperature; 
                    tempDegree4.textContent = temperature; 
                    tempDegree5.textContent = temperature; 
                    tempDegree6.textContent = temperature; 
                    tempDegree7.textContent = temperature; 


                    tempTime.textContent = now;

                    //Set icon
                    setIcons(icon, document.querySelector(".icon"));
                    setIcons(icon, document.querySelector(".icon2"));
                    setIcons(icon, document.querySelector(".icon3"));
                    setIcons(icon, document.querySelector(".icon4"));
                    setIcons(icon, document.querySelector(".icon5"));
                    setIcons(icon, document.querySelector(".icon6"));
                    setIcons(icon, document.querySelector(".icon7"));

                    //Conversion
                    let celsius = (temperature - 32) * (5 / 9);

                    //Change degree type
                    tempSection.addEventListener('click', ()=>
                    {
                        if(tempSpan.textContent === "F")
                        {
                            tempSpan.textContent = "C";
                            tempDegree.textContent = Math.floor(celsius);
                        }
                        else
                        {
                            tempSpan.textContent = "F";
                            tempDegree.textContent = temperature;
                        }
                    })
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