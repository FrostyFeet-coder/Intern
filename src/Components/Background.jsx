import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";

const BackgroundEffect = () => {
  const bgRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (event) => {
      const { clientX, clientY } = event;
      const xPercent = (clientX / window.innerWidth) * 100;
      const yPercent = (clientY / window.innerHeight) * 100;

      gsap.to(bgRef.current, {
        backgroundPosition: `${xPercent}% ${yPercent}%`,
        duration: 0.5,
        ease: "power3.out",
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      ref={bgRef}
      className="absolute inset-0 bg-cover bg-no-repeat"
      style={{
        backgroundImage: 
          "url(https://images.unsplash.com/photo-1715987587174-b8be6a743337?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHx8)"
        ,
      }}
    />
  );
};

export default BackgroundEffect;
