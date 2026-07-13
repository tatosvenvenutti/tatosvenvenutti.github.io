const projects = {

    starWars: [
        {
            name: "Ingame",
            images: [
                "../SiteImages/EpicGames/StarWars/InGame/Cantina_Gameplay_1.png",
                "../SiteImages/EpicGames/StarWars/InGame/Cantina_Gameplay_2.png"
            ]
        },
        {
            name: "Editor",
            images: [
                "../SiteImages/EpicGames/StarWars/Editor/Cantina_Dialog_Device.png",
                "../SiteImages/EpicGames/StarWars/Editor/Cantina_Quest_Manager_Device.png"
            ]
        }
    ],

    alphaTycoon: [
        {
            name: "Gameplay",
            images: [
                "../SiteImages/EpicGames/AlphaTycoon/InGame/Alpha_Tycoon.png",
                "../SiteImages/EpicGames/AlphaTycoon/InGame/AlphaTycoon_Harvester_Upgrade.png"
            ]
        }
    ],

    redWater: [
        {
            name: "Gameplay",
            images: [
                "../SiteImages/CowTownGames/RedWater/Gameplay1.png",
                "../SiteImages/CowTownGames/RedWater/Gameplay2.png"
            ]
        },
        {
            name: "Blueprint",
            images: [
                "../SiteImages/CowTownGames/RedWater/Blueprint1.png",
                "../SiteImages/CowTownGames/RedWater/Blueprint2.png"
            ]
        }
    ]

};

// GALLERY CLASS
class Gallery {

    constructor(section, galleries) {

        this.section = section;
        this.galleries = galleries;

        this.currentGallery = 0;
        this.currentImage = 0;

        // HTML Elements
        this.mainImage = section.querySelector(".mainImage");
        this.categoryTitle = section.querySelector(".categoryTitle");
        this.thumbnailContainer = section.querySelector(".thumbnails");

        this.previousButton = section.querySelector(".previous");
        this.nextButton = section.querySelector(".next");

        // Button Events
        this.previousButton.addEventListener("click", () => {
            this.previousGallery();
        });

        this.nextButton.addEventListener("click", () => {
            this.nextGallery();
        });

        // Load first gallery
        this.loadGallery();
    }

    loadGallery() {

        const gallery = this.galleries[this.currentGallery];

        // Change category title
        this.categoryTitle.textContent = gallery.name;

        // Reset to first image
        this.currentImage = 0;

        // Set main image
        this.mainImage.src = gallery.images[0];

        // Clear thumbnails
        this.thumbnailContainer.innerHTML = "";

        // Create thumbnails
        gallery.images.forEach((image, index) => {

            const thumb = document.createElement("img");

            thumb.src = image;

            if (index === 0)
                thumb.classList.add("active");

            thumb.addEventListener("click", () => {

                this.currentImage = index;

                this.updateImage();

            });

            this.thumbnailContainer.appendChild(thumb);

        });

    }

    updateImage() {

        const gallery = this.galleries[this.currentGallery];

        this.mainImage.src = gallery.images[this.currentImage];

        const thumbnails = this.thumbnailContainer.querySelectorAll("img");

        thumbnails.forEach(img => img.classList.remove("active"));

        thumbnails[this.currentImage].classList.add("active");

    }

    previousGallery() {

        this.currentGallery--;

        if (this.currentGallery < 0)
            this.currentGallery = this.galleries.length - 1;

        this.loadGallery();

    }

    nextGallery() {

        this.currentGallery++;

        if (this.currentGallery >= this.galleries.length)
            this.currentGallery = 0;

        this.loadGallery();

    }

}

// Star Wars Gallery
new Gallery(
    document.getElementById("starWars"),
    projects.starWars
);

// Alpha Tycoon Gallery
new Gallery(
    document.getElementById("alphaTycoon"),
    projects.alphaTycoon
);

// Red Water Gallery
new Gallery(
    document.getElementById("redWater"),
    projects.redWater
);