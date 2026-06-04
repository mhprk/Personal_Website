export default function Modal({ onClose }) {
  return (
    <div
      className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className="bg-white max-w-sm w-full rounded-2xl overflow-hidden shadow-2xl relative"
        onClick={e => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 text-white bg-black/40 rounded-full w-8 h-8 flex items-center justify-center hover:bg-black/60"
        >
          ✕
        </button>

        <div className="w-full h-51 md:h-80 bg-black">
          <video src="/Mintii.MP4" autoPlay muted loop playsInline className="w-full h-full object-cover" />
        </div>

        <div className="p-5">
          <h2 className="text-xl font-bold text-gray-900 mb-1">Mintii</h2>
          <p className="text-gray-500 text-sm mb-4">
           Pocket photobooth app
          </p>

          <div className="flex flex-wrap gap-2 mb-5">
            {['SwiftUI', 'iOS', 'App Store'].map(tech => (
              <span key={tech} className="px-2 py-1 bg-gray-100 text-gray-600 rounded-full text-xs font-medium">
                {tech}
              </span>
            ))}
          </div>

          <div className="flex gap-2">
            <a href="https://github.com/mhprk/Mintii" target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-1 px-3 py-1.5 text-xs text-white rounded-full transition-opacity hover:opacity-80"
              style={{ background: 'linear-gradient(to bottom, #c2e0f2, #a0c4db, #6fa5c9, #72a0bd, #446d8e, #457ea2)' }}>
              <i className="fab fa-github text-xs"></i> GitHub
            </a>
            <a href="https://apps.apple.com/ru/app/mintii/id6765552075?l=en-GB" target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-1 px-3 py-1.5 text-xs text-white rounded-full transition-opacity hover:opacity-80"
              style={{ background: 'linear-gradient(to bottom, #c2e0f2, #a0c4db, #6fa5c9, #72a0bd, #446d8e, #457ea2)' }}>
              <i className="fab fa-app-store-ios text-xs"></i> App Store
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
