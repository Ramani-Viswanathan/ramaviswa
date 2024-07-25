document.addEventListener("DOMContentLoaded", function() {
    const textElement = document.getElementById("quotes");
    let currentIndex = 0;
  
    // Fetch JSON file with text data
    fetch("templates/Data.json")
      .then(response => response.json())
      .then(data => {
        const textArray = data.texts;
  
        function showNextText() {
          textElement.style.display = "none";
          textElement.textContent = textArray[currentIndex];
          currentIndex = (currentIndex + 1) % textArray.length;
          textElement.style.display = "block";
          scrollElement.style.opacity = 1;
        }
  
        // Show the first text initially
        textElement.textContent = textArray[currentIndex];
        textElement.style.display = "block";
  
        // Show text in sequence every 5 seconds
        setInterval(showNextText, 5000);
      })
      .catch(error => console.error("Error fetching JSON:", error));
  });
  
  // Add this to your 'scroll-to-top.js' file
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  const scrollButton = document.getElementById('scroll-to-top-button');

  // Show the button when the user scrolls down 20px from the top of the document
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      scrollButton.style.display = 'block';
  } else {
      scrollButton.style.display = 'none';
  }
}

function scrollToTop() {
  // Scroll to the top of the document when the button is clicked
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
}

//Portfolio Details

window.addEventListener("load", function () {
  // Get a reference to the content container
  const contentContainer = document.getElementById("content-container");

  // Fetch data from "articles.json" using fetch API
  fetch("templates/articles.json")
      .then((response) => response.json())
      .then((jsonData) => {
          // Loop through the JSON data and create HTML elements
          jsonData.forEach((item) => {
              const cardDiv = document.createElement("div");
              cardDiv.className = "col-sm-6 col-md-4 col-lg-3";
              cardDiv.style.position = "static";
              cardDiv.style.padding = "0.199rem";
              cardDiv.style.top = "0px";
              cardDiv.innerHTML = `
                <div class="card portal">
                  <img src="${item.imageSrc}" class="bd-placeholder-img card-img-top img-fluid" alt="Created using Microsoft Bing Image creator"></svg>
                  <div class="card-body clearfix portal">
                    <p class="card-text portal cat"><small class="text-body-secondary">&nbsp;${item.category}</small></p>
                    <p class="card-text portal">${item.title}</p>
                    <p class="card-text portal bdy">${item.description}</p>
                    <p class="portal lik">${item.link}</p>
                  </div>
                </div>
              `;

              contentContainer.appendChild(cardDiv);
          });
          // Calculate and set the min-height based on the content's height
          const contentHeight = contentContainer.offsetHeight;
          contentContainer.style.minHeight = `${contentHeight}px`;

      })
      .catch((error) => console.error("Error fetching data:", error));
});

// adjust the height of the container

document.addEventListener("DOMContentLoaded", function () {
  const contentContainer = document.getElementById("content-container");

  // Function to set the container's height based on the tallest item
  function adjustContainerHeight() {
      const items = contentContainer.querySelectorAll(".card");
      let maxHeight = 0;

      items.forEach((item) => {
          const itemHeight = item.clientHeight;
          if (itemHeight > maxHeight) {
              maxHeight = itemHeight;
          }
      });

      contentContainer.style.minHeight = maxHeight + "px";
  }

  // Call the adjustContainerHeight function initially and whenever content changes
  adjustContainerHeight();
});

// To display expereince details

window.addEventListener("load", function () {
  // Get a reference to the content container
  const contentContainer = document.getElementById("expereince-container");

  // Fetch data from "articles.json" using fetch API
  fetch("templates/expereince.json")
      .then((response) => response.json())
      .then((jsonData) => {
          // Loop through the JSON data and create HTML elements
          jsonData.forEach((item) => {
              const cardDiv = document.createElement("li");
              cardDiv.className = "width:50%";

              cardDiv.innerHTML = `
                  <div class="card mb-3" style="width: 56rem; background-color: #FFFFFF;">
                    <div class="card-header"><strong>${item.year}</strong></div>
                      <div class="card-body">
                          <p class="card-text"><strong>${item.title}</strong></p>
                          <p class="card-text">${item.subtitle}></p>
                          <p>&nbsp;</P>
                          <p class="card-text"><medium> ${item.description}</medium></p>
                          <p>&nbsp;</P>
                          <p class="card-text"><medium> <b>Skills&nbsp;:&nbsp;</b>${item.technologies}</medium></p>
                      </div>
                    </div>
              `;

              contentContainer.appendChild(cardDiv);
          });
          // Calculate and set the min-height based on the content's height
          const contentHeight = contentContainer.offsetHeight;
          contentContainer.style.minHeight = `${contentHeight}px`;

      })
      .catch((error) => console.error("Error fetching data:", error));
});

