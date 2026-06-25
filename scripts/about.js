const aboutTabs = document.querySelectorAll(".tab");
const aboutContent = document.querySelectorAll(".tab-content");

document.addEventListener("DOMContentLoaded", () => {
  if (aboutTabs) {
    aboutTabs[0].click();
  }
});

aboutTabs.forEach((tab) => {
  tab.addEventListener("click", (e) => {
    e.preventDefault();

    aboutTabs.forEach((a) => a.classList.remove("active"));
    tab.classList.add("active");

    aboutContent.forEach((c) => c.classList.remove("active"));

    document.getElementById(tab.dataset.section).classList.add("active");

    if (tab.dataset.section === "experience") {
      const experiences = document.querySelector(".experience-list");

      const experienceList = [
        {
          id: 1,
          date: "2025 - ",
          position: "Freelance Web Developer",
          company: "Self-Employed",
          details:
            "Developed custom websites for local businesses using HTML, CSS, JavaScript, and ReactJs. Focused on performance, SEO, and mobile-first design.",
        },
      ];

      const experienceContent = experienceList
        .map((ele) => {
          return `
            <div class="experience-box" key="${ele?.id}">
              <h4>${ele?.date}</h4>
              <h3>${ele?.position}</h3>

              <div class="company-name">
                <span></span>
                <p>${ele?.company}</p>
              </div>

              <p>${ele?.details}</p>
            </div>
        `;
        })
        .join("");

      if (experiences) {
        experiences.innerHTML = experienceContent;
      }
    } else if (tab.dataset.section === "education") {
      const education = document.querySelector(".education-list");

      const educationList = [
        {
          id: 1,
          date: "2018 - 2020",
          degree: "Secondary School Certificate (SSC)",
          institution: "jawahar Navodaya vidyalaya school, mohali(punjab)",
          details:
            "Completed basic schooling with distinction. Actively participated in computer clubs ,tech & science-related and events.",
        },
        {
          id: 2,
          date: "2020 - 2022",
          degree: "Higher Secondary Education (HSC - Science)",
          institution: "jawahar Navodaya vidyalaya school, mohali(punjab)",
          details:
            "Focused on Physics, Chemistry,Mathematics and computer science (pythan,mysql). Developed a strong foundation in logical thinking and problem-solving.",
        },
        {
          id: 3,
          date: "2022 - 2025",
          degree: "Bachelor of Science (Bsc non-medical) ",
          institution: "Kurukshetra University Kurukshetra, Haryana",
          details:
            "Studied core subjects like Physics, Chemistry,Mathematics and computer (certificate)",
        },
        {
          id: 4,
          date: "2025 - 2026",
          degree: "Post Graduate Diploma in Computer Application",
          institution: "Kurukshetra University Kurukshetra, Haryana",
          details:
            "Studies core subjects like 'Client Side Web Technology, Server Side Web Technology,Artificial Intelligence(AI&ML), Pogramming in Java ,Data Structure, OS & Linux, Computer Networking and DBMS' ",
        },
      ];

      const educationContent = educationList
        .map((ele) => {
          return `
            <div class="experience-box" key="${ele?.id}">
              <h4>${ele?.date}</h4>
              <h3>${ele?.degree}</h3>

              <div class="company-name">
                <span></span>
                <p>${ele?.institution}</p>
              </div>

              <p>${ele?.details}</p>
            </div>
        `;
        })
        .join("");

      if (education) {
        education.innerHTML = educationContent;
      }
    } else if (tab.dataset.section === "skills") {
      const skills = document.querySelector(".skill-list");

      const skillList = [
        {
          id: 1,
          name: "HTML - Hyper Text Markup Language",
          icon: "assets/skills/html.png",
        },
        {
          id: 2,
          name: "CSS - Cascading Style Sheet",
          icon: "assets/skills/css.png",
        },
        {
          id: 3,
          name: "JavaScript",
          icon: "assets/skills/js.png",
        },
        {
          id: 4,
          name: "MongoDB",
          icon: "assets/skills/mongodb.png",
        },
        {
          id: 5,
          name: "Bootstrap",
          icon: "assets/skills/bootstrap.png",
        },
        {
          id: 6,
          name: "Node JS",
          icon: "assets/skills/node.png",
        },
        {
          id: 7,
          name: "React JS",
          icon: "assets/skills/react.png",
        },
        {
          id: 8,
          name: "Express JS",
          icon: "assets/skills/express.png",
        },
      ];

      const skillContent = skillList
        .map((ele) => {
          return `
            <div class="skill-box" key=${ele?.id}>
              <img 
              src=${ele?.icon}
              alt="${ele?.name}"
              title="${ele?.name}"
              loading="lazy"/>
            </div>
        `;
        })
        .join("");

      if (skills) {
        skills.innerHTML = skillContent;
      }
    } else if (tab.dataset.section === "about-me") {
      const myInfo = document.querySelector(".my-info");

      const infoList = [
        {
          id: 1,
          key: "Name : ",
          value: "Manish Kumar",
        },
        {
          id: 2,
          key: "Country : ",
          value: "India",
        },
        // {
        //   id: 5,
        //   key: "Industry : ",
        //   value: ".....",
        // },
        {
          id: 3,
          key: "Fresher : ",
          value: ".....",
        },
        {
          id: 4,
          key: "Address : ",
          value: "471 Trivedi Camp Dera Bassi , Mohali (Punjab)",
        },
      ];

      const infoContent = infoList
        .map((ele) => {
          return `
            <div class="info-box" key=${ele?.id}>
              <span>${ele?.key}</span>
              <span>${ele?.value}</span>
            </div>
        `;
        })
        .join("");

      if (myInfo) {
        myInfo.innerHTML = infoContent;
      }
    }
  });
});
