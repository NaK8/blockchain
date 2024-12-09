import { motion } from "motion/react";
import React from "react";
import { twMerge } from "tailwind-merge";

const testimonials = [
  {
    text: "The user experience is phenominal, and the support team is always there to help. Highly recomended",
    name: "Erica Wyatt",
    title: "Product Manager - Blocklink",
    image: "/assets/images/avatar-erica-wyatt.jpg",
  },
  {
    text: "Our productivity has skyrocketed since we start using blockforge. It's game changer for our team",
    name: "Noel Baldwin",
    title: "Lead Developer - Bitbridge",
    image: "/assets/images/avatar-noel-baldwin.jpg",
  },
  {
    text: "The integration process was seamless, and the performance improvement are beyond our expectation",
    name: "Harry Bender",
    title: "CTO - CryptoSolutions",
    image: "/assets/images/avatar-harry-bender.jpg",
  },
];

const Testimonials = () => {
  return (
    <section className="bg-zinc-800 py-32">
      <div className="container">
        <div className="grid grid-cols-1 gap-16 md:grid-cols-2 md:gap-8 lg:grid-cols-3 lg:gap-12">
          {testimonials.map((testimonial, index) => (
            <motion.blockquote
              initial={{
                opacity: 0,
                y: 24,
              }}
              viewport={{
                once: true,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: index * 0.5,
                ease: "easeInOut",
                duration: 1,
              }}
              key={crypto.randomUUID()}
              className={twMerge(index === 2 && "md:hidden lg:block")}
            >
              <p className="font-heading text-3xl font-black lg:text-4xl">
                &ldquo; {testimonial.text} &rdquo;
              </p>
              <cite className="mt-8 block">
                <div className="flex items-center gap-3">
                  <div>
                    <div
                      className="size-16 rounded-full bg-zinc-700 bg-cover"
                      style={{ backgroundImage: `url(${testimonial.image})` }}
                    ></div>
                  </div>
                  <div>
                    <div className="text-lg font-black not-italic">
                      {testimonial.name}
                    </div>
                    <div className="not-italic text-zinc-400">
                      {testimonial.title}
                    </div>
                  </div>
                </div>
              </cite>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
