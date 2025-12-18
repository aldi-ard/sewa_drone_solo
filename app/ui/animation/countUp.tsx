"use client";
import { useEffect, useRef, useState } from "react";

type CountProps = {
  end: number;
  duration?: number;
  decimals?: number;
};

const CountUp = ({
  end,
  duration = 1500,
  decimals = 0,
}: CountProps) => {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const ref = useRef<HTMLSpanElement | null>(null);

  // 1️⃣ Observe when visible
  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasStarted(true);
          observer.disconnect(); // jalan sekali
        }
      },
      { threshold: 0.4 }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  // 2️⃣ Start counting only when visible
  useEffect(() => {
    if (!hasStarted) return;

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
  }, [hasStarted, end, duration]);

  const formatted =
    decimals > 0
      ? count.toFixed(decimals)
      : Math.round(count).toString();

  return <span ref={ref}>{formatted}</span>;
};

export default CountUp;
