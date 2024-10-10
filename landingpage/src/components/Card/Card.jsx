import React from "react";
import profile from "./images/image-victor.jpg";
import bgTop from "./images/bg-pattern-card.svg";
let data = [
  {
    id: 1,
    name: "Victor Crest",
    age: "26",
    city: "London",
    followers: "80K",
    likes: "803K",
    photos: "1.4K",
    profileImage: profile,
  },
];

export default function Card() {
  return (
    <div className="flex flex-col h-screen w-screen justify-center items-center bg-teal-400">
      {data.map((item) => (
        <div
          key={item.id}
          className="flex flex-col shadow-xl rounded-2xl overflow-hidden w-64 items-center bg-white justify-center"
        >
          <img src={bgTop} alt="" className="w-full h-24 object-fill" />
          <img
            src={item.profileImage}
            alt={item.name}
            className="rounded-full h-24 w-24 border-4 border-white -mt-12"
          />
          <div className="text-center mt-4">
            <p className="text-lg font-bold">
              {item.name} <span className="text-gray-50">{item.age}</span>
            </p>
            <p className="text-gray-500">{item.city}</p>
          </div>

          <hr className="border-gray-300 w-full my-4" />

          <div className="flex justify-around w-full p-4">
            <div className="text-center">
              <p className="font-bold">{item.followers}</p>
              <p className="text-gray-500 text-xs">Followers</p>
            </div>
            <div className="text-center">
              <p className="font-bold">{item.likes}</p>
              <p className="text-gray-500 text-xs">Likes</p>
            </div>
            <div className="text-center">
              <p className="font-bold">{item.photos}</p>
              <p className="text-gray-500 text-xs">Post</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
