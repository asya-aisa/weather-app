

const api = {
    endPoint: "https://api.openweathermap.org/data/2.5/",
    key: '345acc15c9e00fe53eff2164e47b2df9',
    keyTwo: "e1b257b253637c29bda2004e87993009"
}

const myKey = 'ce0e321c2f3f4dc29c47ef4c24bde5f6';

async function getIP() {
    const res = await fetch(`https://ipgeolocation.abstractapi.com/v1/?api_key=${myKey}`);
    const result = await res.json();
    getInfo(result.city)
}
getIP();


const input = document.querySelector('#input');
input.addEventListener('keydown', enterInfo);

function enterInfo(e) {
    if(e.key === "Enter") {
        getInfo(input.value);
    }
}

async function getInfo(data) {
    const res = await fetch(`${api.endPoint}weather?q=${data}&units=metric&appID=${api.key}`);
    const result = await res.json();
    displayResult(result);
}



function displayResult(result) {
    const img = document.querySelector('#icon');
    let iconCode = `${result.weather[0].icon}`;
    let iconUrl = 'https://openweathermap.org/img/wn/' + iconCode + '@2x.png';
    img.setAttribute('src', iconUrl);

    document.querySelector('#city').textContent = `${result.name}, ${result.sys.country}`;
    document.querySelector('#temperature').innerHTML = `${Math.round(result.main.temp)}<span>°</span>`;
    document.querySelector('#feelsLike').innerHTML = "Feels like: " + `${Math.round(result.main.feels_like)}<span>°</span>`;
    document.querySelector('#conditions').textContent = `${result.weather[0].main}`;
    document.querySelector('#varation').innerHTML = "Min: " + `${Math.round(result.main.temp_min)}<span>°</span>` + " Max: " + `${Math.round(result.main.temp_max)}<span>°</span>`
}


let date = document.querySelector('#date');
const dateNow = new Date();

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

let weekDay = days[dateNow.getDay()];
let dateDay = dateNow.getDate();
let month = months[dateNow.getMonth()];
let year = dateNow.getFullYear();

date.textContent = `${weekDay} ${dateDay} ${month} ${year}`;

gsap.to('#icon', {x: 100, duration: 7, yoyo: true, repeat: -1,ease:Linear.easeNone})
gsap.to('#icon', {x: -100, duration: 7, delay: 7.5, yoyo: true, repeat: -1,ease:Linear.easeNone})


   

