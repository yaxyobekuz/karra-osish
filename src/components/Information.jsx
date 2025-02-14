// Data
import information from "../data/information";

const Information = () => {
  return (
    <ol className="space-y-6 sm:space-y-8">
      {information.map((info, index) => {
        const isEven = index % 2;
        return (
          <li key={index} className="flex items-center even:justify-end">
            <div className="flex items-center gap-4 bg-white max-w-3xl w-full h-20 px-4 rounded-2xl dark:bg-white/5 dark:border-2 dark:border-[#393939] xs:rounded-3xl xs:px-8 sm:gap-5">
              <span className="text-xl font-semibold sm:text-2xl md:text-3xl">
                0{index + 1}.
              </span>
              <h3 className="text-sm font-medium xs:text-base sm:text-lg md:text-xl">
                {info}
              </h3>
            </div>
          </li>
        );
      })}
    </ol>
  );
};

export default Information;
