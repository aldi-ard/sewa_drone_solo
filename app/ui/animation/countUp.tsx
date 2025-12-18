"use client"
import { useEffect, useState } from "react";
type CountProps ={
    end : number
    duration? : number
    decimals? : number
}

const CountUp = ({ end, duration = 3000, decimals = 0 } : CountProps) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const frameRate = 16;
    const totalFrames = duration / frameRate;
    const increment = end / totalFrames;

    let currentFrame = 0;

    const counter = setInterval(() => {
      currentFrame++;
      start += increment;

      if (currentFrame >= totalFrames) {
        setCount(end);
        clearInterval(counter);
      } else {
        setCount(start);
      }
    }, frameRate);

    return () => clearInterval(counter);
  }, [end, duration]);

  return (
    <span>
      {count.toFixed(decimals)}
    </span>
  );
};

export default CountUp;
