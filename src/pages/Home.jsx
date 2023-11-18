import { Perf } from "r3f-perf";
import { Canvas } from "@react-three/fiber";
import { Experience } from "../components/Experience";
import { OrbitControls } from "@react-three/drei";
import styles from "../styles/home.module.css";
import { Link } from "react-router-dom";

export function Home() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.layout}>
        <Canvas
          className={styles.ring}
          camera={{ position: [0, 0, 5], near: 1 }}
        >
          {/* <Perf position="top-left" /> */}
          <OrbitControls
            enableDamping
            enableRotate
            enableZoom={false}
            enablePan={false}
          />
          <Experience />
        </Canvas>

        <h1 className={styles.title}>The Lord of the Rings Quiz</h1>
        <p className={styles.text}>
          One ring to rule them all, one ring to find them, One ring to bring
          them all, and in the darkness bind them; In the Land of Mordor where
          the shadows lie.
        </p>

        <Link to="/quiz" className={styles.button}>
          Shall we begin, precious?
        </Link>
      </div>
    </div>
  );
}
