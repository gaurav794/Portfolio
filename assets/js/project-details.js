import { projectDetailsObj } from "./project-details-obj.js";

let default_url =
  "https://d33wubrfki0l68.cloudfront.net/1c9c8c01b0e5efecef2bfa5c1d72e1fbf57aaf38/e8af8/v3/img/blog/the404.png";

//Get project id from the url
let project_id = window.location.search;
//example: ?1  --> update to 1
project_id = project_id.replace("?", "");

//store project id details
let projectDetail = projectDetailsObj[project_id];

//update the h2 tag value with class portfolio-title
let h2 = document.querySelector(".portfolio-title");
h2.innerHTML = projectDetail.title;

//get div tag with class swiper-wrapper and create dom elements
/* <div class="swiper-slide">
                    <img src="assets/img/portfolio/telemedicine-2.png" alt="" />
                  </div>*/
let div_swiper_wrapper = document.querySelector(".swiper-wrapper");
let htmlElements = "";
//create swiper slides dom until no. of images in the obj
//Skipping 1st index as it contains thumbnail
for (let i = 1; i < projectDetail.images.length; i++) {
  htmlElements += `<div class="swiper-slide">
  <img src=${projectDetail.images[i]} alt="" />
</div>`;
}
div_swiper_wrapper.innerHTML = htmlElements;

let div_portfolio_info = document.querySelector(".portfolio-info");
//update div with class project-info values
let htmlElement = `<h3>Project information</h3>
<ul class="project-info">
  <li>
    <strong>Category:</strong> ${projectDetail.category}
  </li>
  <li>
    <strong>Domain:</strong> ${projectDetail.domain}
  </li>
  <li>
    <strong>Project Date:</strong> ${projectDetail.date}
  </li>
  <li>
    <strong>Source Code:</strong
    ><a target="_blank" href=${projectDetail.sourceCode}>${projectDetail.sourceCode}</a>
  </li>
  <li>
    <strong>Live At:</strong>
    <a target="_blank" href=${projectDetail.liveURL}> ${projectDetail.liveURL}</a>
  </li>
</ul>

<p class="project-description"></p>`;

div_portfolio_info.innerHTML = htmlElement;
