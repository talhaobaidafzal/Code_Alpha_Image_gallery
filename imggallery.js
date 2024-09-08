const images = [
    'darkbg01.jpg',
    'darkbg02.jpg',
    'darkbg03.jpg',
    'darkbg04.jpg',
    'darkbg05.jpg',
    'darkbg06.jpg',
    'darkbg07.jpg',
    'darkbg08.jpg',
    'darkbg09.jpg',
    'darkbg10.jpg',
];

let currentIndex = 0;

function showImage(index) {
    currentIndex = index;
    document.getElementById('main-image').src = images[currentIndex];
}

function prevImage() {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : images.length - 1;
    document.getElementById('main-image').src = images[currentIndex];
}

function nextImage() {
    currentIndex = (currentIndex < images.length - 1) ? currentIndex + 1 : 0;
    document.getElementById('main-image').src = images[currentIndex];
}
