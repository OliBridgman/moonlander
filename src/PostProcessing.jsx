import * as React from "react";

import {
  EffectComposer,
  Glitch,
  Bloom,
  Noise,
} from "@react-three/postprocessing";

import {
  BlendFunction,
  GlitchMode,
} from "postprocessing";

export default function PostProcessing() {
  return (
    <React.Suspense fallback={null}>
      <EffectComposer multisamping={0}>
        <Glitch
          delay={[1.5, 3.5]}
          duration={[0.1, 0.2]}
          strength={[0.05, 0.1]}
          mode={GlitchMode.SPORADIC}
          active
          ratio={0.5}
        />
        <Noise opacity={0.1} premultiply blendFunction={BlendFunction.NORMAL} />
        <Bloom
          intensity={0.5}
          luminanceSmoothing={0.025}
          luminanceThreshold={0.8}
        />
      </EffectComposer>
    </React.Suspense>
  );
}