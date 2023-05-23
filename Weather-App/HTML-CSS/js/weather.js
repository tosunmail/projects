const form = document.querySelector("form");
const input = document.querySelector("form input");
const msgSpan = form.querySelector(".msg");
const list = document.querySelector(".container .cities");

// localStorage.setItem(
//   "apiKey",
//   EncryptStringAES("ac071e8a18b7a0be2d937752b84ed33c")
// );

form.addEventListener("submit", (e) => {
  e.preventDefault();
  getWeatherDataFromApi();
  // form.reset()
  // input.value = ""
  e.currentTarget.reset();
});

const getWeatherDataFromApi = async () => {
  const apiKey = DecryptStringAES(localStorage.getItem("apiKey"));
  console.log(apiKey);
  const cityname = input.value;
  const units = "metric";
  const lang = "eng";

  // http request url(endpoint)
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=${apiKey}&units=${units}&lang=${lang}`;

  try {
    // const response = await fetch(url).then((response) => response.json());
    const response = await axios(url);
    console.log(response);

    const { main, name, sys, weather } = response.data;

    // const iconUrl = ` http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`;
    const iconUrlAWS = `https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${weather[0].icon}.svg`;
    console.log(response);

    const cityNameSpans = list.querySelectorAll("span");
    //filter map reduce forEach ==> array
    // forEach == Nodelist
     if(cityNameSpans.length > 0) {
        const filteredArr = [...cityNameSpans].filter(span => span.innerText == name)
        console.log(filteredArr);
        if(filteredArr.length > 0) {
            msgSpan.innerText = `You already know the weather for ${name}, Please search for another city 😉`;
            setTimeout(() => {msgSpan.innerText = ""},5000)
 
            return;
        }
     }
    const createdLi = document.createElement("li");
    createdLi.classList.add("city");
    createdLi.innerHTML = ` <h2 class="city-name" data-name="${name},${
      sys.country
    }">
                <span>${name}</span>
                <sup>${sys.country}</sup>
          </h2>
          <div class="city-temp">${Math.round(main.temp)}<sup>°C</sup></div>
          <figure>
                <img class="city-icon" src="${iconUrlAWS}">
                <figcaption>${weather[0].description}</figcaption>
          </figure>`;
    list.prepend(createdLi);
  } catch (error) {
    msgSpan.innerText = "City not found!";
    setTimeout(()=> {
msgSpan.innerText = ""
    }, 5000)
  }
};

// name surname email passwort elementli bir form elementi. iicersinde buttona bastigimda 
