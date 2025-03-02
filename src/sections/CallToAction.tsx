import { useRef, type ComponentRef, lazy } from "react";
import { motion, useScroll, useTransform } from "motion/react";
const CutCornerButton = lazy(() => import("../components/CutCornerButton"));
const Hexagon = lazy(() => import("../components/Hexagon"));
const Circle = lazy(() => import("../components/Circle"));

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
                src="/assets/images/cuboid.webp"
                alt="cuboid object"
                className="size-[140px]"
                loading="lazy"
                decoding="async"
                style={{
                  rotate: rotate,
                }}
              />
            </Circle>
          </div>
          <div className="custom-center absolute">
            <Circle className="absolute -top-[70px] -left-[600px]" animate>
              <motion.img
                src="/assets/images/cylinder.webp"
                alt="cuboid object"
                className="size-[140px]"
                loading="lazy"
                decoding="async"
                style={{
                  rotate,
                }}
              />
            </Circle>
          </div>
          <h2 className="font-heading text-center text-4xl font-black md:text-5xl lg:text-6xl">
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
