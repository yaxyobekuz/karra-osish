import { useEffect, useRef } from "react";

// Gsap
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

// Data
import information from "../data/information";

const Information = () => {
  const listRef = useRef([]);

  useEffect(() => {
    listRef.current.forEach((item, index) => {
      const isEven = index % 2;

      gsap.from(item, {
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
        x: isEven ? 100 : -100,
        scrollTrigger: {
          trigger: item,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });
    });
  }, []);

  return (
    <ol className="space-y-8">
      {information.map((info, index) => (
        <li
          key={index}
          className="flex items-center even:justify-end"
          ref={(el) => (listRef.current[index] = el)}
        >
          <div className="flex items-center gap-5 bg-white max-w-3xl w-full h-20 px-8 rounded-3xl">
            <span className="text-3xl font-semibold">0{index + 1}.</span>
            <h3 className="text-xl font-medium">{info}</h3>
          </div>
        </li>
      ))}
    </ol>
  );
};

export default Information;
