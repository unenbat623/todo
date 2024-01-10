"use client";

import { useState } from "react";

export default function Home() {
  const [count, setCount] = useState<number>(5);

  const add = () => {
    setCount((prev) => prev + 1);
  };
  const sub = () => {
    setCount((prev) => prev - 1);
  };

  return (
    <main className="flex flex-col w-full h-screen items-center mt-10 ">
      <div className="border-b-2 border-slate-500">
        <h1 className=" text-cyan-800 flex justify-center">Todo Application</h1>
        <p className="text-xl flex justify-center">Count: {count}</p>
        <div>
          <button
            className="m-2 p-2 border-b-2 bg-green-300 rounded-lg"
            onClick={add}
          >
            нэмэх
          </button>
          <button
            className="m-2 p-2 border-b-2 bg-red-300 rounded-lg"
            onClick={sub}
          >
            хасах
          </button>
        </div>
      </div>
      <div className=" flex-col w-full h-screen">
        <div className=""></div>
        <div></div>
        <div></div>
      </div>
    </main>
  );
}
