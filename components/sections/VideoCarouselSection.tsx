"use client";

import { useEffect, useState, useCallback, useRef } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { Play, Pause } from "lucide-react";
import { Button } from "@/components/ui/button";

// Video list - Add new videos at the TOP of this array to show them first
// Videos are sorted with newest first
const videos = [
  {
    src: "/introvideo.mp4",
    title: "Introduction Video",
  },
  {
    src: "/introasr.mp4",
    title: "ASR Marketing Intro",
  },
  // Add new videos here at the top of the array
];

export function VideoCarouselSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [api, setApi] = useState<CarouselApi>();
  const [isPlaying, setIsPlaying] = useState<boolean[]>(
    new Array(videos.length).fill(false)
  );
  const videoRefs = useRef<{ [key: number]: HTMLVideoElement | null }>({});

  const handleVideoChange = useCallback((index: number) => {
    // Pause all videos
    Object.values(videoRefs.current).forEach((video) => {
      if (video) {
        video.pause();
      }
    });

    // Reset all playing states
    setIsPlaying(new Array(videos.length).fill(false));

    // Play the new video
    setCurrentIndex(index);
    const newVideo = videoRefs.current[index];
    if (newVideo) {
      newVideo.play().catch(() => {
        // Auto-play might fail, that's okay
      });
      setIsPlaying((prev) => {
        const newState = [...prev];
        newState[index] = true;
        return newState;
      });
    }
  }, []);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCurrentIndex(api.selectedScrollSnap());

    api.on("select", () => {
      const selectedIndex = api.selectedScrollSnap();
      setCurrentIndex(selectedIndex);
      handleVideoChange(selectedIndex);
    });
  }, [api, handleVideoChange]);

  useEffect(() => {
    // Auto-play first video after a short delay to ensure video is loaded
    const timer = setTimeout(() => {
      if (videoRefs.current[0]) {
        videoRefs.current[0].play().catch(() => {
          // Auto-play might fail, that's okay
        });
        setIsPlaying((prev) => {
          const newState = [...prev];
          newState[0] = true;
          return newState;
        });
      }
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const handleVideoRef = (index: number, video: HTMLVideoElement | null) => {
    videoRefs.current[index] = video;
  };

  const togglePlayPause = (index: number) => {
    const video = videoRefs.current[index];
    if (video) {
      if (isPlaying[index]) {
        video.pause();
      } else {
        video.play();
      }
      setIsPlaying((prev) => {
        const newState = [...prev];
        newState[index] = !prev[index];
        return newState;
      });
    }
  };

  return (
    <section
      id="videos"
      className="relative py-20 md:py-32 px-6 overflow-hidden bg-gradient-to-b from-[#030617] via-[#050a15] to-[#030617]"
    >
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-blue-950/20 to-black pointer-events-none" />
      
      {/* Animated gradient orbs */}
      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-blue-600/25 rounded-full blur-[140px] animate-pulse pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-blue-800/25 rounded-full blur-[140px] animate-pulse delay-700 pointer-events-none" />
      
      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(59, 130, 246, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
        }}
      />

      <div className="relative container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-block mb-4">
            <span className="text-sm font-semibold text-blue-400 uppercase tracking-widest px-4 py-2 bg-blue-500/10 rounded-full border border-blue-500/30">
              Our Videos
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6">
            <span className="text-gradient-blue drop-shadow-[0_0_30px_rgba(59,130,246,0.5)]">
              Featured Content
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
            Explore our latest videos and creative work
          </p>
        </div>

        {/* Video Carousel */}
        <div className="relative max-w-6xl mx-auto">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            setApi={setApi}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {videos.map((video, index) => (
                <CarouselItem
                  key={index}
                  className="pl-2 md:pl-4 basis-full md:basis-full"
                >
                  <div className="relative group rounded-3xl overflow-hidden border border-blue-500/30 bg-gradient-to-br from-[#0a1020] to-[#050a15] shadow-2xl hover:border-blue-500/60 transition-all duration-500">
                    {/* Video */}
                    <div className="relative aspect-video w-full">
                      <video
                        ref={(el) => handleVideoRef(index, el)}
                        src={video.src}
                        className="w-full h-full object-cover"
                        muted
                        loop
                        playsInline
                        onPlay={() => {
                          setIsPlaying((prev) => {
                            const newState = [...prev];
                            newState[index] = true;
                            return newState;
                          });
                        }}
                        onPause={() => {
                          setIsPlaying((prev) => {
                            const newState = [...prev];
                            newState[index] = false;
                            return newState;
                          });
                        }}
                      />

                      {/* Play/Pause Overlay Button */}
                      <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <Button
                          variant="ghost"
                          size="lg"
                          className="rounded-full w-16 h-16 bg-blue-500/80 hover:bg-blue-500 text-white border-2 border-white/20"
                          onClick={() => togglePlayPause(index)}
                        >
                          {isPlaying[index] ? (
                            <Pause className="w-8 h-8" />
                          ) : (
                            <Play className="w-8 h-8 ml-1" />
                          )}
                        </Button>
                      </div>

                      {/* Gradient overlay for better text visibility */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                    </div>

                    {/* Video Title */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                      <h3 className="text-xl md:text-2xl font-bold text-white drop-shadow-lg">
                        {video.title}
                      </h3>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            {/* Navigation Buttons */}
            <CarouselPrevious className="hidden md:flex -left-12 lg:-left-16 h-12 w-12 bg-blue-500/20 hover:bg-blue-500/40 border-blue-500/50 text-white" />
            <CarouselNext className="hidden md:flex -right-12 lg:-right-16 h-12 w-12 bg-blue-500/20 hover:bg-blue-500/40 border-blue-500/50 text-white" />
          </Carousel>

          {/* Mobile Navigation Dots */}
          <div className="flex justify-center gap-2 mt-6 md:hidden">
            {videos.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  if (api) {
                    api.scrollTo(index);
                  }
                }}
                className={`h-2 rounded-full transition-all duration-300 ${
                  currentIndex === index
                    ? "w-8 bg-blue-500"
                    : "w-2 bg-blue-500/40"
                }`}
                aria-label={`Go to video ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

