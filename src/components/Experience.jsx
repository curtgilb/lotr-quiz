import { Environment, Sparkles } from "@react-three/drei";
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
      />

      {/* <Sparkles color="orange" scale={4} count={200} /> */}

      <Ring></Ring>
    </>
  );
}
