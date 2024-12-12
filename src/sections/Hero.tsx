import { motion, useScroll, useTransform } from "motion/react";
import Circle from "../components/Circle";
import CutCornerButton from "../components/CutCornerButton";
import Hexagon from "../components/Hexagon";
import { useRef, type ComponentRef } from "react";

const Hero = () => {
  const icosahedrantRef = useRef<ComponentRef<"div">>(null);
  const cubeRef = useRef<ComponentRef<"img">>(null);
  const torusRef = useRef<ComponentRef<"img">>(null);
  const cuboidRef = useRef<ComponentRef<"img">>(null);

  const { scrollYProgress: cuboidScrollYProgress } = useScroll({
    target: cuboidRef,
    offset: ["start end", "end start"],
  });

  const { scrollYProgress: torusScrollYProgress } = useScroll({
    target: torusRef,
    offset: ["start end", "end start"],
  });

  const { scrollYProgress: cubeScrollYProgress } = useScroll({
    target: cubeRef,
    offset: ["start end", "end start"],
  });

  const { scrollYProgress } = useScroll({
    target: icosahedrantRef,
    offset: ["start end", "end start"],
  });

  const icosahedrantRotate = useTransform(scrollYProgress, [0, 1], [30, -45]);
  const cubeRotate = useTransform(cubeScrollYProgress, [0, 1], [100, -45]);
  const torusRotate = useTransform(torusScrollYProgress, [0, 1], [20, -20]);
  const cuboidRotate = useTransform(cuboidScrollYProgress, [0, 1], [20, -20]);
  return (
    <section className="overflow-x-clip py-24 md:py-52">
      <div className="container">
        <p className="text-center font-extrabold uppercase tracking-wider text-zinc-500">
          Introducing Backforge
        </p>
        <h1 className="mx-auto mt-4 max-w-3xl text-center font-heading text-5xl font-black md:text-6xl lg:text-7xl">
          The future of blockchain is here.
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-center text-xl text-zinc-400 md:text-2xl">
          Backgorge is pioneering smart contract integrity with cutting-edge
          data solutions
        </p>
        <div className="mt-10 flex justify-center">
          <CutCornerButton>Get Started</CutCornerButton>
        </div>
        <div className="mt-24 flex justify-center">
          <div className="relative z-0 inline-flex">
            <div className="custom-center absolute">
              <Hexagon className="size-[1100px]" size={1100} />
            </div>
            <div className="custom-center absolute">
              <Hexagon
                className="size-[1800px]"
                size={1800}
                reverse
                duration={60}
              />
            </div>
            <div className="custom-center absolute">
              <Circle animate className="absolute -top-[900px] left-[200px]">
                <motion.img
                  src="/assets/images/cube.png"
                  alt="cube 3d image"
                  className="size-[140px]"
                  ref={cubeRef}
                  style={{
                    rotate: cubeRotate,
                  }}
                />
              </Circle>
            </div>
            <div className="custom-center absolute">
              <Circle className="absolute left-[200px] top-[270px]">
                <img
                  src="/assets/images/cuboid.png"
                  alt="cuboid 3d image"
                  className="size-[140px]"
                  loading="lazy"
                  decoding="async"
                />
              </Circle>
            </div>
            <div className="custom-center absolute">
              <Circle animate className="absolute left-[200px] top-[270px]">
                <motion.img
                  src="/assets/images/cuboid.png"
                  alt="cuboid 3d image"
                  className="size-[140px]"
                  ref={cuboidRef}
                  style={{
                    rotate: cuboidRotate,
                  }}
                />
              </Circle>
            </div>
            <div className="custom-center absolute">
              <Circle className="absolute -left-[600px] -top-[80px]">
                <motion.img
                  src="/assets/images/torus.png"
                  alt="torus 3d image"
                  className="size-[140px]"
                  ref={torusRef}
                  style={{
                    rotate: torusRotate,
                  }}
                />
              </Circle>
            </div>
            <motion.div
              style={{ rotate: icosahedrantRotate }}
              className="inline-flex"
              ref={icosahedrantRef}
            >
              <img
                className="custom-center absolute -z-10 w-[calc(100%_+_100px)] max-w-none brightness-[4%] hue-rotate-[240deg] saturate-[10%]"
                src="/assets/images/icosahedron.png"
                alt="icosahedron"
                fetchPriority="high"
              />
              <img
                src="/assets/images/icosahedron.png"
                alt="Icosahedron 3d Image"
                className="w-[500px]"
                fetchPriority="low"
              />
            </motion.div>
          </div>
        </div>
        <div className="mt-40 flex flex-col items-center justify-center gap-4 md:mt-80">
          <div className="inline-flex h-10 w-5 justify-center rounded-full pt-2 outline outline-[6px] outline-fuchsia-500/10">
            <motion.div
              animate={{
                translateY: 12,
                opacity: 0.2,
              }}
              transition={{
                duration: 2,
                ease: "linear",
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="h-3 w-1 rounded-full bg-fuchsia-500"
            />
          </div>
          <p className="font-extrabold uppercase tracking-wider text-zinc-500">
            Scroll to learn more
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
