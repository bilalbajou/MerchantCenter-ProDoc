import { useEffect, useRef, useState } from 'react';

/**
 * CustomCursor - A high-performance, customizable cursor component
 * 
 * @param {Object} props
 * @param {number} props.size - Size of the cursor in pixels (default: 20)
 * @param {string} props.color - Color of the cursor (default: '#000')
 * @param {boolean} props.trailing - Enable trailing effect (default: false)
 * @param {boolean} props.scaleOnHover - Scale cursor on hover (default: true)
 * @param {string} props.magnetTargetSelector - CSS selector for magnetic targets (default: '')
 * @param {boolean} props.showOnDesktopOnly - Only show on desktop devices (default: true)
 */
const CustomCursor = ({
  size = 20,
  color = '#000',
  trailing = false,
  scaleOnHover = true,
  magnetTargetSelector = '',
  showOnDesktopOnly = true,
}) => {
  const cursorRef = useRef(null);
  const trailingRef = useRef(null);
  const animationFrameRef = useRef(null);
  const positionRef = useRef({ x: 0, y: 0 });
  const targetPositionRef = useRef({ x: 0, y: 0 });
  const isHoveringRef = useRef(false);
  const isMagnetActiveRef = useRef(false);
  const magnetTargetRef = useRef(null);
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Detect touch device
  useEffect(() => {
    const checkTouchDevice = () => {
      const hasTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
      setIsTouchDevice(hasTouch);
      
      if (hasTouch && showOnDesktopOnly) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };

    checkTouchDevice();
    window.addEventListener('resize', checkTouchDevice);
    return () => window.removeEventListener('resize', checkTouchDevice);
  }, [showOnDesktopOnly]);

  // Update cursor position using requestAnimationFrame for smooth animation
  useEffect(() => {
    if (!isVisible || !cursorRef.current) return;

    const updateCursor = () => {
      const cursor = cursorRef.current;
      const trailing = trailingRef.current;

      // Smooth interpolation for main cursor
      positionRef.current.x += (targetPositionRef.current.x - positionRef.current.x) * 0.15;
      positionRef.current.y += (targetPositionRef.current.y - positionRef.current.y) * 0.15;

      if (cursor) {
        cursor.style.transform = `translate(${positionRef.current.x}px, ${positionRef.current.y}px)`;
        
        // Scale on hover
        if (scaleOnHover) {
          const scale = isHoveringRef.current ? 1.5 : 1;
          cursor.style.transform += ` scale(${scale})`;
        }
      }

      // Trailing cursor effect
      if (trailing && trailingRef.current) {
        const trailingX = positionRef.current.x - (positionRef.current.x - targetPositionRef.current.x) * 0.3;
        const trailingY = positionRef.current.y - (positionRef.current.y - targetPositionRef.current.y) * 0.3;
        trailingRef.current.style.transform = `translate(${trailingX}px, ${trailingY}px)`;
      }

      animationFrameRef.current = requestAnimationFrame(updateCursor);
    };

    animationFrameRef.current = requestAnimationFrame(updateCursor);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [isVisible, trailing, scaleOnHover]);

  // Mouse move handler
  useEffect(() => {
    if (!isVisible) return;

    const handleMouseMove = (e) => {
      targetPositionRef.current.x = e.clientX;
      targetPositionRef.current.y = e.clientY;

      // Check for hover states
      const hoverElements = document.querySelectorAll('a, button, [role="button"], .hover-target');
      let isHovering = false;

      hoverElements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (
          e.clientX >= rect.left &&
          e.clientX <= rect.right &&
          e.clientY >= rect.top &&
          e.clientY <= rect.bottom
        ) {
          isHovering = true;
        }
      });

      isHoveringRef.current = isHovering;

      // Magnetic effect
      if (magnetTargetSelector) {
        const magnetTargets = document.querySelectorAll(magnetTargetSelector);
        let closestTarget = null;
        let closestDistance = Infinity;

        magnetTargets.forEach((target) => {
          const rect = target.getBoundingClientRect();
          const centerX = rect.left + rect.width / 2;
          const centerY = rect.top + rect.height / 2;
          const distance = Math.sqrt(
            Math.pow(e.clientX - centerX, 2) + Math.pow(e.clientY - centerY, 2)
          );

          if (distance < 100 && distance < closestDistance) {
            closestDistance = distance;
            closestTarget = target;
          }
        });

        if (closestTarget) {
          const rect = closestTarget.getBoundingClientRect();
          const centerX = rect.left + rect.width / 2;
          const centerY = rect.top + rect.height / 2;
          
          // Magnetic pull effect
          const pullStrength = 0.3;
          targetPositionRef.current.x += (centerX - e.clientX) * pullStrength;
          targetPositionRef.current.y += (centerY - e.clientY) * pullStrength;
          
          isMagnetActiveRef.current = true;
          magnetTargetRef.current = closestTarget;
        } else {
          isMagnetActiveRef.current = false;
          magnetTargetRef.current = null;
        }
      }
    };

    const handleMouseEnter = () => {
      if (cursorRef.current) {
        cursorRef.current.style.opacity = '1';
      }
      if (trailingRef.current) {
        trailingRef.current.style.opacity = '0.5';
      }
    };

    const handleMouseLeave = () => {
      if (cursorRef.current) {
        cursorRef.current.style.opacity = '0';
      }
      if (trailingRef.current) {
        trailingRef.current.style.opacity = '0';
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isVisible, magnetTargetSelector]);

  // Hide cursor on keyboard navigation (accessibility)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Tab') {
        if (cursorRef.current) {
          cursorRef.current.style.display = 'none';
        }
        if (trailingRef.current) {
          trailingRef.current.style.display = 'none';
        }
        document.body.style.cursor = 'auto';
      }
    };

    const handleMouseDown = () => {
      if (cursorRef.current) {
        cursorRef.current.style.display = 'block';
      }
      if (trailingRef.current) {
        trailingRef.current.style.display = 'block';
      }
      document.body.style.cursor = 'none';
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('mousedown', handleMouseDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('mousedown', handleMouseDown);
    };
  }, []);

  if (!isVisible) return null;

  const cursorStyle = {
    width: `${size}px`,
    height: `${size}px`,
    backgroundColor: color,
    borderRadius: '50%',
    position: 'fixed',
    top: 0,
    left: 0,
    pointerEvents: 'none',
    zIndex: 9999,
    mixBlendMode: 'difference',
    transition: 'opacity 0.3s ease',
    transform: 'translate(-50%, -50%)',
  };

  const trailingStyle = {
    ...cursorStyle,
    width: `${size * 0.6}px`,
    height: `${size * 0.6}px`,
    opacity: 0.5,
    mixBlendMode: 'difference',
  };

  return (
    <>
      <div ref={cursorRef} style={cursorStyle} aria-hidden="true" />
      {trailing && <div ref={trailingRef} style={trailingStyle} aria-hidden="true" />}
    </>
  );
};

export default CustomCursor;