// for Certifications

window.addEventListener("load", function () {
  // Get a reference to the content container
  const contentContainer = document.getElementById("certification-container");

  // Fetch data from "articles.json" using fetch API
  fetch("templates/certification.json")
      .then((response) => response.json())
      .then((jsonData) => {
          // Loop through the JSON data and create HTML elements

          jsonData.forEach((item) => {

            const startDate = new Date(`${item.received_date}`); // Replace with your actual start date
            const currentDate = new Date();
  
            const startYear = startDate.getFullYear();
            const startMonth = startDate.getMonth();
            const currentYear = currentDate.getFullYear();
            const currentMonth = currentDate.getMonth();
  
            let yearDiff = currentYear - startYear;
            let monthDiff = currentMonth - startMonth;
  
            if (monthDiff < 0) {
              monthDiff += 12;
              yearDiff--;
            }
  
            const totalMonths = (yearDiff * 12) + monthDiff;

              const cardDiv = document.createElement("div");
              cardDiv.className ="col d-flex align-items-start";
              cardDiv.innerHTML = `
                <div>
                <h4 class="fw-bold mb-0">${item.category}</h4>
                <p>${item.certification} , ${item.provider} <span class="badge bg-primary rounded-pill">${totalMonths}M</span></p>
                </div>
              `;

              contentContainer.appendChild(cardDiv);
          });
          // Calculate and set the min-height based on the content's height
          const contentHeight = contentContainer.offsetHeight;
          contentContainer.style.minHeight = `${contentHeight}px`;

      })
      .catch((error) => console.error("Error fetching data:", error));
});


// bouve sunction for Experience

window.addEventListener("load", function () {
  // Get a reference to the content container
  const contentContainer = document.getElementById("qualification-container");

  // Fetch data from "articles.json" using fetch API
  fetch("templates/Qualifications.json")
      .then((response) => response.json())
      .then((jsonData) => {
          // Loop through the JSON data and create HTML elements

          jsonData.forEach((item) => {

              const cardDiv = document.createElement("div");
              cardDiv.className ="row align-items-start border-bottom colbody";
              cardDiv.innerHTML = `
              <div class="col-md-2">${item.qualifications}</div>
              <div class="col-md-4">${item.university}</div>
              <div class="col-md-4">${item.major}</div>
              <div class="col-md-2">${item.place}</div>
              `;

              contentContainer.appendChild(cardDiv);
          });
          // Calculate and set the min-height based on the content's height
          const contentHeight = contentContainer.offsetHeight;
          contentContainer.style.minHeight = `${contentHeight}px`;

      })
      .catch((error) => console.error("Error fetching data:", error));
});

// Begin Skills section //

document.addEventListener('DOMContentLoaded', function() {
  const skillbars = document.querySelectorAll('.skillbar');

  skillbars.forEach(skillbar => {
    const bar = skillbar.querySelector('.skillbar-bar');
    const percent = skillbar.getAttribute('data-percent');

    bar.animate({
      width: percent + '%',
    }, 3000);
  });
});

