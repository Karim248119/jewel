import React, { useRef } from "react";
import { InfiniteMovingCards } from "../components/InfiniteCards";
import Header from "../components/Header";
import {
  IoArrowBackSharp,
  IoLogoFacebook,
  IoLogoInstagram,
  IoLogoTwitter,
} from "react-icons/io5";
import Logo from "../components/Logo";
import {
  FaCcApplePay,
  FaCcMastercard,
  FaCcPaypal,
  FaCcVisa,
} from "react-icons/fa6";
import { useInView } from "@/hooks/useInView";
import { scale, toTop } from "@/lib/Animations";
import { motion } from "framer-motion";

export default function Footer() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef as React.RefObject<Element>, 0.5);
  const linksColumn1 = [
    { href: "#", label: "Home", key: "home" },
    { href: "#", label: "Collection", key: "collection" },
    { href: "#", label: "LookBook", key: "lookbook" },
    { href: "#", label: "About Us", key: "about-us" },
    { href: "#", label: "Community", key: "community" },
    { href: "#", label: "Reviews", key: "reviews" },
    { href: "#", label: "FAQ", key: "faq" },
  ];

  const linksColumn2 = [
    {
      href: "#",
      label: "Instagram",
      icon: <IoLogoInstagram />,
      key: "instagram",
    },
    { href: "#", label: "Facebook", icon: <IoLogoFacebook />, key: "facebook" },
    { href: "#", label: "Twitter", icon: <IoLogoTwitter />, key: "twitter" },
  ];

  const linksColumn3 = [
    { href: "#", label: "Returns and Refunds", key: "returns" },
    { href: "#", label: "Contact us", key: "contact" },
    { href: "#", label: "Privacy Policy", key: "privacy" },
    { href: "#", label: "Terms & Conditions", key: "terms" },
  ];

  const paymentIcons = [
    { icon: <FaCcVisa />, key: "visa" },
    { icon: <FaCcPaypal />, key: "paypal" },
    { icon: <FaCcMastercard />, key: "mastercard" },
    { icon: <FaCcApplePay />, key: "applepay" },
  ];

  return (
    <div
      ref={sectionRef}
      className="h-screen flex flex-col text-xs md:text-base"
    >
      <div className="bg-dark xl:py-8 py-5 w-full relative">
        <InfiniteMovingCards>
          <Header className="text-light xl:text-7xl text-4xl">
            Instagram-Follow Us
          </Header>
        </InfiniteMovingCards>
        <div className="h-full w-full flex justify-center items-center absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 z-20">
          <motion.a
            {...scale}
            animate={isInView && scale.animate}
            href="#"
            className="h-[90%] group flex justify-center items-center aspect-square rounded-full  z-20 bg-gold"
          >
            <IoArrowBackSharp className="rotate-[135deg] group-hover:rotate-180 text-dark xl:text-5xl text-3xl duration-300" />
          </motion.a>
        </div>
      </div>
      <div className="flex-1 w-full bg-light grid md:grid-cols-4 md:grid-rows-1 grid-rows-2">
        <div className="col-span-2 flex flex-col justify-center items-center md:border-r border-b md:border-b-0 border-dark">
          <div className="space-y-5">
            <motion.div {...toTop} animate={isInView && toTop.animate}>
              <Logo className="text-5xl text-start" />
            </motion.div>

            <motion.p {...toTop} animate={isInView && toTop.animate}>
              Discover the best deals on the largest <br /> platform for clean
              fashion.
            </motion.p>
            <div className="flex gap-3 text-4xl">
              {paymentIcons.map((iconObj, idx) => (
                <motion.span
                  key={iconObj.key}
                  {...toTop}
                  animate={isInView && toTop.animate}
                  transition={{
                    duration: 0.5 * (idx + 1),
                    type: "keyframes",
                  }}
                >
                  {iconObj.icon}
                </motion.span>
              ))}
            </div>
          </div>
        </div>
        <div className="col-span-1 flex justify-center items-center border-r border-dark">
          <div className="flex flex-col md:gap-3 gap-2 font-bold">
            {linksColumn1.map((link, idx) => (
              <motion.a
                key={link.key}
                {...toTop}
                animate={isInView && toTop.animate}
                transition={{
                  duration: 0.5 * (idx + 1),
                  type: "keyframes",
                }}
                href={link.href}
              >
                {link.label}
              </motion.a>
            ))}
          </div>
        </div>

        <div className="col-span-1 grid grid-rows-2">
          <div className="w-full h-full flex items-center xl:px-20 px-8 border-b border-dark">
            <div className="flex flex-col md:gap-3 gap-2 font-bold">
              {linksColumn2.map((link, idx) => (
                <motion.a
                  key={link.key}
                  {...toTop}
                  animate={isInView && toTop.animate}
                  transition={{
                    duration: 0.5 * (idx + 1),
                    type: "keyframes",
                  }}
                  href={link.href}
                  className="flex gap-1 items-center"
                >
                  {link.icon}
                  <span>{link.label}</span>
                </motion.a>
              ))}
            </div>
          </div>

          <div className="w-full h-full flex items-center xl:px-20 px-8">
            <div className="flex flex-col md:gap-3 gap-2 font-bold">
              {linksColumn3.map((link, idx) => (
                <motion.a
                  key={link.key}
                  {...toTop}
                  animate={isInView && toTop.animate}
                  transition={{
                    duration: 0.6 * (idx + 1),
                    type: "keyframes",
                    delay: 0.3,
                  }}
                  href={link.href}
                >
                  {link.label}
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="w-full flex justify-center items-center py-5 bg-gold border-t border-dark">
        ©2025
        <span>
          <Logo className="text-xl ml-1" />
        </span>
        .com
      </div>
    </div>
  );
}
