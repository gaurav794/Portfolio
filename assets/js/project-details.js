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

//create swiper slides dom until no. of images in the obj
//Skipping 1st index as it contains thumbnail
for (let i = 1; i < projectDetail.images.length; i++) {
  //   create div tag with class swiper-slide
  let div_swiper_slide = document.createElement("div");
  div_swiper_slide.classList.add("swiper-slide");
  //   //add div_swiper_slide element to swiper-wrapper
  div_swiper_wrapper.append(div_swiper_slide);
  //create img tag and add to class swiper-slide
  let img = document.createElement("img");
  img.setAttribute("src", projectDetail?.images[i] || default_url);
  img.setAttribute("alt", "");
  div_swiper_slide.appendChild(img);
}

//update div with class project-info values
document.querySelector(".category").innerHTML = projectDetail.category;
document.querySelector(".domain").innerHTML = projectDetail.domain;
document.querySelector(".date").innerHTML = projectDetail.date;
let a_code = document.querySelector(".source-code");
a_code.setAttribute("href", projectDetail.sourceCode);
a_code.innerHTML = projectDetail.sourceCode;
let a_liveURL = document.querySelector(".live-url");
a_liveURL.setAttribute("href", projectDetail.liveURL);
a_liveURL.innerHTML = projectDetail.liveURL;

document.querySelector(".project-description").innerHTML =
  projectDetail.description;
