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
              cardDiv.className = "col-sm-6 col-lg-4 mb-4";

              cardDiv.innerHTML = `
                  <div class="card brutExpWrapper">
                    <div class="p-3">
                      <div class="p-2">
                          <img src="${item.imageSrc}" alt="${item.title}" width="100%" height="100%" class="complogo">
                          <h3 class="title p-2">${item.title}</h3>
                      </div>
                      <div>
                          <p class="lead my-2 tenure">category:  ${item.category}</p>
                          <p class="body-section">${item.description}</p>
                          <p  class="brutbutton" style="text-align: center;"><a href="${item.link}" target="_blank" class="buttona">Learn More</a></p>
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
                  <div class="card mb-3 brutContWrapper" style="width: 56rem; background-color: #FFFFFF;">
                    <div class="card-header brutresumeWrapper"><strong>${item.year}</strong></div>
                      <div class="card-body brutresumeWrapper">
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