// hard skills
window.addEventListener("load", function () {
  // Get a reference to the content container
  const contentContainer = document.getElementById("hardskills-container");
  // Fetch data from "articles.json" using fetch API
  fetch("templates/hardskills.json")
      .then((response) => response.json())
      .then((jsonData) => {
          // Loop through the JSON data and create HTML elements
          jsonData.forEach((item) => {
            // Calculate Total Experience
            const TotalExpStart = new Date(`${item.TotalExp}`);
            const currentdate = new Date();
            const ExpStart = new Date(`${item.ExpStart}`);
            const ExpEnd = new Date(`${item.ExpEnd}`);

            if (ExpEnd == '2023-11-19T23:50:21.000Z') {
              const ExpEnd = new Date();
            } else {
              const ExpEnd = new Date(`${item.ExpEnd}`);
            }
           const totalexpyears = calculateExperience(TotalExpStart, currentdate);  
            // Calculate relevant experience
           const totalcurrentexp = calculateExperience(ExpStart, ExpEnd);
          
            // Calculate the percentage of total experience
           const totalExperience = totalexpyears.totalYearsMonths; // Assuming total experience is 100%
           const percentageExperience = (totalcurrentexp.totalYearsMonths / totalExperience) * 100;
         // Create and append the card div
            const cardDiv = document.createElement("p");
            cardDiv.className = "mb-2 text-truncate-2";
            cardDiv.innerHTML = `
                <div><span>${item.subtitle}</span></div>
                <div class="skillbar clearfix" data-percent=${percentageExperience}"%">
                  <div class="skillbar-bar" style="width:${percentageExperience}%;"></div>
                  <div class="skill-bar-percent">${totalcurrentexp.outputExperience}</div>
                </div>
              `;
              contentContainer.appendChild(cardDiv);
          });
          // Calculate and set the min-height based on the content's height
          const contentHeight = contentContainer.offsetHeight;
          contentContainer.style.minHeight = `${contentHeight}px`;
      })
      .catch((error) => console.error("Error fetching data:", error));
});
// Soft skills
window.addEventListener("load", function () {
  // Get a reference to the content container
  const contentContainer = document.getElementById("softskills-container");
  // Fetch data from "articles.json" using fetch API
  fetch("templates/softskills.json")
      .then((response) => response.json())
      .then((jsonData) => {
          // Loop through the JSON data and create HTML elements
          jsonData.forEach((item) => {
            // Calculate Total Experience
            const TotalExpStart = new Date(`${item.TotalExp}`);
            const currentdate = new Date();
            const ExpStart = new Date(`${item.ExpStart}`);
            const ExpEnd = new Date();
           const totalexpyears = calculateExperience(TotalExpStart, currentdate);  
            // Calculate relevant experience
           const totalcurrentexp = calculateExperience(ExpStart, ExpEnd);          
            // Calculate the percentage of total experience
           const totalExperience = totalexpyears.totalYearsMonths; // Assuming total experience is 100%
           const percentageExperience = (totalcurrentexp.totalYearsMonths / totalExperience) * 100;
         // Create and append the card div
            const cardDiv = document.createElement("p");
            cardDiv.className = "mb-2 text-truncate-2";
            cardDiv.innerHTML = `
                <div><span>${item.subtitle}</span></div>
                <div class="skillbar clearfix" data-percent=${percentageExperience}"%">
                  <div class="skillbar-bar" style="width:${percentageExperience}%;"></div>
                  <div class="skill-bar-percent">${totalcurrentexp.outputExperience}</div>
                </div>
              `;
              contentContainer.appendChild(cardDiv);
          });
          // Calculate and set the min-height based on the content's height
          const contentHeight = contentContainer.offsetHeight;
          contentContainer.style.minHeight = `${contentHeight}px`;
      })
      .catch((error) => console.error("Error fetching data:", error));
});
// GRC skills . 
window.addEventListener("load", function () {
  // Get a reference to the content container
  const contentContainer = document.getElementById("GRCskills-container");
  // Fetch data from "articles.json" using fetch API
  fetch("templates/GRCskills.json")
      .then((response) => response.json())
      .then((jsonData) => {
          // Loop through the JSON data and create HTML elements
          jsonData.forEach((item) => {
            // Calculate Total Experience
            const TotalExpStart = new Date(`${item.TotalExp}`);
            const currentdate = new Date();
            const ExpStart = new Date(`${item.ExpStart}`);
            const ExpEnd = new Date();
           const totalexpyears = calculateExperience(TotalExpStart, currentdate);  
            // Calculate relevant experience
           const totalcurrentexp = calculateExperience(ExpStart, ExpEnd);          
            // Calculate the percentage of total experience
           const totalExperience = totalexpyears.totalYearsMonths; // Assuming total experience is 100%
           const percentageExperience = (totalcurrentexp.totalYearsMonths / totalExperience) * 100;
         // Create and append the card div
            const cardDiv = document.createElement("p");
            cardDiv.className = "mb-2 text-truncate-2";
            cardDiv.innerHTML = `
                <div><span>${item.subtitle}</span></div>
                <div class="skillbar clearfix" data-percent=${percentageExperience}"%">
                  <div class="skillbar-bar" style="width:${percentageExperience}%; background:${item.bgcolor}%"></div>
                  <div class="skill-bar-percent">${totalcurrentexp.outputExperience}</div>
                </div>
              `;
              contentContainer.appendChild(cardDiv);
          });
          // Calculate and set the min-height based on the content's height
          const contentHeight = contentContainer.offsetHeight;
          contentContainer.style.minHeight = `${contentHeight}px`;
      })
      .catch((error) => console.error("Error fetching data:", error));
});
// Tech skills
window.addEventListener("load", function () {
  // Get a reference to the content container
  const contentContainer = document.getElementById("techskills-container");
  // Fetch data from "articles.json" using fetch API
  fetch("templates/techskills.json")
      .then((response) => response.json())
      .then((jsonData) => {
          // Loop through the JSON data and create HTML elements
          jsonData.forEach((item) => {
            // Calculate Total Experience
            const TotalExpStart = new Date(`${item.TotalExp}`);
            const currentdate = new Date();
            const ExpStart = new Date(`${item.ExpStart}`);
            const ExpEnd = new Date();
           const totalexpyears = calculateExperience(TotalExpStart, currentdate);  
            // Calculate relevant experience
           const totalcurrentexp = calculateExperience(ExpStart, ExpEnd);          
            // Calculate the percentage of total experience
           const totalExperience = totalexpyears.totalYearsMonths; // Assuming total experience is 100%
           const percentageExperience = (totalcurrentexp.totalYearsMonths / totalExperience) * 100;
         // Create and append the card div
            const cardDiv = document.createElement("p");
            cardDiv.className = "mb-2 text-truncate-2";
            cardDiv.innerHTML = `
                <div><span>${item.subtitle}</span></div>
                <div class="skillbar clearfix" data-percent=${percentageExperience}"%">
                  <div class="skillbar-bar" style="width:${percentageExperience}%; background:${item.bgcolor}%"></div>
                  <div class="skill-bar-percent">${totalcurrentexp.outputExperience}</div>
                </div>
              `;
              contentContainer.appendChild(cardDiv);
          });
          // Calculate and set the min-height based on the content's height
          const contentHeight = contentContainer.offsetHeight;
          contentContainer.style.minHeight = `${contentHeight}px`;
      })
      .catch((error) => console.error("Error fetching data:", error));
});
// Tools
// Tech skills
window.addEventListener("load", function () {
  // Get a reference to the content container
  const contentContainer = document.getElementById("tools-container");
  // Fetch data from "articles.json" using fetch API
  fetch("templates/tools.json")
      .then((response) => response.json())
      .then((jsonData) => {
          // Loop through the JSON data and create HTML elements
          jsonData.forEach((item) => {
            // Calculate Total Experience
            const TotalExpStart = new Date(`${item.TotalExp}`);
            const currentdate = new Date();
            const ExpStart = new Date(`${item.ExpStart}`);
            const ExpEnd = new Date();
           const totalexpyears = calculateExperience(TotalExpStart, currentdate);  
            // Calculate relevant experience
           const totalcurrentexp = calculateExperience(ExpStart, ExpEnd);          
            // Calculate the percentage of total experience
           const totalExperience = totalexpyears.totalYearsMonths; // Assuming total experience is 100%
           const percentageExperience = (totalcurrentexp.totalYearsMonths / totalExperience) * 100;

         // Create and append the card div
            const cardDiv = document.createElement("p");
            cardDiv.className = "mb-2 text-truncate-2";
            cardDiv.innerHTML = `
                <div><span>${item.subtitle}</span></div>
                <div class="skillbar clearfix" data-percent=${percentageExperience}"%">
                  <div class="skillbar-bar" style="width:${percentageExperience}%; background:${item.bgcolor}%"></div>
                  <div class="skill-bar-percent">${totalcurrentexp.outputExperience}</div>
                  <div class="skill-bar-tools"></div>                  
                </div>
              `;
              contentContainer.appendChild(cardDiv);
          });
          // Calculate and set the min-height based on the content's height
          const contentHeight = contentContainer.offsetHeight;
          contentContainer.style.minHeight = `${contentHeight}px`;
      })
      .catch((error) => console.error("Error fetching data:", error));
});

