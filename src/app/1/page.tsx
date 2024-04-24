"use client";

import { PacifioFont } from "@/lib/Fonts";
import { Button } from "@mui/material";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Slide1() {
  const Router = useRouter();
  const [slide, setSlide] = useState(0);

  useEffect(() => {
    if (slide > 7) {
      Router.push("/2");
    }
  }, [slide]);
  return (
    <motion.div
      initial={{ scale: 0.5, opacity: 0 }} // Start with a smaller size and invisible
      animate={{ scale: 1, opacity: 1 }} // Scale up to normal size and become visible
      exit={{ scale: 0.5, opacity: 0 }} // Optional: animate out to smaller size and invisible
      transition={{ duration: 0.5, ease: "easeInOut" }} // Transition duration of 0.5 seconds
    >
      <motion.h1
        initial={{ x: -200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className={`text-4xl font-bold text-center ${PacifioFont.className} mb-5`}
      >
        Happy 2 monthsiversary
      </motion.h1>
      <motion.p
        initial={{ x: 200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.5, ease: "easeInOut" }}
        className="text-xs mb-3 text-center"
      >
        Sayangg... selamat 60 hari buat kita semenjak kita meresmikan hubungan
        ini. Cepet banget ga ci sayang? Cepet banget yah..
      </motion.p>

      <Button
        variant="outlined"
        color="secondary"
        onClick={() => setSlide(slide + 1)}
        style={{
          display: "block",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        Next
      </Button>

      <div
        className="relative w-full mt-5 mb-20"
        style={{
          height: 500,
        }}
      >
        <AnimatePresence>
          {slide === 1 && (
            <motion.div
              key="slide1"
              initial={{ x: -200, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -200, opacity: 0 }}
              transition={{ duration: 1, ease: "easeInOut" }}
              className="slide-container"
            >
              <div className="relative w-full h-full">
                <Image
                  src="/pic1.jpeg"
                  alt="pic1"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <motion.p className="slide-p">Dari awal kita kenalan</motion.p>
            </motion.div>
          )}
          {slide === 2 && (
            <motion.div
              key="slide2"
              initial={{ x: 200, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 200, opacity: 0 }}
              transition={{
                duration: 1,
                ease: "easeInOut",
              }}
              className="slide-container"
            >
              <div className="relative w-full h-full">
                <Image
                  src="/pic2.jpeg"
                  alt="pic2"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <motion.p className="slide-p">Kita bercanda </motion.p>
            </motion.div>
          )}
          {slide === 3 && (
            <motion.div
              key="slide3"
              initial={{ x: -200, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -200, opacity: 0 }}
              transition={{
                duration: 1,
                ease: "easeInOut",
              }}
              className="slide-container"
            >
              <div className="relative w-full h-full">
                <Image
                  src="/pic3.jpeg"
                  alt="pic3"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <motion.p className="slide-p">Kita mengode</motion.p>
            </motion.div>
          )}
          {slide === 4 && (
            <motion.div
              key="slide4"
              initial={{ x: 200, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 200, opacity: 0 }}
              transition={{
                duration: 1,
                ease: "easeInOut",
              }}
              className="slide-container"
            >
              <div className="relative w-full h-full">
                <Image
                  src="/pic4.jpeg"
                  alt="pic4"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <motion.p className="slide-p">Kita confess</motion.p>
            </motion.div>
          )}
          {slide === 5 && (
            <motion.div
              key="slide5"
              initial={{ x: -200, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -200, opacity: 0 }}
              transition={{
                duration: 1,
                ease: "easeInOut",
              }}
              className="slide-container"
            >
              <div className="relative w-full h-full">
                <Image
                  src="/pic5.jpeg"
                  alt="pic5"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <motion.p className="slide-p">Kita jalan </motion.p>
            </motion.div>
          )}
          {slide === 6 && (
            <motion.div
              key="slide6"
              initial={{ x: 200, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 200, opacity: 0 }}
              transition={{
                duration: 1,
                ease: "easeInOut",
              }}
              className="slide-container"
            >
              <div className="relative w-full h-full">
                <Image
                  src="/pic6.jpeg"
                  alt="pic6"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <motion.p className="slide-p">Kita jadian </motion.p>
            </motion.div>
          )}
          {slide === 7 && (
            <motion.div
              key="slide7"
              initial={{ x: -200, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -200, opacity: 0 }}
              transition={{
                duration: 1,
                ease: "easeInOut",
              }}
              className="slide-container"
            >
              <div className="relative w-full h-full">
                <Image
                  src="/pic7.jpeg"
                  alt="pic7"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <motion.p className="slide-p text-xs">
                Semua terasa cepat sayang, dan rasa sayangku masih sama seperti
                dulu.. tidak pernah berkurang tapi malah bertambah sama cantikku
                ini
              </motion.p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
