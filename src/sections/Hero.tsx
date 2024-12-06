import Circle from "../components/Circle";
import CutCornerButton from "../components/CutCornerButton";
import Hexagon from "../components/Hexagon";

const Hero = () => {
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
              <Hexagon className="size-[1100px]" />
            </div>
            <div className="custom-center absolute">
              <Hexagon className="size-[1800px]" />
            </div>
            <div className="custom-center absolute">
              <Circle className="absolute -top-[900px] left-[200px]">
                <img
                  src="/assets/images/cube.png"
                  alt="cube 3d image"
                  className="size-[140px]"
                />
              </Circle>
            </div>
            <div className="custom-center absolute">
              <Circle className="absolute left-[200px] top-[270px]">
                <img
                  src="/assets/images/cuboid.png"
                  alt="cuboid 3d image"
                  className="size-[140px]"
                />
              </Circle>
            </div>
            <div className="custom-center absolute">
              <Circle className="absolute left-[200px] top-[270px]">
                <img
                  src="/assets/images/cuboid.png"
                  alt="cuboid 3d image"
                  className="size-[140px]"
                />
              </Circle>
            </div>
            <div className="custom-center absolute">
              <Circle className="absolute -left-[600px] -top-[80px]">
                <img
                  src="/assets/images/torus.png"
                  alt="torus 3d image"
                  className="size-[140px]"
                />
              </Circle>
            </div>
            <img
              className="custom-center absolute -z-10 w-[calc(100%_+_100px)] max-w-none brightness-[4%] hue-rotate-[240deg] saturate-[10%]"
              src="/assets/images/icosahedron.png"
              alt=""
            />
            <img
              src="/assets/images/icosahedron.png"
              alt="Icosahedron 3d Image"
              className="w-[500px]"
            />
          </div>
        </div>
        <div className="mt-40 flex flex-col items-center justify-center gap-4 md:mt-80">
          <div className="inline-flex h-10 w-5 justify-center rounded-full pt-2 outline outline-[6px] outline-fuchsia-500/10">
            <div className="h-3 w-1 rounded-full bg-fuchsia-500"></div>
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
