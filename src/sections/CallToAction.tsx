import React, { useRef, type ComponentRef } from "react";
import CutCornerButton from "../components/CutCornerButton";
import Hexagon from "../components/Hexagon";
import Circle from "../components/Circle";
import { motion, useScroll, useTransform } from "motion/react";

const CallToAction = () => {
  const sectionRef = useRef<ComponentRef<"section">>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const rotate = useTransform(scrollYProgress, [0, 1], [45, -45]);
  return (
    <section ref={sectionRef} className="overflow-hidden py-60">
      <div className="container">
        <div className="relative">
          <div className="custom-center absolute">
            <Hexagon className="size-[700px]" size={700} />
          </div>
          <div className="custom-center absolute">
            <Hexagon
              className="size-[1100px]"
              size={1100}
              reverse
              duration={50}
            />
          </div>
          <div className="custom-center absolute">
            <Circle className="absolute -top-[400px] left-0" animate>
              <motion.img
                src="/assets/images/cuboid.png"
                alt="cuboid object"
                className="size-[140px]"
                style={{
                  rotate: rotate,
                }}
              />
            </Circle>
          </div>
          <div className="custom-center absolute">
            <Circle className="absolute -left-[600px] -top-[70px]" animate>
              <motion.img
                src="/assets/images/cylinder.png"
                alt="cuboid object"
                className="size-[140px]"
                style={{
                  rotate,
                }}
              />
            </Circle>
          </div>
          <h2 className="text-center font-heading text-4xl font-black md:text-5xl lg:text-6xl">
            Ready to <span className="block">get started?</span>
          </h2>
          <p className="mx-auto mt-8 max-w-sm text-center text-xl text-zinc-400 lg:text-2xl">
            Start building using blockchain technology, with Blockforge
          </p>
          <div className="mt-12 flex justify-center">
            <CutCornerButton>Get Started</CutCornerButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