//Skills Bar
window.addEventListener("load", function () {
  // Get a reference to the content container
  //const contentContainer = document.getElementById("skillsbar-container");

  // Fetch data from "articles.json" using fetch API
  let currentPage = 1; 
  const rowsPerPage = 5;
  fetch("templates/skillsbar.json")
      .then((response) => response.json())
      .then((jsonData) => {
        //pagination logic
            // Get number of pages
            const numPages = Math.ceil(jsonData.length / rowsPerPage);

            // Display page 1 on load
            window.addEventListener("scroll",() => {
              currentPage = 1;
              displayPage(jsonData, currentPage, rowsPerPage); 
            });
           

            // Pagination
            const pagination = document.getElementById("pagination");
            
            for(let i = 1; i <= numPages; i++){
              let li = document.createElement("li");
              li.classList.add("page-item");
        
              let a = document.createElement("a");
              a.classList.add("page-link"); 
              a.innerText = i;
        
              a.addEventListener("click", () => {
                currentPage = i;
                displayPage(jsonData, currentPage, rowsPerPage);  
              });
        
              li.appendChild(a);
              pagination.appendChild(li);
            }
          // Loop through the JSON data and create HTML elements
          const contentContainer = document.getElementById("progressbars");
          function displayPage(items, page, rowsPerPage) {
            const start = (page - 1) * rowsPerPage;
            const end = page * rowsPerPage;
            contentContainer.innerHTML = '';
            for(let i = 0; i < items.length; i++){
              if(i >= start && i < end){

                const cardDiv = document.createElement("div");
                cardDiv.innerHTML = `
                  <span>&nbsp;&nbsp;${items[i].SkillName}</span>
                    <div class="progress" role="progressbar" aria-label="Example with label" aria-valuenow="${items[i].percentExperience}" aria-valuemin="0" aria-valuemax="100">
                      <div class="progress-bar" style="width:${items[i].percentExperience}%"></div>
                    </div>
                    <br>
                `;
                contentContainer.appendChild(cardDiv);
              }
            }
          }
          // Calculate and set the min-height based on the content's height
          const contentHeight = contentContainer.offsetHeight;
          contentContainer.style.minHeight = `${contentHeight}px`;

      })
      .catch((error) => console.error("Error fetching data:", error));
});
// end skills section //

