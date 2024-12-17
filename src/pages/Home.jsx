import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Link } from "react-router-dom";
import { Experience } from "../components/Experience";
import styles from "../styles/home.module.css";

export function Home() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.layout}>
        <Canvas
          className={styles.ring}
          camera={{ position: [0, 0, 5], near: 1 }}
        >
          {/* <Perf position="top-left" /> */}

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
        <p className={styles.attribution}>
          This work is based on{" "}
          <a href="https://sketchfab.com/3d-models/one-ring-b2837bd390424911ab7f7a5fa00b8ad5">
            One Ring
          </a>{" "}
          by <a href="https://sketchfab.com/Yaloken">yaloken</a> licensed under{" "}
          <a href="http://creativecommons.org/licenses/by/4.0/">CC-BY-4.0</a>
        </p>
      </div>
    </div>
  );
}
