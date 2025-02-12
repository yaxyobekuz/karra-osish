import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// GSAP ScrollTrigger'ni ro‘yxatdan o'tkazamiz
gsap.registerPlugin(ScrollTrigger);

const useGsap = () => {
  const elementsRef = useRef([]); // Barcha elementlarni massivda saqlaymiz

  useEffect(() => {
    elementsRef.current.forEach(({ el, options }) => {
      if (el) {
        gsap.from(el, {
          opacity: 0,
          duration: 0.8,
          delay: 0.1,
          ease: "power2.out",
          ...options,
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        });
      }
    });

    return () => ScrollTrigger.getAll().forEach((st) => st.kill());
  }, []);

  const addAnimation = (options) => (el) => {
    if (el && !elementsRef.current.some((e) => e.el === el)) {
      elementsRef.current.push({ el, options });
    }
  };

  return (options) => addAnimation(options);
};

export default useGsap;
