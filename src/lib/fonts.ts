import {
  Poppins,
  Quicksand,
  Mea_Culpa,
  Playfair,
  Playwrite_HR_Lijeva,
  Italiana,
} from "next/font/google";

import localFont from "next/font/local";
const myFont = localFont({ src: "./fonts/Mollie-Glaston.ttf" });

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "200", "300"],
});

const quicksand = Quicksand({
  subsets: ["latin"],
  display: "swap",
  weight: ["500", "600"],
});

const meaCulpa = Mea_Culpa({
  subsets: ["latin"],
  display: "swap",
  weight: ["400"],
});

const playfair = Playfair({
  subsets: ["latin"],
  display: "swap",
  weight: ["400"],
});

const playwrite = Italiana({
  subsets: ["latin"],
  display: "swap",
  weight: ["400"],
});

export const Fonts = {
  poppins,
  quicksand,
  meaCulpa,
  playfair,
  playwrite,
  myFont,
};
