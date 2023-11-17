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


//masory automatic creation

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
                <div class="card">
                  <img src="${item.imageSrc}" class="bd-placeholder-img card-img-top" style="width: 100%; height:125px;"></svg>
                  <div class="card-body clearfix">
                    <p class="card-text port_category"><small class="text-body-secondary">&nbsp;${item.category}</small></p>
                    <p class="card-text port_desc">${item.title}</p>
                    <p class="card-text port_desc">${item.description}</p>
                    <p><a class="port_link" href="${item.link}">Click Here &nbsp;</a></p>
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


// bouve sunction for Experience

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

// bouve sunction for Experience

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
            console.log(startDate);
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
              cardDiv.className = "width:100%";
              cardDiv.innerHTML = `
              <ol class="list-group">
              <li class="list-group-item d-flex justify-content-between align-items-start">
                <div class="ms-2 me-auto">
                  <div class="fw-bold">${item.certification}</div>
                  ${item.provider}
                </div>
                <span class="badge bg-primary rounded-pill">${totalMonths}M</span>
              </li>
            </ol>
              `;

              contentContainer.appendChild(cardDiv);
          });
          // Calculate and set the min-height based on the content's height
          const contentHeight = contentContainer.offsetHeight;
          contentContainer.style.minHeight = `${contentHeight}px`;

      })
      .catch((error) => console.error("Error fetching data:", error));
});

// for Qualufications
// for Certifications

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
              cardDiv.className = "width:100%";
              cardDiv.innerHTML = `
              <ol class="list-group">
                <li class="list-group-item d-flex justify-content-between align-items-start">
                  <div class="ms-2 me-auto">
                    <div class="fw-bold">${item.qualifications}</div>
                    ${item.major}<br>${item.university}
                  </div>
                  <span class="badge bg-primary rounded-pill">${item.place}</span>
                </li>
              </ol>
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
              const cardDiv = document.createElement("p");
              cardDiv.className = "mb-2 text-truncate-2";
              cardDiv.innerHTML = `
                <div><span>${item.subtitle}</span></div>
                <div class="skillbar clearfix" data-percent="${item.percent}%">
                  <div class="skillbar-bar" style="width:${item.percent}%;"></div>
                  <div class="skill-bar-percent">${item.years}</div>
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
              const cardDiv = document.createElement("p");
              cardDiv.className = "mb-2 text-truncate-2";
              cardDiv.innerHTML = `
                <div><span>${item.subtitle}</span></div>
                <div class="skillbar clearfix" data-percent="${item.percent}%">
                  <div class="skillbar-bar" style="width:${item.percent}%;"></div>
                  <div class="skill-bar-percent">${item.years}</div>
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
// GRC skills
window.addEventListener("load", function () {
  // Get a reference to the content container
  const contentContainer = document.getElementById("GRCskills-container");
  // Fetch data from "articles.json" using fetch API
  fetch("templates/GRCskills.json")
      .then((response) => response.json())
      .then((jsonData) => {
          // Loop through the JSON data and create HTML elements
          jsonData.forEach((item) => {
              const cardDiv = document.createElement("p");
              cardDiv.className = "mb-2 text-truncate-2";
              cardDiv.innerHTML = `
                <div><span>${item.subtitle}</span></div>
                <div class="skillbar clearfix" data-percent="${item.percent}%">
                  <div class="skillbar-bar" style="width:${item.percent}%; background:${item.bgcolor}%"></div>
                  <div class="skill-bar-percent">${item.years}</div>
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
              const cardDiv = document.createElement("p");
              cardDiv.className = "mb-2 text-truncate-2";
              cardDiv.innerHTML = `
                <div><span>${item.subtitle}</span></div>
                <div class="skillbar clearfix" data-percent="${item.percent}%">
                  <div class="skillbar-bar" style="width:${item.percent}%; background:${item.bgcolor}%"></div>
                  <div class="skill-bar-percent">${item.years}</div>
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
              cardDiv.className = "carousel-item active";
              cardDiv.innerHTML = `
                <svg class="bd-placeholder-img" width="100%" height="250" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="#ff00"/></svg>
                <div class="container">
                  <div class="carousel-caption text-start">
                    <h6 class="cartitle"><strong>${item.person} &nbsp;</strong><span class="carsubtitle">&nbsp;|&nbsp;${item.title}</span></h6>
                    <p class="cartext">${item.recomend} &nbsp;<span class="carSource">Source : <i class="bi bi-linkedin" style="color:#6c63ffff;"></i></span></p>
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

