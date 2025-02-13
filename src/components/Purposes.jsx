// Animation
import useGsap from "../hooks/useGsap";

// Data
import purposes from "../data/purposes";

// Images
import polygonIcon from "../assets/images/icons/polygon.svg";

const Purposes = () => {
  const animate = useGsap();

  return (
    <ol className="grid grid-cols-1 gap-4 xs:grid-cols-2 sm:gap-5 md:grid-cols-3">
      {purposes.map(({ title, bg, color }, index) => (
        <li
          key={index}
          style={{
            background: `${bg}${bg.startsWith("url") ? ", #292a31" : ""}`,
            color,
          }}
          ref={animate({ y: 50, scale: 0.9, delay: 0.1 * (index + 1) })}
          className="flex flex-col justify-between gap-5 relative overflow-hidden min-h-52 !bg-cover !bg-no-repeat p-6 rounded-3xl sm:p-8"
        >
          {/* Index */}
          <span className="text-xl font-semibold sm:text-2xl md:text-3xl">
            0{index + 1}.
          </span>

          {/* Item title */}
          <h3 className="z-10 font-semibold text-lg">{title}</h3>

          {/* Polygon */}
          <img
            width={192}
            height={192}
            src={polygonIcon}
            alt="Polygon icon"
            className="absolute size-40 opacity-30 -top-10 -right-10 sm:-top-14 sm:-right-14 sm:size-48"
          />

          {/* Text overlay */}
          {bg.startsWith("url") && (
            <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-black" />
          )}
        </li>
      ))}
    </ol>
  );
};

export default Purposes;
