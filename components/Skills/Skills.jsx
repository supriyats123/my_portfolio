"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SKILLS } from "@/lib/site";

export default function Skills() {
  const sectionRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.from(".sk-group", {
        immediateRender: false, opacity: 0,
        y: 50,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: { trigger: sectionRef.current, start: "top 80%", once: true },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="skills-section" ref={sectionRef} className="relative z-10 bg-bg px-[5vw] pb-[7vw] pt-[6vw] text-fg max-lg:px-6 max-lg:py-16">
      <div className="pj-head">
        <span className="pj-label">SKILLS</span>
        <h2 className="pj-title">what i use</h2>
      </div>

      <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
        {SKILLS.map((group) => (
          <div key={group.title} className="sk-group rounded-2xl border border-fg/15 bg-fg/5 p-6 transition hover:border-accent md:p-8">
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-fg/60 md:text-sm">
              {group.title}
            </h3>
            <div className="flex flex-wrap gap-2.5">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-fg/20 bg-bg px-4 py-2 text-sm font-medium transition hover:border-accent hover:text-accent md:text-base"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
