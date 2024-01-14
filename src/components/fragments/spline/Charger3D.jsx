import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Scene from "./Scene";

export default function Charger3D() {
  return (
    <Suspense fallback={null}>
      <Canvas shadows flat linear gl={{ alpha: true }}>
        <Scene />
        <OrbitControls />
      </Canvas>
    </Suspense>
  );
}
