"use client";

import dynamic from "next/dynamic";

const ParticlesBackground = dynamic(
  () => import("@/components/particles-background"),
  { ssr: false }
);

export default function LazyParticles() {
  return <ParticlesBackground />;
}
