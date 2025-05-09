import { useEffect, useRef } from "react";

const XilaCursor = () => {
  const canvasRef = useRef(null);
  const trailRef = useRef([]);
  const animationRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const maxTrailLength = 100;

    const handleMouseMove = (e) => {
      trailRef.current.push({ x: e.clientX, y: e.clientY, time: Date.now() });

      // Garde seulement les 30 derniers points
      if (trailRef.current.length > maxTrailLength) {
        trailRef.current.shift();
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      trailRef.current.forEach((point) => {

        ctx.beginPath();
        ctx.arc(point.x, point.y, 3, 1, 20 * Math.PI);
        ctx.fillStyle = `rgba(0, 0, 255, 1)`;
        ctx.fill();
      });

      animationRef.current = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationRef.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        pointerEvents: "none",
        zIndex: 9999,
      }}
    />
  );
};

export default XilaCursor;
