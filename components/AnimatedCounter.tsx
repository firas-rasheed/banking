"use client";
import CountUp from "react-countup";
import React from "react";

const AnimatedCounter = ({ amount }: { amount: number }) => {
  return (
    <div className="w-full">
      <CountUp decimal="," duration={2} decimals={2} prefix="$" end={amount} />
    </div>
  );
};

export default AnimatedCounter;
