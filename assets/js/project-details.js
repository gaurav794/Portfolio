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
<div class="project-info">
<div class="list">
<ul>
  <li>
    <strong>Category:</strong>
  </li>
  <li>
    <strong>Domain:</strong>
  </li>
  <li>
    <strong>Project Date:</strong>
  </li>
  <li>
    <strong>Source Code:</strong
    >
  </li>
  <li>
    <strong>Live At:</strong>
  </li>
  </ul>
</div>
<div class="list">
<ul>
    <li>${projectDetail.category}</li>
    <li>${projectDetail.domain}</li>
    <li>${projectDetail.date}</li>
    <li>
    <a target="_blank" href=${projectDetail?.sourceCode || "#"}>${
  projectDetail?.sourceCode || "N/A"
}
    </a>
    </li>
    <li>
      <a target="_blank" href=${projectDetail?.liveURL || "#"}> ${
  projectDetail?.liveURL || "N/A"
}</a>
    </li>
</ul>
</div> `;

let p = document.createElement("p");
p.classList.add("project-description");
p.innerText = projectDetail.description;

div_portfolio_info.innerHTML = htmlElement;
div_portfolio_info.append(p);
