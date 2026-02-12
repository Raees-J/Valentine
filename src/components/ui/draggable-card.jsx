import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

export const DraggableCardContainer = ({ children, className }) => {
  return (
    <div className={`relative ${className}`}>
      {children}
    </div>
  );
};

export const DraggableCardBody = ({ children, className }) => {
  const [isDragging, setIsDragging] = useState(false);
  const dragRef = useRef(null);

  return (
    <motion.div
      ref={dragRef}
      drag
      dragConstraints={{ left: -200, right: 200, top: -200, bottom: 200 }}
      dragElastic={0.1}
      whileDrag={{ scale: 1.05, cursor: "grabbing" }}
      whileHover={{ scale: 1.02 }}
      onDragStart={() => setIsDragging(true)}
      onDragEnd={() => setIsDragging(false)}
      className={`cursor-grab ${className}`}
      style={{ touchAction: "none" }}
    >
      {children}
    </motion.div>
  );
};
