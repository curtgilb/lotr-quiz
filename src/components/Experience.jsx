import { Environment, PresentationControls } from "@react-three/drei";
import { Sparkles } from "@react-three/drei";
import { Ring } from "./Ring";
import * as THREE from "three";

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
      <Sparkles
        count={35}
        scale={4}
        speed={0.6}
        size={2}
        color={new THREE.Color(0xffc000)}
      />
      <PresentationControls
        global
        rotation={[0, 0, 0]}
        config={{ mass: 1, tension: 100 }}
        speed={1.5}
        polar={[-Math.PI / 3, Math.PI / 3]}
        azimuth={[-Math.PI / 1.5, Math.PI / 1.5]}
        dampingFactor={0.05}
      >
        <Ring />
      </PresentationControls>

      <ambientLight intensity={0.5} />
    </>
  );
}
