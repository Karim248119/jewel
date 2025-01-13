import React, { useRef } from "react";
import { IMGS } from "@/lib/imgs";
import Header from "../components/Header";
import Image from "next/image";
import { useInView } from "@/hooks/useInView";
import { motion } from "framer-motion";
import { toTop } from "@/lib/Animations";

export default function Awards() {
  const stats = [
    { value: "1M+", label: "Jewellry \n Piece Designed" },
    { value: "147+", label: "Worldwide \n Branches" },
    { value: "920K+", label: "Happy Clients" },
  ];
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef as React.RefObject<Element>, 0.5);
  return (
    <section
      ref={sectionRef}
      className="bg-dark text-light xl:h-[105vh] xl:p-20 xl:px-40 flex flex-col-reverse gap-5 xl:flex-row text-center xl:text-start"
    >
      <div className="xl:w-[20vw] xl:h-[95%] h-[40vh]">
        <motion.video
          {...toTop}
          animate={isInView && toTop.animate}
          src="/vid1.mp4"
          className=" w-full h-full object-cover"
          autoPlay
          loop
          muted
        ></motion.video>
      </div>
      <div className="xl:w-[40vw] h-[60vh] xl:block flex flex-col justify-center items-center xl:p-20 relative space-y-5 md:space-y-10 xl:space-y-0 p-5">
        <motion.div
          {...toTop}
          animate={isInView && toTop.animate}
          transition={{ duration: 0.2, ease: "easeInOut" }}
          className="xl:h-[40vh] "
        >
          <Header className=" xl:text-8xl md:text-5xl text-4xl xl:absolute xl:-right-20 xl:top-10 z-30">
            This long <br /> journey brought <br /> many awards
          </Header>
        </motion.div>
        <div className="flex xl:justify-between justify-center gap-10 md:gap-20 xl:gap-0">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              {...toTop}
              animate={isInView && toTop.animate}
              transition={{
                duration: (idx + 1) * 0.8,
                delay: 0.3,
                type: "spring",
              }}
            >
              <Header className="xl:text-5xl">{stat.value}</Header>
              <p className="text-accent/80 md:text-sm text-[8px] whitespace-pre-line">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
        <motion.p
          {...toTop}
          animate={isInView && toTop.animate}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="xl:pt-10 text-accent xl:text-base text-xs xl:w-auto md:w-1/2 m-auto"
        >
          Designer design diamond jewelry drawing sketches making works craft
          unique handmade luxury necklaces product ideas. Pencil drawing of a
          necklace and a ring.
        </motion.p>
      </div>
      <motion.div
        {...toTop}
        animate={isInView && toTop.animate}
        className=" self-end"
      >
        <Image
          alt="model"
          src={IMGS.model1}
          className="xl:w-[50vh] xl:h-[65vh] h-[40vh] object-top object-cover"
        />
      </motion.div>
    </section>
  );
}
