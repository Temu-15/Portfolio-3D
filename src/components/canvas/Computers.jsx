// import React, { useState, useEffect, Suspense } from "react";
// import { Canvas } from "@react-three/fiber";

// import { OrbitControls, Preload, SpotLight, useGLTF } from "@react-three/drei";

// const Computers = ({ device, scale, position }) => {
//   const computer = useGLTF("./desktop_pc/scene.gltf");
//   console.log(scale);
//   return (
//     <mesh>
//       <hemisphereLight intensity={1.9} groundColor="black" />
//       <pointLight intensity={1} />
//       <spotLight
//         intensity={1}
//         penumbra={1}
//         position={[-20, 50, -10]}
//         angle={0.12}
//       />
//       <primitive
//         object={computer.scene}
//         scale={scale}
//         position={position}
//         rotation={[-0.01, -0.2, -0.1]}

//       />
//     </mesh>
//   );
// };

// const ComputerCanvas = () => {
//   const [device, setDevice] = useState("large");
//   const [windowSize, setWindowSize] = useState(window.innerWidth);
//   const [scale, setScale] = useState(0.75);
//   const [position, setPosition] = useState([0, -0.75, -1.5]);

//   useEffect(() => {
//     if (windowSize <= 500) {
//       setDevice("small");
//       setScale(0.4);
//       setPosition([0, 2, -1.2]);
//     }
//     if (windowSize > 500 && windowSize <= 1000) {
//       setDevice("medium");
//       setScale(0.45);
//       setPosition([0, 1, -1.66]);
//     }
//     if (windowSize > 1000) {
//       setDevice("large");
//       setScale(0.75);
//     }
//     window.addEventListener("resize", () => {
//       setWindowSize(window.innerWidth);
//     });
//     return () => {
//       window.removeEventListener("resize", () => {});
//     };
//   }, [windowSize]);

//   return (
//     <Canvas
//       frameloop="demand"
//       shadows
//       camera={{ position: [20, 3, 5], fov: 25 }}
//       gl={{ preserveDrawingBuffer: true }}
//       className="w-full h-full "
//       style={device === "small" ? { height: "550px" } : ""}
//     >
//       <Suspense>
//         <OrbitControls
//           enableZoom={false}
//           maxPolarAngle={Math.PI / 2}
//           minPolarAngle={Math.PI / 2}
//         />
//         <Computers device={device} scale={scale} position={position} />
//       </Suspense>
//       <Preload all />
//     </Canvas>
//   );
// };

// export default ComputerCanvas;
import React, { useState, useEffect, Suspense } from "react";
import { Canvas, extend } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import { MoonLoader } from "react-spinners";
import { divide } from "lodash";

const Computers = ({ scale, position }) => {
  const computer = useGLTF("./desktop_pc/scene.gltf");

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
        position={position}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

const ComputerCanvas = () => {
  const [scale, setScale] = useState(0.75);
  const [position, setPosition] = useState([0, -0.75, 0]);
  const [cameraPosition, setCameraPosition] = useState([0, 0, 5]);

  const updateScaleAndPosition = (width, height) => {
    const aspect = width / height;

    if (aspect >= 1.6) {
      // Wide screens
      setScale(0.8);
      setPosition([0, -1.5, 0]);
      setCameraPosition([0, 0, 6]);
    } else if (aspect >= 1) {
      // Square-like screens
      setScale(0.7);
      setPosition([0, -1.2, 0]);
      setCameraPosition([0, 0, 5.5]);
    } else {
      // Tall screens
      setScale(0.6);
      setPosition([0, -1.8, 0]);
      setCameraPosition([0, 0, 5.5]);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      updateScaleAndPosition(width, height);
    };

    handleResize(); // Initial call to set the correct scale and position
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Canvas
      frameloop="demand"
      shadows
      camera={{ position: cameraPosition, fov: 90 }} // Increased FOV for a wider view
      gl={{ preserveDrawingBuffer: true }}
      style={{ height: "500px" }}
    >
      <Suspense fallback={null}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
          enablePan={true}
          enableRotate={true}
        />
        <Computers scale={scale} position={position} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default ComputerCanvas;
