import React from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

export const HeroBackground = () => {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <div className="absolute top-0 left-0 w-full h-full z-0">
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          fullScreen: { enable: false },
          background: { color: "transparent" },
          particles: {
            number: { value: 60 },
            size: { value: 3 },
            move: { enable: true, speed: 0.5 },
            color: { value: "#cccccc" },
            links: {
              enable: true,
              distance: 150,
              color: "#888888",
              opacity: 0.5,
              width: 1,
            },
          },
          interactivity: {
            events: {
              onHover: {
                enable: true,
                mode: "repulse", // Try "grab" for sticky lines
              },
              resize: true,
            },
            modes: {
              repulse: {
                distance: 100,
                duration: 0.4,
              },
            },
          },
        }}
      />
    </div>
  );
};
