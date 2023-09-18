let sessionData = new Map();
sessionData.set("UserAgent", window.navigator.userAgent);
let age;
age = prompt("Пожалуйста, введите ваш возраст ниже:");
sessionData.set("UserAge", age);
if (age < 18) {
    alert(`Контент сайта не предназначен для лиц младше 18!\nВы будете перенаправлены.`);
    window.location.href = "http://www.google.com";
    throw new Error("Not old enough for our content!");
}
let time = new Date().toLocaleString();
sessionData.set("UserSessionStartTime", time);
alert(`Приветствуем на LiveSpot!\n Текущее время: ${time}`);

for (let prop of sessionData) {
    console.log(prop);
}
