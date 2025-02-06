document.addEventListener("DOMContentLoaded", function () {
document.querySelectorAll(".btn-category").forEach(function (button) {
        button.addEventListener("click", function () {
            let selectedCategory = this.getAttribute("data-category");


            document.querySelectorAll(".product-card").forEach(function (card) {
                card.style.display = "none";
            });

            if (selectedCategory === "Shirt") {
                document.querySelectorAll(".product-card#formal").forEach(card => card.style.display = "block");
            } else if (selectedCategory === "T-Shirts") {
                document.querySelectorAll(".product-card#t-shirt").forEach(card => card.style.display = "block");
            }
        });
    });

    function toggleSidebar() {
        let sidebar = document.getElementById("sidebar");
        let logo1 = document.querySelector(".logo1");
        let logo2 = document.querySelector(".logo2");

        sidebar.classList.toggle("expanded");

        if (sidebar.classList.contains("expanded")) {
            fastFadeOut(logo1, function () {
                fastFadeIn(logo2);
            });
        } else {
            fastFadeOut(logo2, function () {
                fastFadeIn(logo1);
            });
        }
    }

    function fastFadeIn(element) {
        element.style.display = "block";
        element.style.opacity = 0;
        let opacity = 0;
        let fadeEffect = setInterval(function () {
            opacity += 0.2; 
            element.style.opacity = opacity;
            if (opacity >= 1) {
                clearInterval(fadeEffect);
            }
        }, 30); 
    }

    function fastFadeOut(element, callback) {
        let opacity = 1;
        let fadeEffect = setInterval(function () {
            opacity -= 0.2; 
            element.style.opacity = opacity;
            if (opacity <= 0) {
                clearInterval(fadeEffect);
                element.style.display = "none";
                if (callback) callback();
            }
        }, 30); 
    }

document.getElementById("sidebar").addEventListener("click", toggleSidebar);
document.getElementById("sidebar").addEventListener("mouseleave", function () {
        let sidebar = document.getElementById("sidebar");
        let logo1 = document.querySelector(".logo1");
        let logo2 = document.querySelector(".logo2");

        sidebar.classList.remove("expanded");
        fastFadeOut(logo2, function () {
            fastFadeIn(logo1);
        });
    });
});
