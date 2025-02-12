// Animation
import useGsap from "../hooks/useGsap";

// Data
import modules from "../data/modules";

// Images
import successIcon from "../assets/images/icons/success.svg";

const ModulesList = () => {
  const animate = useGsap();

  return (
    <ol className="space-y-5">
      {modules.map((module, index) => (
        <li
          ref={animate({ y: 50, scale: 0.9, delay: 0.1 * (index + 1) })}
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
