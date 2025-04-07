"use strict";

window.addEventListener("load", () => {
  const loadingScreen = document.getElementById("loading-screen");
  loadingScreen.style.display = "none";
});



const toggleDark = document.getElementById("toggle-dark");


function updateIconColor(iconId, isDarkMode) {
  const icon = document.getElementById(iconId);
  if (icon) {
    icon.querySelector("path").setAttribute("fill", isDarkMode ? "white" : "black");
  }
}


toggleDark.addEventListener("click", () => {

  document.body.classList.toggle("dark-mode");

  const isDarkMode = document.body.classList.contains("dark-mode");

  updateIconColor("linkedin-icon", isDarkMode);
  updateIconColor("github-icon", isDarkMode);
  updateIconColor("arrow-icon", isDarkMode);
  updateIconColor("arrow-icon-2", isDarkMode);
  updateIconColor("arrow-icon-3", isDarkMode);
  updateIconColor("education-icon", isDarkMode);
  updateIconColor("email-icon", isDarkMode);
  updateIconColor("linkedin-icon-2", isDarkMode);
});



function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

document.addEventListener("DOMContentLoaded", () => {
  fetch("https://portfolio-backend-hbbg.onrender.com/")
    .then(response => response.json())
    .then(data => {
      const infos = data.infos[0];
      if (infos && infos.jobTitles && infos.jobTitles.length > 0) {
        typedText(infos.jobTitles);
      }
    })
    .catch(error => console.error("Error fetching infos:", error));
});


function typedText(titles) {
  new Typed("#typed", {
    strings: titles,
    typeSpeed: 100,
    backSpeed: 50,
    loop: true,
  });
}


function setCurrentYear() {
  document.getElementById("year").textContent = new Date().getFullYear();
}

setCurrentYear();


document.addEventListener("DOMContentLoaded", () => {
  fetch("https://portfolio-backend-hbbg.onrender.com/")
    .then(response => response.json())
    .then(data => {

      const infos = data.infos[0];

      const btn_cv_info = document.getElementById("btn-cv-info");

      const socialsContainer = document.getElementById("socials-container");

      const contactInfo = document.getElementById("contact-info");

      if (!infos || !btn_cv_info || !socialsContainer || !contactInfo) return;

      btn_cv_info.innerHTML = `<button
            class="btn btn-color-1"
            onclick="window.open('${infos.cv}')"
          >
            Download CV
          </button>
          <button class="btn btn-color-2" onclick="location.href='./#contact'">
            Contact Info
          </button>
          `;
      
      socialsContainer.innerHTML = `
        <div class="icon-container" id="linkedin-icon-container" 
            onclick="location.href='${infos.linkedIn}'">
            <svg class="icon" id="linkedin-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M22.23 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.21 0 22.23 0zM7.12 20.45H3.56V9h3.56v11.45zM5.34 7.53c-1.14 0-2.06-.92-2.06-2.06s.92-2.06 2.06-2.06 2.06.92 2.06 2.06-.92 2.06-2.06 2.06zm15.11 12.92h-3.56v-5.57c0-1.33-.02-3.05-1.86-3.05-1.86 0-2.14 1.45-2.14 2.95v5.67h-3.56V9h3.42v1.57h.05c.48-.91 1.64-1.86 3.37-1.86 3.61 0 4.28 2.37 4.28 5.45v6.29z"/>
            </svg>
          </div>
          <div class="icon-container" id="github-icon-container" 
            onclick="location.href='${infos.github}'">
            <svg class="icon" id="github-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577v-2.165c-3.338.725-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.744.083-.729.083-.729 1.205.085 1.839 1.237 1.839 1.237 1.07 1.835 2.807 1.304 3.492.997.108-.775.42-1.305.762-1.605-2.665-.3-5.466-1.334-5.466-5.93 0-1.312.47-2.385 1.236-3.227-.124-.303-.535-1.523.116-3.176 0 0 1.008-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.873.12 3.176.77.842 1.236 1.915 1.236 3.227 0 4.61-2.807 5.625-5.479 5.92.431.372.823 1.103.823 2.223v3.293c0 .323.218.694.825.576C20.565 22.094 24 17.598 24 12.297c0-6.627-5.373-12-12-12z"/>
            </svg>
          </div>
      `; 


      contactInfo.innerHTML = `
        <div class="contact-info-container">
          <div class="icon-container" id="email-icon-container"
            onclick="location.href='mailto:${infos.email}'">
            <svg class="icon" id="email-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M2 4v16h20V4H2zm18 2v.01L12 13 4 6.01V6h16zM4 18V8l8 5 8-5v10H4z"/>
            </svg>
          </div>
          <p><a href="mailto:${infos.email}">${infos.email}</a></p>
        </div>
        <div class="spacer"></div>
        <div class="contact-info-container">
          <div class="icon-container" id="linkedin-icon-container" 
            onclick="location.href='${infos.linkedIn}'">
            <svg class="icon" id="linkedin-icon-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M22.23 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.21 0 22.23 0zM7.12 20.45H3.56V9h3.56v11.45zM5.34 7.53c-1.14 0-2.06-.92-2.06-2.06s.92-2.06 2.06-2.06 2.06.92 2.06 2.06-.92 2.06-2.06 2.06zm15.11 12.92h-3.56v-5.57c0-1.33-.02-3.05-1.86-3.05-1.86 0-2.14 1.45-2.14 2.95v5.67h-3.56V9h3.42v1.57h.05c.48-.91 1.64-1.86 3.37-1.86 3.61 0 4.28 2.37 4.28 5.45v6.29z"/>
            </svg>
          </div>
          <p><a href="${infos.linkedIn}">LinkedIn</a></p>
        </div>
      `;
      
    })
    .catch(error => console.error("Error fetching infos:", error));
});




