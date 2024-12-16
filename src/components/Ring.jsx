import { useGLTF } from "@react-three/drei";
import { useRef, useState, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import { useSpring } from "@react-spring/three";

export function Ring(props) {
  const ring = useRef();
  const { nodes, materials } = useGLTF("./models/ring/scene-transformed.glb");
  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);

  // Animate emissive intensity
  useSpring({
    to: {
      emissiveIntensity: hovered ? 3.8 : 0.5,
    },
    onChange: (result) => {
      if (materials.Default) {
        materials.Default.emissiveIntensity = result.value.emissiveIntensity;
      }
    },
    config: {
      duration: 1000, // 1 second transition
      tension: 120,
      friction: 14,
    },
  });

  useEffect(() => {
    if (materials.Default) {
      materials.Default.envMapIntensity = 0.1;
      materials.Default.color.set("#ffcc44");
      materials.Default.emissive.set("#ff9900");
      materials.Default.roughness = 0.4;
      materials.Default.metalness = 0.95;
      materials.Default.toneMapped = false;
    }
  }, [materials]);

  useFrame((state, delta) => {
    ring.current.rotation.y += delta * 0.1;
    ring.current.rotation.x += delta * 0.1;
  });

  return (
    <>
      <spotLight
        position={[0, 5, 5]} // Position the light above and slightly in front of the ring
        intensity={1.8} // Adjust brightness to your liking
        angle={Math.PI / 6} // Narrow beam for focused lighting
        penumbra={0.5} // Soft edge for a natural look
        color="white" // Neutral light color
        target={ring.current} // Ensure the light targets the ring
      />
      <group
        ref={ring}
        {...props}
        dispose={null}
        scale={2}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
        onClick={() => setClicked(!clicked)}
      >
        <mesh
          geometry={nodes.defaultMaterial.geometry}
          material={materials.Default}
        />
      </group>
    </>
  );
}

useGLTF.preload("./models/ring/scene-transformed.glb");
