export default function ProjectCard({ title, description, imageUrl, videoUrl, projectUrl }) {
  return (
    <a
      href={projectUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="flex flex-col h-full group overflow-hidden"
    >
      <div className="flex-1 overflow-hidden bg-gray-100">
        {videoUrl ? (
          <video
            src={videoUrl}
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : imageUrl ? (
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : null}
      </div>
      <div className="p-3 border-t border-gray-200 bg-white">
        <h3 className="text-sm font-medium text-gray-900 truncate">{title}</h3>
        <p className="text-xs text-gray-500 mt-0.5 truncate">{description}</p>
      </div>
    </a>
  );
}
