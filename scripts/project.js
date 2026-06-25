const projectList = [
  {
    id: 1,
    number: "01",
    title: "MOVIE-SEREACH",
    description:
      "Created a modern and responsive Movie Search Website that provides real-time movie data through API integration. Features include instant search, movie details, responsive design, and an engaging user interface for a seamless browsing experience.",
    techStack: ["HTML", "CSS", "JAVASCRIPT"],
    image: "assets/projects/ms.png",
    liveLink: "https://kumar-manish-286.github.io/movie-search-website/",
    githubLink: "https://github.com/kumar-manish-286/movie-search-website",
  },
  {
    id: 2,
    number: "02",
    title: "QUIZREACTJS APP",
    description:
      "Quiz_react.js is a responsive quiz application developed with React.js and Bootstrap that allows users to take quizzes, select answers, and view their scores in an intuitive and visually appealing interface.",
    techStack: ["REACTJS", "BOOTSTRAP"],
    image: "assets/projects/Quizreactjs.png",
    liveLink: "#",
    githubLink: "https://github.com/kumar-manish-286/Quiz_react.js",
  },
  {
    id: 3,
    number: "03",
    title: "SIGN-UP FORM",
    description:
      "A modern sign-up page featuring a vibrant gradient background, clean card layout, intuitive input fields, and a clear call-to-action for a smooth user onboarding experience.",
    techStack: ["HTML", "CSS"],
    image: "assets/projects/project1.jpeg",
    liveLink: "https://sign-up-form-ivory-ten.vercel.app/",
    githubLink: "https://github.com/kumar-manish-286/Sign-up-form",
  },
];

const project = document.querySelector(".project");

let currentIndex = 0;

const renderProject = (index) => {
  const projectContent = projectList[index];

  const previousDisabled = currentIndex === 0;
  const nextDisabled = currentIndex === projectList.length - 1;

  project.innerHTML = `
        <div class="project-info">
            <h3>${projectContent?.number}</h3>
            <h4>${projectContent?.title}</h4>
            <p>
            ${projectContent?.description}
            </p>
            <div class="tech-stack">
                ${projectContent?.techStack
                  ?.map((tech, i) => {
                    return `<span key=${i}>${tech}</span>`;
                  })
                  .join(",")}
            </div>       
            <hr />
            <div class="links">
              <a href="${projectContent?.liveLink}">
                <i class="ph ph-arrow-right"></i>
              </a>
              <a href="${projectContent?.githubLink}">
                <i class="ph ph-github-logo"></i>
              </a>
            </div>
          </div>

          <div class="carousel">
            <img 
                src="${projectContent?.image}" 
                alt="${projectContent?.title}" 
            />

            <div class="arrows">
              <a href="#" id="previous" class='${
                previousDisabled ? "disabled-btn" : ""
              }'>
                <i class="ph ph-caret-left"></i>
              </a>
              <a href="#" id="next" class='${
                nextDisabled ? "disabled-btn" : ""
              }'>
                <i class="ph ph-caret-right"></i>
              </a>
            </div>
          </div>
  `;

  document.getElementById("previous").addEventListener("click", (e) => {
    e.preventDefault();

    if (currentIndex > 0) {
      currentIndex--;
      renderProject(currentIndex);
    }
  });

  document.getElementById("next").addEventListener("click", (e) => {
    e.preventDefault();

    if (currentIndex < projectList.length - 1) {
      currentIndex++;
      renderProject(currentIndex);
    }
  });
};

renderProject(currentIndex);
