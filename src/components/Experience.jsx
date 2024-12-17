import { Environment } from "@react-three/drei";
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
        intensity={1.5}
      />
      <ambientLight intensity={2} color={"#ffdf00"} />

      <Ring />

      <EffectComposer>
        <Bloom
          intensity={1}
          luminanceThreshold={0.5}
          luminanceSmoothing={0.2}
        />
      </EffectComposer>
    </>
  );
}
