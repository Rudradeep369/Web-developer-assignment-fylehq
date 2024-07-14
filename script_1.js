document.addEventListener('DOMContentLoaded', function () {
    var contents = document.querySelectorAll('.custom-box');
    var mainImage = document.getElementById('mainImage');

    contents.forEach(function (content) {
        content.addEventListener('click', function () {
            var newImageSrc = this.getAttribute('data-img');
            mainImage.src = newImageSrc;
        });
    });
});

var servicesCarousel = new bootstrap.Carousel(document.getElementById('servicesCarousel'), {
    interval: 5000, 
    wrap: true 
});



