"use client";

import { PacifioFont } from "@/lib/Fonts";
import { Button } from "@mui/material";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export default function Slide3() {
  const Router = useRouter();
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
        Selamat 2 bulan kitaaaa
      </h1>
      <p className="text-center">
        Aku sayang kamu.. Kemarin, sekarang, esok, hingga nanti {"<3"}. HARI INI
        MILIK KITA BERDUAAA!!!!
      </p>
      <motion.div
        initial={{ x: -100, opacity: 0 }} // Start dari sebelah kiri dan tidak terlihat
        animate={{ x: 0, opacity: 1 }} // Bergerak ke posisi asli dan menjadi terlihat
        exit={{ x: -100, opacity: 0 }} // Opsional: mengatur animasi saat komponen keluar
        transition={{ duration: 0.5, ease: "easeInOut", delay: 5 }} // Durasi transisi 0.5 detik
        className="flex justify-center mt-5"
      >
        <Button
          variant="contained"
          color="secondary"
          onClick={() => Router.push("/")}
        >
          Klik untuk mulai dari awal
        </Button>
      </motion.div>

      <p className="text-xs mt-5 text-center text-slate-700">
        Note: Kalo kamu liat sampe habis, kamu harus bilang kalo kamu cinta aku
        pake bahasa Cina! Awas aja ya sayang kalau lupa hehehehehe.. LOVE UUU
        {"<3"}
      </p>
    </motion.div>
  );
}
