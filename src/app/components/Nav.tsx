"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import { IoCloseOutline } from "react-icons/io5";
import { HiBars3 } from "react-icons/hi2";
import { Fonts } from "@/lib/fonts";
import { CiSearch, CiUser } from "react-icons/ci";
import Logo from "./Logo";
import { BsHandbag } from "react-icons/bs";
import { motion } from "framer-motion";
import { toTop } from "@/lib/Animations";

export default function Navbar() {
  const [IsOpened, setIsOpened] = useState(false);
  const pathName = usePathname();
  const Links = [
    {
      name: "Shop",
      path: "#",
    },
    {
      name: "customise",
      path: "#customise",
    },
    {
      name: "Review",
      path: "#review",
    },
    {
      name: "About",
      path: "#about",
    },
    {
      name: "Blog",
      path: "#blog",
    },
  ];
  return (
    <nav className={` absolute top-0 left-0 w-screen z-50 `}>
      <div className=" text-sm z-50 bg-dark">
        <div className=" md:h-20 h-20 w-full flex justify-between  items-center flex-row px-4 md:px-20 text-white z-30">
          <div className="flex items-center text-lg">
            <Logo className="md:text-3xl text-xl" />
          </div>
          <div className="flex items-center gap-12">
            <div className="sm:flex justify-center items-center gap-5 hidden">
              {Links.map((link, idx) => {
                return (
                  <motion.div
                    key={idx}
                    {...toTop}
                    transition={{ duration: (idx + 1) * 0.2, ease: "linear" }}
                  >
                    <Link
                      href={link.path}
                      className={`${
                        link.path === pathName && " font-semibold"
                      }  capitalize transition-all  p-1 italic text-xs text-accent`}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                );
              })}
            </div>
            <div className=" flex gap-2">
              <motion.button
                className="p-3 py-2  border rounded-full border-white/30"
                {...toTop}
                transition={{ duration: 7 * 0.2 }}
              >
                <CiSearch size={22} />
              </motion.button>
              <motion.button {...toTop} transition={{ duration: 8 * 0.2 }}>
                <CiUser size={22} />
              </motion.button>
              <motion.button {...toTop} transition={{ duration: 9 * 0.2 }}>
                <BsHandbag size={22} className="text-white/80" />
              </motion.button>
            </div>
          </div>
          <button className="md:hidden" onClick={() => setIsOpened(!IsOpened)}>
            {IsOpened ? <IoCloseOutline size={25} /> : <HiBars3 size={25} />}
          </button>
        </div>
        <div
          className={`${
            IsOpened ? " top-14" : "-top-44"
          } w-[100vw] flex flex-col items-center justify-center pb-3 overflow-hidden navs sm:hidden  -z-20 bg-dark text-xs text-center gap-2 font-semibold fixed  transition-all ease duration-700`}
        >
          <div className=" -mt-10 mb-10"></div>
          {Links.map((link) => {
            return (
              <Link
                onClick={() => setIsOpened(!IsOpened)}
                key={link.name}
                href={link.path}
                className={`${
                  link.path === pathName && " font-bold text-secondary"
                }  capitalize text-white text-xs p-1 ${
                  Fonts.quicksand.className
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
