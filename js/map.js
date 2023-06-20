ymaps.ready(init);
    
function init () {
    var myMap = new ymaps.Map("map", {
        // Центр карты, указываем коордианты. если центр как в макете center:[55.758438, 37.6]
        center: [55.681600, 37.865220],
        // Масштаб
         zoom: 17,
        // Отключаем все элементы управления
        controls: []
    }); 
            
    var myGeoObjects = [];


    
    // Наша метка, указываем коордианты
    myGeoObjects = new ymaps.Placemark([55.681600, 37.865220],{
        balloonContentBody: '',
        },{
        iconLayout: 'default#image',
        // Путь до нашей картинки
        iconImageHref: './img/card-marker.png', 
        // Размер по ширине и высоте
        iconImageSize: [210, 60],
        // Смещение левого верхнего угла иконки относительно
        // её «ножки» (точки привязки).
        iconImageOffset: [-35, -45],
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

