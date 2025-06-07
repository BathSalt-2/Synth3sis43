import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, Text } from '@react-three/drei';
import * as THREE from 'three';

interface Agent {
  id: number;
  name: string;
  role: string;
  status: string;
  latency: number;
}

interface AgentNodeProps {
  agent: Agent;
  position: [number, number, number];
}

const AgentNode: React.FC<AgentNodeProps> = ({ agent, position }) => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.01;
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime + agent.id) * 0.2;
    }
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return '#00ff88';
      case 'idle': return '#ffaa00';
      case 'alert': return '#ff4444';
      default: return '#888888';
    }
  };

  return (
    <group position={position}>
      <Sphere ref={meshRef} args={[0.3, 16, 16]}>
        <meshPhongMaterial
          color={getStatusColor(agent.status)}
          transparent
          opacity={0.8}
          emissive={getStatusColor(agent.status)}
          emissiveIntensity={0.2}
        />
      </Sphere>
      <Text
        position={[0, -0.6, 0]}
        fontSize={0.15}
        color="white"
        anchorX="center"
        anchorY="middle"
      >
        {agent.name}
      </Text>
    </group>
  );
};

const Globe: React.FC = () => {
  const globeRef = useRef<THREE.Mesh>(null);

  useFrame(() => {
    if (globeRef.current) {
      globeRef.current.rotation.y += 0.005;
    }
  });

  return (
    <Sphere ref={globeRef} args={[2, 32, 32]}>
      <meshPhongMaterial
        color="#1a1a2e"
        transparent
        opacity={0.1}
        wireframe
      />
    </Sphere>
  );
};

interface AgentGlobeProps {
  agents: Agent[];
}

const AgentGlobe: React.FC<AgentGlobeProps> = ({ agents }) => {
  const positions: [number, number, number][] = [
    [1.5, 0.5, 1],
    [-1.2, -0.8, 0.5],
    [0.8, 1.2, -1.5],
  ];

  return (
    <Canvas camera={{ position: [0, 0, 6], fov: 50 }}>
      <ambientLight intensity={0.3} />
      <pointLight position={[5, 5, 5]} intensity={0.5} color="#00d4ff" />
      <pointLight position={[-5, -5, -5]} intensity={0.3} color="#a855f7" />
      
      <Globe />
      {agents.map((agent, index) => (
        <AgentNode
          key={agent.id}
          agent={agent}
          position={positions[index] || [0, 0, 0]}
        />
      ))}
    </Canvas>
  );
};

export default AgentGlobe;