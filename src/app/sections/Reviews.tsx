import React, { useRef } from "react";
import Header from "../components/Header";
import FlipImg from "../components/FlipImg";
import { IMGS } from "@/lib/imgs";
import { IoMdStar } from "react-icons/io";
import { useInView } from "@/hooks/useInView";
import { motion } from "framer-motion";
import { toTop } from "@/lib/Animations";

export default function Reviews() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef as React.RefObject<Element>, 0.7);
  return (
    <section
      ref={sectionRef}
      className="bg-light md:h-screen flex flex-col justify-center items-center md:gap-10 gap-5 xl:p-32 md:p-14 p-5"
    >
      <motion.div {...toTop} animate={isInView && toTop.animate}>
        <Header className="xl:text-7xl md:text-5xl text-3xl">
          All the happy Reviews
        </Header>
      </motion.div>
      <motion.p
        {...toTop}
        animate={isInView && toTop.animate}
        className="md:text-sm text-[8px] text-center"
      >
        Users happy equals we are successful in this field of amazing jewelry
        designing and delivering happiness.
      </motion.p>
      <div className="md:h-[80vh] h-[50vh] grid md:grid-cols-3 grid-rows-2 md:grid-rows-1 gap-2">
        <div className="w-full h-full col-span-2 order-2 md:order-1 flex flex-col md:justify-center xl:items-center md:items-end relative">
          <div className="flex flex-col md:justify-center md:gap-5 gap-2 md:w-1/2 md:mx-auto ">
            <motion.div
              {...toTop}
              animate={isInView && toTop.animate}
              transition={{ duration: 1.1 }}
              className="flex text-yellow-400 text-base md:text-2xl  "
            >
              <IoMdStar />
              <IoMdStar />
              <IoMdStar />
              <IoMdStar />
              <IoMdStar />
            </motion.div>
            <motion.div
              {...toTop}
              animate={isInView && toTop.animate}
              transition={{ duration: 1.1 }}
            >
              <Header className="xl:text-4xl md:text-xl ">
                “Stunningly Beautiful and aesthetic designs”
              </Header>
            </motion.div>

            <motion.p
              {...toTop}
              animate={isInView && toTop.animate}
              transition={{ duration: 1.2, delay: 0.3 }}
              className="md:text-sm text-[8px] "
            >
              Jewel mic delivers Stunningly Beautiful and aesthetic designs each
              and every time I order. They even customize my ornaments for every
              style you can think of—they are the professionals.
            </motion.p>
          </div>
          <Header className="absolute bottom-0 right-0 mt-2">
            <span className="xl:text-5xl md:text-3xl text-xl text-dark">
              57
            </span>
            <span className="xl:text-3xl md:text-xl text-lg text-dark/50">
              /
            </span>
            <span className="xl:text-3xl md:text-xl text-lg text-dark/50">
              273
            </span>
          </Header>
        </div>
        <motion.div
          {...toTop}
          animate={isInView && toTop.animate}
          transition={{ duration: 1.1 }}
          className="w-full h-full flex order-1 col-span-2 md:col-span-1 md:order-2 "
        >
          <FlipImg
            src1={IMGS.model9}
            src2={IMGS.item9}
            className="xl:w-[80%] w-full aspect-square h-full "
          />
        </motion.div>
      </div>
    </section>
  );
}
