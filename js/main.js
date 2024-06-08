const apiKey = 'f193b0e912b54dca8cf191821240806';

// http://api.weatherapi.com/v1/current.json?key=f193b0e912b54dca8cf191821240806&q=London;

// const query = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=London`;

// fetch(query).then((response) => {
//   return response.json()
// }).then((data) => {
//   console.log(data);
// })

/* Получаем название Города */
// Слушаем форму с городом. form и input у нас един. в названии класса
// поэтому используем класс но можно добавить id и слушать по #
const form = document.querySelector('form');
const input = document.querySelector('input')
let city;

// слушаем отправку формы
form.onsubmit = function (event) {
  //отменяем отправку формы чтобы не обновять стр
  event.preventDefault();

  //берем значение города из инпута, обрезаем пробелы
  city = input.value.trim();

  /*делаем запрос на сервер */
  //адрес запроса
  const url = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;
  //сам запрос
  fetch(url).then((response) => {
    return response.json()
  }).then((data) => {
    console.log(data);
  })
}


