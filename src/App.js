import React, { Suspense } from "react";
import "./App.css";

import { Canvas } from "react-three-fiber";

import SpinningMesh from "./components/spinningMesh";

// Optionnal softsShadow
import { softShadows, OrbitControls } from "@react-three/drei";

import Boy from "./components/Boy";

// Optionnal
softShadows();

const App = () => {
  return (
    <>
      <Canvas shadowMap camera={{ position: [-5, 2, 10], fov: 60 }}>
        <ambientLight intensity={0.3} />
        <directionalLight
          castShadow
          position={[0, 10, 0]}
          intensity={1.5}
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
          shadow-camera-far={50}
          shadow-camera-left={-10}
          shadow-camera-right={10}
          shadow-camera-top={10}
          shadow-camera-bottom={-10}
        />
        <pointLight position={[-10, 0, -20]} intensity={0.5} />
        <pointLight position={[0, -10, 0]} intensity={1.5} />

        <group>
          <mesh
            receiveShadow
            rotation={[-Math.PI / 2, 0, 0]}
            position={[0, -3, 0]}
          >
            <planeBufferGeometry attach="geometry" args={[100, 100]} />
            <meshStandardMaterial attach="material" color={"yellow"} />
            {/* <shadowMaterial attach="material" /> */}
          </mesh>
          <SpinningMesh
            position={[0, 1, 0]}
            args={[3, 2, 1]}
            color="lightblue"
            speed={10}
            factor={0.6}
          />
          <SpinningMesh
            position={[-2, 1, -5]}
            color="hotpink"
            speed={1}
            factor={0.6}
          />
          <SpinningMesh
            position={[5, 1, -2]}
            color="hotpink"
            speed={1}
            factor={0.6}
          />
          <Suspense fallback={null}>
            <Boy position={[0, -3, -10]} castShadow />
          </Suspense>
        </group>

        <OrbitControls />
        {/* <axesHelper /> */}
      </Canvas>
    </>
  );
};

export default App;
