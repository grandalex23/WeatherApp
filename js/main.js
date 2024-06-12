const apiKey = 'f193b0e912b54dca8cf191821240806';

/* Получаем название элементов например: Города */
// Слушаем форму с городом. form и input у нас един. в названии класса
// поэтому используем класс но можно добавить id и слушать по #
const header = document.querySelector('.header')
const form = document.querySelector('form');
const input = document.querySelector('input')


// слушаем отправку формы
form.onsubmit = function (event) {
  //отменяем отправку формы чтобы не обновять стр
  event.preventDefault();

  //берем значение города из инпута, обрезаем пробелы
  let city = input.value.trim();

  /*делаем запрос на сервер */
  //адрес запроса
  const url = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;
  //сам запрос
  fetch(url).then((response) => {
    return response.json()
  }).then((data) => {
    console.log(data);

    console.log(data.current.last_updated);
    // Имя города
    console.log(data.location.name);
    console.log(data.current.temp_c);
    console.log(data.current.condition.text);
    console.log(data.current.cloud);
    console.log(data.current.pressure_in);
    console.log(data.current.uv);
    console.log(data.current.humidity);
    console.log(data.current.vis_km);
    console.log(data.current.wind_kph);


    /* отображаем полученное в карточке */
    //Разметка карточки

    const html = `<div class="card">
        <div class="card-top">
          <div class="card-top__text">
            <div> Weather today in </div>
            <div></div>
            <div> ${data.current.last_updated}</div>
            <div class="card-city"> ${data.location.name} </div>
            <div></div>
            <div class="card-degree"> ${data.current.temp_c}°c</div>
          </div>
          <img src="img/partly.png" alt="" class="pic-main">
          <div class="pic-main__text">${data.current.condition.text}</div>
        </div>
        <div class="card-bottom">
          <div class="indicator">
            <img src="img/icons/cloud.png" alt="" class="pic-cloud">
            <div>
              <p>${data.current.cloud}</p>
              <p class="indicator-text"> CLOUD COVER </p>
            </div>
          </div>
          <div class="indicator">
            <img src="img/icons/gauge.png" alt="" class="pic-pressure">
            <div>
              <p>${data.current.pressure_in}mb</p>
              <p class="indicator-text"> PRESSURE </p>
            </div>
          </div>
          <div class="indicator">
            <img src="img/icons/uv-index.png" alt="" class="pic-uvindex">
            <div>
              <p>${data.current.uv}</p>
              <p class="indicator-text"> UV INDEX </p>
            </div>
          </div>
          <div class="indicator">
            <img src="img/icons/humidity.png" alt="" class="pic-humidity">
            <div>
              <p>${data.current.humidity}</p>
              <p class="indicator-text"> HUMIDITY </p>
            </div>
          </div>
          <div class="indicator">
            <img src="img/icons/visibility.png" alt="" class="pic-visibility">
            <div>
              <p>${data.current.vis_km}km</p>
              <p class="indicator-text"> VISIBILITY</p>
            </div>
          </div>
          <div class="indicator">
            <img src="img/icons/wind.png" alt="" class="pic-wind">
            <div>
              <p>${data.current.wind_kph}km/h</p>
              <p class="indicator-text"> WIND SPEED </p>
            </div>
          </div>
        </div>
      </div>`;

    //Отобраем карточку на странице после header

    header.insertAdjacentHTML('afterend', html)

  })
}


