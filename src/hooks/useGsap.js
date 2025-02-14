import { useRef, useEffect } from "react";

// Gsap
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const useGsap = () => {
  const elementsRef = useRef([]);

  useEffect(() => {
    elementsRef.current.forEach(({ el, options, start }) => {
      if (el) {
        gsap.from(el, {
          opacity: 0,
          duration: 0.8,
          delay: 0.1,
          ease: "power2.out",
          ...options,
          scrollTrigger: {
            trigger: el,
            start: `top ${start}%`,
            toggleActions: "play none none none",
          },
        });
      }
    });

    return () => ScrollTrigger.getAll().forEach((st) => st.kill());
  }, []);

  const addAnimation = (options, start) => (el) => {
    // if (el && !elementsRef.current.some((e) => e.el === el)) {
    //   elementsRef.current.push({ el, options, start });
    // }
  };

  return (options, start = 85) => addAnimation(options, start);
};

export default useGsap;
