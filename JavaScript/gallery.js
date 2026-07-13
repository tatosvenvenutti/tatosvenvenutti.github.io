const galleries = [
    // Star Wars
    {
        name: "Verse",
        images: [
            "../SiteImages/CowTownGames/RedWater/RedWaterMenu.png",
            "../SiteImages/CowTownGames/CowTownGames.png",
            "../SiteImages/CowTownGames/CowTownGames.png"
        ]
    }

];

// HTML Elements
const mainImage = document.getElementById("mainImage");
const categoryTitle = document.getElementById("categoryTitle");
const thumbnailsContainer = document.querySelector(".thumbnails");

// Current State
let currentGallery = 0;
let currentImage = 0;

// Load Gallery
function loadGallery() {

    const gallery = galleries[currentGallery];

    // Change category title
    categoryTitle.textContent = gallery.name;

    // Reset to first image
    currentImage = 0;
    mainImage.src = gallery.images[0];

    // Remove old thumbnails
    thumbnailsContainer.innerHTML = "";

    // Create new thumbnails
    gallery.images.forEach((image, index) => {

        const thumbnail = document.createElement("img");

        thumbnail.src = image;

        if (index === 0)
            thumbnail.classList.add("active");

        thumbnail.addEventListener("click", () => {

            currentImage = index;

            updateImage();

        });

        thumbnailsContainer.appendChild(thumbnail);

    });

}

// Update Main Image
function updateImage() {

    const gallery = galleries[currentGallery];

    mainImage.src = gallery.images[currentImage];

    const thumbnails = document.querySelectorAll(".thumbnails img");

    thumbnails.forEach(img => img.classList.remove("active"));

    thumbnails[currentImage].classList.add("active");

}

// Previous Gallery
document.getElementById("previousCategory").addEventListener("click", () => {

    currentGallery--;

    if (currentGallery < 0)
        currentGallery = galleries.length - 1;

    loadGallery();

});

// Next Gallery
document.getElementById("nextCategory").addEventListener("click", () => {

    currentGallery++;

    if (currentGallery >= galleries.length)
        currentGallery = 0;

    loadGallery();

});

// Load first gallery when page opens
loadGallery();