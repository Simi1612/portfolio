"use client";

import { PointMaterial, Points, type PointsInstancesProps } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { Suspense, useEffect, useMemo, useRef } from "react";
import type { Points as PointsType } from "three";

/** Generate N points uniformly distributed on a sphere of given radius.
 *  Pure JS — no maath, no possible NaN. */
function generateSpherePositions(count: number, radius: number): Float32Array {
  const arr = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    // Marsaglia (1972) — rejection sample unit sphere, guaranteed finite
    let x = 0, y = 0, z = 0, len = 0;
    do {
      x = Math.random() * 2 - 1;
      y = Math.random() * 2 - 1;
      z = Math.random() * 2 - 1;
      len = Math.sqrt(x * x + y * y + z * z);
    } while (len > 1 || len < 1e-10); // skip near-zero (NaN source)
    arr[i * 3]     = (x / len) * radius;
    arr[i * 3 + 1] = (y / len) * radius;
    arr[i * 3 + 2] = (z / len) * radius;
  }
  return arr;
}

export const StarBackground = (props: PointsInstancesProps) => {
  const ref = useRef<PointsType | null>(null);

  // Stable — computed once, no NaN possible
  const sphere = useMemo(() => generateSpherePositions(1667, 1.2), []);

  // Belt-and-suspenders: force frustumCulled=false on the THREE object directly
  useEffect(() => {
    if (ref.current) {
      ref.current.frustumCulled = false;
    }
  }, []);

  useFrame((_state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points
        ref={ref}
        positions={sphere}
        stride={3}
        {...props}
        frustumCulled={false} // after spread — props cannot override
      >
        <PointMaterial
          transparent
          color="#fff"
          size={0.002}
          sizeAttenuation
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

export const StarsCanvas = () => (
  <div className="w-full h-auto fixed inset-0 -z-10">
    <Canvas camera={{ position: [0, 0, 1] }}>
      <Suspense fallback={null}>
        <StarBackground />
      </Suspense>
    </Canvas>
  </div>
);
