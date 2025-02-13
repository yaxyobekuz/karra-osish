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
          key={module.id}
          className="bg-white space-y-4 p-4 rounded-3xl sm:p-6 md:space-y-6 md:p-8"
          ref={animate({ y: 50, scale: 0.9, delay: 0.1 * (index + 1) })}
        >
          {/* Top */}
          <div className="flex items-start gap-3 md:gap-5">
            <span className="text-xl font-semibold sm:text-2xl md:text-3xl">
              0{module.id}.
            </span>
            <h3 className="text-lg font-medium -mt-1 sm:mt-0 sm:text-xl md:text-2xl">
              {module.title}
            </h3>
          </div>

          {/* Purpose */}
          <p className="opacity-70 md:text-lg">{module.purpose}</p>

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
                <span className="md:text-lg">{point}</span>
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ol>
  );
};

export default ModulesList;
