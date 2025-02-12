import { useEffect, useRef } from "react";

// Gsap
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

// Data
import information from "../data/information";

const Purposes = () => {
  const listRef = useRef([]);

  useEffect(() => {
    listRef.current.forEach((item, index) => {
      gsap.from(item.querySelector("h3"), {
        opacity: 0,
        y: 40,
        delay: 0.05 * (index + 1),
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
    <ol className="grid grid-cols-3 gap-5">
      {information.map((info, index) => (
        <li
          key={index}
          ref={(el) => (listRef.current[index] = el)}
          className="flex flex-col justify-between gap-5 min-h-52 bg-[#027FCC] p-8 rounded-3xl"
        >
          <span className="text-3xl font-semibold text-white">
            0{index + 1}.
          </span>

          {/* Details */}
          <div className="space-y-3.5">
            {/* Item title */}
            <h3 className="font-semibold text-lg text-white">{info}</h3>
          </div>
        </li>
      ))}
    </ol>
  );
};

export default Purposes;
