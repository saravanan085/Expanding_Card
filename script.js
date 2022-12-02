const images = document.querySelectorAll('.image-item');


images.forEach(press => {
    press.addEventListener('click', function () {
        images.forEach(r => {
            r.classList.remove('active');
        });
        press.classList.toggle('active');

    });

});
