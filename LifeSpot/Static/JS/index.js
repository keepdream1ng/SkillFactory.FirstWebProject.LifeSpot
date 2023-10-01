function checkAndWriteSessionStorage(item, returnValToWriteFunc) {
    const result = sessionStorage.getItem(item)
    if (result == null) {
        sessionStorage.setItem(item, returnValToWriteFunc());
    }
    return result;
}

const checkAge = function () {
    if (sessionStorage.getItem("UserAge") == null) {
        let age = prompt("Пожалуйста, введите ваш возраст ниже:")
        if (age == null) {
            redirectToGoogle();
            return;
        }
        sessionStorage.setItem("UserAge", age);
        if (age >= 18) {
            alert(`Приветствуем на LiveSpot!\n Текущее время: ${new Date().toLocaleString()}`);
        } else {
            redirectToGoogle();
        }
    }
}

function redirectToGoogle() {
    alert("Контент сайта не предназначен для лиц младше 18!\nВы будете перенаправлены.");
    window.location.href = "http://www.google.com";
}

function handleSession() {
    checkAndWriteSessionStorage("UserAgent", () => { return window.navigator.userAgent });
    checkAndWriteSessionStorage("UserSessionStartTime", () => { return new Date().toLocaleString() });
    checkAge();
    logSession();
}

const logSession = function () {
    console.log(`Клиент пользователя: ${sessionStorage.getItem('UserAgent')}`);
    console.log(`Время начала сессии: ${sessionStorage.getItem('UserSessionStartTime')}`);
    console.log(`Возраст пользователя: ${sessionStorage.getItem('UserAge')}`);
}
const getSearchInput = function () {
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

const delayedCallToSubscribe = function () {
    setTimeout(function () { alert("Ищите нас на не заблокированных в РФ ресурсах!") }, 60000)
}
