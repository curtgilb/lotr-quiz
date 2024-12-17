import { Environment, PresentationControls } from "@react-three/drei";
import { Ring } from "./Ring";
import { Bloom, EffectComposer } from "@react-three/postprocessing";

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
        intensity={0.01}
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

      <EffectComposer>
        <Bloom
          intensity={0.5}
          luminanceThreshold={0.2}
          luminanceSmoothing={0.3}
        />
      </EffectComposer>
    </>
  );
}
