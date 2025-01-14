import { Fonts } from "@/lib/fonts";
import { IMGS } from "@/lib/imgs";
import Image from "next/image";
import React, { useRef, useState } from "react";
import Header from "../components/Header";
import { IoPauseSharp, IoPlaySharp } from "react-icons/io5";
import FlipImg from "../components/FlipImg";
import Button from "../components/Button";
import { motion } from "framer-motion";
import { toTop } from "@/lib/Animations";
import { useInView } from "@/hooks/useInView";

export default function Aboutus() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef as React.RefObject<Element>, 0.5);

  return (
    <section
      ref={sectionRef}
      className="bg-light h-[110vh] w-full grid xl:grid-cols-6 xl:grid-rows-1 md:grid-rows-2 md:grid-cols-2 grid-rows-6 gap-3 md:px-20 px-5 py-10 xl:py-0"
    >
      <motion.div
        {...toTop}
        animate={isInView && toTop.animate}
        className="md:col-span-2 md:row-span-1 row-span-2 flex justify-center items-center"
      >
        <FlipImg
          src1={IMGS.model2}
          src2={IMGS.item2}
          className="w-[100%] xl:w-[90%] xl:h-3/4 h-full object-cover"
        />
      </motion.div>
      <div className="xl:col-span-3 md:col-span-1 md:row-span-1 xl:pt-32 md:pt-5 row-span-3 flex flex-col md:justify-between justify-center items-start xl:p-36 xl:py-32 gap-5">
        <motion.div {...toTop} animate={isInView && toTop.animate}>
          <Header className="text-dark leading-tight xl:text-6xl md:text-4xl text-3xl">
            Step by Step Design Process For Every Piece of Jewellry
          </Header>
        </motion.div>
        <motion.p
          {...toTop}
          transition={{ duration: 1, delay: 0.1 }}
          animate={isInView && toTop.animate}
          className="xl:text-base text-xs"
        >
          Each unique expression is made with sustainably sourced materials from
          around the world, elevated with elements of 14kt gold, diamonds, and
          other precious stones.
        </motion.p>
        <motion.div
          {...toTop}
          transition={{ duration: 1.2, delay: 0.3 }}
          animate={isInView && toTop.animate}
        >
          <Button title="About us" />
        </motion.div>
      </div>
      <div className="xl:col-span-1 row-span-1 md:col-span-1 xl:pt-32 md:pt-5 md:row-span-1 flex xl:flex-col xl:justify-between md:justify-end justify-between gap-2 items-center xl:py-44">
        <motion.div
          {...toTop}
          animate={isInView && toTop.animate}
          className=" flex flex-col justify-center items-center gap-3 "
        >
          <motion.button
            {...toTop}
            animate={isInView && toTop.animate}
            className="bg-dark text-light xl:p-7 p-5 rounded-full "
            onClick={handlePlayPause}
          >
            {isPlaying ? <IoPauseSharp /> : <IoPlaySharp />}
          </motion.button>
          <div
            className={`text-xl md:rotate-90 text-nowrap md:w-2 ${Fonts.glaston.className}`}
          >
            Watch Video
          </div>
        </motion.div>
        <motion.video
          {...toTop}
          transition={{ duration: 1.2 }}
          animate={isInView && toTop.animate}
          ref={videoRef}
          src="/vid.mp4"
          className="w-36 xl:h-40  md:h-2/3 h-32 object-cover md:place-self-end xl:place-self-auto"
          loop
          muted
        ></motion.video>
      </div>
    </section>
  );
}
