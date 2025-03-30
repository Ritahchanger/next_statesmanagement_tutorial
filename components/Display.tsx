import React from "react";

import { useSelector } from "react-redux";

import { RootState } from "@/store/Store";

const Display = () => {


  const counter = useSelector((state : RootState) => state.counter.counter)

  return (
    <div className="mt-[2rem]">
      <h2 className="text-5xl font-semibold">COUNTER = {counter}</h2>
    </div>
  );
};

export default Display;
