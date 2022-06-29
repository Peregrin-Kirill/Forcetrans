// ymaps.ready(init);

// function init() {
//         myMap = new ymaps.Map('map', {
//             center: [55.755819, 37.617644],
//             zoom: 7,
//             controls: []
//         }),
//     // Создадим панель маршрутизации.
//         routePanelControl = new ymaps.control.RoutePanel({
//             options: {
//                 // Добавим заголовок панели.
//                 showHeader: true,
//                 title: 'Расчёт доставки'
//             }
//         }),
//         zoomControl = new ymaps.control.ZoomControl({
//             options: {
//                 size: 'small',
//                 float: 'none',
//                 position: {
//                     bottom: 145,
//                     right: 10
//                 }
//             }
//         });
//     // Пользователь сможет построить только автомобильный маршрут.
//     routePanelControl.routePanel.options.set({
//         types: {auto: true}
//     });

//     myMap.controls.add(routePanelControl).add(zoomControl);

//     // Получим ссылку на маршрут.
//     routePanelControl.routePanel.getRouteAsync().then(function (route) {

//         // Зададим максимально допустимое число маршрутов, возвращаемых мультимаршрутизатором.
//         route.model.setParams({results: 3}, true);

//         // Повесим обработчик на событие построения маршрута.
//         route.model.events.add('requestsuccess', function () {

//             var activeRoute = route.getActiveRoute();
//             if (activeRoute) {
//                 // Получим протяженность маршрута.
//                 var length = route.getActiveRoute().properties.get("distance"),
//                 // Вычислим стоимость доставки.
//                     price = calculate(Math.round(length.value / 1000)),
//                 // Создадим макет содержимого балуна маршрута.
//                     balloonContentLayout = ymaps.templateLayoutFactory.createClass(
//                         '<span>Расстояние: ' + length.text + '.</span><br/>' +
//                         '<span style="font-weight: bold; font-style: italic">Стоимость доставки: ' + price + ' р.</span>');
//                 // Зададим этот макет для содержимого балуна.
//                 route.options.set('routeBalloonContentLayout', balloonContentLayout);
//                 // Откроем балун.
//                 activeRoute.balloon.open();
//             }
//         });

//     });
//     // Функция, вычисляющая стоимость доставки.
//     function calculate(routeLength) {
//         return Math.max(routeLength * DELIVERY_TARIFF, MINIMUM_COST);
//     }
// }

var myMap;

// Дождёмся загрузки API и готовности DOM.
ymaps.ready(init);

function init () {
    // Создание экземпляра карты и его привязка к контейнеру с
    // заданным id ("map").
    myMap = new ymaps.Map('map', {
        // При инициализации карты обязательно нужно указать
        // её центр и коэффициент масштабирования.
        center: [55.76, 37.64], // Москва
        zoom: 10
    }, {
        searchControlProvider: 'yandex#search'
    });

    document.getElementById('destroyButton').onclick = function () {
        // Для уничтожения используется метод destroy.
        myMap.destroy();
    };

}
