import { Canvas } from "@react-three/fiber";
import { Link } from "react-router-dom";
import { Experience } from "../components/Experience";
import styles from "../styles/home.module.css";
import { useEffect } from "react";

export function Home() {
  useEffect(() => {
    const handleTouchMove = (event) => {
      if (event.target instanceof HTMLCanvasElement) {
        event.preventDefault();
      }
    };

    document.addEventListener("touchmove", handleTouchMove, { passive: false });

    return () => {
      document.removeEventListener("touchmove", handleTouchMove);
    };
  }, []);

  return (
    <div className={styles.wrapper}>
      <div className={styles.layout}>
        <Canvas
          className={styles.ring}
          camera={{ position: [0, 0, 5], near: 1 }}
          onTouchStart={(e) => e.preventDefault()}
          onTouchMove={(e) => e.preventDefault()}
          style={{ touchAction: "none" }}
        >
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
