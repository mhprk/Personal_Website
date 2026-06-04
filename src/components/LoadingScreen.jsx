export default function LoadingScreen({ fadingOut }) {
  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        background: "white",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 9999,
        gap: "16px",
        opacity: fadingOut ? 0 : 1,
        transition: "opacity 0.4s ease",
      }}
    >
      <h1
        style={{
          fontFamily: '"DM Sans", sans-serif',
          fontWeight: 900,
          fontSize: "2rem",
          color: "#0f0f0f",
          letterSpacing: "0.02em",
          margin: 0,
        }}
      >
        Loading...
      </h1>
      <div
        style={{
          width: "120px",
          height: "3px",
          borderRadius: "2px",
          background: "linear-gradient(to right, #c2e0f2, #457ea2)",
          animation: "loadBar 1.2s ease-in-out infinite alternate",
        }}
      />
      <style>{`
        @keyframes loadBar {
          from { opacity: 0.3; transform: scaleX(0.5); }
          to { opacity: 1; transform: scaleX(1); }
        }
      `}</style>
    </div>
  );
}
