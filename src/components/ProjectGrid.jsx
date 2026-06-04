import ProjectCard from "./ProjectCard";

export default function ProjectGrid({ projects }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 border-t border-l border-gray-200">
      {projects.map((project, index) => (
        <div key={index} className="border-b border-r border-gray-200">
          <ProjectCard
            title={project.title}
            description={project.description}
            imageUrl={project.imageUrl}
            videoUrl={project.videoUrl}
            projectUrl={project.projectUrl}
          />
        </div>
      ))}
    </div>
  );
}
