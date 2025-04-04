import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import groceryPreview from "../assets/grocery-preview.jpg";

const Projects = () => {
  const navigate = useNavigate();
  const [filter, setFilter] = useState("All");

  const imageStyle = {
    height: "200px",
    width: "100%",
    objectFit: "cover",
    objectPosition: "center",
    display: "block",
    transition: "transform 0.3s ease-in-out",
  };

  const cardStyle = {
    overflow: "hidden",
  };

  const allProjects = [
    {
      title: "Responsive Bootstrap Website",
      description:
        "A multi-page responsive website showcasing Bootstrap components like carousel, modals, toasts, and accessibility-first design.",
      img: "/assets/bootstrap-stack.png",
      href: "/projects/bootstrap-responsive-site/index.html",
      tags: ["Bootstrap", "New"],
    },
    {
      title: "React Calculator",
      description: "A simple calculator built with React and TailwindCSS.",
      img: "/assets/calculator.jpeg",
      action: () => navigate("/calculator"),
      type: "button",
      tags: ["React", "Tailwind"],
    },
    {
      title: "Accessibility-Focused Website",
      description:
        "A website designed with accessibility in mind, featuring high-contrast mode, keyboard navigation, and text resizing.",
      img: "/projects/accessibility-website/preview.png",
      href: "/projects/accessibility-website/index.html",
      tags: ["HTML", "Accessibility"],
    },
    {
      title: "Grocery List App",
      description:
        "A simple grocery list app where users can add, update, and remove items.",
      img: groceryPreview,
      action: () => navigate("/grocery-list"),
      type: "button",
      tags: ["React", "Hooks"],
    },
    {
      title: "Task List App",
      description:
        "Manage your tasks easily with this interactive Task List app.",
      img: "/assets/tasklist.jpeg",
      action: () => navigate("/task-list"),
      type: "button",
      tags: ["React"],
    },
    {
      title: "Budget Form",
      description:
        "A simple monthly budget form to help track income and expenses.",
      img: "/assets/Budget.jpg",
      action: () => navigate("/budget-form"),
      type: "button",
      tags: ["Forms", "HTML"],
    },
    {
      title: "Mood Board",
      description:
        "A visual representation of the design and feel of the project.",
      img: "/assets/Moodboard.jpg",
      href: "/assets/Weaver_MoodBoard.pdf",
      tags: ["Design"],
    },
    {
      title: "VroomAuto Mobile Prototype",
      description: "A sleek car sales mobile prototype.",
      img: "/assets/mobileautoprototype.png",
      href: "/assets/mobileautoprototype.png",
      tags: ["Prototype"],
    },
    {
      title: "Financialist Bank Mobile Prototype",
      description: "A banking app prototype with a clean UI.",
      img: "/assets/mobilebankprototype.png",
      href: "/assets/mobilebankprototype.png",
      tags: ["Prototype"],
    },
    {
      title: "Amerisure Mobile Prototype",
      description: "An insurance mobile interface prototype.",
      img: "/assets/amerisure_mobile.png",
      href: "/assets/amerisure_mobile.png",
      tags: ["Prototype"],
    },
    {
      title: "UI Kit Elements",
      description: "A collection of UI elements for various projects.",
      img: "/assets/uiKit.png",
      href: "/assets/uiKit.png",
      tags: ["UI/UX"],
    },
  ];

  const allTags = ["All", ...new Set(allProjects.flatMap((p) => p.tags || []))];
  const filtered =
    filter === "All"
      ? allProjects
      : allProjects.filter((p) => p.tags?.includes(filter));

  return (
    <section id="projects" className="container my-5">
      <h2 className="text-center mb-4">Projects</h2>

      {/* Filter Buttons */}
      <div className="text-center mb-4">
        {allTags.map((tag) => (
          <button
            key={tag}
            className={`btn btn-sm mx-1 mb-2 ${
              filter === tag ? "btn-primary" : "btn-outline-primary"
            }`}
            onClick={() => setFilter(tag)}
          >
            {tag}
          </button>
        ))}
      </div>

      <div className="row row-cols-1 row-cols-md-3 g-4">
        {filtered.map((project, index) => (
          <div className="col" key={index}>
            <div
              className="card h-100 d-flex flex-column"
              data-aos="fade-up"
              style={cardStyle}
              onMouseEnter={(e) => {
                const img = e.currentTarget.querySelector("img");
                if (img) img.style.transform = "scale(1.05)";
              }}
              onMouseLeave={(e) => {
                const img = e.currentTarget.querySelector("img");
                if (img) img.style.transform = "scale(1)";
              }}
            >
              {/* ✅ Clickable image logic */}
              {project.type === "button" ? (
                <div
                  role="button"
                  onClick={project.action}
                  style={{ cursor: "pointer" }}
                >
                  <img
                    src={project.img}
                    alt={`${project.title} Preview`}
                    className="card-img-top"
                    style={imageStyle}
                  />
                </div>
              ) : (
                <a
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ display: "block", cursor: "pointer" }}
                >
                  <img
                    src={project.img}
                    alt={`${project.title} Preview`}
                    className="card-img-top"
                    style={imageStyle}
                  />
                </a>
              )}

              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{project.title}</h5>

                {/* Tags / Badges */}
                <div className="mb-2">
                  {project.tags?.map((tag, i) => (
                    <span key={i} className="badge bg-secondary me-1">
                      {tag}
                    </span>
                  ))}
                </div>

                <p className="card-text">{project.description}</p>
                <div className="mt-auto">
                  {project.type === "button" ? (
                    <button
                      onClick={project.action}
                      className="btn btn-primary w-100"
                    >
                      Open App
                    </button>
                  ) : (
                    <a
                      href={project.href}
                      className="btn btn-primary w-100"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Prototype
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
