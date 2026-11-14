import React, { useRef, useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import Image from "next/image";
export default function FeaturedVideo({ refForward, ...props }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: refForward, layoutEffect: false });
  const [progress, setProgress] = useState(0);
  useMotionValueEvent(scrollYProgress, "change", (val) => setProgress(val));
  return (
    <motion.div
      ref={ref}
      variants={{ initial: { scale: 1 }, animate: { scale: 1.08 } }}
      initial="initial"
      animate={progress > 0.5 ? "animate" : "initial"}
      className="relative w-full aspect-[3/4] md:aspect-[856/1024] overflow-hidden rounded-3xl shadow-md z-30"
      {...props}
    >
      <Image src="/portrait.jpg" alt="Portrait" fill priority sizes="(max-width: 768px) 80vw, 40vw" className="object-cover grayscale" />
    </motion.div>
  );
}
