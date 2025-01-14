import React, { useRef } from "react";
import Header from "../components/Header";
import Button from "../components/Button";
import { collections, products } from "../data";
import ProductCard from "../components/ProductCard";
import { Fonts } from "@/lib/fonts";
import { InfiniteMovingCards } from "../components/InfiniteCards";
import Spark from "../components/Spark";
import { useInView } from "@/hooks/useInView";
import { motion } from "framer-motion";
import { toTop } from "@/lib/Animations";

export default function Collections() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isMobile = typeof window !== "undefined" && window.innerWidth <= 768;
  const isInView = useInView(
    sectionRef as React.RefObject<Element>,
    isMobile ? 0.2 : 0.3
  );
  const buttonRef = useRef<HTMLDivElement>(null);
  const isbuttonInView = useInView(buttonRef as React.RefObject<Element>, 0.1);
  return (
    <section ref={sectionRef} className="w-full bg-light pt-20 xl:pb-20 pb-10">
      <div className="grid grid-cols-2 px-5">
        <motion.div
          {...toTop}
          animate={isInView && toTop.animate}
          className="flex justify-center"
        >
          <Header className="md:w-1/2 text-2xl md:text-4xl xl:text-7xl">
            Designed <br /> with zist core passion
          </Header>
        </motion.div>
        <motion.div
          {...toTop}
          animate={isInView && toTop.animate}
          className="flex justify-center"
        >
          <div className="md:w-1/2 space-y-6">
            <p className="xl:text-base text-xs">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra
              morbi cras augue egestas dictum habitasse.
            </p>
            <Button title="all collections" className="md:text-2xl" />
          </div>
        </motion.div>
      </div>
      <div className="pt-20">
        <div className="flex flex-wrap justify-center md:gap-10 gap-5">
          {collections.map((collection, idx) => (
            <motion.button
              {...toTop}
              animate={isInView && toTop.animate}
              transition={{ duration: (idx + 1) * 0.4 }}
              key={idx}
              className={`xl:text-2xl md:text-xl capitalize  ${
                idx === 0 ? "text-dark line-through" : "text-dark/60"
              } ${Fonts.glaston.className}`}
            >
              {collection}
            </motion.button>
          ))}
        </div>
      </div>
      <div>
        <div className="flex flex-wrap justify-center gap-20 md:gap-10 mt-10">
          {products.map((product, idx) => (
            <motion.div
              {...toTop}
              animate={isInView && toTop.animate}
              transition={{
                duration: (idx + 1) * 0.7,
                delay: 0.3,
                type: "keyframes",
              }}
              key={idx}
            >
              <ProductCard product={product} />
            </motion.div>
          ))}
        </div>
      </div>
      <div className="mt-20">
        <div className=" h-[1px] md:h-[2px] bg-dark w-full overflow-x-clip" />
        <InfiniteMovingCards>
          <Header className="text-4xl md:text-6xl">Give us impression</Header>
          <Spark variant="gold-light" />
        </InfiniteMovingCards>
        <div className="w-full h-[1px] md:h-[2px] bg-dark" />
        <InfiniteMovingCards className="xl:ml-20" direction="right">
          <Header className="text-4xl md:text-6xl">Give us impression</Header>
          <Spark variant="gold-light" />
        </InfiniteMovingCards>
        <div className="w-full h-[1px] md:h-[2px] bg-dark" />
      </div>
      <motion.div
        ref={buttonRef}
        {...toTop}
        animate={isbuttonInView && toTop.animate}
        transition={{ duration: 1.2, type: "keyframes" }}
        className="py-20 text-center"
      >
        <Button title="new collections" />
      </motion.div>
    </section>
  );
}
