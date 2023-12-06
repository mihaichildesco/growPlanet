import Spline from "@splinetool/react-spline";

export default function App() {
  return (
    <>
      <Spline
        style={{ width: "100%", height: "100vh" }}
        scene="https://prod.spline.design/N7vfjT9DkkGBBbi7/scene.splinecode"
      />
      <h1
        style={{
          position: "absolute",
          top: "30%",
          left: "30%",
          transform: "translate(-50%, -50%)",
          fontSize: "5rem",
          color: "white",
          textTransform: "uppercase",
          boxShadow: "0 0 10px #000",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          padding: "1rem",
          borderRadius: "10px",
          zIndex: 1,
        }}
      >
        Childesco Mihai
      </h1>
    </>
  );
}

// scene="https://prod.spline.design/N7vfjT9DkkGBBbi7/scene.splinecode" />

// planet
// scene="https://prod.spline.design/LuV4t1YsuagRJ7bn/scene.splinecode"
