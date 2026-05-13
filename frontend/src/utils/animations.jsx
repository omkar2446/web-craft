import { useEffect, useRef, useState } from 'react';

// Count-up hook — animates a number from 0 to target when it enters view
export function useCountUp(target, duration = 1500) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const numericTarget = parseFloat(target);
          const suffix = target.replace(/[\d.]/g, '');
          const startTime = performance.now();

          const tick = (now) => {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3); // ease out cubic
            const current = Math.floor(eased * numericTarget);
            setCount(current + suffix);
            if (progress < 1) requestAnimationFrame(tick);
            else setCount(target);
          };

          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target, duration]);

  return { ref, count };
}

// Split text — returns array of letter spans with stagger delay
export function SplitText({ text, className, baseDelay = 0 }) {
  return (
    <span className={className} style={{ display: 'inline-block' }}>
      {text.split('').map((char, i) => (
        <span
          key={i}
          style={{
            display: 'inline-block',
            animation: `letterReveal 0.5s ease forwards`,
            animationDelay: `${baseDelay + i * 0.04}s`,
            opacity: 0,
          }}
        >
          {char === ' ' ? '\u00A0' : char}
        </span>
      ))}
    </span>
  );
}

// Tilt card wrapper — adds mouse-follow 3D tilt effect
export function TiltCard({ children, className, style }) {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -8;
    const rotateY = ((x - centerX) / centerX) * 8;
    card.style.transform = `perspective(600px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
  };

  const handleMouseLeave = () => {
    if (cardRef.current) {
      cardRef.current.style.transform = 'perspective(600px) rotateX(0deg) rotateY(0deg) scale(1)';
    }
  };

  return (
    <div
      ref={cardRef}
      className={className}
      style={{ ...style, transition: 'transform 0.15s ease', willChange: 'transform' }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </div>
  );
}