document.addEventListener("DOMContentLoaded", () => {
  fetch("https://portfolio-backend-hbbg.onrender.com/")
    .then(response => response.json())
    .then(data => {
      const skills = data.skills;
      const skillsList = document.getElementById("skills-list");

      // Group skills by domain
      const groupedByDomain = {};
      skills.forEach(skill => {
        if (!groupedByDomain[skill.domain]) {
          groupedByDomain[skill.domain] = [];
        }
        groupedByDomain[skill.domain].push(skill);
      });

      // Render skills by domain
      Object.entries(groupedByDomain).forEach(([domain, skills]) => {
        const domainSection = document.createElement("div");
        domainSection.classList.add("details-container");

        const domainHeader = document.createElement("h2");
        domainHeader.classList.add("experience-sub-title");
        domainHeader.textContent = domain;
        domainSection.appendChild(domainHeader);

        skills.forEach(skill => {
          const divContainer = document.createElement("div");
          divContainer.classList.add("article-container2");

          divContainer.innerHTML = `
            <article>
              <img src="${skill.logoLink}" alt="${skill.title}" class="icon" />
              <div>
                <h3>${skill.title}</h3>
                <p>${skill.level}</p>
              </div>
            </article>
          `;

          domainSection.appendChild(divContainer);
        });

        skillsList.appendChild(domainSection);
      });
    })
    .catch(error => console.error("Error fetching skills:", error));
});



let allProjects = [];

document.addEventListener("DOMContentLoaded", () => {
  const projectsList = document.getElementById("projects-list");

  fetch("https://portfolio-backend-hbbg.onrender.com/")
    .then(response => response.json())
    .then(data => {
      allProjects = data.projects;
      renderProjects("All", projectsList);
    })
    .catch(error => console.error("Error fetching projects:", error));

  
  // Dropdown filtering logic
  const selectMenu = document.querySelector(".select-menu");
  const selectBtn = selectMenu.querySelector(".select-btn");
  const sBtnText = selectMenu.querySelector(".select-btn-text");
  const options = selectMenu.querySelectorAll(".option");

  selectBtn.addEventListener("click", () => {
    selectMenu.classList.toggle("active");
  });

  options.forEach(option => {
    option.addEventListener("click", () => {
      const selected = option.querySelector(".option-text").textContent;
      sBtnText.textContent = selected;
      selectMenu.classList.remove("active");
      renderProjects(selected, projectsList);
    });
  });
  
  // close menu if you click outside
  document.addEventListener("click", (e) => {
    if (!selectMenu.contains(e.target)) {
      selectMenu.classList.remove("active");
    }
  });
  
});


function renderProjects(filterDomain, projectsList) {
  projectsList.innerHTML = "";

  const filtered = allProjects.filter(project => {
    return filterDomain === "All" || project.domain === filterDomain;
  });

  if (filtered.length === 0) {
    projectsList.innerHTML = "<p>No projects found in this category.</p>";
    return;
  }

  filtered.forEach(project => {
    const projectContainer = document.createElement("div");
    projectContainer.classList.add("details-container", "project-container");
    
    var code = `
      <div class="article-container">
        <img src="${project.photoUrl || './assets/no_photo_available.png'}" alt="${project.title}" class="project-img" />
      </div>
      <h2 class="experience-sub-title project-title">${project.title}</h2>
      <p>${project.description}</p>
      <div class="spacer"></div>
      <p><strong>Tech Stack : </strong> ${project.techStack.join(" , ")}</p>
      <div class="spacer"></div>
      <div class="btn-container">
    `;

    project.githubUrl ? code += 
    `<button class="btn btn-color-2 project-btn" onclick="window.open('${project.githubUrl}', '_blank')">Github</button>` 
    :  code += ``;

    project.hostUrl ? code += 
    `<button class="btn btn-color-2 project-btn" onclick="window.open('${project.hostUrl}', '_blank')">Live</button>` 
    :  code += ``;

    project.apk ? code += 
    `<button class="btn btn-color-2 project-btn" onclick="window.open('${project.apk}', '_blank')">Apk</button>` 
    :  code += ``;

    project.demo ? code += 
    `<button class="btn btn-color-2 project-btn" onclick="window.open('${project.demo}', '_blank')">Video</button>` 
    :  code += ``;
    
    projectContainer.innerHTML = code;

    projectsList.appendChild(projectContainer);

  });
}
