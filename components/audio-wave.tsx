// components/audio-wave.tsx

import { cn } from "@/lib/utils";

interface AudioWaveProps {
  className?: string;
}

export const AudioWave = ({ className }: AudioWaveProps) => {
  return (
    <div className={cn("wave-container", className)}>
      {[...Array(30)].map((_, i) => (
        <div
          key={i}
          className="bar-wave"
          style={{
            animationDelay: `${i * 0.05}s`,
          }}
        />
      ))}
    </div>
  );
};
