"use client";

import { useAudio } from "@/lib/Audio";
import { PacifioFont } from "@/lib/Fonts";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Slide2() {
  const [slide, setSlide] = useState(1);
  const [disableClick, setDisableClick] = useState(false);
  const { playMusic, stopMusic, isPlaying, playMusicSec } = useAudio();
  const Router = useRouter();

  useEffect(() => {
    setDisableClick(true);
    const timer = setTimeout(() => {
      setDisableClick(false);
    }, 5000);

    if (slide === 8) {
      stopMusic();
    }

    if (slide === 9) {
      playMusic();
      Router.push("/3");
    }

    return () => clearTimeout(timer);
  }, [slide]);

  return (
    <motion.div
      initial={{ opacity: 0 }} // Start invisible
      animate={{ opacity: 1 }} // Fade in to become visible
      transition={{ duration: 0.5, ease: "easeInOut" }} // Transition duration of 0.5 seconds for the container
      className="h-screen flex flex-col justify-center items-center"
      onClick={() => {
        if (!disableClick) {
          setSlide(slide + 1);
        }
      }}
    >
      <motion.h1
        initial={{ y: -20, opacity: 0 }} // Start above and invisible
        animate={{ y: 0, opacity: 1 }} // Move down to original position and fade in
        transition={{ duration: 0.7, ease: "easeInOut" }} // Transition duration of 0.7 seconds for the text
        className={`text-4xl font-bold text-center ${PacifioFont.className}`}
      >
        Our Journey Continues...
      </motion.h1>
      <AnimatePresence>
        {slide === 1 && (
          <motion.p
            key="slide1"
            initial={{ y: 20, opacity: 0 }} // Start below and invisible
            animate={{ y: 0, opacity: 1 }} // Move up to original position and fade in
            transition={{ duration: 0.9, ease: "easeInOut" }} // Transition duration of 0.9 seconds for the paragraph
            className="text-base text-center mt-4"
          >
            Setiap momen dengan kamu itu sangat berharga. Bener bener berharga
            banget sayang, candamu, tawamu, senyummu semua sangat berharga bagi
            aku
          </motion.p>
        )}
        {slide === 2 && (
          <motion.p
            key="slide2"
            initial={{ y: 20, opacity: 0 }} // Start below and invisible
            animate={{ y: 0, opacity: 1 }} // Move up to original position and fade in
            transition={{ duration: 0.9, ease: "easeInOut" }} // Transition duration of 0.9 seconds for the paragraph
            className="text-base text-center mt-4"
          >
            Kita jaga ya sayang hubungan kita. Hubungan sehat ini, hubungan yang
            selalu penuh canda dan tawa, hubungan yang selaluu selalu selaluu
            membuat kita tertawa dan nyaman setiap hari
          </motion.p>
        )}
        {slide === 3 && (
          <motion.p
            key="slide3"
            initial={{ y: 20, opacity: 0 }} // Start below and invisible
            animate={{ y: 0, opacity: 1 }} // Move up to original position and fade in
            transition={{ duration: 0.9, ease: "easeInOut" }} // Transition duration of 0.9 seconds for the paragraph
            className="text-base text-center mt-4"
          >
            Perjalanan kita masih panjang, hubungan kita masih seumur jagung,
            banyak tantangan-tantangan yang harus kita hadapi bersama
            kedepannya. Apalagii aku dikit lagi lulus, mungkin nanti kesibukan
            kita berbeda.
          </motion.p>
        )}
        {slide === 4 && (
          <motion.p
            key="slide4"
            initial={{ y: 20, opacity: 0 }} // Start below and invisible
            animate={{ y: 0, opacity: 1 }} // Move up to original position and fade in
            transition={{ duration: 0.9, ease: "easeInOut" }} // Transition duration of 0.9 seconds for the paragraph
            className="text-base text-center mt-4"
          >
            Kita juga akan berada di lingkungan yang berbeda, dan mungkin
            masalah kita yang pasti ada adalah kepercayaan.Tapi kita harus
            percaya ya sayang satu sama lain. Aku percaya kamu. Kamu percaya
            aku. Dan akan selalu seperti itu
          </motion.p>
        )}
        {slide === 5 && (
          <motion.p
            key="slide5"
            initial={{ y: 20, opacity: 0 }} // Start below and invisible
            animate={{ y: 0, opacity: 1 }} // Move up to original position and fade in
            transition={{ duration: 0.9, ease: "easeInOut" }} // Transition duration of 0.9 seconds for the paragraph
            className="text-base text-center mt-4"
          >
            Inget ya sayang, selalu bilang kalau ada masalah. Jangan tiba-tiba
            diem apalagi berubah. Kalau aku membosankan, jangan cari yang lain
            ya sayang {":("}..
          </motion.p>
        )}
        {slide === 6 && (
          <motion.p
            key="slide6"
            initial={{ y: 20, opacity: 0 }} // Start below and invisible
            animate={{ y: 0, opacity: 1 }} // Move up to original position and fade in
            transition={{ duration: 0.9, ease: "easeInOut" }} // Transition duration of 0.9 seconds for the paragraph
            className="text-base text-center mt-4"
          >
            Kita jaga hubungan ini sama-sama, bukan hanya aku, bukan hanya
            kamu.. Tapi kita berdua, kita jaga sampai kapanpun itu, sampai aku
            bekerja, sampai aku wisuda, sampai kamu lulus, sampai kita sukses..
          </motion.p>
        )}
        {slide === 7 && (
          <motion.p
            key="slide7"
            initial={{ y: 20, opacity: 0 }} // Start below and invisible
            animate={{ y: 0, opacity: 1 }} // Move up to original position and fade in
            transition={{ duration: 0.9, ease: "easeInOut" }} // Transition duration of 0.9 seconds for the paragraph
            className="text-base text-center mt-4"
          >
            I love you sayang. You are my everything. You are my one and only.
            You are my sunshine. You bring joy to my life. You complete me.You
            stole my heart. <b>You&apos;re a gem.</b> You&apos;re a dream come
            true. I love being around you. Our love is invaluable. Me and You?
            Always loving each other{" "}
          </motion.p>
        )}
        {slide === 8 && (
          <motion.p
            key="slide8"
            initial={{ y: 20, opacity: 0 }} // Start below and invisible
            animate={{ y: 0, opacity: 1 }} // Move up to original position and fade in
            transition={{ duration: 0.9, ease: "easeInOut" }} // Transition duration of 0.9 seconds for the paragraph
            className="text-xs text-center mt-4"
          >
            <iframe
              width="100%"
              src="https://www.youtube.com/embed/p7jzVsM985g"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
            <p>
              Ini aku ada video sayang, ditonton ya{" "}
              {"(Kalo ga ada tungguin ya sayang, lagi loding itu hehe)"}
            </p>
          </motion.p>
        )}
      </AnimatePresence>

      <motion.div className="relative mt-5 w-full">
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full text-center"
          animate={{ opacity: disableClick ? 0 : 1 }}
        >
          <motion.p
            key="pp"
            className="text-slate-700 lowercase italic bold"
            initial={{ opacity: 0.5 }}
            animate={{ opacity: 1 }}
            transition={{
              repeat: Infinity,
              repeatType: "reverse",
              duration: 1,
              ease: "easeInOut",
            }}
          >
            ...ketuk untuk melanjutkan...
          </motion.p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
