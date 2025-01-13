import { Fonts } from "@/lib/fonts";
import { IMGS } from "@/lib/imgs";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Spark from "../components/Spark";
import { InfiniteMovingCards } from "../components/InfiniteCards";
import { sliderItems } from "../data/sliderItems";
import Header from "../components/Header";
import FlipImg from "../components/FlipImg";
import { fadeAnimation, toTop } from "@/lib/Animations";

export default function Hero() {
  return (
    <section className="w-full xl:h-screen bg-dark ">
      <div className="h-[15vh] w-full "></div>
      <div className="xl:h-[70%] xl:grid grid-cols-2 xl:px-20 px-3  ">
        <motion.div
          {...toTop}
          className="flex flex-col xl:gap-10 gap-5 justify-center h-full "
        >
          <Header className="text-white xl:space-y-10 xl:text-7xl text-5xl text-center xl:text-start xl:w-[30vw] ">
            <div className="md:flex xl:block justify-center">
              <span>Trendy</span>
              <div className="xl:flex gap-3">
                <span className="xl:flex justify-center items-center hidden">
                  <Spark variant="light" />
                  <Spark variant="gold-dark" />
                  <Spark variant="light" />
                </span>
                <span className="text-center">Jewellery</span>
              </div>
            </div>
            your personal designing
            <span className="xl:hidden flex justify-center items-center mt-5">
              <Spark variant="light" />
              <Spark variant="gold-dark" />
              <Spark variant="light" />
            </span>
          </Header>
          <p className="text-accent xl:w-2/3 xl:text-base text-xs text-center xl:text-start">
            Each piece is a unique expression of understated luxury, blending
            14k gold, diamonds, and other precious stones with sustainably
            sourced materials from around the world.
          </p>
        </motion.div>
        <div className="grid grid-cols-9 h-full xl:gap-10 gap-3 overflow-hidden mt-5 xl:mt-0">
          <motion.div
            className="col-span-4 w-full h-full"
            {...toTop}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <FlipImg
              src1={IMGS.model10}
              src2={IMGS.item10}
              className=" w-full h-full overflow-hidden scale-x-[-1]"
            />
          </motion.div>
          <motion.div
            className="col-span-5 w-full h-full"
            {...toTop}
            transition={{ duration: 0.7, ease: "easeInOut" }}
          >
            <FlipImg
              src1={IMGS.model3}
              src2={IMGS.item3}
              className="  w-full h-full object-top overflow-hidden scale-x-[1]"
            />
          </motion.div>
        </div>
      </div>
      <motion.div
        className="h-[15%] w-full bg-dark flex items-center"
        {...fadeAnimation}
      >
        <InfiniteMovingCards>
          {sliderItems.map((item, idx) => (
            <div
              key={idx}
              className=" text-white flex justify-center items-center gap-20 opacity-75"
            >
              <div className="flex items-center gap-3">
                <Image alt="gap" src={item.img} height={35} width={35} />
                <div
                  className={`-space-y-1 capitalize ${Fonts.myFont.className}`}
                >
                  <p> {item.title}</p>
                  <p> {item.title2}</p>
                </div>
              </div>
              <span className="text-accent font-extralight">|</span>
            </div>
          ))}
        </InfiniteMovingCards>
      </motion.div>
    </section>
  );
}
