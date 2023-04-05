import React from "react";
// import pokemon_img from "../assets/pokemon.png";

const Profile = (props) => {
  return (
    <div className="flex flex-col sm:flex-row gap-4 sm:gap-12 sm:items-center mt-4 sm:mt-8">
      <div className="bg-gray-100 p-4 w-max rounded-[28px] border-2 border-gray-200">
        <img className="w-44" src={props.img} alt={`${props.name}'s Picture`} />
      </div>
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-bold capitalize">{props.name}</h1>
        <div className="flex gap-4">
          <p className="space-x-2">
            {" "}
            <span className="text-gray-400">Height</span> <b>{props.height}</b>
          </p>
          <p className="space-x-2">
            {" "}
            <span className="text-gray-400">Weight</span>
            <b>{props.weight}</b>
          </p>
        </div>
        <h2 className="font-bold mt-2">Types</h2>
        <div className="flex gap-4 items-center mt-1">
          {props.types.map((type) => (
            <div
              key={type.type.name}
              className="px-6 py-[6px] bg-gray-100 flex justify-center items-center rounded-[28px] border-2 border-gray-200"
            >
              <span className="capitalize text-gray-500 font-medium">
                {type.type.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Profile;

/*





*/
