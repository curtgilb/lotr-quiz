import { Environment, PresentationControls } from "@react-three/drei";
import { Ring } from "./Ring";

export function Experience() {
  return (
    <>
      <Environment
        files={[
          "./environment/1.png",
          "./environment/2.png",
          "./environment/sauron_cropped.jpg",
          "./environment/3.png",
          "./environment/5.png",
          "./environment/6.png",
        ]}
        intensity={0.1}
      />
      <PresentationControls
        global
        rotation={[0, 0, 0]}
        polar={[-Infinity, Infinity]}
        azimuth={[-Infinity, Infinity]}
        config={{ mass: 1, tension: 100 }}
        speed={-1}
      >
        <Ring />
      </PresentationControls>

      <ambientLight intensity={0.5} />
    </>
  );
}
