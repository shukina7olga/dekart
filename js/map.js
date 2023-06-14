ymaps.ready(init);
    
function init () {
    var myMap = new ymaps.Map("map", {
        // Центр карты, указываем коордианты. если центр как в макете center:[55.758438, 37.6]
        center:[55.758438, 37.64803],
        // Масштаб, тут все просто
         zoom: 11,
        // Отключаем все элементы управления
        controls: []
    }); 
            
    var myGeoObjects = [];


    
    // Наша метка, указываем коордианты
    myGeoObjects = new ymaps.Placemark([55.758438, 37.741019],{
        balloonContentBody: '',
        },{
        iconLayout: 'default#image',
        // Путь до нашей картинки
        iconImageHref: '/img/card-marker.png', 
        // Размер по ширине и высоте
        // iconImageSize: [70, 70],
        // Смещение левого верхнего угла иконки относительно
        // её «ножки» (точки привязки).
        // iconImageOffset: [-35, -35]
    });
                
    var clusterer = new ymaps.Clusterer({
        clusterDisableClickZoom: false,
        clusterOpenBalloonOnClick: false,
    });
    
    clusterer.add(myGeoObjects);
    myMap.geoObjects.add(clusterer);
    // Отлючаем возможность изменения масштаба
    // myMap.behaviors.disable('scrollZoom');

}