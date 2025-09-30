import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", move);

    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <>
      <style>{`body { cursor: none; }`}</style>

      <div
        className="pointer-events-none fixed left-0 top-0 z-[100]
          size-10 -translate-x-1/2 -translate-y-1/2 rounded-full
           mix-blend-difference  shadow-lg 
          backdrop-saturate-100 transition-all
          duration-300 "
        style={{
          top: `${pos.y}px`,
          left: `${pos.x}px`,
          borderWidth: "1px",
          borderColor: "#ffffff70",
          transition: "background 0.2s ease-in-out",
        }}
      >
        <div className="absolute left-1/2 top-1/2 size-6 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white mix-blend-difference" />
      </div>
    </>
  );
}
