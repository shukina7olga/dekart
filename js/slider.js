$(".document").ready(function() {
 
    $(".slider").slick({
        dots: false,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1, 
        autoplay: true,
        autoplaySpeed: 2000,
        // variableWidth: true,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
              }  
            },
            {
                breakpoint: 625,
                settings: {
                    slidesToShow: 1,
                }  
            }
        ]  
    });

    var currentSlide;
    var slidesCount;
    var sliderCounter = document.createElement("div");
    sliderCounter.classList.add("slider__counter");
    var updateSliderCounter = function(slick) {
        currentSlide = slick.slickCurrentSlide() + 1;
        slidesCount = slick.slideCount;
        $(sliderCounter).text("0" + currentSlide + " / " + "0" + slidesCount);
    };

    $(".main-slider").on("init", function(event, slick) {
        $(".main-slider").append(sliderCounter);
        updateSliderCounter(slick);
    })

    $(".main-slider").on("afterChange", function(event, slick) {
        updateSliderCounter(slick);
    })

    $(".main-slider").slick({
        dots: false,
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1, 
        autoplay: true,
        autoplaySpeed: 2700,
        // variableWidth: true,
        responsive: [
            {
              breakpoint: 768,
              settings: {
                arrows: false,
              }  
            }
        ] 
    });


    $(".slider-comment").slick({
        dots: false,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1, 
        // autoplay: true,
        // autoplaySpeed: 2000,
        // variableWidth: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                }  
            }
        ]  
    });
    
 
});

