"use client";

import { Play, Pause } from "lucide-react";
import type { Voice } from "@/types/voice";
import { useRef, useState, useEffect } from "react";
import Image from "next/image";

interface VoiceCardProps {
  voice: Voice;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  className?: string;
}

export function VoiceCard({
  voice,
  onMouseEnter,
  onMouseLeave,
  className = "",
}: VoiceCardProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const progressRef = useRef<NodeJS.Timeout>();

  useEffect(() => {
    const audio = new Audio(voice.audioUrl);
    audioRef.current = audio;

    const handleLoadedMetadata = () => {
      setDuration(audio.duration);
      setIsLoading(false);
    };

    const handleError = () => {
      console.error("Error loading audio file");
      setIsLoading(false);
    };

    audio.addEventListener("loadedmetadata", handleLoadedMetadata);
    audio.addEventListener("error", handleError);

    return () => {
      if (progressRef.current) {
        clearInterval(progressRef.current);
      }
      audio.removeEventListener("loadedmetadata", handleLoadedMetadata);
      audio.removeEventListener("error", handleError);
      audio.pause();
      audio.remove();
    };
  }, [voice.audioUrl]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateProgress = () => {
      if (audio.duration) {
        setProgress((audio.currentTime / audio.duration) * 100);
      }
    };

    if (isPlaying) {
      progressRef.current = setInterval(updateProgress, 100);
    } else if (progressRef.current) {
      clearInterval(progressRef.current);
    }

    const handleEnded = () => {
      setIsPlaying(false);
      setProgress(0);
      if (progressRef.current) {
        clearInterval(progressRef.current);
      }
      audio.currentTime = 0;
    };

    audio.addEventListener("ended", handleEnded);

    return () => {
      if (progressRef.current) {
        clearInterval(progressRef.current);
      }
      audio.removeEventListener("ended", handleEnded);
    };
  }, [isPlaying]);

  const togglePlay = async () => {
    if (!audioRef.current || isLoading) return;

    try {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        await audioRef.current.play();
        setIsPlaying(true);
      }
    } catch (error) {
      console.error("Error playing audio:", error);
      setIsPlaying(false);
    }
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  return (
    <div
      className={`bg-black rounded-lg p-6 min-w-[300px] select-none group border border-orange-500/40 transition-all duration-300 hover:shadow-[0_0_30px_rgba(249,115,22,0.4)] hover:border-orange-500/40 ${className}`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="flex items-center gap-4 mb-2">
        <Image
          src={voice.avatarUrl || "/placeholder.svg"}
          alt=""
          width={48}
          height={48}
          className="w-12 h-12 rounded-full object-cover ring-2 ring-orange-500/20 group-hover:ring-orange-500/40"
        />
        <div className="flex flex-col">
          <h3 className="text-white text-lg font-medium group-hover:text-white">
            {voice.name}
          </h3>
          <span className="text-gray-400 text-sm group-hover:text-white/90">
            {voice.gender}
          </span>
        </div>
      </div>
      <p className="text-gray-400 text-sm mb-4 group-hover:text-white/90">
        {voice.accent} - {voice.language}
      </p>
      <div className="flex items-center gap-3">
        <button
          className={`text-orange-600 hover:text-orange-600 transition-colors group-hover:text-white ${
            isLoading ? "opacity-50 cursor-not-allowed" : ""
          }`}
          aria-label={isPlaying ? "Pause sample" : "Play sample"}
          onClick={togglePlay}
          disabled={isLoading}
        >
          {isPlaying ? (
            <Pause className="w-5 h-5" fill="currentColor" />
          ) : (
            <Play className="w-5 h-5" fill="currentColor" />
          )}
        </button>
        <div className="flex-1 h-1 bg-[#333333] rounded-full overflow-hidden">
          <div
            className="h-full bg-orange-500 group-hover:bg-orange-400 transition-all duration-300 rounded-full"
            style={{ width: `${progress}%` }}
          />
        </div>
        <span className="text-gray-400 text-xs tabular-nums group-hover:text-white/90 min-w-[40px]">
          {formatTime(isPlaying ? (duration * progress) / 100 : 0)}
        </span>
      </div>
    </div>
  );
}
