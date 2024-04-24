import dynamic from "next/dynamic";

const AudioProvider: any = dynamic(() => import("./Audio"), {
  ssr: false,
});

export default AudioProvider;
