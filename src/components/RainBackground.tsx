import "../styles/RainBackground.css"
import { useMemo } from "react"
import type{ ReactNode } from "react";


interface Raindrop {
  id: number;
  left: number; // position horizontale en %
  delay: number; // décalage de départ en s
  duration: number; // vitesse de chute en s
  height: number; // longueur de la goutte en px
  opacity: number;
}

// Génère un tableau de gouttes avec des valeurs aléatoires,
// pour que la pluie ne se répète pas de façon trop régulière.
function generateRaindrops(count: number): Raindrop[] {
  const drops: Raindrop[] = [];
  for (let i = 0; i < count; i++) {
    drops.push({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 4,
      duration: 0.45 + Math.random() * 0.6,
      height: 12 + Math.random() * 20,
      opacity: 0.4 + Math.random() * 0.4,
    });
  }
  return drops;
}

export interface RainProps {
  children?: ReactNode;
  dropCount?: number;
}

export function RainBackground({ children, dropCount = 140 }: RainProps) {
  const drops = useMemo(() => generateRaindrops(dropCount), [dropCount]);

  return (
    <div className="rain">
      <div className="rain__layer" aria-hidden="true">
        {drops.map((drop) => (
          <span
            key={drop.id}
            className="rain__drop"
            style={{
              left: `${drop.left}%`,
              height: `${drop.height}px`,
              opacity: drop.opacity,
              animationDelay: `${drop.delay}s`,
              animationDuration: `${drop.duration}s`,
            }}
          />
        ))}
      </div>

      <div className="rain__content">{children}</div>
    </div>
  );
}