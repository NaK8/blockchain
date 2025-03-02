import { useEffect, useState, lazy } from "react";
const Card = lazy(() => import("../components/Card"));
import { twMerge } from "tailwind-merge";

const cardData = [
  {
    image: "/assets/images/pill.webp",
    title: "Revolutionary Blockchain API",
    description:
      "Effortlessly integrate and manage blockchain data with ou cutting-edge API, designed for seamless connectivity.",
    color: "fuchsia",
  },
  {
    image: "/assets/images/cuboid.webp",
    title: "Decentralized Data Solutions",
    description:
      "Empower your applications with decentralized data solutions, ensuring security and transparency at every step.",
    color: "lime",
  },
  {
    image: "/assets/images/cube.webp",
    title: "Next-Gen Smart Contracts",
    description:
      "Unlock the potential of next-gen smart contracts with our robust and scalable API, tailored for modern blockchain needs.",
    color: "cyan",
  },
  {
    image: "/assets/images/icosahedron.webp",
    title: "Seamless Blockchain Integration",
    description:
      "Integrate blockchain technology seamlessly into your projects, with minimal effort and maximum efficiency.",
    color: "violet",
  },
];

const FeaturesCards = () => {
  const [selectedCardIndex, setSelectedCardIndex] = useState<number>(0);
  const [isHovered, setIsHovered] = useState<boolean>(false);

  useEffect(() => {
    if (isHovered) return;
    const timeOut = setTimeout(() => {
      setSelectedCardIndex((curr) =>
        curr === cardData.length - 1 ? 0 : curr + 1,
      );
    }, 3000);

    return () => {
      clearTimeout(timeOut);
    };
  }, [selectedCardIndex]);
  return (
    <section className="overflow-x-clip py-24 md:-mt-28">
      <div className="container">
        <h2 className="font-heading text-center text-4xl font-black md:text-5xl lg:text-6xl">
          Discover the future of blockchain with Blockforge.
        </h2>
        <div className="mt-36 flex lg:mt-48">
          <div className="flex flex-none gap-8">
            {cardData.map((card, cardIndex) => (
              <div
                className="inline-flex transition-all duration-500"
                key={crypto.randomUUID()}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                style={{
                  transform: `translateX(calc((-100% - 2rem) * ${selectedCardIndex}))`,
                }}
              >
                <Card
                  key={crypto.randomUUID()}
                  color={card.color}
                  className="max-w-xs md:max-w-md"
                >
                  <div className="-mt-28 flex justify-center">
                    <div className="relative inline-flex">
                      <div className="absolute top-[calc(100%+16px)] h-4 w-full rounded-[100%] bg-zinc-950/70 transition duration-300 [mask-image:radial-gradient(closest-side,black,transparent)] group-hover:bg-zinc-950/30"></div>
                      <img
                        src={card.image}
                        loading="lazy"
                        decoding="async"
                        alt="pill image"
                        height={50}
                        width={50}
                        className="size-40 transition duration-300 group-hover:-translate-y-6"
                      />
                    </div>
                  </div>
                  <h3 className="font-heading mt-12 text-3xl font-black">
                    {card.title}
                  </h3>
                  <p className="mt-4 text-lg text-zinc-400">
                    {card.description}
                  </p>
                </Card>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-10 flex justify-center">
          <div className="inline-flex gap-4 rounded-full bg-zinc-950 p-2.5">
            {[
              cardData.map(({ title }, cardIndex) => (
                <div
                  key={title}
                  className={twMerge(
                    "size-2.5 cursor-pointer rounded-full bg-zinc-500",
                    cardIndex === selectedCardIndex && "bg-zinc-300",
                  )}
                  onClick={() => setSelectedCardIndex(cardIndex)}
                ></div>
              )),
            ]}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesCards;