//begin expertise section

//Begin Blog
window.addEventListener("load", function () {
  // Get a reference to the content container
  const contentContainer = document.getElementById("blog-container");
  // Fetch data from "articles.json" using fetch API
  fetch("templates/blog.json")
      .then((response) => response.json())
      .then((jsonData) => {
          // Loop through the JSON data and create HTML elements
          jsonData.forEach((item) => {
              const cardDiv = document.createElement("div");
              cardDiv.className = "width:100%";
              cardDiv.innerHTML = `
              <ol class="list-group">
                <li class="list-group-item d-flex justify-content-between align-items-start">
                  <div class="ms-2 me-auto">
                    <div class="fw-bold">${item.category}</div>
                    ${item.link}
                  </div>
                  <span class="badge bg-primary rounded-pill">${item.Count}</span>
                </li>
              </ol>
              <hr>
              `;
              contentContainer.appendChild(cardDiv);
          });
          // Calculate and set the min-height based on the content's height
          const contentHeight = contentContainer.offsetHeight;
          contentContainer.style.minHeight = `${contentHeight}px`;
      })
      .catch((error) => console.error("Error fetching data:", error));
});

//Begin YouTube
window.addEventListener("load", function () {
  // Get a reference to the content container
  const contentContainer = document.getElementById("uTube-container");
  // Fetch data from "articles.json" using fetch API
  fetch("templates/utube.json")
      .then((response) => response.json())
      .then((jsonData) => {
          // Loop through the JSON data and create HTML elements
          jsonData.forEach((item) => {
              const cardDiv = document.createElement("div");
              cardDiv.className = "width:100%";
              cardDiv.innerHTML = `
              <ol class="list-group">
                <li class="list-group-item d-flex justify-content-between align-items-start">
                  <div class="ms-2 me-auto">
                    <div class="fw-bold">${item.category}</div>
                    ${item.link}
                  </div>
                  <span class="badge bg-primary rounded-pill">${item.Count}</span>
                </li>
              </ol>
              <hr>
              `;
              contentContainer.appendChild(cardDiv);
          });
          // Calculate and set the min-height based on the content's height
          const contentHeight = contentContainer.offsetHeight;
          contentContainer.style.minHeight = `${contentHeight}px`;
      })
      .catch((error) => console.error("Error fetching data:", error));
});

