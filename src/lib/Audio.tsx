"use client";

import React, {
  createContext,
  useContext,
  useState,
  useRef,
  ReactNode,
} from "react";
import { Fragment } from "react";

interface AudioContextType {
  playMusic: () => void;
  playMusicSec: () => void;
  stopMusic: () => void;
  isPlaying: boolean;
}

const AudioContext = createContext<AudioContextType | undefined>(undefined);
const timeInSeconds = 2 * 60 + 55;

export const useAudio = () => {
  const context = useContext(AudioContext);
  if (context === undefined) {
    throw new Error("useAudio must be used within an AudioProvider");
  }
  return context;
};

const AudioProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const audioRef = useRef<HTMLAudioElement>(new Audio("/song.mp3"));
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  const playMusic = () => {
    if (audioRef.current) {
      audioRef.current.loop = true;
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  const stopMusic = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  };

  const playMusicSec = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = timeInSeconds;
      audioRef.current.loop = true;
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <AudioContext.Provider
      value={{ playMusic, stopMusic, isPlaying, playMusicSec }}
    >
      {children}
    </AudioContext.Provider>
  );
};

export default AudioProvider;
