import React from "react";

const Stats = ({ stats }) => {
  return (
    <div>
      <h3 className="mt-4 mb-3 font-medium">Stats</h3>
      <div className="bg-gray-100 flex flex-col gap-3 px-6 py-4 rounded-[28px] border-2 border-gray-200">
        {stats.map((d) => {
          if (d.stat.name.split("-")[0] === "special") {
            let second = d.stat.name.split("-")[1];
            d.stat.name = "sp. " + second;
          }
          if (d.base_stat > 100) {
            d.base_stat = 100;
          }
          return (
            <div
              key={d.stat.name}
              className="flex justify-between items-center"
            >
              <p className="w-[18%]">{d.stat.name}</p>
              <div className="bg-gray-300 mx-6 h-4 rounded-full w-full">
                <div
                  style={{ marginRight: `calc(100% - ${d.base_stat}%)` }}
                  className="bg-teal-400 h-4 rounded-full"
                ></div>
              </div>
              <p>{d.base_stat}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Stats;
