import { projectDetailsObj } from "./project-details-obj.js";

let projectDetails = projectDetailsObj;
let default_url =
  "https://d33wubrfki0l68.cloudfront.net/1c9c8c01b0e5efecef2bfa5c1d72e1fbf57aaf38/e8af8/v3/img/blog/the404.png";

//Access div with class portfolio container
//<div class="row portfolio-container">
let portfolio_container = document.querySelector(".portfolio-container");

var htmlElements = "";

for (let i = 0; i < projectDetails.length; i++) {
  htmlElements += `<div class="col-lg-4 col-md-6 portfolio-item ${
    projectDetails[i].category
  }"><div class="portfolio-wrap"><img src=${
    projectDetails[i]?.images[0] || default_url
  } class="img-fluid" alt=""><div class="portfolio-info"><h4>${
    projectDetails[i].title
  }</h4><div class="portfolio-links glightbox"><a href="portfolio-details.html?${i}" data-gallery="portfolioDetailsGallery" data-glightbox="type: external" class="portfolio-details-lightbox" title=${
    projectDetails[i].title
  }><i class="bx bx-link"></i><a></div></div></div></div>`;
}

portfolio_container.innerHTML = htmlElements;

/**
 * Initiate portfolio lightbox
 */
const portfolioLightbox = GLightbox({
  selector: ".portfolio-lightbox",
});

/**
 * Initiate portfolio details lightbox
 */
const portfolioDetailsLightbox = GLightbox({
  selector: ".portfolio-details-lightbox",
  width: "90%",
  height: "90vh",
});

/**
 * Portfolio details slider
 */
new Swiper(".portfolio-details-slider", {
  speed: 400,
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
    clickable: true,
  },
});
