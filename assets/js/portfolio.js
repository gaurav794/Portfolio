import { projectDetailsObj } from "./project-details-obj.js";

let projectDetails = projectDetailsObj;
let default_url = "https://d33wubrfki0l68.cloudfront.net/1c9c8c01b0e5efecef2bfa5c1d72e1fbf57aaf38/e8af8/v3/img/blog/the404.png";

//Access div with class portfolio container 
//<div class="row portfolio-container">
let portfolio_container = document.querySelector(".portfolio-container");

for(let i = 0;i<projectDetails.length;i++){
//Create div element with the required classes
// <div class="col-lg-4 col-md-6 portfolio-item filter-app">
let div_portfolio_item = document.createElement("div");

div_portfolio_item.classList.add("col-lg-4","col-md-6","portfolio-item",projectDetails[i].category);
//Add div_portfolio_item to portfolio_container
portfolio_container.appendChild(div_portfolio_item);

    //Create inner child div PW
    //<div class="portfolio-wrap">
    let div_portfolio_wrap = document.createElement("div");
    div_portfolio_wrap.classList.add("portfolio-wrap");
    //Add div_portfolio_wrap to div_portfolio_item
    div_portfolio_item.appendChild(div_portfolio_wrap);
        
        //Create PW child img tag
        //<img src="assets/img/portfolio/telemedicine-2.png" class="img-fluid" alt="">
        let img = document.createElement("img");
        img.setAttribute("src", (projectDetails[i]?.images[0] || default_url));
        img.classList.add("img-fluid");
        img.setAttribute("alt","");
        img.setAttribute("loading","lazy");
        //Add img tag to div_portfolio_wrap
        div_portfolio_wrap.appendChild(img);

        //Create PW child div tag with required classes
        //<div class="portfolio-info"> PI
        let div_portfolio_info = document.createElement("div");
        div_portfolio_info.classList.add("portfolio-info");
         //Add div_portfolio_info to div_portfolio_wrap
        div_portfolio_wrap.appendChild(div_portfolio_info);

            //Create PI child h4 tag
            //<h4>App 1</h4>
            let h4 = document.createElement("h4");
            h4.innerHTML=projectDetails[i].title;
           
            //Create PI child div tag with required classes
            //<div class="portfolio-links"> PL
            let div_portfolio_links = document.createElement("div");
            div_portfolio_links.classList.add("portfolio-links");

            //Add h4 tag to div_portfolio_info
            div_portfolio_info.appendChild(h4);
            //Add div_portfolio_links to div_portfolio_info
            div_portfolio_info.appendChild(div_portfolio_links);        
            
                //Create PL a tag 
                /*<a href="portfolio-details.html?1" data-gallery="portfolioDetailsGallery" data-glightbox="type: external" class="portfolio-details-lightbox" title="Portfolio Details">
                ----<i class="bx bx-link"></i>---
                </a>*/
                let a = document.createElement("a");
                a.classList.add("portfolio-details-lightbox");
                a.dataset.gallery= "portfolioDetailsGallery" ;
                a.dataset.glightbox = "type: external";
                let url = "portfolio-details.html?"+ i;
                a.setAttribute("href",url);
                a.setAttribute("title",projectDetails[i].title+ " Details");
                
                

                    //Create child i tag with required classes
                    let i_tag = document.createElement("i");
                    i_tag.classList.add("bx","bx-link");
                    //add i to a
                    a.appendChild(i_tag);
                
                //add a to div_portfolio_links
                div_portfolio_links.appendChild(a);
                
}

