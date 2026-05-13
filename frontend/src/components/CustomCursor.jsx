import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e) => {
      if (e.target.closest('a, button, .cursor-pointer')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full border-2 border-[#7F5AF0] pointer-events-none z-[9999]"
        animate={{
          x: mousePos.x - 16,
          y: mousePos.y - 16,
          scale: isHovering ? 2.5 : 1,
          borderColor: isHovering ? '#00D9FF' : '#7F5AF0',
          backgroundColor: isHovering ? 'rgba(127, 90, 240, 0.1)' : 'rgba(127, 90, 240, 0)',
        }}
        transition={{ type: 'spring', damping: 25, stiffness: 250, mass: 0.5 }}
      />
      <motion.div
        className="fixed top-0 left-0 w-1.5 h-1.5 bg-[#00D9FF] rounded-full pointer-events-none z-[9999] shadow-[0_0_10px_#00D9FF]"
        animate={{
          x: mousePos.x - 3,
          y: mousePos.y - 3,
          scale: isHovering ? 0 : 1,
        }}
        transition={{ type: 'spring', damping: 20, stiffness: 500, mass: 0.1 }}
      />
    </>
  );
};

export default CustomCursor;
