const wsURI = "wss://echo-ws-service.herokuapp.com";
const input = document.querySelector(".input");
const send = document.querySelector(".send");
const geo = document.querySelector(".geo");
const chatElement = document.querySelector(".messages");
const yourMes = document.querySelector(".messages__your-message");
const serverMes = document.querySelector(".messages__server-message");
const loctn = document.querySelector(".location");
let websocket;
// WebSocket соединение
const socket = new WebSocket('wss://echo-ws-service.herokuapp.com');

// Обработка события открытия соединения WebSocket
socket.addEventListener('open', function (event) {
  console.log('WebSocket соединение установлено');
});

// Обработка события получения сообщения от сервера
socket.addEventListener('message', function (event) {
  const message = event.data;
  showChatMessage3(message);
});

// Обработка события закрытия соединения WebSocket
socket.addEventListener('close', function (event) {
  console.log('WebSocket соединение закрыто');
});
send.addEventListener('click', function() {
    const message = input.value;
    socket.send(message);
    showChatMessage2(message);
    inputElement.value = '';
});

// Обработчик нажатия на кнопку "Гео-локация"
geo.addEventListener('click', function() {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(function(position) {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        const locationMessage = `Моя гео-локация: ${latitude}, ${longitude}`;
        const mapUrl = `https://www.openstreetmap.org/?mlat=${latitude}&mlon=${longitude}`;
        socket.send(locationMessage);
        showChatMessage(`Гео-локация: <a href="${mapUrl}" target="_blank">${mapUrl}</a>`);
      });
    } else {
      alert('Гео-локация не поддерживается');
    }
  });
// Функция для вывода сообщения в окно чата
function showChatMessage(message) {
    const messageElement = document.createElement('p');
    messageElement.innerHTML = message;
    loctn.appendChild(messageElement);
}  

function showChatMessage2(message) {
    const messageElement = document.createElement('p');
    messageElement.innerHTML = message;
    serverMes.appendChild(messageElement);
}  
function showChatMessage3(message) {
    const messageElement = document.createElement('p');
    messageElement.innerHTML = message;
    yourMes.appendChild(messageElement);
}  
