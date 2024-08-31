import React, { useState, useEffect, Suspense } from "react";
import { Canvas } from "@react-three/fiber";

import { OrbitControls, Preload, SpotLight, useGLTF } from "@react-three/drei";
import CanvasLoader from "../loader";

const Computers = ({ device, scale, position }) => {
  const computer = useGLTF("./desktop_pc/scene.gltf");
  console.log(scale);
  return (
    <mesh>
      <hemisphereLight intensity={1.9} groundColor="black" />
      <pointLight intensity={1} />
      <spotLight
        intensity={1}
        penumbra={1}
        position={[-20, 50, -10]}
        angle={0.12}
      />
      <primitive
        object={computer.scene}
        scale={scale}
        // position={position}
        // rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

const ComputerCanvas = () => {
  const [device, setDevice] = useState("large");
  const [windowSize, setWindowSize] = useState(window.innerWidth);
  const [scale, setScale] = useState(0.75);
  const [position, setPosition] = useState([0, -0.75, -1.5]);

  useEffect(() => {
    if (windowSize <= 500) {
      setDevice("small");
      setScale(0.4);
      setPosition([0, 2, -1.2]);
    }
    if (windowSize > 500 && windowSize <= 1000) {
      setDevice("medium");
      setScale(0.45);
      setPosition([0, 1, -1.66]);
    }
    if (windowSize > 1000) {
      setDevice("large");
      setScale(0.75);
    }
    window.addEventListener("resize", () => {
      setWindowSize(window.innerWidth);
    });
    return () => {
      window.removeEventListener("resize", () => {});
    };
  }, [windowSize]);

  return (
    <Canvas
      frameloop="demand"
      shadows
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
      className="overflow-visible w-full h-screen"
    >
      <Suspense>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers device={device} scale={scale} position={position} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default ComputerCanvas;
