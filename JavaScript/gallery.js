const projects = {

    starWars: [
        {
            name: "In-game",
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

    combatDesign: [
        {
            name: "Gameplay",
            images: [
                "../SiteVideos/LePesteNoire/CombatDesign/InGame/LPN_Doctor_Attacks.gif",
                "../SiteVideos/LePesteNoire/CombatDesign/InGame/LPN_Dual_Attack.gif",
                "../SiteVideos/LePesteNoire/CombatDesign/InGame/LPN_Hammer_Attack.gif"
            ]
        },
        {
            name: "Refrences",
            images: [
                "../SiteImages/LePesteNoire/CombatDesign/Inspiration/Vindictus_Combat.png",
                "../SiteImages/LePesteNoire/CombatDesign/Inspiration/MHW_Combo.png"
            ]
        }
    ],

    knights: [
        {
            name: "Gameplay",
            images: [
                "../SiteImages/LePesteNoire/Knights/InGame/LPN_Screenshot_AI_1.png",
                "../SiteVideos/LePesteNoire/Knights/LPN_Knight.gif"
            ]
        },
        {
            name: "Refrences",
            images: [
                "../SiteImages/LePesteNoire/Knights/Refrences/DS3_LothricK.png",
                "../SiteImages/LePesteNoire/Knights/Refrences/DS3_LothricS.png"
            ]
        },
        {
            name: "Blueprint",
            images: [
                "../SiteImages/LePesteNoire/Knights/Blueprint/LPN_Knight_1.png",
                "../SiteImages/LePesteNoire/Knights/Blueprint/LPN_Knight_2.png",
                "../SiteImages/LePesteNoire/Knights/Blueprint/LPN_Knight_3.png"
            ]
        },
        {
            name: "Behavior Tree",
            images: [
                "../SiteImages/LePesteNoire/Knights/BehaviorTree/LPN_Knight_BT.png"
            ]
        }
    ],

    kraken: [
        {
            name: "Gameplay",
            images: [
                "../SiteVideos/LePesteNoire/Boss/LPN_Kraken.gif",
                "../SiteVideos/LePesteNoire/Boss/LPN_Guard_Break.gif"
            ]
        },
        {
            name: "Behavior Tree",
            images: [
                "../SiteImages/LePesteNoire/Boss/BehaviorTree/LPN_Kraken_BT.png"
            ]
        }
    ],

    ability: [
        {
            name: "Gameplay",
            images: [
                "../SiteVideos/LePesteNoire/PlayerAbility/LPN_Super_Attack.gif"
            ]
        }
    ],

    ui: [
        {
            name: "In-Game",
            images: [
                "../SiteImages/TeamDDM/UI/InGame/TeamDDM_Screenshot_2.png",
                "../SiteImages/TeamDDM/UI/InGame/TeamDDM_Profile.png",
                "../SiteImages/TeamDDM/UI/InGame/TeamDDM_GameManager.png",
            ]
        },
        {
            name: "Code",
            images: [
                "../SiteImages/TeamDDM/UI/Code/TeamDDM_CodeSnippit_2.png"
            ]
        }
    ],

    audio: [
        {
            name: "In-Game",
            images: [
                "../SiteImages/TeamDDM/Audio/InGame/TeamDDM_Screenshot_4.png"
            ]
        },
        {
            name: "Code",
            images: [
                "../SiteImages/TeamDDM/Audio/Code/TeamDDM_CodeSnippit_3.png"
            ]
        }
    ],

    gamemode: [
        {
            name: "In-Game",
            images: [
                "../SiteImages/TeamDDM/UI/InGame/TeamDDM_Profile.png",
                "../SiteImages/TeamDDM/UI/InGame/TeamDDM_GameManager.png"
            ]
        },
        {
            name: "Code",
            images: [
                "../SiteImages/TeamDDM/Gamemode/Code/TeamDDM_CodeSnippit_1.png",
                "../SiteImages/TeamDDM/Gamemode/Code/TeamDDM_CodeSnippit_4.png"
            ]
        }
    ],

    enemylogic: [

        {
            name: "In-Game",
            images: [
                "../SiteImages/BirdWars/EnemyLogic/InGame/BirdWars_Gameplay_1.png",
                "../SiteVideos/BirdWars/EnemyLogic/BirdWars_Gameplay.gif"

            ]
        },
        {
            name: "Inspiration",
            images: [
                "../SiteImages/BirdWars/Inspiration/SpaceInvader_Example.png"

            ]
        },
        {
            name: "Code",
            images: [
                "../SiteImages/BirdWars/EnemyLogic/Code/Birdwars_ECS_Code.png",
                "../SiteImages/BirdWars/EnemyLogic/Code/Birdwars_EnemyLogic_Code.png"
            ]
        }
    ],

    playerlogic: [
        {
            name: "In-Game",
            images: [
                "../SiteImages/BirdWars/PlayerLogic/InGame/BirdWars_Gameplay_2.png",
                "../SiteVideos/BirdWars/PlayerLogic/Bird_Wars_Build_2.gif"

            ]
        },
        {
            name: "Code",
            images: [
                "../SiteImages/BirdWars/PlayerLogic/Code/BirdWas_PlayerMovement_Code.png"
            ]
        }
    ],

    renderer: [
        {
            name: "In-Engine",
            images: [
                "../SiteImages/DirectX11Renderer/InGame/LevelRender_Profile.png",
                "../SiteImages/DirectX11Renderer/InGame/LevelRender_Stage2.png",

            ]
        }
    ],
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
if (document.getElementById("starWars")) {
    new Gallery(
        document.getElementById("starWars"),
        projects.starWars
    );
}

// Alpha Tycoon Gallery
if (document.getElementById("alphaTycoon")) {
    new Gallery(
        document.getElementById("alphaTycoon"),
        projects.alphaTycoon
    );
}

// Combat Design Gallery
if (document.getElementById("combatDesign")) {
    new Gallery(
        document.getElementById("combatDesign"),
        projects.combatDesign
    );
}

// Knights Gallery
if (document.getElementById("knights")) {
    new Gallery(
        document.getElementById("knights"),
        projects.knights
    );
}

// Kraken Gallery
if (document.getElementById("kraken")) {
    new Gallery(
        document.getElementById("kraken"),
        projects.kraken
    );
}

// Player Ability Gallery
if (document.getElementById("ability")) {
    new Gallery(
        document.getElementById("ability"),
        projects.ability
    );
}

// UI Gallery
if (document.getElementById("ui")) {
    new Gallery(
        document.getElementById("ui"),
        projects.ui
    );
}

// Audio Gallery
if (document.getElementById("audio")) {
    new Gallery(
        document.getElementById("audio"),
        projects.audio
    );
}

// Gamemode Gallery
if (document.getElementById("gamemode")) {
    new Gallery(
        document.getElementById("gamemode"),
        projects.gamemode
    );
}

// Enemy Logic Gallery
if (document.getElementById("enemylogic")) {
    new Gallery(
        document.getElementById("enemylogic"),
        projects.enemylogic
    );
}

// Player Logic Gallery
if (document.getElementById("playerlogic")) {
    new Gallery(
        document.getElementById("playerlogic"),
        projects.playerlogic
    );
}

// Renderer Gallery
if (document.getElementById("renderer")) {
    new Gallery(
        document.getElementById("renderer"),
        projects.renderer
    );
}
