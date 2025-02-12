import { useEffect, useRef } from "react";

// Gsap
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

// Data
import modules from "../data/modules";

// Images
import successIcon from "../assets/images/icons/success.svg";

const ModulesList = () => {
  const listRef = useRef([]);

  useEffect(() => {
    listRef.current.forEach((item) => {
      gsap.from(item, {
        opacity: 0,
        y: 100,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: item,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });
    });
  }, []);

  return (
    <ol className="space-y-5">
      {modules.map((module, index) => (
        <li
          ref={(el) => (listRef.current[index] = el)}
          className="bg-white space-y-6 p-8 rounded-3xl"
          key={module.id}
        >
          {/* Top */}
          <div className="flex items-start gap-5">
            <span className="text-3xl font-semibold">0{module.id}.</span>
            <h3 className="text-2xl font-medium mt-1">{module.title}</h3>
          </div>

          {/* Purpose */}
          <p className="text-lg opacity-70">{module.purpose}</p>

          {/* Points */}
          <ul className="space-y-3">
            {module.points.map((point) => (
              <li className="flex items-center gap-3.5" key={point}>
                <img
                  width={24}
                  height={24}
                  src={successIcon}
                  alt="Success icon"
                  className="size-6"
                />
                <span className="text-lg">{point}</span>
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ol>
  );
};

export default ModulesList;
