import { useState } from "react";
import ProjectCard from "./components/ProjectCard";
import Modal from "./components/Modal";
import legoImg from "./images/LegoWebsite.png";
import personalImg from "./images/PersonalWebsite.png";
import wipImg from "./images/wip.png";

const projects = [
  {
    id: 1,
    title: "Mintii",
    description: "Mobile app project",
    videoUrl: "/Mintii.MP4",
    projectUrl: "https://github.com/mhprk",
  },
  {
    id: 2,
    title: "Lego Collection Website",
    description: "Full Stack Lego Collection Website",
    imageUrl: legoImg,
    projectUrl: "https://github.com/mhprk/Lego_Website",
  },
  {
    id: 3,
    title: "Personal Website",
    description: "My personal portfolio website",
    imageUrl: personalImg,
    projectUrl: "https://github.com/mhprk/Personal_Website",
  },
  {
    id: 4,
    title: "Working on it!",
    description: "Coming soon",
    imageUrl: wipImg,
    projectUrl: "#",
  },
  {
    id: 5,
    title: "Working on it!",
    description: "Coming soon",
    imageUrl: wipImg,
    projectUrl: "#",
  },
];

export default function ProjectsPage() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <main
      id="projects-section"
      className="border-t border-gray-200"
      style={{ marginTop: "134px" }}
    >
      {modalOpen && <Modal onClose={() => setModalOpen(false)} />}

      <div
        id="project-grid"
        className="flex flex-col md:flex-row border-b border-gray-200"
      >
        {/* Mintii video — full width on mobile, 70% on desktop */}
        <div
          className="w-full md:w-[70%] h-60 md:h-full shrink-0 overflow-hidden bg-black relative group cursor-pointer"
          onClick={() => setModalOpen(true)}
        >
          <video
            src="/Mintii.MP4"
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-10">
            <a
              href="https://github.com/mhprk/Mintii"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white text-6xl hover:scale-110 transition-transform duration-200"
            >
              <i className="fab fa-github"></i>
            </a>
            <a
              href="https://apps.apple.com/ru/app/mintii/id6765552075?l=en-GB"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white text-6xl hover:scale-110 transition-transform duration-200"
            >
              <i className="fab fa-app-store-ios"></i>
            </a>
          </div>
        </div>
        {/* 2×2 project grid — right column */}
        <div className="w-full md:w-[30%] border-t md:border-t-0 md:border-l border-gray-200 grid grid-cols-2 grid-rows-2 h-129 md:h-full">
          {projects.slice(1, 5).map((project) => (
            <div
              key={project.id}
              className="border-r border-b border-gray-200 overflow-hidden"
            >
              <ProjectCard
                title={project.title}
                description={project.description}
                imageUrl={project.imageUrl}
                projectUrl={project.projectUrl}
              />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
