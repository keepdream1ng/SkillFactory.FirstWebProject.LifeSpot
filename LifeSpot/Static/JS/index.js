let sessionData = new Map();

const checkAge = function() {
    let age = prompt("Пожалуйста, введите ваш возраст ниже:");
    sessionData.set("UserAge", age);
    if (age < 18) {
        alert("Контент сайта не предназначен для лиц младше 18!\nВы будете перенаправлены.");
        window.location.href = "http://www.google.com";
    } else {
        alert(`Приветствуем на LiveSpot!\n Текущее время: ${new Date().toLocaleString()}`);
    }
}
function handleSession() {
    sessionData.set("UserAgent", window.navigator.userAgent);
    sessionData.set("UserSessionStartTime", new Date().toLocaleString());
}

const logSession = function () {
    for (let prop of sessionData) {
        console.log(prop);
    }
}
const getSearchInput = function() {
    return document.getElementById('searchInput').value.toLowerCase();
}

function filterVideoContainers() {
    const userInput = getSearchInput();
    let videoContainers = document.getElementsByClassName('video-container');
    for (let i = 0; i < videoContainers.length; i++) {
        let title = videoContainers[i].getElementsByClassName('video-title')[0];
        if (title.innerText.toLowerCase().includes(userInput)) {
            videoContainers[i].style.display = 'inline-block';
        }
        else {
            videoContainers[i].style.display = 'none';
        }
    }
}

const delayedCallToSubscribe = function (){
    setTimeout( function () { alert("Ищите нас на не заблокированных в РФ ресурсах!")}, 60000)
}
