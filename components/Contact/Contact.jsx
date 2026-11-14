"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SITE } from "@/lib/site";

const Arrow = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M7 17 17 7" />
    <path d="M7 7h10v10" />
  </svg>
);

const splitChars = (text) =>
  text.split("").map((char, i) => (
    <span key={i} className="ct-char" style={{ display: "inline-block" }}>
      {char === " " ? " " : char}
    </span>
  ));

export default function Contact() {
  const sectionRef = useRef(null);
  const eyebrowRef = useRef(null);
  const headlineRef = useRef(null);
  const emailRef = useRef(null);
  const ctaRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.from(eyebrowRef.current.querySelectorAll(".ct-char"), {
        opacity: 0,
        y: 40,
        duration: 1,
        stagger: 0.03,
        ease: "power3.out",
        scrollTrigger: { trigger: eyebrowRef.current, start: "top 90%", once: true },
      });
      gsap.from(headlineRef.current.querySelectorAll(".ct-char"), {
        opacity: 0,
        y: 200,
        duration: 1.4,
        stagger: 0.05,
        ease: "power3.out",
        scrollTrigger: { trigger: headlineRef.current, start: "top 85%", once: true },
      });
      // fromTo + once: the email and buttons always end fully visible.
      gsap.fromTo(
        [emailRef.current, ctaRef.current],
        { autoAlpha: 0, y: 50 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 1,
          stagger: 0.15,
          ease: "power2.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 60%", once: true },
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="contact-section" ref={sectionRef}>
      <div id="ct-eyebrow" ref={eyebrowRef}>
        {splitChars("have a project in mind?")}
      </div>
      <h2 id="ct-headline" ref={headlineRef}>
        {splitChars("let's talk.")}
      </h2>

      <a id="ct-email" href={`mailto:${SITE.email}`} ref={emailRef}>
        {SITE.email}
      </a>

      <div id="ct-actions" ref={ctaRef}>
        <a id="ct-btn" href={SITE.linkedin} target="_blank" rel="noreferrer">
          <span>LINKEDIN</span>
          <Arrow />
        </a>
        <a id="ct-btn-secondary" href={SITE.github} target="_blank" rel="noreferrer">
          <span>GITHUB</span>
          <Arrow />
        </a>
      </div>
    </section>
  );
}
