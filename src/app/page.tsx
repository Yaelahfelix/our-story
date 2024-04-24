"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@mui/material";
import { useRouter } from "next/navigation";
import { PacifioFont } from "@/lib/Fonts";
import { useEffect, useState } from "react";
import { useAudio } from "@/lib/Audio";

export default function Home() {
  const router = useRouter();
  const { playMusic, stopMusic, isPlaying } = useAudio();
  const [isClicked, setIsClicked] = useState(false);
  return (
    <motion.div
      initial={{ x: -100, opacity: 0 }} // Start dari sebelah kiri dan tidak terlihat
      animate={{ x: 0, opacity: 1 }} // Bergerak ke posisi asli dan menjadi terlihat
      exit={{ x: -100, opacity: 0 }} // Opsional: mengatur animasi saat komponen keluar
      transition={{ duration: 0.5, ease: "easeInOut" }} // Durasi transisi 0.5 detik
    >
      <h1
        className={`text-[36px] font-bold ${PacifioFont.className} mb-3 text-center`}
      >
        Halo sayang
      </h1>
      <div className="flex justify-center">
        <Button
          variant="contained"
          color="secondary"
          disabled={isClicked}
          onClick={() => {
            playMusic();
            router.push("/1");
            setIsClicked(true);
          }}
        >
          {isClicked ? "Loading..." : "Klik aku dong"}
        </Button>
      </div>
      <p className="text-xs mt-5 text-center text-slate-700">
        Note: Turn up your volume sayangg
      </p>
    </motion.div>
  );
}
