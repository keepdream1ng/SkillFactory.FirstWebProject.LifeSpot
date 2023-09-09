let age;
age = prompt("Пожалуйста, введите ваш возраст ниже:");
if (age < 18) {
    alert(`Контент сайта не предназначен для лиц младше 18!\nВы будете перенаправлены.`);
    window.location.href = "http://www.google.com";
    throw new Error("Not old enough for our content!");
}
alert(`Приветствуем на LiveSpot!\n Текущее время: ${new Date().toLocaleString()}`);
