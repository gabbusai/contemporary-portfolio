import { motion, MotionValue } from 'motion/react';
import React from 'react';

// Define the GridBg component
type GridBgProps = {
  cellSize?: number; // Optional prop to set the size of the grid cells
  children?: React.ReactNode; // Optional prop to allow children elements
  backgroundSize: MotionValue<string>| string; // MotionValue for dynamic background size
};

function GridBg({backgroundSize }: GridBgProps) {
  return (
    <motion.div
      className="
        absolute
        top-0
        left-0
        w-full
        h-full
        aspect-video
      "
      style={{
        backgroundImage: `
          linear-gradient(to right, rgba(255, 255, 255, 0.1) 3px, transparent 2px),
          linear-gradient(to bottom, rgba(255, 255, 255, 0.1) 3px, transparent 2px)
        `,
        backgroundSize:backgroundSize 
      }}
    >
    </motion.div>
  );
};

export default GridBg;