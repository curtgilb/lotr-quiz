import { Environment } from "@react-three/drei";
import { Ring } from "./Ring";

export function Experience() {
  return (
    <>
      <Environment
        files={[
          "./environment/1.png",
          "./environment/2.png",
          "./environment/3.png",
          "./environment/4.png",
          "./environment/5.png",
          "./environment/6.png",
        ]}
        intensity={0.05}
      />

      <Ring />

      {/* <EffectComposer>
        <Bloom
          intensity={4} // Adjust bloom intensity
          luminanceThreshold={0.5} // Adjust what brightness level starts to glow
          luminanceSmoothing={0.9} // Adjust how smooth the glow appears
        />
      </EffectComposer> */}
    </>
  );
}
