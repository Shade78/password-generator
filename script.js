const passwordLenght = 12;


function generateUserPassword() {
    if (document.getElementById("userSymbols").value.length >= 10) {
        generatePassword()
    } else {
        alert('Введено меньше 10 символов, будет сгенерирован случайный пароль')
        generateDefaultPassword()
    }   
}

function generatePassword(){  //если пользователь ввел больше 9 символов
    let password = "";
    let chars = document.getElementById("userSymbols").value;  // запись введенного текста с поля


    for(let i=0; i<passwordLenght; i++){
        let randomNumber = Math.floor(Math.random() * chars.length);
        password += chars.substring(randomNumber, randomNumber+1);
    }
    document.getElementById('password').value = password;  // установка в результиующее поле снерерированного пароля
}
function generateDefaultPassword() {  // если пользователь ввел меньше 10 символов
    let chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let password = "";

    for(let i=0; i<passwordLenght; i++){
        let randomNumber = Math.floor(Math.random() * chars.length);
        password += chars.substring(randomNumber, randomNumber+1);
    }
    document.getElementById('password').value = password;  // установка в результиующее поле снерерированного пароля
}

function copyPassword() {
    const copyText = document.getElementById("password");
    copyText.select();
    document.execCommand("copy");
}
