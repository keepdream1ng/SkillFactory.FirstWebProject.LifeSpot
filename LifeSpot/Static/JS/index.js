const logSession = function (sessionData) {
    for (let prop of sessionData) {
        console.log(prop);
    }
}
function HandleSession() {
    let sessionData = new Map();
    sessionData.set("UserAgent", window.navigator.userAgent);
    let age;
    age = prompt("Пожалуйста, введите ваш возраст ниже:");
    sessionData.set("UserAge", age);
    if (age < 18) {
        alert(`Контент сайта не предназначен для лиц младше 18!\nВы будете перенаправлены.`);
        window.location.href = "http://www.google.com";
    } else {
        let time = new Date().toLocaleString();
        sessionData.set("UserSessionStartTime", time);
        alert(`Приветствуем на LiveSpot!\n Текущее время: ${time}`);
    }
    return sessionData;
}

const getSearchInput = function() {
    return document.getElementById('searchInput').value.toLowerCase();
}

function filterVideoContainers( getSearchInput ) {
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