//Begin publications
window.addEventListener("load", function () {
  // Get a reference to the content container
  const contentContainer = document.getElementById("pub-container");
  // Fetch data from "articles.json" using fetch API
  fetch("templates/pub.json")
      .then((response) => response.json())
      .then((jsonData) => {
          // Loop through the JSON data and create HTML elements
          jsonData.forEach((item) => {
              const cardDiv = document.createElement("div");
              cardDiv.className = "width:100%";
              cardDiv.innerHTML = `
              <ol class="list-group">
                <li class="list-group-item d-flex justify-content-between align-items-start">
                  <div class="ms-2 me-auto">
                    <div class="fw-bold">${item.category}</div>
                    ${item.link}
                  </div>
                  <span class="badge bg-primary rounded-pill">${item.Count}</span>
                </li>
              </ol>
              <hr>
              `;
              contentContainer.appendChild(cardDiv);
          });
          // Calculate and set the min-height based on the content's height
          const contentHeight = contentContainer.offsetHeight;
          contentContainer.style.minHeight = `${contentHeight}px`;
      })
      .catch((error) => console.error("Error fetching data:", error));
});

//Personal Projects
window.addEventListener("load", function () {
  // Get a reference to the content container
  const contentContainer = document.getElementById("pprojects-container");
  // Fetch data from "articles.json" using fetch API
  fetch("templates/pprojects.json")
      .then((response) => response.json())
      .then((jsonData) => {
          // Loop through the JSON data and create HTML elements
          jsonData.forEach((item) => {
              const cardDiv = document.createElement("div");
              cardDiv.className = "width:100%";
              cardDiv.innerHTML = `
              <ol class="list-group">
                <li class="list-group-item d-flex justify-content-between align-items-start">
                  <div class="ms-2 me-auto">
                    <div class="fw-bold">${item.category}</div>
                    ${item.link}
                  </div>
                  <span class="badge bg-primary rounded-pill">${item.Count}</span>
                </li>
              </ol>
              <hr>
              `;
              contentContainer.appendChild(cardDiv);
          });
          // Calculate and set the min-height based on the content's height
          const contentHeight = contentContainer.offsetHeight;
          contentContainer.style.minHeight = `${contentHeight}px`;
      })
      .catch((error) => console.error("Error fetching data:", error));
});

//end expertise section

// for Recommendation

window.addEventListener("load", function () {
  // Get a reference to the content container
  const contentContainer = document.getElementById("recommendation-container");

  // Fetch data from "articles.json" using fetch API
  fetch("templates/Recommend.json")
      .then((response) => response.json())
      .then((jsonData) => {
          // Loop through the JSON data and create HTML elements

          jsonData.forEach((item) => {

              const cardDiv = document.createElement("div");
              cardDiv.innerHTML = `
              <div class="carousel-item">
                <div>
                  <h6 class="cartitle"><strong>${item.person} &nbsp;</strong><span class="carsubtitle">&nbsp;|&nbsp;${item.title}</span></h6>
                  <p class="cartext">${item.recomend} <br>&nbsp;<span class="carSource">Source : <i class="bi bi-linkedin" style="color:#6c63ffff;"></i></span></p>
                </div>
              </div>
              `;
              contentContainer.appendChild(cardDiv);
          });
          // Calculate and set the min-height based on the content's height
          const contentHeight = contentContainer.offsetHeight;
          contentContainer.style.minHeight = `${contentHeight}px`;

      })
      .catch((error) => console.error("Error fetching data:", error));
});

// Section for Projects

