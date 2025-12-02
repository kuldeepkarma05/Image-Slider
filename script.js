// Array of image URLs
const images = [
    "https://picsum.photos/id/1015/600/400",
    "https://picsum.photos/id/1024/600/400",
    "https://picsum.photos/id/1035/600/400",
    "https://picsum.photos/id/1041/600/400"
];

// Start with first image
let index = 0;

// Get image element
const slideImage = document.getElementById("slideImage");

// Load first image
slideImage.src = images[index];

// Next button function
function nextImage() {
    index++;
    if (index >= images.length) {
        index = 0;
    }
    slideImage.src = images[index];
}

// Previous button function
function prevImage() {
    index--;
    if (index < 0) {
        index = images.length - 1;
    }
    slideImage.src = images[index];
}
