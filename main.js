// Run code when page finishes loading
var ready = (callback) => {
    if (document.readyState != "loading") callback();
    else document.addEventListener("DOMContentLoaded", callback);
};

ready(() => {
    // Set header height
    if (document.querySelector(".header")) {
        document.querySelector(".header").style.height = window.innerHeight + "px";
    }

    // Photo modal for projects page
    const projectImages = document.querySelectorAll(".project-image");

    console.log("Found project images:", projectImages.length);

    if (projectImages.length > 0) {
        projectImages.forEach((img) => {
            img.style.cursor = "pointer";
            img.addEventListener("click", function () {
                console.log("Image clicked!");
                const imgSrc = this.getAttribute("src");
                const imgAlt = this.getAttribute("alt");

                console.log("Image src:", imgSrc);

                // Set modal content
                document.getElementById("modalImage").setAttribute("src", imgSrc);
                document.getElementById("modalImage").setAttribute("alt", imgAlt);
                document.getElementById("photoModalLabel").textContent = imgAlt;

                // Show modal using jQuery
                $("#photoModal").modal("show");
            });
        });
    }
});