window.addEventListener("load", function () {
  // Get a reference to the content container
  const contentContainer = document.getElementById("Projects-container");

  // Fetch data from "articles.json" using fetch API
  fetch("templates/projects.json")
      .then((response) => response.json())
      .then((jsonData) => {
          // Loop through the JSON data and create HTML elements
          jsonData.forEach((item) => {
              const cardDiv = document.createElement("li");
              cardDiv.className = "width:50%";

              cardDiv.innerHTML = `
                  <div class="card mb-3 brutContWrapper" style="width: 56rem; background-color: #FFFFFF;">
                    <div class="card-header  brutresumeWrapper" style="background-color: #90EE90;"><strong>Project Name &nbsp;:</strong>&nbsp; ${item.title}</div>
                      <div class="card-body  brutresumeWrapper">
                          <p class="card-text"><strong>Category&nbsp;:&nbsp;</strong>${item.category}</p>
                          <p class="card-text"><strong>Duration&nbsp;:&nbsp;</strong>${item.duration}</p>
                          <p class="card-text"><strong>Overview&nbsp;:&nbsp;</strong><medium> ${item.overview}</medium></p>
                          <p class="card-text"><medium> ${item.drivers}</medium></p>
                          <p>&nbsp;</P>
                            <ul>
                              <medium> ${item.accomplishment}</medium>
                            </ul>
                          <p>&nbsp;</P>
                          <div>
                            <ul>
                              <p class="card-text"><strong>Challenges & How I overcome &nbsp;:&nbsp;<br></strong><medium> ${item.challenges}</medium></p>
                            </ul>
                          </div>
                          <p>&nbsp;</P>
                          <p class="card-text"><medium> <b>Skills used in this projects&nbsp;:&nbsp;<br></b>${item.skills}</medium></p>
                          <p>&nbsp;</P>
                          <p class="card-text"><medium> <b>Certifications&nbsp;:&nbsp;<br></b>${item.certifications}</medium></p>
                          <p>&nbsp;</P>
                          <p class="card-text"><medium> <b>Tech Stack&nbsp;:&nbsp;<br></b>${item.techstack}</medium></p>
                      </div>
                    </div>
                  </div>
              `;

              contentContainer.appendChild(cardDiv);
          });
          // Calculate and set the min-height based on the content's height
          const contentHeight = contentContainer.offsetHeight;
          contentContainer.style.minHeight = `${contentHeight}px`;

      })
      .catch((error) => console.error("Error fetching data:", error));
});

// Get the element to loop through
const hero = document.querySelector('figcaption');

// Create an array of the different roles
const roles = ['TPM', 'PGM', 'Mentor'];

// Set an interval to loop through the roles
setInterval(() => {
  // Get the current role
  const role = roles.shift();

  // Add the role to the hero element
  hero.textContent = role;

  // Add the role back to the end of the array
  roles.push(role);
}, 2000); // Change the interval to suit your needs

// Add a timeout to disappear the hero element after a few seconds
setTimeout(() => {
  hero.style.display = 'none';
}, 10000); // Change the timeout to suit your needs

// Mansory Script only used for Portfolio html page

// init Masonry
var grid = document.querySelector('.grid');

var msnry = new Masonry( grid, {
  itemSelector: '.grid-item',
  columnWidth: '.grid-sizer',
  percentPosition: true
});

imagesLoaded( grid ).on( 'progress', function() {
  // layout Masonry after each image loads
  msnry.layout();
});


// Function used to Calculate Month & years based on given date
function calculateExperience(startDate,enddate) {
  // Get the current date
 // const currentDate = new Date();
  // Calculate the difference in years
  const yearsDiff = enddate.getFullYear() - startDate.getFullYear();
  // Calculate the difference in months
  let monthsDiff = enddate.getMonth() - startDate.getMonth();

  // Adjust monthsDiff if it's negative
  if (monthsDiff < 0) {
    monthsDiff += 12;
    yearsDiff--;
  }
  // Calculate the total months and years
  const totalYearsMonths = yearsDiff * 12 + monthsDiff;

  // Format the output as "M&Y"
  const outputExperience = `${yearsDiff}Y${monthsDiff}M`;

  return{
    outputExperience,
    totalYearsMonths
  };
}


const timelineContainer = document.querySelector('.timeline-container');

timelineContainer.addEventListener('wheel', (evt) => {
  evt.preventDefault();
  timelineContainer.scrollLeft += evt.deltaY;
});

