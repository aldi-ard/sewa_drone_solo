import React from "react";
// import { milestones } from "../data/milestone";
import CountUp from "./animation/countUp";

const Milestone = () => {
  return (
    <section className="bg-fuchsia-600  md:py-26 py-16">
      <div className="container mx-auto text-white text-center">
        <h2 className="capitalize font-extrabold md:text-5xl md:mb-16 text-2xl">Perjalanan Drone Kami</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="p-4">
              <div className="text-6xl font-extrabold text-primary items-center justify-center inline-flex">
                <CountUp end={1958} /> <p className="text-6xl my-auto">+</p>
              </div>
              <div className="text-lg">Klien Telah Percaya</div>
            </div>
            <div className="p-4">
              <div className="text-6xl font-extrabold text-primary items-center justify-center inline-flex">
                <CountUp end={1885}/> <p className="text-6xl my-auto">+</p>
              </div>
              <div className="text-lg">Dokumentasi Selesai</div>
            </div>
            <div className="p-4">
              <div className="text-6xl font-extrabold text-primary items-center justify-center inline-flex">
                <CountUp end={22.9} decimals={1}/> <p className="text-6xl my-auto">K</p>
              </div>
              <div className="text-lg">Followers Instagram</div>
            </div>
            <div className="p-4">
              <div className="text-6xl font-extrabold text-primary items-center justify-center inline-flex">
                <CountUp end={4.8} decimals={1}/> <p className="text-6xl my-auto">+</p>
              </div>
              <div className="text-lg">All Time Rating</div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Milestone;
