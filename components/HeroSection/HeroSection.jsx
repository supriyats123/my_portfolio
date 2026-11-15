"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { AnimatePresence, motion } from "framer-motion";
import { SITE } from "@/lib/site";

// Greetings cycle, then the loader slides up. Edit to taste.
const GREETINGS = ["నమస్తే", "नमस्ते", "HELLO", SITE.name.toUpperCase()];
const STEP_MS = 800;

// Widescreen video for computers/tablets, portrait video for phones.
const VIDEOS = {
  wide: { src: "/intro-wide.mp4", poster: "/intro-wide-poster.jpg" },
  tall: { src: "/intro.mp4", poster: "/intro-poster.jpg" },
};

const scrollTo = (id) => {
  const target = document.getElementById(id);
  if (!target) return;
  const lenis = window.__lenis;
  if (lenis) lenis.scrollTo(target, { duration: 1.4 });
  else target.scrollIntoView({ behavior: "smooth" });
};

const container = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
};
const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
};

export default function HeroSection() {
  const loaderRef = useRef(null);
  const videoRef = useRef(null);
  const [loaderDone, setLoaderDone] = useState(false);
  const [greetingIndex, setGreetingIndex] = useState(0);
  const [layout, setLayout] = useState(null); // "wide" | "tall"
  const [muted, setMuted] = useState(true);

  // Pick the video that fits the screen.
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const update = () => setLayout(mq.matches ? "wide" : "tall");
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    document.body.style.overflow = "hidden";

    const interval = setInterval(() => {
      setGreetingIndex((i) => Math.min(i + 1, GREETINGS.length - 1));
    }, STEP_MS);

    const tl = gsap.timeline({
      delay: (GREETINGS.length * STEP_MS) / 1000,
      onComplete: () => {
        document.body.style.overflow = "";
        setLoaderDone(true);
      },
    });
    tl.to(loaderRef.current, { yPercent: -100, duration: 1, ease: "power3.inOut" });

    return () => {
      clearInterval(interval);
      tl.kill();
      document.body.style.overflow = "";
    };
  }, []);

  const toggleSound = () => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = !v.muted;
    setMuted(v.muted);
    if (!v.muted) v.play().catch(() => {});
  };

  const video = layout ? VIDEOS[layout] : null;

  return (
    <>
      {/* Loader overlay */}
      <div
        id="loader"
        ref={loaderRef}
        style={{
          backgroundColor: "#111111",
          zIndex: 100002,
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <img
          src="/portrait.jpg"
          alt=""
          className="mb-6 h-20 w-20 rounded-full border border-white/10 object-cover shadow-lg grayscale sm:h-24 sm:w-24"
        />
        <AnimatePresence mode="wait">
          <motion.div
            key={GREETINGS[greetingIndex]}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="text-2xl font-extrabold uppercase tracking-widest text-[#F5F1EA] sm:text-4xl"
          >
            {GREETINGS[greetingIndex]}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Hero: the video covers the whole first screen, text sits on top of it */}
      <section id="hero-section" className="relative min-h-[600px] w-full select-none overflow-hidden bg-black">
        {video && (
          <video
            key={video.src}
            ref={videoRef}
            src={video.src}
            poster={video.poster}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            aria-label={`Intro video of ${SITE.name}`}
            className="absolute inset-0 h-full w-full object-cover object-center"
          />
        )}

        {/* Soft shading so the text stays readable: bottom on phones, left on computers */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent md:bg-gradient-to-r md:from-black/60 md:via-transparent md:to-transparent" />

        <motion.div
          variants={container}
          initial="hidden"
          animate={loaderDone ? "visible" : "hidden"}
          className="absolute bottom-10 left-6 right-6 z-10 flex flex-col items-start text-left text-white md:bottom-auto md:left-12 md:right-auto md:top-1/2 md:max-w-[520px] md:-translate-y-1/2 lg:left-20"
        >
          <motion.span
            variants={item}
            className="mb-2 text-xs font-semibold uppercase tracking-[0.22em] text-white/70"
          >
            Hello, I&apos;m {SITE.name}
          </motion.span>

          <motion.div variants={item} className="mb-5 h-[1.5px] w-12 bg-white/30" />

          <motion.h1
            variants={item}
            className="mb-5 text-3xl font-black uppercase leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl"
          >
            UI/UX Designer <br />
            &amp; Full Stack <br />
            <span className="font-bold text-white/60">Web Developer</span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mb-4 hidden max-w-[46ch] text-sm leading-relaxed text-white/80 sm:block sm:text-base"
          >
            {SITE.heroAbout || SITE.intro[0]}
          </motion.p>

          <motion.p variants={item} className="mb-7 text-sm font-semibold text-white sm:text-base">
            {SITE.tagline}
          </motion.p>

          <motion.div variants={item} className="flex items-center gap-5">
            <a
              href="#projects-section"
              onClick={(e) => {
                e.preventDefault();
                scrollTo("projects-section");
              }}
              className="flex items-center gap-2 rounded-full bg-white px-6 py-3 text-xs font-semibold text-black transition active:scale-95"
            >
              <span>View My Work</span>
              <span aria-hidden="true">↗</span>
            </a>
            <a
              href="#contact-section"
              onClick={(e) => {
                e.preventDefault();
                scrollTo("contact-section");
              }}
              className="border-b border-white/80 pb-0.5 text-xs font-semibold"
            >
              Contact me &#8595;</a><a href="/resume.pdf" target="_blank" rel="noreferrer" className="border-b border-white/80 pb-0.5 text-xs font-semibold">Resume &#8599;
            </a>
          </motion.div>
        </motion.div>

        {SITE.introHasSound && (
          <button
            onClick={toggleSound}
            className="absolute bottom-8 right-6 z-20 rounded-full border border-white/30 bg-black/50 px-4 py-2.5 text-[11px] font-bold uppercase tracking-[0.18em] text-white backdrop-blur transition hover:bg-white hover:text-black sm:right-12"
          >
            {muted ? "Sound on" : "Sound off"}
          </button>
        )}
      </section>
    </>
  );
}
